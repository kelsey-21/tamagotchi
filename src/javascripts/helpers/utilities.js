const printToDom = (divId, string) => {
  document.getElementById(divId).innerHTML = string;
};

export default { printToDom };
