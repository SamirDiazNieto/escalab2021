function mostrarAlerta() {
    alert('hizo clic');
}
function hacerClic() {
   document.getElementsByTagName('p')[0].onclick = mostrarAlerta;
}
window.onload = hacerClic;