import Model from './model.js';
import View from './view.js';

document.addEventListener('DOMContentLoaded', ()=>{

    const htmlTable = `
    <div class="mt-5">
        <table class="table table-striped" id="table">
            <thead>
                <tr>
                    <th scope="col">Nombre de los jugadores</th>
                    <th scope="col">
                    </th>
                </tr>
            </thead>
            <tbody id='body-table'>
                <tr>
                </tr>
            </tbody>
        </table>
    </div>
    `;

    const htmlForm = `
    <div>
        <form>
            <div class="row">
                <div class="col-sm-3 d-sm-flex align-items-center">
                    <input type="text" id="player" class="form-control ml-sm-2" placeholder="Nombre del Jugador" focus>
                </div>
                <div class="col-sm-2 d-sm-flex justify-content-end mt-4 mt-sm-0">
                    <button type="button" class="btn btn-info btn-block" id="add"> Registrar </button>
                </div>
            </div>
        </form>
    </div>
    `;

    const htmlSave = `
        <h1>El Ganador Es:</h1>
            <div>
                <h1 id='winner'></h1>
            </div>
        <button type='button'>Guardar</button>
    `;

    const model = new Model();
    const viewForm = new View(htmlForm);
    const viewTable = new View(htmlTable);
    const viewSave = new View(htmlSave);
    viewForm.setModel(model);
    viewTable.setModel(model);

})