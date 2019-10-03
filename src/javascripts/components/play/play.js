import utilities from '../../helpers/utilities';

let fun = 50;

const playArray = [
  {
    activity: 'fetch',
    fun: 'fun-activity',
  },
  {
    activity: 'play dead',
    fun: 'not-fun-activity',
  },
];

const playMood = (event) => {
  const buttonType = event.target.id;
  if (buttonType === 'fun-activity') {
    if (fun > 100) {
      fun = 100;
    } else {
      fun += 50;
    }
  } else if (buttonType === 'not-fun-activity') {
    if (fun > 100) {
      fun = 100;
    } else {
      fun += 2;
    }
  }
  document.getElementById('fun').value = fun;
};

const playButtonsPrinter = (activityArray) => {
  let string2 = '';
  for (let i = 0; i < activityArray.length; i += 1) {
    string2 += `<button id="${activityArray[i].fun}" type="button">${activityArray[i].activity}</button>`;
  }
  utilities.printToDom('play-buttons', string2);
  document.getElementById('fun-activity').addEventListener('click', playMood);
  document.getElementById('not-fun-activity').addEventListener('click', playMood);
};

const playPrinter = () => {
  const string = `
    <h1>PLAY</h1>
    <div id="play-buttons"></div>
    <div class="play-progress">
      <progress id="fun" max="100" value="50"></progress>
    </div>
    `;
  utilities.printToDom('play', string);
  playButtonsPrinter(playArray);
};

const playBarReduction = () => {
  if (fun > 0) {
    fun -= 25;
  }
  document.getElementById('fun').value = fun;
};

const playful = () => {
  setInterval(playBarReduction, 20000);
};

export default { playPrinter, playful };
