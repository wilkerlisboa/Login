function inside(){
    // VARIAVEL
        // VALORES FIXO PARA VALIDAR
    var email_adm = "teste@gmail.com";
    var senha_adm = "teste123*";

        // ELEMENTOS DE ENTRADA E BOTÃO DO HTML
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    // DECISÃO
    if (email === email_adm && senha === senha_adm) {
        window.open("./two/main.html", "_self");
    }else{
        var myWindow = window.open("", "MsgWindow", "width=200,height=100");
        myWindow.document.write("<p>USUARIO INVALIDO!!!!</p>");
    }
}

function back(){
    window.open("../index.html", "_self");
}