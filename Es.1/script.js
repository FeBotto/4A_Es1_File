var _btnCarica, _txtFile;

window.onload = function(){
    _btnCarica = document.querySelector("button");
    _txtFile = document.querySelector("input[type=file]");

    _btnCarica.addEventListener("click", leggiFile.bind(_txtFile)); //.bind (contesto, eventuali parametri della fnzione) contesto -> manda in esecuzione (ora è il bottone) e si può cambiare
};

function leggiFile(){
    console.log(this);

    let reader = new FileReader();
    reader.onload = fineLettura;
    reader.readAsDataURL(this.value);

    function fineLettura(e){
        let datiFile = e.target.result;
        let stringa = datiFile.split(",")[1];
        alert(atob(stringa));
    }
}