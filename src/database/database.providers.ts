import * as mongoose from 'mongoose';
import {ConfigService} from '../config/config.service';

const configs = new ConfigService('.env');

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async (): Promise<mongoose.Mongoose> => {
            (mongoose as any).Promise = global.Promise;
            return await mongoose.connect(configs.get('MONGO_URL'), {useNewUrlParser: true, useUnifiedTopology: true});
        },
    },
];
