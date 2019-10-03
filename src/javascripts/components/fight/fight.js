import utilities from '../../helpers/utilities';

let strength = 50;

const fightArray = [
  {
    activity: 'charge',
    fight: 'fight-activity',
  },
  {
    activity: 'run away quickly',
    fight: 'flight-activity',
  },
];

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

const fightButtonsPrinter = (activityArray) => {
  let string2 = '';
  for (let i = 0; i < activityArray.length; i += 1) {
    string2 += `<button id="${activityArray[i].fight}" type="button">${activityArray[i].activity}</button>`;
  }
  utilities.printToDom('fight-buttons', string2);
  document.getElementById('fight-activity').addEventListener('click', fightMood);
  document.getElementById('flight-activity').addEventListener('click', fightMood);
};

const fightPrinter = () => {
  const string = `
    <h1>FIGHT</h1>
    <div id="fight-buttons"></div>
    <div class="fight-progress">
      <progress id="strength" max="100" value="50"></progress>
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

const fightOrFlight = () => {
  setInterval(fightBarReduction, 10000);
};

export default { fightPrinter, fightOrFlight };
