import { Component, OnInit } from '@angular/core';
import { postService } from 'src/app/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  posts: any = [];
  constructor(private postService: postService) {}

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe(
      (response) => {
        this.posts = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
