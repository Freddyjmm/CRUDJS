import AddData from "./components/addData.js";
import SaveData from "./components/saveData.js";


export default class View{

    constructor(){
        this.model = null;

        //components
        this.recordForm = new AddData();
        this.recordForm.click( (name) => {
            const newPlayer = this.addData(name);
            this.buildRow(newPlayer);
        });
        this.saveData = new SaveData();
        this.saveData.clickRaffle( () => {
            const players = this.saveData.getPlayers();
            const indexWinnerPlayer = this.saveData.getRandomPlayer(1,players.length-1);
            const winnerPlayer = players[indexWinnerPlayer].cells[0].innerText;

            this.saveData.h1Winner.innerText = winnerPlayer;
            this.saveData.boxWinner.style.display = '';
        });
        this.saveData.clickSave( () => {
            this.model.saveData()
        })
    }

    setModel(model){
        this.model = model;
    }

    addData(data){
        //componente
        return this.model.addData(data);
    }

    removeRow(id){
        this.model.deleteData(id);
        document.getElementById(id).remove();
    }

    buildRow(data){
        //nodo padre
        const bodyTable = document.getElementById('body-table')

        //nodos del la fila
        const row = document.createElement('tr');
        const cellName = document.createElement('td');
        const cellButton = document.createElement('td');
        let buttonDelete = document.createElement('button');
        const iconButton = document.createElement('i');

        //configurar la celda del nombre
        cellName.innerText = data.name;

        //configurar el icono del boton
        iconButton.setAttribute('class','fa fa-trash');

        //confiurar el boton
        buttonDelete.setAttribute('class','btn btn-danger mb-1 ml-1 dlt');
        buttonDelete.appendChild(iconButton);
        buttonDelete.onclick = () => {
            this.removeRow(data.id);
        }

        //configurar la celda del boton
        cellButton.appendChild(buttonDelete);

        //configurar el tr
        row.setAttribute('id', data.id);
        row.appendChild(cellName);
        row.appendChild(cellButton);
        bodyTable.appendChild(row);

    }

    chargeModel(){
        const data = this.model.data;
        for (let unitData of data){
            this.buildRow(unitData);
        }
    }
}