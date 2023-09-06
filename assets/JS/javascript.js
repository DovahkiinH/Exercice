var validation = document.getElementById("bouton_envoi");
var prenom = document.getElementById("prenom");
var prenom_m = document.getElementById("prenom_manquant");
var prenom_v = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?/;
validation.addEventListener("click", f_valid);

function f_valid(e){

    if (prenom.vaidity.valueMissing) {
        e.preventDefault();
        prenom_m.textContent = "Prénom manquant";
        prenom_m.style.color = "red";
    }else if (prenom_v.test(prenom.value) == false) {

        event.preventDefault();
        prenom_m.textContent = "Format Incorrect";
        prenom_m.style.color = "orange";

    }else {
        
    }
}