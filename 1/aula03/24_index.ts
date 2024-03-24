// Contador de Visitas

function contarVisitas(): void {
    let contador = localStorage.getItem("Visitas");
    if (!contador) {
        contador = "0";
    }
    contador = (parseInt(contador) + 1).toString();
    localStorage.setItem("visitas", contador);
    console.log(`Número total de visitas: ${contador}`)
}

contarVisitas();