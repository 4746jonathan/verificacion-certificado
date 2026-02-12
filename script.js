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

if (folio && certificados[folio]) {
    const c = certificados[folio];

    resultado.innerHTML = `
        <div class="data"><strong>Folio:</strong> ${folio}</div>
        <div class="data"><strong>Nombre:</strong> ${c.nombre}</div>
        <div class="data"><strong>CURP:</strong> ${c.curp}</div>
        <div class="data"><strong>Nivel:</strong> ${c.nivel}</div>
        <div class="data"><strong>Modalidad:</strong> ${c.modalidad}</div>
        <div class="data"><strong>Centro de Trabajo:</strong> ${c.centro}</div>
        <div class="data"><strong>Promedio:</strong> ${c.promedio}</div>
        <div class="data valido"><strong>Estatus:</strong> ${c.estatus}</div>
        <div class="data"><strong>Fecha de emisión:</strong> ${c.fecha}</div>
        <div class="data"><strong>Autoridad:</strong> ${c.autoridad}</div>
    `;
} else {
    resultado.innerHTML = `<p style="color:red;">Folio no encontrado o inválido.</p>`;
}
