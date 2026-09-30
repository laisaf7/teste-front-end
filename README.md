# Econverse Landing Page

Este é um projeto de desenvolvimento front-end para uma landing page de e-commerce responsiva e componentizada. O projeto foi construído do zero, sem a utilização de bibliotecas de UI externas (como Bootstrap ou Material UI), focando em uma arquitetura limpa, estilização customizada e alta performance.

## Tecnologias Utilizadas

* **React (v18)** - Biblioteca principal para construção da interface.
* **TypeScript** - Tipagem estática para maior segurança e previsibilidade do código.
* **Vite** - Ferramenta de build e servidor de desenvolvimento ultrarrápido.
* **Sass (SCSS)** - Pré-processador CSS para modularização, variáveis e aninhamento de estilos.

## Pré-requisitos

Antes de iniciar, certifique-se de ter as seguintes ferramentas instaladas em seu ambiente:
* **Node.js** (Versão 18 ou superior recomendada)
* **npm** (ou **Yarn** / **pnpm**)

## Como instalar e compilar

1. **Clone o repositório** para a sua máquina local:
   ```bash
   git clone https://github.com/laisaf7/teste-front-end.git
   ```

2. **Acesse a pasta do projeto**:
   ```bash
   cd teste
   ```

3. **Instale as dependências** do projeto:
   ```bash
   npm install
   ```

## Como rodar o projeto em desenvolvimento

Para iniciar o servidor local de desenvolvimento com Hot Module Replacement (HMR):

```bash
npm run dev
```
O terminal exibirá a URL local (geralmente `http://localhost:5173`). Abra este link no seu navegador para visualizar e interagir com o projeto. As alterações no código serão refletidas na tela instantaneamente.

## Como compilar para produção (Build)

Para gerar a versão otimizada do projeto, pronta para deploy em ambientes de produção:

```bash
npm run build
```
Este comando criará uma pasta `dist/` na raiz do projeto contendo os arquivos estáticos minificados, com tipagem TypeScript estritamente validada.

Para testar o build localmente antes de fazer o deploy, utilize:
```bash
npm run preview
```

## Estrutura de Pastas Principal

* `src/assets/`: Ícones e imagens estáticas consumidas na interface.
* `src/components/`: Componentes isolados e reutilizáveis (Ex: Header, Hero, ProductShelf, ProductCard). Cada componente possui seu próprio arquivo `.tsx` e `.scss`.
* `src/data/`: Arquivos estáticos que simulam o retorno de APIs (Ex: `products.json`).
* `src/styles/`: Configurações globais de CSS, variáveis de cor, tipografia e resets (`variables.scss`, `global.scss`).
* `src/types/`: Interfaces globais do TypeScript utilizadas para tipar os componentes e dados do projeto (`index.ts`).
