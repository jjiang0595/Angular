import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Post} from "./post.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    console.log(postData);
    this.http.post('https://ng-complete-guide-da444-default-rtdb.firebaseio.com/posts.json',
      postData).subscribe(responseData => {
        console.log(responseData);
    });
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts() {
    this.http.get<{[key: string]: Post}>('https://ng-complete-guide-da444-default-rtdb.firebaseio.com/posts.json')
      .pipe(map(responseData => {
        const postsArray = [];
        for (const key in responseData) {
          if(responseData.hasOwnProperty(key)) {
            postsArray.push({...responseData[key], id: key})
          }
        }
      }))
      .subscribe(posts => {
      console.log(posts);
    });
  }
}
