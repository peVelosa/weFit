# weFit Technical Interview Project

Este projeto foi desenvolvido como parte de uma entrevista técnica para a weFit. O objetivo era criar uma aplicação com duas páginas, onde a primeira exibe uma lista de filmes obtidos de uma API e a segunda um carrinho para finalizar a compras. A aplicação foi desenvolvida utilizando Next.js, com animações aplicadas aos cards de filmes usando Framer Motion.

## 🛠️ Tecnologias Utilizadas

- **Next.js**: Framework React para desenvolvimento da aplicação.
- **Framer Motion**: Biblioteca utilizada para animação dos cards de filmes.
- **Jest**: Framework de testes utilizado para validação do comportamento da aplicação.

## 📡 Consumo da API

O consumo dos dados da API foi realizado através de um service abstrato implementado como uma interface, o que permite uma fácil adaptação e testes dos serviços de fetch. Para os testes, os dados da API foram mockados, garantindo que a aplicação funcione mesmo sem acesso aos dados reais.

## 🚀 Animações

As animações dos cards de filmes foram implementadas utilizando Framer Motion, proporcionando uma experiência de usuário mais dinâmica e interativa.

## 🧪 Testes

Os testes foram desenvolvidos utilizando Jest, garantindo a confiabilidade e a consistência do comportamento da aplicação. 

## 📝 Como Rodar o Projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/wefit-interview-project.git
   ```
2. Instale as dependências

```bash
npm install
```
3. Execute o projeto

```bash
npm run dev
```
4. Rode os testes (opicional)

```bash
npm test
```
