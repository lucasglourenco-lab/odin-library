# Roteiro para concluir o Library

A ordem segue um princípio: **primeiro os dados, depois a exibição, por último a interação.** Cada fase depende da anterior, e você pode testar cada uma isoladamente antes de seguir.

---

## Fase 0: Preparar o ambiente

- [ ] Inicializar um repositório git na pasta `library`
- [ ] Criar o repositório no GitHub e conectar ao local
- [ ] Fazer o primeiro commit com o estado atual (assim você tem um "antes" para comparar)
- [ ] Adotar o hábito: **um commit ao fim de cada fase**, com mensagem descrevendo o que mudou

## Fase 1: Organizar o arquivo

- [ ] Reordenar o `script.js` em blocos lógicos: dados → constructor → lógica → exibição → eventos
- [ ] Declarar todas as variáveis (nenhuma atribuição solta sem `let`/`const`)
- [ ] Decidir entre `let` e `const` para o array. *Pergunta-guia:* você vai reatribuir o array ou só modificá-lo? A resposta depende de como você vai fazer o delete.
- [ ] Renomear o que engana: o botão chamado de modal, o elemento chamado como função, o array no singular
- [ ] Remover buscas repetidas ao DOM (o mesmo `querySelector` aparece em mais de um lugar)

## Fase 2: Modelo de dados (sem tocar no DOM)

- [ ] Corrigir o prefixo `id-` duplicado (escolha um único lugar para ele, ou nenhum)
- [ ] Garantir que `pages` seja guardado como número
- [ ] Criar no `Book.prototype` a função que alterna o `read`
- [ ] Criar uma função de lógica que remove um livro do array a partir do `id`
- [ ] Adicionar 3 ou 4 livros manualmente no array, direto no código
- [ ] ✅ **Teste da fase:** no console do navegador, chame suas funções (adicionar, remover, alternar lido) e confira o array. Se tudo funciona *sem interface*, o modelo está pronto.

## Fase 3: Função de exibição

- [ ] Criar uma função separada que limpa a lista e redesenha todos os livros a partir do array
- [ ] Chamar essa função ao carregar a página (seus livros de teste devem aparecer)
- [ ] Trocar o `innerHTML` com dados do usuário por criação de elementos com `textContent`. *Pesquise:* `createElement`, `textContent`, `append`.
- [ ] Associar cada card ao seu livro com um `data-attribute` (releia o link da lição)
- [ ] Fazer o badge "read" refletir o valor real de `book.read` (texto e cor diferentes para lido e não lido)
- [ ] Exibir uma mensagem quando a biblioteca estiver vazia
- [ ] ✅ **Teste da fase:** altere o array pelo console, chame a função de exibição e veja a tela acompanhar.

## Fase 4: Formulário

- [ ] Colocar o botão de adicionar **dentro** do `<form>`, como botão de submit
- [ ] Trocar o listener de `click` no botão por um listener de `submit` no form
- [ ] Usar `event.preventDefault()` e entender **por que** ele é necessário (o que acontece sem ele?)
- [ ] Confirmar que o `required` passou a bloquear campos vazios
- [ ] Corrigir a leitura do checkbox. *Pesquise:* qual propriedade indica se ele está marcado?
- [ ] Corrigir os `for` das labels para combinar com os `id` dos inputs
- [ ] Limpar o formulário após adicionar. *Pesquise:* métodos do `HTMLFormElement`.
- [ ] Depois de adicionar, chamar a função de exibição da Fase 3 (sem duplicar código)
- [ ] Resolver o `display: block` que sobrescreve o `flex` do modal. *Duas opções para estudar:* alternar uma classe CSS, ou migrar para `<dialog>`.
- [ ] Decidir o comportamento do "Cancel": ele deve limpar o formulário também?
- [ ] ✅ **Teste da fase:** tente adicionar com campos vazios, com e sem o checkbox marcado, e cancele no meio do preenchimento.

## Fase 5: Remover livro

- [ ] Botão Delete em cada card
- [ ] Ao clicar, ler o `data-attribute` do card e chamar a função de remoção da Fase 2
- [ ] Redesenhar a lista com a função da Fase 3
- [ ] *Pergunta-guia:* você está mexendo no DOM direto ou no array? Pela lição, deve ser **no array, e a tela acompanha**.
- [ ] *(Avançado, opcional)* Pesquise **event delegation**: um listener no container em vez de um por botão. Compare as duas abordagens.
- [ ] ✅ **Teste da fase:** remova o primeiro, o do meio e o último livro, e remova tudo até a lista ficar vazia.

## Fase 6: Alternar lido / não lido

- [ ] Transformar o badge "read" em botão (ou adicionar um botão novo)
- [ ] Ao clicar, encontrar o livro no array e chamar o método do **prototype** criado na Fase 2
- [ ] Redesenhar a lista
- [ ] ✅ **Teste da fase:** alterne várias vezes o mesmo livro e confira no console que o objeto mudou, não só a tela.

## Fase 7: Polimento

- [ ] Resolver a rolagem com muitos livros (teste com uns 20; investigue o `position: fixed` do `body`)
- [ ] Testar o título `<img src=x onerror=alert(1)>`: depois da Fase 3, nenhum alerta deve aparecer
- [ ] Fechar o modal com Esc (vem pronto se você usar `<dialog>`)
- [ ] Foco no primeiro campo ao abrir o modal
- [ ] Hover e `cursor: pointer` em todos os botões, não só os da topbar
- [ ] Revisar a acessibilidade básica: labels, textos dos botões, contraste
- [ ] Apagar os `console.log` de debug

## Fase 8: Revisão final

- [ ] Reler o enunciado (`odin-project/javascript/organizing_your_javascript_code/project_library.md`) item por item e marcar cada requisito
- [ ] Reler seu código como se fosse de outra pessoa: os nomes explicam o que as coisas fazem? As funções têm uma responsabilidade só?
- [ ] Remover os livros de teste do array (ou manter alguns como exemplo, é decisão sua)

## Fase 9: Entrega

- [ ] Escrever um `README.md` curto: o que é, funcionalidades, o que aprendeu
- [ ] Publicar no GitHub Pages
- [ ] Testar o link publicado (os caminhos das fontes e do logo funcionam online?)
- [ ] Enviar a solução no site do The Odin Project
- [ ] Olhar as soluções de outros alunos e comparar abordagens. É aqui que muita coisa se fixa.

---

## Extras, se quiser ir além (não são obrigatórios)

- [ ] Busca funcional no input da topbar
- [ ] Campo de gênero no formulário e filtro pelas categorias da sidebar
- [ ] Editar um livro existente
- [ ] Ordenar por título, autor ou páginas
- [ ] Persistência com `localStorage` (a lição diz que não precisa, mas é um bom exercício)
