import util from '../../helpers/utilities';
import './death.scss';

const petDeath = () => {
  const string = `
  <h1>DEATH</h1>
  `;
  util.printToDom('pet', string);
};

export default { petDeath };
