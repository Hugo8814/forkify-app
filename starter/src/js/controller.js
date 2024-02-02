import * as model from './model.js';
import recipeView from './views/recipeView.js';
import icons from 'url:../img/icons.svg';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { loadRecipe } from './model';
console.log(recipeView);

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

////// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    //1 loading recpice
    await model.loadRecipe(id);
    const { recipe } = model.state;
    recipeView.render(model.state.recipe);

    //2 rendering recipe
  } catch (err) {
    alert(err);
  }
};
controlRecipes();

// window.addEventListener('hashchange', control);
// window.addEventListener('load', control);
//
//hi
