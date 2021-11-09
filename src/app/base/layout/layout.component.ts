import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from 'src/app/partials/header/header.component';
import { FooterComponent } from 'src/app/partials/footer/footer.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
