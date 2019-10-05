import util from '../../helpers/utilities';
import './death.scss';

const petDeath = () => {
  const string = `
  <img class="pet-death" src="./src/images/fox-dead.png" />
  `;
  util.printToDom('pet', string);
};

export default { petDeath };
