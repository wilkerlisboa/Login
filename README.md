# login
Uma tela de login feito modo simples sem framework, para fim de aprendizado, no JAVASCRIPT pegamos os valores das tag html

    <!---CODIGO HTML--->
    <input type="email" placeholder="Email" id="email">
    <input type="password" placeholder="Senha" id="senha">
com

    //CODIGO JAVASCRIPT
    var nome_da_variavel = document.getElementById("nome do id").value
Definir valores fixo para realizar a comparação com os valores de input que seram inseridos pelo usuario, caso o leitor queira realizar o teste coloque essas informações abaixo para realizar o login!!
    
    //CODIGO JAVASCRIPT
    var email_adm = "teste@gmail.com";
    var senha_adm = "teste123*";
Depois é realizado uma comparação utilizando o IF e se for verdadeiro será executado a função WINDOWS.OPEN para abrir a próxima página caso não seja verdadeiro será aberto um POP UP na tela dizendo que o usuario invalido, se o usuário for validado sairá na próxima página avisando o usuário que tudo se passa de um teste e mostra um botão para voltar ao início da tela de login.


     // DECISÃO
    if (email === email_adm && senha === senha_adm) {
        window.open("./public/two/main.html", "_self");
    }else{
        var myWindow = window.open("", "MsgWindow", "width=200,height=100");
        myWindow.document.write("<p>USUARIO INVALIDO!!!!</p>");
    }

Pode seguir os exemplos de tela a baixo para visualizar com resuldado final
    
## Telas
![Group 33](https://github.com/wilkerlisboa/login/assets/73085812/98185075-4bda-45e6-96a9-01665436515f)
![Group 32](https://github.com/wilkerlisboa/login/assets/73085812/cbb27328-82f7-421a-b117-2676a0e0aa93)

## Contato
NOME: Wilker Lisboa Soares da Silva

EMAIL: wilkersoares.wl@gmail.com

