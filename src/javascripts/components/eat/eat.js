import utilities from '../../helpers/utilities';

let full = 100;

const eatArray = [
  {
    food: 'ice cream',
    healthy: 'unhealthy',
  },
  {
    food: 'pineapple',
    healthy: 'healthy',
  },
];

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
    } else {
      full -= 3;
    }
  }
  document.getElementById('full').value = full;
};

const fullnessBarReduction = () => {
  if (full > 0) {
    full -= 5;
  }
  document.getElementById('full').value = full;
};

const hunger = () => {
  setInterval(fullnessBarReduction, 7000);
};

const eatButtonsPrinter = (needArray) => {
  let string2 = '';
  for (let i = 0; i < needArray.length; i += 1) {
    string2 += `<button id="${needArray[i].healthy}" type="button">${needArray[i].food}</button>`;
  }
  utilities.printToDom('eat-buttons', string2);
  document.getElementById('healthy').addEventListener('click', eatHealth);
  document.getElementById('unhealthy').addEventListener('click', eatHealth);
};

const eatPrinter = () => {
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

export default { eatPrinter, hunger };
