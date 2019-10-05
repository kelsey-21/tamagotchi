
import sleep from '../sleep/sleep';
import eat from '../eat/eat';
import play from '../play/play';
import fight from '../fight/fight';

setInterval(() => {
  sleep.sleepBarReduction();
  eat.eatBarReduction();
  play.playBarReduction();
  fight.fightBarReduction();
}, 1000);
