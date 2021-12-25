import AddData from "./components/addData.js";

export default class View{

    constructor(html){
        //se establece la vista en el html
        this.model = null;
        this.innerHtml = html;

        if (!this.innerHtml){
            console.error('html para la vista no encontrado');
        } else {
            const body = document.getElementsByTagName('body');
            const node = document.createElement('div');
            node.setAttribute('id', 'root');
            node.innerHTML = this.innerHtml;
            body[0].appendChild(node);
        }
        //components
        this.recordForm = new AddData();
        this.recordForm.click( (name) => {
            const newPlayer = this.addData(name);
            this.buildRow(newPlayer);
        });
    }

    setModel(model){
        this.model = model;
    }

    addData(data){
        //componente
        return this.model.addData(data);
    }

    buildRow(data){
        //nodo padre
        const bodyTable = document.getElementById('body-table')

        //nodos del la fila
        const row = document.createElement('tr');
        const cellName = document.createElement('td');
        const cellButton = document.createElement('td');
        const buttonDelete = document.createElement('button');
        const iconButton = document.createElement('i');

        //configurar la celda del nombre
        cellName.innerText = data.name;

        //configurar el icono del boton
        iconButton.setAttribute('class','fa fa-trash');

        //confiurar el boton
        buttonDelete.setAttribute('class','btn btn-danger mb-1 ml-1');
        buttonDelete.appendChild(iconButton);

        //configurar la celda del boton
        cellButton.appendChild(buttonDelete);

        //configurar el tr
        row.setAttribute('id', data.id);
        row.appendChild(cellName);
        row.appendChild(cellButton);
        bodyTable.appendChild(row);

    }
}