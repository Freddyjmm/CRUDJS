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

        this.recordForm = new AddData();
        this.recordForm.click( (name) => this.addData(name) );
    }

    setModel(model){
        this.model = model;
    }

    recordData(){
        this.recordForm.click(()=>{

        })
    }

    addData(data){
        //componente
        this.model.addData(data);
    }
}