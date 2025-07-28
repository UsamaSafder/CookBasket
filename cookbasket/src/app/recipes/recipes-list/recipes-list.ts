import { Component } from '@angular/core';
import { RecipesItem } from './recipes-item/recipes-item';
import { Recipe } from '../recipe.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-recipes-list',
  imports: [RecipesItem,NgFor],
  templateUrl: './recipes-list.html',
  styleUrl: './recipes-list.css'
})
export class RecipesList {
  recipes:Recipe[]=[
    new Recipe('Test recipe','this is a simply test','hello')
  ]; 
}
