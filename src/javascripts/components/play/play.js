import utilities from '../../helpers/utilities';
import playData from '../../helpers/data/playData';
import death from '../death/death';

let fun = 50;

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
  utilities.printToDom('progress-value-fun', `${fun}%`);
};

const playButtonsPrinter = () => {
  const play = playData.getPlay();
  let string2 = '';
  for (let i = 0; i < play.length; i += 1) {
    string2 += `<button id="${play[i].fun}" type="button">${play[i].activity}</button>`;
  }
  utilities.printToDom('play-buttons', string2);
  document.getElementById('fun-activity').addEventListener('click', playMood);
  document.getElementById('not-fun-activity').addEventListener('click', playMood);
};

const playPrinter = () => {
  const playArray = playData.getPlay();
  const string = `
    <h1>PLAY</h1>
    <div id="play-buttons"></div>
    <div class="play-progress">
      <progress id="fun" max="100" value="50"></progress>
    </div>
    <div id="progress-value-fun"></div>
    `;
  utilities.printToDom('play', string);
  playButtonsPrinter(playArray);
};

const playBarReduction = () => {
  if (fun > 0) {
    fun -= 25;
  } else if (fun <= 0) {
    death.petDeath();
  }
  document.getElementById('fun').value = fun;
  utilities.printToDom('progress-value-fun', `${fun}%`);
};

export default { playPrinter, playBarReduction };
