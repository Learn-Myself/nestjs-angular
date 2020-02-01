import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesComponent } from './articles/articles.component';
import { ShowArticleComponent } from './show-article/show-article.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: 'articles',
    component: ArticlesComponent,
    data: { title: 'List of Articles' }
  },
  {
    path: 'show-article/:id',
    component: ShowArticleComponent,
    data: { title: 'Show Product' }
  },
  {
    path: 'add-article',
    component: AddArticleComponent,
    data: { title: 'Add Article' }
  },
  {
    path: 'edit-article/:id',
    component: EditArticleComponent,
    data: { title: 'Edit Article' }
  },
  { path: '',
    redirectTo: '/articles',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]

})

export class AppRoutingModule { }
