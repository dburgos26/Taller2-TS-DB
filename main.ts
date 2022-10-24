import { Serie } from "./serie.js";
import { series } from "./series.js";

const seriesTBody: HTMLElement = document.getElementById('series')!;
const promedio: HTMLElement = document.getElementById('promedio')!;

const casilla_card: HTMLElement = document.getElementById('card')!;


renderseriesInTable(series);
function renderseriesInTable(series: Serie[]): void {
    series.forEach(c => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${c.id}</td>
                             <td id="pagina" style="color:blue">${c.nombre}</td>
                             <td>${c.canal}</td>
                             <td>${c.temporadas}</td>`;
    seriesTBody.appendChild(trElement);

    const casilla_card: HTMLElement = document.getElementById('pagina')!;
    trElement.onclick = () => crearCard(c.id);

    });
}

promedio.innerHTML = `El promedio de temporadas es: ${getPromedio(series)}`;
function getPromedio(series: Serie[]): number {
    let sum = 0;
    series.forEach(c => {
        sum += c.temporadas;
    });
    return sum / series.length;
}

function crearCard(id: number) {
    
    const serieAct = series[id-1];

    casilla_card.innerHTML = `
    <div class="card">
        <img class="card-img-top" src="${serieAct.imagen}" alt="imagen ${serieAct.nombre}">
        <div class="card-body">
            <h5 class="card-title">${serieAct.nombre}</h5>
            <p class="card-text">${serieAct.descripcion}</p>

            <a href="${serieAct.pagina}">Aqui puedes ver ${serieAct.nombre}</a>
        </div>

    </div>
    
    `

}


