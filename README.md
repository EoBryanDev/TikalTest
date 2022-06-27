# Tikal Tech Test

Neste projeto utilizei o framework JS "Vue3" e o framework Bootstrap v4.6 para realizar o trabalho com o frontend. Decidi ao construir o layout do projeto tomar a liberdade de recuperar alguns elementos da jurisTech como background do site oficial, logotipo e logomarca para deixar o projeto direcionado à companhia.

## Teste - Interface de Leitura

* O começo do projeto foi em realizar a estrutura de componentes para que a navegação do cliente fosse o mais fluída possível e agradável. Para isso construi uma página home que seria a raíz, que seria acessada pelo usuário assim que acessasse a página. Ela conta com um componente de navegação (uma barra de navegação) e uma interface com botões que direciona para a página de login e outro para a página oficial da companhia. Após isto foi realizado a pagina de login e depois a página de apresentação dos dados recuperado da API, ou seja, ela é privada.

* Concomitantemente foi realizado as requisições com axios para 1° fazer a validação do login e salvar o token do JWT no Local Storage aonde poderia ser facilmente acessado de qualquer parte da aplicação, sendo para realizar novas requisições ou para fazer o logout. Na sequência foi realizado o tabelamento do retorno das informações da API. Desta maneira para fazer as operações de atualização e de remoção foi utilizado modais.
  
* Para deixar a experiência do usuário mais agradável, fiz a apresentação dos dados em questão em um card acionado ao clicar na linha da tabela, com o intuito de ser semelhante com a navegação de vagas do LinkedIn por exemplo.


* Para finalizar, fiz a apresentação dos dados por uma requisição pelo id e tabulei em uma tabela que só seria mostrada se tivesse realizado uma pesquisa

