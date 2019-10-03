import utilities from '../../helpers/utilities';

let energy = 100;

const sleepArray = [
  {
    activity: 'nap for 1 minute',
    energy: 'nap',
  },
  {
    activity: 'deep sleep',
    energy: 'slumber',
  },
];

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
};

const sleepButtonsPrinter = (activityArray) => {
  let string2 = '';
  for (let i = 0; i < activityArray.length; i += 1) {
    string2 += `<button id="${activityArray[i].energy}" type="button">${activityArray[i].activity}</button>`;
  }
  utilities.printToDom('sleep-buttons', string2);
  document.getElementById('nap').addEventListener('click', sleepMood);
  document.getElementById('slumber').addEventListener('click', sleepMood);
};

const sleepPrinter = () => {
  const string = `
    <div id="sleep-stuff">
    <h1>SLEEP</h1>
    <div id="sleep-buttons"></div>
    <div class="sleep-progress">
      <progress id="energy" max="100" value="100"></progress>
    </div>
    </div>
    `;
  utilities.printToDom('sleep', string);
  sleepButtonsPrinter(sleepArray);
};

const sleepBarReduction = () => {
  if (energy > 0) {
    energy -= 75;
  }
  document.getElementById('energy').value = energy;
};

const sleepy = () => {
  setInterval(sleepBarReduction, 30000);
};

export default { sleepPrinter, sleepy };
