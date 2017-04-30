# Bible Portuguese
Módulo `BibleJS` Português

## Instalação
Execute os seguintes comandos para baixar e instalar o aplicativo:

```sh
$ git clone git@github.com:BibleJS/bible-portuguese.git bible-portuguese
$ cd bible-portuguese
$ npm install
```

## Exemplo

```js
// Dependências
var PtBible = require("bible-portuguese");

// Pegar verso
PtBible.getVerse("Mateus 1:1", function (err, data) {
    console.log(err || data);
});

```

## Como contribuir

1. Crie uma Issue no repositório, usando o rastreador de bugs, descrevendo a contribuição que você gostaria de fazer. Isso nos ajudará a começar com o pé direito.
2. Forque o projeto em sua conta e crie uma nova branch: `nome-da-branch`.
3. Escreva o código e os testes, execute `npm test` para confirmar que tudo funciona.
3. Coloque suas alterações na branch que você criou.
4. Abra um Pull Request e faça referência a questão inicial na mensagem da solicitação (da resolução de um problema).

## Licença
Veja a [LICENÇA](./LICENSE).
