import util from '../../helpers/utilities';
import './pet.scss';

const printPet = () => {
  const domString = '<img src="./src/images/fox.png" />';
  util.printToDom('pet', domString);
};

export default { printPet };
