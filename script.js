function calcImc() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const resp = document.getElementById('resp');

    const resultado = peso / (altura * altura)
    resp.innerHTML = resultado.toFixed(2);
    if (resultado <= 18.5) {
        resp.innerHTML += " (Magreza)"
    }else if (resultado > 18.5 && resultado <= 24.9){
        resp.innerHTML += " (Normal)"
    }else if (resultado > 25.0 && resultado <= 29.9){
        resp.innerHTML += " (Sobrepeso)"
    }else if (resultado > 30.0 && resultado <= 39.9){
        resp.innerHTML += " (Obesidade)"
    }else if (resultado > 40.0){
        resp.innerHTML += " (Obesidade Grave)"
    }
}