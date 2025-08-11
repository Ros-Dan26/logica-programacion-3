function obtenerFactorial() {
    let numeroFacto = parseInt(document.getElementById("numero").value);
    let resultado;

    if (!isNaN(numeroFacto)) {
        if (numeroFacto === 0) {
            resultado = `El factorial de ${numeroFacto} es: 1`
        }
        else {
            let calculoFactorial = numeroFacto;

            for (let i = numeroFacto - 1; i > 0; i--) {

                calculoFactorial *= i;

            }

            resultado = `El factorial de ${numeroFacto} es: ${calculoFactorial}`;
        }

        document.getElementById("resultado").textContent = resultado;
    } else {
        alert("Simbolo invalido");
    }
}



