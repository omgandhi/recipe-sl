import {Component, DoCheck, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  message: boolean;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

}
