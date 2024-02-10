import character from './domain.js';

class Game {
    start() {
      console.log('game started');
    }
  }

const gameDefault = new Game(); 
export default gameDefault;
  
export  class GameSavingData {
  }
  
export  function readGameSaving() {
  }
  
export  function writeGameSaving() {
  }