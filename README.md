# Semana Acadêmica da Computação

O site da Semana Acadêmica da Computação agrega todas as informações relativas ao evento organizado pelo PETComp UFC (Pici) com o apoio do Departamento de Computação. Mais importante ele inclui:
- A descrição do evento
- O cronograma das atividades
- Como participar
- Nossos apoios e agradecimentos

---

## Como Trabalhar no Site

Para trabalhar nesse site é necessário ter [o Node e o NPM](https://nodejs.org/) instalados no seu computador. Uma vez instalados acesse o repositório pela linha de comando com:

```sh
git clone https://github.com/petcompufc/sac.git
cd sac
```

Uma vez dentro do repositório instale as dependências com `npm install -D` (para incluir dependências de desenvolvimento) e começe a desenvolver rodando `npm run develop` ou `yarn develop`. Também é possível utilizar as ferramentas de linha de comando do Gatsby:

```bash
npm install -g gatsby-cli
gatsby develop
```
O [Gatsby](https://www.gatsbyjs.com/) é um gerador de sites estáticos baseado em [React](https://reactjs.org/), portanto para desenvolver é interessante ter conhecimentos nessas duas tecnologias. Adicionalmente o site faz uso do (chakra-ui)[https://chakra-ui.com/] para garantir interfaces acessíveis e fáceis de construir e garante a qualiade do código com (ESLint)[https://eslint.org/] utilizando o (AirBNB Style Guide)[https://github.com/airbnb/javascript]. 

Os arquivos do site são organizados da seguinte maneira:

```
📁.
  ├─📁src
  |   ├─📁 components # Os componentes, que incluem as seções da página
  |   ├─📁 images # Imagens (SVG, PNG, JPEG, ...)
  |   └─📁 pages # As páginas a serem geradas pelo Gatsby, no caso apenas uma, pois o site é basicamente um poster
  ├─.eslintrc.json # Configurações do ESLint
  ├─.gitignore
  ├─LICENSE
  ├─README.md
  ├─gatsby-config.js
  ├─package-lock.json
  └─package.json
```

<!-- TODO: Contribuindo -->
