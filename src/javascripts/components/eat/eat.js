import utilities from '../../helpers/utilities';

const eatArray = [
  {
    food: 'ice cream',
    healthy: false,
  },
  {
    food: 'pineapple',
    healthy: true,
  },
  {
    food: 'donut',
    healthy: false,
  },
];

const eatButtonsPrinter = (needArray) => {
  let string2 = '';
  for (let i = 0; i < needArray.length; i += 1) {
    string2 += `<button class="${needArray[i].healthy}" type="button">${needArray[i].food}</button>`;
  }
  console.error(string2);
  utilities.printToDom('eat-buttons', string2);
};

const eatPrinter = () => {
  const string = `
    <h1>EAT</h1>
    <div id="eat-buttons"></div>
    <div class="eat-progress">
      <progress id="full" max="100" value="90"></progress>
    </div>
    `;
  utilities.printToDom('eat', string);
  eatButtonsPrinter(eatArray);
};

// const eatProgressBarChanger = () => {
//   if (healthy) {

//   }
// }

export default { eatPrinter };
