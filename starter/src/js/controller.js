import * as model from './model.js';
import recipeView from './views/recipeView.js';
//import icons from '../img/icons.svg';
import icons from 'url:../img/icons.svg';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { loadRecipe } from './model';
console.log(icons);

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

////// https://forkify-api.herokuapp.com/v2

const renderSpinner = function (parentEl) {
  const markup = `
  <div class="spinner">
    <svg>
      <use href="${icons}#icon-loader"></use>
    </svg>
  </div>`;
  parentEl.innerHTML = '';
  parentEl.insertAdjacentHTML('afterbegin', markup);
  console.log(markup);
};

///////////////////////////////////////
const showRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;

    renderSpinner(recipeContainer);

    //1 loading recpice
    await model.loadRecipe(id);
    const { recipe } = model.state;
    recipeView.render(model.state.recipe);

    //2 rendering recipe
  } catch (err) {
    alert(err);
  }
};
showRecipe();

['hashchange', 'load'].forEach(ev => window.addEventListener(ev, showRecipe));
// window.addEventListener('hashchange', showRecipe);
// window.addEventListener('load', showRecipe);
