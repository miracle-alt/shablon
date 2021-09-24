import colorCardTpl from '../templates/color-card.hbs';
import colorCardsTpl from '../templates/color-cards.hbs';
import colors from './colors.json';
import '../css/colorpicker.css';
import '../css/style.css';

console.log(colorCardsTpl(colors));

const paletteContainer = document.querySelector('.js-palette');
const cardsMarkup = createColorCardsMarkup(colors);

paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup);

paletteContainer.addEventListener('click', onPaletteContainerClick);
//---------------------------------------------------------------------
function createColorCardsMarkup (colors) {
    return colors.map(colorCardTpl).join('');   // вызов одной карточки    или
    // return colorCardsTpl(colors);              // вызов всех карточек сразу
}
//---------------------------------------------------------------------
function onPaletteContainerClick (evt) {
    const isColorSwatchEl = evt.target.classList.contains('color-swatch');

    if (!isColorSwatchEl) {                               // чтоб клик был только на цвете
        return;
    }

    const swatchEl = evt.target;
    const parentColorCard = swatchEl.closest('.color-card');

    removeActiveCardClass();
    addActiveCardClass(parentColorCard);
    setBodyBgColor(swatchEl.dataset.hex);
}
//---------------------------------------------------------------------
function setBodyBgColor (color) {          // задается цвет боди
    document.body.style.backgroundColor = color;
}
//---------------------------------------------------------------------
function removeActiveCardClass () {             // снимается активная при нажатии на другом цвете
    const currentActiveCard = document.querySelector('.color-card.is-active');

    if (currentActiveCard) {
        currentActiveCard.classList.remove('is-active');
    }
}
//---------------------------------------------------------------------
function addActiveCardClass (card) {         // добавить актив на цвет
    card.classList.add('is-active');
}  
//---------------------------------------------------------------------
