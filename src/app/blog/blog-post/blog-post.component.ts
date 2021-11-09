import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BlogPostService } from './blog-post.service';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {

  blogId: string = '';
  blog: any;
  faThumbsUp = faThumbsUp;

  constructor(public route: ActivatedRoute, private service: BlogPostService) { }

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
      this.blogId = params.id;

      this.service.getSingleBlog(this.blogId).toPromise()
        .then((res) => {
          console.log(res);
          this.blog = res;
        })
        .catch((err) => {
          console.log(err)
        })

    });
  }


}
