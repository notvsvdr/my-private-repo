import output from './output-module';
import '../styles/styles.css';

const root = document.querySelector('#root');

const firstInput = document.createElement('input');
const secondInput = document.createElement('input');
const inputsDiv = document.createElement('div');
const buttonsDiv = document.createElement('div');
const result = document.createElement('div');

firstInput.className = 'first';
secondInput.className = 'second';
result.className = 'result';
buttonsDiv.className = 'buttonsDiv';
result.className = 'result';
result.innerText = 'Enter values'

const operationsId = ['addition', 'subtraction', 'multiplication', 'division'];
const operationsInnerText = ['+', '-', '*', '/'];

for (let i = 0; i < operationsId.length; i++) {
    let button = document.createElement('button');
    button.innerText = operationsInnerText[i];
    button.id = operationsId[i];
    buttonsDiv.appendChild(button);
}

inputsDiv.appendChild(firstInput);
inputsDiv.appendChild(secondInput);
root.appendChild(inputsDiv);
root.appendChild(buttonsDiv);
root.appendChild(result);

const buttonsClick = document.querySelectorAll('button');
buttonsClick.forEach(button => {
    button.addEventListener('click', (event) => {
        let firstValue = document.querySelector('.first').value;
        let secondValue = document.querySelector('.second').value;

        result.innerText = output(firstValue, secondValue, event.target.id);
    });
});