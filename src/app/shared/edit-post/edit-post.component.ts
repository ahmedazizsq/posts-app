import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';
import { postService } from 'src/app/services/post.service';
import { NgForm } from '@angular/forms';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss'],
})
export class EditPostComponent implements OnInit {
  post: any = '';
  id: number;
  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private postService: postService,
  ) {}

  ngOnInit() {
    let id = parseInt(this.route.snapshot.params['id']);
    this.id = id;
    this.postService.getPostById(id).subscribe(
      (response) => {
        console.log(response);
        this.post = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  onSubmit(form: NgForm) {
    const title:string = form.value.title
    const body:string = form.value.body
    const id = this.id
    const userId = this.post.userId
    const post:Post ={title,body,userId,id}
    console.log(post);
    this.postService.editPost(id,post).subscribe((response)=>{
      if(response){
        this.router.navigate(['/'])
      }
    })
    console.log(form);
  }
}
