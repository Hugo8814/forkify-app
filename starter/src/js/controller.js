import * as model from './model.js';
import recipeView from './views/recipeView.js';
import resultsView from './views/resultsView.js';
import SearchView from './views/searchView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';

if (module.hot) {
  module.hot.accept();
}

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
    console.error(err);
    recipeView.renderError();
  }
};
const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();
    // get query
    const query = SearchView.getQuery();
    if (!query) return;

    // 2) load search results
    await model.loadSearchResults(query);

    //3 render results

    resultsView.render(model.state.search.results);
  } catch (err) {
    console.log(err);
  }
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  SearchView.addHandlerSearch(controlSearchResults);
};
init();
