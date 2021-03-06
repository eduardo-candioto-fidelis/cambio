# Câmbio

Este projeto consiste em um site que exibe a cotação de diversas moedas em relação ao real, permitindo ao usuário realizar consultas e favoritar determinadas moedas. Ele pode ser acessado [aqui](https://eduardo-candioto-fidelis.github.io/cambio/index.html).

## Objetivo

Este projeto tem como objetivo o aprendizado de desenvolvimento web frontend.

## Tecnologias Usadas

- JavaScript
- HTML
- CSS

## Como Funciona

Uma vez carregada a página ela vai ler um arquivo, localizado em `/datas/database.csv`, que contém a cotação de todas as moedas. A fonte deste arquivo é o [Banco Central do Brasil](https://www.bcb.gov.br/estabilidadefinanceira/cotacoestodas).

## Como Usar

Estas são as funcionalidades do site:

- Na tela inicial instruções do site são apresentadas.
  ![Tela Inicial](/img/home.png "Tela Inicial")
- Na aba *Todos* é exibida a cotação de todas as moedas.
  ![Tela Todos](/img/all.png "Tela Todos")
    - Há uma coluna chamada favoritos na qual é possível, clicando em *Adicionar* marcar determinada moeda como favorito.
    ![Botão Favorito](/img/favorates-button.png "Botão Favorito")
- Na aba *Buscar* o usuário pode buscar uma moeda específica pelo seu código.
  ![Tela Buscar](/img/search.png "Tela Buscar")
- Na aba *Favoritos* o usuário pode ver todas as moedas que marcou como favorito.
  ![Tela Favoritos](/img/favorates.png "Tela Favoritos")

# Licença

MIT