import {Inject, Injectable} from '@nestjs/common';
import {Model} from 'mongoose';
import {ArticleDto} from './dto/article.dto';
import {Article} from './interfaces/article.interface';

@Injectable()
export class ArticleService {

    constructor(@Inject('ARTICLE_MODEL') private readonly articleModel: Model<Article>) {
    }

    async create(articleDto: ArticleDto): Promise<Article> {
        const createdArticle = new this.articleModel(articleDto);
        return createdArticle.save();
    }

    async findAll(): Promise<Article[]> {
        return this.articleModel.find();
    }

    async find(id: string): Promise<Article> {
        return this.articleModel.findById(id);
    }

    async update(id: string, articleDto: ArticleDto): Promise<Article> {
        return this.articleModel.updateOne(this.articleModel.findById(id), articleDto);
    }

    async delete(id: string): Promise<any> {
        return this.articleModel.deleteOne(this.articleModel.findById(id));
    }
}
