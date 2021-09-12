'use strict';
let Player0_Ele = document.querySelector('.player--0');
let Player1_Ele = document.querySelector('.player--1');
let Score0_Ele = document.querySelector('#score--0');
let Score1_Ele = document.querySelector('#score--1');
let Dice_Ele = document.querySelector('.dice');
let Btn_New = document.querySelector('.btn--new');
let Btn_Roll = document.querySelector('.btn--roll');
let Btn_hold = document.querySelector('.btn--hold');
let Current0_Value = document.querySelector('#current--0');
let Current1_Value = document.querySelector('#current--1');
let Player1 = document.querySelector('#name--0');
let player2 = document.querySelector('#name--1');
let value1 = prompt('Please Type 1st Player Name');
let value2 = prompt('Please Type 2nd Player Name');
document.querySelector('#name--0').textContent = value1;
document.querySelector('#name--1').textContent = value2;

if (value1 === '') {
  document.querySelector('#name--0').textContent = 'player 1';
  document.querySelector('#name--1').textContent = 'player 2';
}
// console.log(value1);

// console.log(value1);

// console.log(location);
// if (
//   typeof value1 === 'string' &&
//   typeof value1 != null &&
//   typeof value1 != ''
// ) {
Score0_Ele.textContent = 0;
Score1_Ele.textContent = 0;
Dice_Ele.classList.add('hidden');
// current--0
let Current_Score = 0;
let Active_player = 0;
let Scores = [0, 0];
const SwitchPlayer = function () {
  document.getElementById(`current--${Active_player}`).textContent = 0;
  document.getElementById(`score--${Active_player}`).textContent = 0;
  Active_player = Active_player === 0 ? 1 : 0;
  Current_Score = 0;
  Player0_Ele.classList.toggle('player--active');
  Player1_Ele.classList.toggle('player--active');
};

const rolldice = function () {
  let Dice = Math.trunc(Math.random() * 6) + 1;
  Dice_Ele.classList.remove('hidden');
  Dice_Ele.src = `dice-${Dice}.png`;
  if (Dice != 1) {
    Current_Score += Dice;
    document.getElementById(`current--${Active_player}`).textContent =
      Current_Score;
  } else {
    SwitchPlayer();
  }
};
Btn_Roll.addEventListener('click', rolldice);
const hold = function () {
  Scores[Active_player] += Current_Score;
  document.getElementById(`score--${Active_player}`).textContent =
    Scores[Active_player];
  if (Scores[Active_player] >= 100) {
    document
      .querySelector(`.player--${Active_player}`)
      .classList.add('player--winner');
    // let ele = `value${Active_player + 1}`;

    document.getElementById(
      `name--${Active_player}`
    ).textContent = `won the match🥳`;

    Dice_Ele.classList.add('hidden');
    // instead of remove event listener we can use Boolean true or false
    // ex : if(player===true)
    Btn_hold.removeEventListener('click', hold);
    Btn_Roll.removeEventListener('click', rolldice);
    // Btn_New.removeEventListener('click', Reload);

    // document
    //   .querySelector(`.player--${Active_player}`)
    //   .classList.remove('player--active');
  }
  document.getElementById(`current--${Active_player}`).textContent = 0;
  Active_player = Active_player === 0 ? 1 : 0;
  Current_Score = 0;
  Player0_Ele.classList.toggle('player--active');
  Player1_Ele.classList.toggle('player--active');
};

Btn_hold.addEventListener('click', hold);

const Reload = function () {
  location.reload();
  Btn_hold.addEventListener('click', hold);
  Btn_Roll.addEventListener('click', rolldice);
  Btn_New.addEventListener('click', reload);
};
Btn_New.addEventListener('click', Reload);
// } else {
//   alert('please enter your name');
// }
