import { provideHttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-articles',
  imports: [],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss',
  providers: [provideHttpClient()]
})
export class ArticlesComponent {

  async getArticles() {
    const response = await fetch('https://jsonmock.hackerrank.com/api/articles?author=olalonde&pagNumber=1');
    const articles = await response.json();
    console.log(articles);

    articles.data.sort((a: any, b: any) => b.num_comments - a.num_comments); 
    const famousArticle =  articles.data[0]
    console.log('Article with the highest number of comments:', famousArticle.title);
  }

  getArticles2() {
    
  }

}
