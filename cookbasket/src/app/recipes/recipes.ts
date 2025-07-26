import { Component } from '@angular/core';
import { RecipesList } from './recipes-list/recipes-list';
import { RecipesDetail } from './recipes-detail/recipes-detail';

@Component({
  selector: 'app-recipes',
  imports: [RecipesList,RecipesDetail],
  templateUrl: './recipes.html',
  styleUrl: './recipes.css'
})
export class Recipes {

}
