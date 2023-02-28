
window.addEventListener('click', (event) => {
  const targetClick = event.target;
  
  
  

  // Header search form
  const search_form = document.querySelector('.header-search');

  if (targetClick.classList.contains('_icons-search') 
    | (!targetClick.closest('.header-search')
      && document.querySelectorAll('._visible-search').length > 0))
      {
        search_form.classList.toggle('_visible-search');
  };

  // Header mobile menu
  const header = document.querySelector('.header');

  if (targetClick.classList.contains('burger') 
  | (!targetClick.closest('.header')
    && document.querySelectorAll('.burger_active').length > 0))
    {
      header.classList.toggle('burger_active')
  };


  // S2 grid 
  const s2_grid = document.querySelector('.s2-grid');
  if (targetClick.classList.contains('s2__btn')){
    targetClick.classList.toggle('s2__btn_active');
    s2_grid.classList.toggle('s2-grid_visible')
  }
})

