const certificados = {
    "CE1218134784": {
        nombre: "CRISTOPHER NAVA ZAGAL",
        curp: "NAZC030324HGRVGR8",
        nivel: "Educación Secundaria",
        centro: "09FIA001B",
        promedio: "8.7",
        estatus: "VÁLIDO",
        fecha: "06/07/2018",
        autoridad: "PROF. SALVADOR MUNDO SOTELO"
    }
};

const params = new URLSearchParams(window.location.search);
const folio = params.get("folio");

const resultado = document.getElementById("resultado");
const loader = document.getElementById("loader");

function generarSelloDigital(folio) {
    return btoa(folio + "-SEP-VALIDACION-2018").substring(0, 50);
}

setTimeout(() => {

    loader.style.display = "none";
    resultado.style.display = "block";

    if (folio && certificados[folio]) {

        const c = certificados[folio];
        const sello = generarSelloDigital(folio);

        resultado.innerHTML = `
            <div class="data"><strong>Folio:</strong> ${folio}</div>
            <div class="data"><strong>Nombre del alumno:</strong> ${c.nombre}</div>
            <div class="data"><strong>CURP:</strong> ${c.curp}</div>
            <div class="data"><strong>Centro de Trabajo:</strong> ${c.centro}</div>
            <div class="data"><strong>Nivel Educativo:</strong> ${c.nivel}</div>
            <div class="data"><strong>Promedio Final:</strong> ${c.promedio}</div>
            <div class="data"><strong>Fecha de emisión:</strong> ${c.fecha}</div>
            <div class="data"><strong>Autoridad Educativa:</strong> ${c.autoridad}</div>
            <div class="data status-valid"><strong>Estatus del documento:</strong> ${c.estatus}</div>
            <hr>
            <div class="data"><strong>Sello digital:</strong><br>${sello}</div>
        `;

    } else {

        resultado.innerHTML = `
            <div class="data status-invalid">
                Folio no encontrado o inválido.
            </div>
        `;
    }

}, 1500);
