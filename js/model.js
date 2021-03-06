export default class Model{
    constructor(){
        this.view = null;
        this.data = JSON.parse(localStorage.getItem('SAN'));
        this.currentId = 0;
        if (!this.data || this.data < 1){
            this.data = [];
            this.currentId = 0;
        }else {
            this.currentId = this.data[this.data.length -1].id + 1;
        }
    }

    setView(view){
        this.view = view;
    }

    getData(){
        return this.data;
    }

    addData(setData){
        //se recibe un JSON
        //proximamente un codigo para evaluar la informacion recibida
        const newData = {...setData};
        this.setId(newData);
        this.data.push(newData);

        return {...newData}
    }

    findData(id){
        const index = this.data.findIndex( (unitData) => unitData.id === id );
        return index;
    }

    updateData(listRow){
        const players = []
            for (const row of listRow){
                if(row.id === ''){
                    continue
                }
                const unitPlayer = {
                    name:row.cells[0].innerText,
                    id:row.id
                }
                players.push(unitPlayer);
            }
            this.data = players;
    }

    deleteData(id){
        //se recibi el id del jugador a borrar, se busca en la DB y se borra
        this.findData(id);
        this.data.splice(id,1);

    }

    saveData(){
        localStorage.setItem('SAN', JSON.stringify(this.data));
    }

    setId(data){
        //se recibe como 'data' un objeto creado el componente addData para establecerle un id unico
        //se aumenta el id actual y se asigna el objeto recibido
        data.id = this.currentId;
        this.currentId++;

        return data;
    }

}