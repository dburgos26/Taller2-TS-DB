import { series } from "./series.js";
const seriesTBody = document.getElementById('series');
const promedio = document.getElementById('promedio');
const casilla_card = document.getElementById('card');
renderseriesInTable(series);
function renderseriesInTable(series) {
    series.forEach(c => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${c.id}</td>
                             <td id="pagina" style="color:blue">${c.nombre}</td>
                             <td>${c.canal}</td>
                             <td>${c.temporadas}</td>`;
        seriesTBody.appendChild(trElement);
        const casilla_card = document.getElementById('pagina');
        trElement.onclick = () => crearCard(c.id);
    });
}
promedio.innerHTML = `El promedio de temporadas es: ${getPromedio(series)}`;
function getPromedio(series) {
    let sum = 0;
    series.forEach(c => {
        sum += c.temporadas;
    });
    return sum / series.length;
}
function crearCard(id) {
    const serieAct = series[id - 1];
    casilla_card.innerHTML = `
    <div class="card">
        <img class="card-img-top" src="${serieAct.imagen}" alt="imagen ${serieAct.nombre}">
        <div class="card-body">
            <h5 class="card-title">${serieAct.nombre}</h5>
            <p class="card-text">${serieAct.descripcion}</p>

            <a href="${serieAct.pagina}">Aqui puedes ver ${serieAct.nombre}</a>
        </div>

    </div>
    
    `;
}
