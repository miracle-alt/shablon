import colors from './colors.json';
import '../css/colorpicker.css';
import '../css/style.css';


const paletteContainer = document.querySelector('.js-palette');
const cardsMarkup = createColorCardsMarkup(colors);

paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup);

paletteContainer.addEventListener('click', onPaletteContainerClick);
//---------------------------------------------------------------------
function createColorCardsMarkup (colors) {
    return colors
    .map(({hex, rgb}) => {
        return `
        <div class="color-card">
                <div 
                    class="color-swatch" 
                    data-hex="${hex}" 
                    data-rgb="${rgb}" 
                    style="background-color: ${hex};"
                ></div>
                <div class="color-meta">
                    <p>HEX: ${hex}</p>
                    <p>RGB: ${rgb}</p>
                </div>
            </div>
        `;
    }).join('');
    // console.log(markup);
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
