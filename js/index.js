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
                    <td> Nombre De Prueba </td>
                    <td class="text-right">
                        <button class="btn btn-danger mb-1 ml-1">
                            <i class="fa fa-trash"></i>
                        </button>
                    </td>
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

    const model = new Model();
    const viewForm = new View(htmlForm);
    const viewTable = new View(htmlTable);
    viewForm.setModel(model);
    viewTable.setModel(model);

})