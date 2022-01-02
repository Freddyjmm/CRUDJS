import AddData from "./components/addData.js";
import SaveData from "./components/saveData.js";


export default class View{

    constructor(){
        this.model = null;

        //components
        this.recordForm = new AddData();
        this.recordForm.click( (name) => {
            if( document.getElementsByTagName('td').length > 0 ){
                document.getElementById('raffle').disabled = false;
            }
            const newPlayer = this.addData(name);
            this.buildRow(newPlayer);
            //guardamos la lista de los jugadores restantes en el navegador
            const players = this.saveData.getPlayers();
            this.model.updateData(players);
            this.model.saveData();
        });
        this.saveData = new SaveData();
        this.saveData.clickRaffle( () => {
            //obtenemos un htmlcollection de los td
            const players = this.saveData.getPlayers();
            //si tenemos solo 2 elementos en la lista guardamos la lista vacia y desabilitamos el boton
            if (players.length <= 1){
                this.saveData.buttonRaffle.disabled = true;
                this.model.updateData(players);
                this.model.saveData();
                return null;
            }
            //obtenemos los datos que definen al ganador
            const indexWinnerPlayer = this.saveData.getRandomPlayer(1,players.length-1);
            const winnerPlayer = players[indexWinnerPlayer].cells[0].innerText;

            //borramos del modelo y de la vista al ganador
            this.model.deleteData(players[indexWinnerPlayer].id);
            this.removeRow(players[indexWinnerPlayer].id);
            this.model.saveData();
            //guardamos la lista de los jugadores restantes en el navegador
            this.model.updateData(players);
            this.model.saveData();

            //modificamos el dom para mostrar al ganador
            this.saveData.boxWinner.setAttribute('class','d-none');
            document.getElementById('img-container').setAttribute('class', 'container');
            setTimeout(() => {
                document.getElementById('img-container').setAttribute('class', 'container d-none');
                this.saveData.h1Winner.innerText = winnerPlayer;
                this.saveData.boxWinner.setAttribute('class','');
            }, 2000);

            });
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