---

# GitHub Repo Manager

Esta é uma aplicação em React que consome a API do GitHub para permitir que os usuários visualizem, adicionem e gerenciem seus repositórios, issues, colaboradores e mais. Além disso, todos os dados são armazenados no `localStorage` para persistência local, permitindo que as informações sejam mantidas mesmo após o fechamento da aplicação.



https://github.com/user-attachments/assets/d2feb518-dfc5-4219-adcb-68ab81494c90



## Funcionalidades

- **Exibição de Repositórios:** Visualize todos os repositórios associados a um usuário no GitHub.
- **Adição de Repositórios:** Adicione novos repositórios manualmente à lista.
- **Issues:** Exiba as issues de um repositório, com informações detalhadas como título, descrição e status.
- **Contribuidores:** Veja os colaboradores que contribuíram para um repositório.
- **Busca Paginada:** A funcionalidade de busca permite encontrar repositórios e issues, com paginação para resultados mais rápidos e organizados.
- **Filtro de Issues:** Filtre as issues por seu estado (`open`, `closed` ou `all`).
- **Armazenamento Local:** Dados como repositórios e issues são armazenados no `localStorage` para persistência. Mesmo após fechar a aplicação, seus dados serão mantidos até que o usuário decida removê-los.

## Tecnologias Utilizadas

- **React.js:** Para criação da interface interativa e dinâmica.
- **GitHub API:** Para consumo dos dados dos repositórios, issues e contribuidores.
- **localStorage:** Para armazenar dados localmente no navegador do usuário, garantindo que as informações persistam entre sessões.
- **Axios:** Para fazer requisições HTTP para a API do GitHub.
- **React Router:** Para navegação entre páginas da aplicação.
- **Styled Components / CSS:** Para o estilo da aplicação.

## Como Rodar a Aplicação

### 1. Clonando o Repositório

```bash
git clone https://github.com/seu-usuario/github-repo-manager.git
cd github-repo-manager
```

### 2. Instalando Dependências

Se você ainda não tiver as dependências instaladas, rode o comando:

```bash
npm install
```

### 3. Iniciando o Servidor de Desenvolvimento

Para rodar a aplicação em ambiente de desenvolvimento, execute:

```bash
npm start
```

Isso irá iniciar o servidor de desenvolvimento e abrir a aplicação no seu navegador.

## Funcionalidades da Interface

### 1. Adicionar Repositórios

Na tela principal, há um botão para adicionar um repositório manualmente. Ao clicar, o usuário pode inserir o nome do repositório que deseja adicionar. Esses repositórios são armazenados no `localStorage` e podem ser exibidos diretamente na interface.

### 2. Exibir Repositórios e Issues

Ao clicar no ícone "Hamburguer" a aplicação irá buscar um repositório, em seguida será mostrado:

- Nome do repositório
- Descrição
- Contribuidores
- Issues (com possibilidade de filtrar por estado `open`, `closed`, ou `all`)
- Opção de excluir um repositório da lista (essa ação também reflete no `localStorage`)

### 3. Buscar Repositórios com Paginação

Na tela de repositórios, você pode buscar por nome de repositórios e visualizar os resultados de forma paginada. As requisições para o GitHub são feitas com paginação para evitar o carregamento excessivo de dados.

### 4. Filtro por Estado de Issues

Você pode filtrar as issues por seu estado (aberto, fechado ou todos), facilitando a visualização das tarefas ativas ou encerradas.

### 5. Armazenamento Local

O `localStorage` é utilizado para armazenar:

- Os repositórios adicionados manualmente
- O estado das issues (abertas/fechadas)
- Histórico de busca e preferências do usuário

Isso garante que mesmo após o fechamento do navegador ou recarregamento da página, as informações estarão disponíveis.

---
## Contribuição
- Sinta-se à vontade para abrir issues e pull requests para melhorias e correções no projeto.
---
