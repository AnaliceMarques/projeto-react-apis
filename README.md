# **Projeto React e API's**

O Projeto React e APIs é um site de pokémons que possui três páginas: Home, Pokedex e Detalhes.

Este projeto tem como fonte de dados para a sua criação a [Poke Api](https://pokeapi.co/ "Poke Api"), uma Api pública, muito utilizada para aplicações focadas em aprendizado de programação.

## **Funcionalidades do Projeto**

- [x] Página inicial com uma lista de 30 Pokémons, ordenados pelo número do id e no Header terá um botão para acessar a página da Pokédex;
- [x] Cada Pokémon é representado por um card, contendo id, nome, tipo, e imagem do Pokémon;
- [x] Cada card tem um botão para acessar os detalhes do Pokémon e outro de adicionar ou remover na Pokédex (dependendo se o Pokémon está ou não na Pokédex);
- [x] Os Pokémons que forem adicionados na Pokédex são removidos da lista da página inicial e retornarão caso sejam removidos da Pokédex;
- [x] Na página Pokédex será renderizado os cards dos Pokémons que foram adicionados na Pokédex, ordenados pelo número do id e no Header terá um botão para voltar para a Home;
- [x] Na página de Detalhes será renderizado um card com as informações do Pokémon selecionado e no Header terá um botão um botão para adicionar ou remover da Pokédex (dependendo se o Pokémon está ou não na Pokédex) e outro para voltar a página Home;
- [x] Se o Pokémon já está na Pokédex não é possível adiciona-lo novamente.

## **Link de Acesso**

- Deploy do projeto realizado no surge:
  https://projeto-pokedex-analice-marques.surge.sh

## **Tecnologias Utilizadas**

1. [React](https://pt-br.reactjs.org/) (React.JS, React Context, Estado Global e Custom Hooks )
2. [React Router](https://reactrouter.com/)
3. [Axios](https://axios-http.com/)
4. [Chakra UI](https://chakra-ui.com/)

## **Como rodar este projeto?**

```bash
# Clone este repositório
$ git clone https://github.com/AnaliceMarques/projeto-react-apis.git

# Acesse a pasta do projeto no seu terminal
$ cd projeto-react-apis

# Instale as dependências
$ npm install

# Execute a aplicação
$ npm run start

# A aplicação será iniciada na porta 3000, acesse pelo navegador: http://localhost:3000
```

## **Próximos passos**

- [ ] Inserir mais Pokémons na página inicial, através de paginação;
- [ ] Armazenar os Pokémons que estão na Pokédex no localStorage;
- [ ] Deixar o site responsivo para tablet e mobile.

## **Contato**

analicemarquessl@gmail.com

[LinkedIn](https://www.linkedin.com/in/analicemarquessl)
