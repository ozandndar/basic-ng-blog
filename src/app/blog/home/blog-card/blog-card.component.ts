import { Component, Input, OnInit } from '@angular/core';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent implements OnInit {

  @Input() postId: string | undefined;
  @Input() image: string | undefined;
  @Input() likes: Number | undefined;
  @Input() owner: any | undefined;
  @Input() publishDate: string | undefined;
  @Input() tags: [] | undefined;
  @Input() text: string | undefined;

  faThumbsUp = faThumbsUp;

  constructor() { }

  ngOnInit(): void { }

}
