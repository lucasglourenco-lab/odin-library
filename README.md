# BookBase — Library

Projeto de biblioteca pessoal do curso JavaScript do [The Odin Project](https://www.theodinproject.com/lessons/node-path-javascript-library).

O HTML e o CSS estão preparados. **O JavaScript começa do zero:** cadastro, exibição, remoção, alternância de leitura e controle do formulário ainda serão implementados por você. A interface inicial vazia é intencional.

## Abrir o projeto

Abra `index.html` no navegador ou use a extensão de servidor local que já utiliza no VS Code. Estilos e fontes são locais; não há dependências npm nem etapa de compilação.

## Estrutura

- `index.html`: página, formulário em dialog e template de cartão.
- `style.css`: layout responsivo, formulário, estados de leitura e cartões.
- `script.js`: seu ponto de partida para implementar a lógica.
- `TODO.md`: sequência de estudo e verificações manuais.
- `assets/fonts`: fontes locais e respectivas informações de licença.

## Elementos para conectar ao JavaScript

| Seletor | Finalidade |
| --- | --- |
| `#addBook` | Botão para abrir o cadastro |
| `#bookDialog` | Dialog nativo do formulário |
| `#closeDialog` e `#cancelBook` | Controles de fechamento e cancelamento |
| `#bookForm` | Formulário cujo envio você vai tratar |
| `#bookTitle`, `#bookAuthor`, `#bookPages`, `#read` | Campos do livro |
| `#listOfBooks` | Lista que receberá os cartões |
| `#emptyState` | Mensagem inicial; a propriedade HTML `hidden` já tem estilo previsto |
| `#bookTemplate` | Estrutura visual de um cartão; não é um livro cadastrado |

O dialog fica fechado inicialmente. Pesquise o funcionamento de `HTMLDialogElement` para implementar sua abertura e seu fechamento. O HTML mantém a validação nativa dos campos; cabe a você conectar o envio aos dados da biblioteca e tratar o comportamento padrão do formulário.

## Estrutura do cartão

No template, os espaços para seus dados usam `.book-title`, `.book-author` e `.book-pages`. Os controles usam `data-action="toggle-read"` e `data-action="remove"`.

Cada cartão tem um `data-book-id` reservado para a associação com seu objeto. O atributo `data-read` controla a aparência dos estados `true` e `false`. O texto de `.book-status`, o texto de `.read-button-label` e o `aria-pressed` do botão também precisam acompanhar os dados. O CSS já contempla a apresentação; você vai implementar essa atualização.

Você pode usar o template ou estudar sua estrutura e criar os elementos manualmente. Escolha uma abordagem que consiga explicar. Nenhuma lógica de livros ou de eventos foi fornecida.

## Continuidade

O JavaScript anterior está preservado no histórico Git do projeto. O novo `script.js` contém apenas um comentário de início. Siga o TODO e registre seu próprio progresso com commits.

A persistência entre recargas é opcional no enunciado. Primeiro conclua as operações básicas da biblioteca.
