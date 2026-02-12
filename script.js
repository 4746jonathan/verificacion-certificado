const certificados = {
    "CE1218134784": {
        nombre: "Cristopher Nava Zagal",
        curp: "NAZC030324HGRVGR8",
        nivel: "Educación Secundaria",
        modalidad: "Secundaria para Adultos",
        centro: "12DBA0049R",
        promedio: "8.0",
        estatus: "VÁLIDO",
        fecha: "11/02/2026",
        autoridad: "Arturo Salgado Uriostegui"
    }
};

const params = new URLSearchParams(window.location.search);
const folio = params.get("folio");

const resultado = document.getElementById("resultado");
const loader = document.getElementById("loader");

function generarSelloDigital(folio) {
    return btoa(folio + "-SELLO-DEMO-2026").substring(0, 40);
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
            <div class="data"><strong>Nivel educativo:</strong> ${c.nivel}</div>
            <div class="data"><strong>Modalidad:</strong> ${c.modalidad}</div>
            <div class="data"><strong>Centro de trabajo:</strong> ${c.centro}</div>
            <div class="data"><strong>Promedio final:</strong> ${c.promedio}</div>
            <div class="data status-valid"><strong>Estatus del documento:</strong> ${c.estatus}</div>
            <div class="data"><strong>Fecha de emisión:</strong> ${c.fecha}</div>
            <div class="data"><strong>Autoridad firmante:</strong> ${c.autoridad}</div>
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
