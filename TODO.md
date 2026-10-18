# TODO — Library com JavaScript do zero

Base visual refeita em **18/10/2026**. HTML e CSS estão preparados; os itens de JavaScript foram reiniciados porque você vai reimplementá-los. A versão anterior permanece no histórico Git.

**Siga em ordem.** Marque um item depois de implementá-lo e conferir o comportamento. Ao concluir uma fase, faça um commit que descreva o que você aprendeu e construiu. Este roteiro não inclui soluções de JavaScript.

Referência: [enunciado do Library](https://www.theodinproject.com/lessons/node-path-javascript-library). Consulte o README para localizar os elementos da interface.

## 0. Base já preparada

- [x] Repositório próprio do Library conectado ao seu GitHub.
- [x] Página sem categorias, busca ou anúncios que desviem do exercício principal.
- [x] Layout responsivo com fontes locais e estado inicial vazio.
- [x] Formulário com labels associadas, campos obrigatórios e páginas inteiras positivas.
- [x] Botão de cadastro dentro do formulário, com tipo de envio correto.
- [x] Dialog nativo com controles identificados de fechar e cancelar.
- [x] Template de cartão com título, autor, páginas, leitura e botão de remoção.
- [x] Estilos para livros lidos e não lidos, foco visível e navegação por teclado.
- [x] README com os seletores e a estrutura visual disponível.
- [x] `script.js` preparado como ponto de partida, sem implementação pronta.

## 1. Entender o HTML e planejar seus dados

- [ ] Identificar no HTML os campos, a lista, o estado vazio, o dialog e o template. Use o mapa do README.
- [ ] Anotar o que representa um livro: quais propriedades e quais tipos de dados ele precisa ter?
- [ ] Definir quais tarefas pertencem aos dados e quais pertencem à apresentação.
- [ ] Relembrar escopo e declaração de variáveis antes de começar a leitura dos campos.

Verificação: explique o caminho que um livro deverá percorrer do formulário até a lista, sem precisar escrever toda a implementação.

## 2. Construir o modelo de dados

- [ ] Criar o array da biblioteca.
- [ ] Criar o construtor de livros com os dados necessários.
- [ ] Dar a cada livro um identificador único e estável, como pede o enunciado.
- [ ] Criar uma função separada para criar e adicionar livros ao array.
- [ ] Garantir que páginas sejam números e que o estado de leitura seja booleano.
- [ ] Criar alguns livros de exemplo para conferir o modelo pelo console.

Verificação: adicionar livros deve funcionar independentemente do formulário e do DOM. Dois livros com o mesmo título precisam continuar sendo objetos identificáveis separadamente.

## 3. Controlar o formulário

- [ ] Guardar referências aos elementos que você vai utilizar.
- [ ] Implementar a abertura pelo botão Adicionar livro.
- [ ] Implementar os controles de fechar e cancelar.
- [ ] Conferir o fechamento por Esc, o foco inicial e o retorno do foco ao botão de abertura.
- [ ] Definir se Cancel deve preservar ou limpar os dados ainda não enviados.

Verificação: abrir e fechar várias vezes não cria livros nem acumula eventos. O dialog deve manter o layout e ser utilizável por teclado.

## 4. Exibir os dados

- [ ] Estudar o template do cartão e escolher como criar seus elementos.
- [ ] Criar uma função que exiba os livros do array, separada da função de inclusão.
- [ ] Associar cada cartão ao identificador do livro correspondente.
- [ ] Preencher título, autor e páginas como texto, sem interpretar o conteúdo digitado como HTML.
- [ ] Refletir o estado de leitura no texto, na aparência e no estado acessível do botão.
- [ ] Mostrar a orientação de biblioteca vazia apenas quando não houver livros.
- [ ] Conseguir exibir livros já existentes no array ao iniciar a página.

Verificação: renderizar duas vezes não duplica cartões. Um título com sinais de marcação aparece literalmente. Livros lidos e não lidos ficam distinguíveis sem depender apenas da cor.

## 5. Conectar o cadastro aos dados

- [ ] Tratar o envio do formulário e compreender seu comportamento padrão.
- [ ] Ler os campos e investigar como obter corretamente o estado do checkbox.
- [ ] Manter a validação nativa e tratar dados como título e autor compostos apenas de espaços.
- [ ] Usar a função de inclusão da Fase 2 e a exibição da Fase 4.
- [ ] Limpar todos os campos, inclusive o checkbox, após um cadastro bem-sucedido.
- [ ] Fechar o dialog apenas quando o cadastro tiver sido concluído corretamente.

Verificação: teste campos vazios, páginas inválidas, cadastro por Enter, checkbox marcado e desmarcado. Cada envio válido deve criar exatamente um livro.

## 6. Remover livros

- [ ] Identificar o livro correspondente ao botão de remoção clicado.
- [ ] Remover esse objeto do array e atualizar a lista.
- [ ] Conferir que os demais objetos e estados de leitura foram preservados.
- [ ] Exibir novamente o estado vazio quando o último livro for removido.

Verificação: remova o primeiro, um intermediário e o último livro, incluindo uma coleção com títulos repetidos. Depois, adicione um novo livro e repita o teste.

## 7. Alternar lido e não lido

- [ ] Criar no `Book.prototype` o método que alterna a leitura de uma instância.
- [ ] Conectar o controle de leitura ao objeto correto e ao método do prototype.
- [ ] Atualizar a apresentação a partir do estado do objeto.
- [ ] Conferir texto, aparência, `data-read` e `aria-pressed` depois da mudança.

Verificação: alterne várias vezes o mesmo livro, cadastre outro e remova um terceiro. Cada estado deve continuar associado ao livro correto.

## 8. Revisar e apresentar

- [ ] Reler o enunciado e demonstrar cada requisito.
- [ ] Testar o fluxo completo sem recarregar a página e conferir o console.
- [ ] Conferir teclado, tela estreita, textos longos e muitos livros.
- [ ] Revisar nomes, responsabilidades das funções e consultas repetidas ao DOM.
- [ ] Remover livros de teste desnecessários e mensagens de depuração.
- [ ] Atualizar o README com o que realmente funciona e com seus aprendizados.
- [ ] Registrar seu progresso em commits e enviar ao seu fork.
- [ ] Publicar e testar uma demonstração, se quiser apresentar o projeto online.

## Extras opcionais

- [ ] Manter os dados entre recargas com armazenamento local.
- [ ] Permitir editar um livro.
- [ ] Acrescentar busca, filtros ou ordenação depois que o núcleo estiver pronto.

**Próximo passo:** abra o README, localize os elementos no HTML e comece planejando os dados da Fase 1. Os botões permanecerão sem ação até você implementar seus eventos; esse é o ponto de partida esperado.
