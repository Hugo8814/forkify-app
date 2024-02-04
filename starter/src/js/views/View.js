import icons from 'url:../../img/icons.svg';

export default class View {
  _data;

  render(data) {
    this._data = data;

    if (!this._data) {
      // Handle the case when data is undefined
      console.error('Recipe data is undefined');
      // You might want to display an error message or handle it in another way
      return;
    }
    const markup = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _clear() {
    console.log(this._parentElement);
    this._parentElement.insertHTML = '';
  }

  renderSpinner = function () {
    const markup = `
      <div class="spinner">
        <svg>
          <use href="${icons}#icon-loader"></use>
        </svg>
      </div>`;
    this._parentElement.tinnerHTML = '';
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  };
}
