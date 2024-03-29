import '../styles/main.scss';
import eat from './components/eat/eat';
import play from './components/play/play';
import fight from './components/fight/fight';
import sleep from './components/sleep/sleep';
import './components/barReduction/bar';
import pet from './components/pet/pet';

const init = () => {
  eat.eatPrinter();
  play.playPrinter();
  fight.fightPrinter();
  sleep.sleepPrinter();
  pet.printPet();
};

init();
