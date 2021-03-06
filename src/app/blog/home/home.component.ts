import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: any;

  constructor(private service: HomeService) { }

  ngOnInit(): void {
    this.service.getAllBlogs().subscribe((res) => {
      this.data = res;
    });
  }

}
