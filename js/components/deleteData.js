export default class DeleteData{
    constructor(){
        this.buttonsDelete = null;
    }

    getButtons(){
        //retorna una lista de objetos que representan los botones de borrar con sus respectivas filas
        const buttons = document.getElementsByClassName('dlt');

        for (const element of buttons){
            element.grandParentNode = element.parentNode.parentNode;
        }

        this.buttonsDelete = buttons;

        return Object.assign({}, this.buttonsDelete);
    }

    getButtonById(id){
        return this.getButtons()[id];
    }

}