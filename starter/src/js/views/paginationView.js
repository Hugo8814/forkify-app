import View from './View';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');
  addHanderCLick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;

    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    console.log(numPages);

    // page 1 and there are the other pages
    if (curPage === 1 && numPages > 1) {
      return `
      <button class="btn--inline pagination__btn--next">
            <span>Page ${curPage + 1}</span>
            <svg class="search__icon">
                <use href="${icons}#icon-arrow-right"></use>
            </svg>
      </button>
      `;
    }

    // last page just commit
    if (curPage === numPages && numPages > 1) {
      return `
          <button class="btn--inline pagination__btn--prev">
               <svg class="search__icon">
                  <use href="${icons}#icon-arrow-left"></use>
               </svg>
              <span>Page ${curPage - 1}</span>
          </button>
      `;
    }
    //other page
    if (curPage < numPages) {
      return `
        <button class="btn--inline pagination__btn--prev">
             <svg class="search__icon">
                <use href="${icons}#icon-arrow-left"></use>
             </svg>
            <span>Page ${curPage - 1}</span>
        </button>
        
        <button class="btn--inline pagination__btn--next">
            <span>Page ${curPage + 1}</span>
            <svg class="search__icon">
                <use href="${icons}#icon-arrow-right"></use>
            </svg>
      </button>
    `;
    }
    // page 1 and there are no other pages
    return '';
  }
}

export default new PaginationView();
