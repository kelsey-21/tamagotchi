import utilities from '../../helpers/utilities';
import eatData from '../../helpers/data/eatData';
import death from '../death/death';

let full = 100;

const eatHealth = (event) => {
  const buttonType = event.target.id;
  if (buttonType === 'healthy') {
    if (full > 100) {
      full = 100;
    } else {
      full += 10;
    }
  } else if (buttonType === 'unhealthy') {
    if (full < 0) {
      full = 0;
      death.petDeath();
    } else {
      full -= 3;
    }
  }
  document.getElementById('full').value = full;
};

const eatButtonsPrinter = () => {
  const eat = eatData.getEat();
  let string2 = '';
  for (let i = 0; i < eat.length; i += 1) {
    string2 += `<button id="${eat[i].healthy}" type="button">${eat[i].food}</button>`;
  }
  utilities.printToDom('eat-buttons', string2);
  document.getElementById('healthy').addEventListener('click', eatHealth);
  document.getElementById('unhealthy').addEventListener('click', eatHealth);
};

const eatPrinter = () => {
  const eatArray = eatData.getEat();
  const string = `
    <h1>EAT</h1>
    <div id="eat-buttons"></div>
    <div class="eat-progress">
      <progress id="full" max="100" value="100"></progress>
    </div>
    `;
  utilities.printToDom('eat', string);
  eatButtonsPrinter(eatArray);
};

const eatBarReduction = () => {
  if (full > 0) {
    full -= 5;
  } if (full <= 0) {
    death.petDeath();
  }
  document.getElementById('full').value = full;
};

export default { eatPrinter, eatBarReduction };
