/*
App: First JavaScript Application
Author: Polina Kochetkova
Date: 02/04/2021
*/
//Allow the user to enter their guess
let num = prompt('Guess a number between 1 and 10');
// Check to see if the number is a winner
if (num ==7) {
   alert('You guessed the right number!');
} else {
    // If it isn't, they got it wrong
    alert('You guessed the wrong number!');
}