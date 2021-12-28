export default class SaveData{
    constructor(){
        this.buttonSave = document.getElementById('save');
        this.h1Winner = document.getElementById('winner');
        this.buttonRaffle = document.getElementById('raffle');
        this.boxWinner = document.getElementById('box-winner');
    }

    raffle(){
        //const winner =...
        //this.h1Winner.innerText = winner;
    }

    clickRaffle(callback){
        this.buttonRaffle.onclick = () => callback();
    }

    clickSave(callback){
        this.buttonSave.onclick = () => callback();
    }

    getPlayers(){
        const players = document.getElementsByTagName('tr');

        return players;
    }

    getRandomPlayer(min=1, max){
        //devuelve un numero random entre los limites que establece los parametros
        var result = null;
        result = Math.round(Math.random() * (max - min) + min);

        return result;
    }

}