import '../styles/main.scss';
import eat from './components/eat/eat';
import play from './components/play/play';
import fight from './components/fight/fight';

const init = () => {
  eat.eatPrinter();
  play.playPrinter();
  play.playful();
  eat.hunger();
  fight.fightPrinter();
  fight.fightOrFlight();
};

init();
