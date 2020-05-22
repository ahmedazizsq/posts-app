import { Component, OnInit, Output, Input } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { postService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  constructor(private postService: postService) {}

  ngOnInit(): void {}
  deletePost() {
    this.postService.deletePost(this.post.id).subscribe(
      (response) => {
        if(response)
        alert('post deleted successfuly !!');
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
