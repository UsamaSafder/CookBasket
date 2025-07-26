import { Component } from '@angular/core';
import { RecipesItem } from './recipes-item/recipes-item';

@Component({
  selector: 'app-recipes-list',
  imports: [RecipesItem],
  templateUrl: './recipes-list.html',
  styleUrl: './recipes-list.css'
})
export class RecipesList {

}
