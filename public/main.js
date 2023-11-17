function inside(){
    // VARIAVEL
        // VALORES FIXO PARA VALIDAR
    var email_adm = "wilkersoares.wl@gmail.com";
    var senha_adm = "lisboa123*";

        // ELEMENTOS DE ENTRADA E BOTÃO DO HTML
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    // DECISÃO
    if (email === email_adm && senha === senha_adm) {
        window.open("./two/main.html", "_self");
    }else{
        console.log("não funciona")
    }
}

function back(){
    window.open("../index.html", "_self");
}