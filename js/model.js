export default class Model{
    constructor(){
        this.view = null;
        this.data = [];
        this.currentId = 0;
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

    findData(){

    }

    updateData(){

    }

    deleteData(){

    }

    setId(data){
        //se recibe como 'data' un objeto creado el componente addData para establecerle un id unico
        //se aumenta el id actual y se asigna el objeto recibido
        data.id = this.currentId;
        this.currentId++;

        return data;
    }

}