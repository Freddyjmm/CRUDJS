export default class AddData{
    constructor(){
        this.inputName = document.getElementById('player');
        this.buttonRegister = document.getElementById('add');
        this.inputName.focus();
    }

    click(callback){
        this.buttonRegister.onclick = () => {
            if(this.inputName.value === ''){
                // alert.classList.remove('d-none');
                console.error('Nombre invalido');
            } else {
                callback(
                    {
                        name:this.inputName.value
                    });
                this.inputName.value = '';
                this.inputName.focus();
            }
        }
    }
}