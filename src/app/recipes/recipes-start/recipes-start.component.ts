import { Component, OnInit } from '@angular/core';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipes-start',
  templateUrl: './recipes-start.component.html',
  styleUrls: ['./recipes-start.component.css']
})
export class RecipesStartComponent implements OnInit {
  firstVisit: boolean;

  constructor(
    private recipeService: RecipeService
  ) { }

  ngOnInit(): void {
    console.log(this.recipeService.getRecipes());
    this.firstVisit = this.recipeService.getRecipes().length === 0;
  }

}
