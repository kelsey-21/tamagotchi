import utilities from '../../helpers/utilities';
import sleepData from '../../helpers/data/sleepData';
import death from '../death/death';

let energy = 100;

const sleepMood = (event) => {
  const buttonType = event.target.id;
  if (buttonType === 'nap') {
    if (energy > 100) {
      energy = 100;
    } else {
      energy += 50;
    }
  } else if (buttonType === 'slumber') {
    if (energy > 100) {
      energy = 100;
    } else {
      energy += 60;
    }
  }
  document.getElementById('energy').value = energy;
  utilities.printToDom('progress-value-energy', `${energy}%`);
};

const sleepButtonsPrinter = () => {
  const sleep = sleepData.getSleep();
  let string2 = '';
  for (let i = 0; i < sleep.length; i += 1) {
    string2 += `<button id="${sleep[i].energy}" type="button">${sleep[i].activity}</button>`;
  }
  utilities.printToDom('sleep-buttons', string2);
  document.getElementById('nap').addEventListener('click', sleepMood);
  document.getElementById('slumber').addEventListener('click', sleepMood);
};

const sleepPrinter = () => {
  const sleepArray = sleepData.getSleep();
  const string = `
    <div id="sleep-stuff">
    <h1>SLEEP</h1>
    <div id="sleep-buttons"></div>
    <div class="sleep-progress">
      <progress id="energy" max="100" value="100"></progress>
    </div>
    <div id="progress-value-energy"></div>
    </div>
    `;
  utilities.printToDom('sleep', string);
  sleepButtonsPrinter(sleepArray);
};

const sleepBarReduction = () => {
  if (energy > 0) {
    energy -= 75;
  } else if (energy <= 0) {
    death.petDeath();
  }
  document.getElementById('energy').value = energy;
  utilities.printToDom('progress-value-energy', `${energy}%`);
};

export default { sleepPrinter, sleepBarReduction };
