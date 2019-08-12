import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'monBlog';

    constructor() { }

  lastUpdate = new Promise((resolve, reject) => {
      const date = new Date();
      setTimeout(
          () => {
              resolve(date);
          }, 2000
      );
  });

  // le tableau des posts
  post: {
      postName: string,
      content: string,
      loveIts: number,
      createdAt: Date
  };

  posts = [
      {
          postName: 'Mon prenier post',
          content: 'Un premier lorem ipsoume ah mais oui',
          loveIts: 1,
          createdAt: Date()
      },
      {
          postName: 'Mon deuxieme post',
          content: 'C est deja le deuxieme loreme ipsomme et du coup pn le change un peu',
          loveIts: -1,
          createdAt: Date()
      },
      {
          postName: 'Encore un post',
          content: 'Tiens j ai fait une faute de frappe dans le deuxieme ... desole vraiment',
          loveIts: 0,
          createdAt: Date()
      }
  ];

}
