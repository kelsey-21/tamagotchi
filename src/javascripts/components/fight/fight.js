import utilities from '../../helpers/utilities';
import fightData from '../../helpers/data/fightData';

let strength = 50;

const fightMood = (event) => {
  const buttonType = event.target.id;
  if (buttonType === 'fight-activity') {
    if (strength < 0) {
      strength = 0;
    } else {
      strength -= 10;
    }
  } else if (buttonType === 'flight-activity') {
    if (strength > 100) {
      strength = 100;
    } else {
      strength += 2;
    }
  }
  document.getElementById('strength').value = strength;
};

const fightButtonsPrinter = () => {
  const fight = fightData.getFight();
  let string2 = '';
  for (let i = 0; i < fight.length; i += 1) {
    string2 += `<button id="${fight[i].fight}" type="button">${fight[i].activity}</button>`;
  }
  utilities.printToDom('fight-buttons', string2);
  document.getElementById('fight-activity').addEventListener('click', fightMood);
  document.getElementById('flight-activity').addEventListener('click', fightMood);
};

const fightPrinter = () => {
  const fightArray = fightData.getFight();
  const string = `
    <div id="fight-stuff">
    <h1>FIGHT</h1>
    <div id="fight-buttons"></div>
    <div class="fight-progress">
      <progress id="strength" max="100" value="50"></progress>
    </div>
    </div>
    `;
  utilities.printToDom('fight', string);
  fightButtonsPrinter(fightArray);
};

const fightBarReduction = () => {
  if (strength > 0) {
    strength -= 2;
  }
  document.getElementById('strength').value = strength;
};

export default { fightPrinter, fightBarReduction };
