import { Component } from '@angular/core';
 import { Article } from './article/article';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  addArticle(title:HTMLInputElement,link:HTMLInputElement){
    console.log(`the new article Title is ${title.value} and the link is ${link.value} `);
    this.articles.push(new Article(title.value, link.value,0));
    title.value = '';
    link.value='';
    return false;

  }
articles:Article[];
 constructor() {
   this.articles = [
  new Article('Angular', 'http://angular.io', 3),
  new Article('Fullstack', 'http://fullstack.io', 5),
  new Article('Angular Homepage', 'http://angular.io', 1),
   ]
  }
  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b:Article)=>
      b.votes-a.votes
    )
  }
}
