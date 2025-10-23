# Catálogo de Skins (Valorant) - React Native

Um aplicativo móvel simples, desenvolvido como projeto para a matéria de Desenvolvimento Mobile. O app exibe um catálogo de skins do jogo Valorant e permite a filtragem dinâmica por raridade e tipo de arma.

---

## ✨ Funcionalidades

* **Listagem de Skins:** Exibe uma lista rolável de skins com imagem, nome e raridade.
* **Filtro por Raridade:** Permite ao usuário selecionar uma raridade (Ultra, Exclusiva, Premium, etc.) e atualiza a lista dinamicamente.
* **Filtro por Tipo de Arma:** Permite selecionar um tipo de arma (Vandal, Phantom, Melee, etc.).
* **Filtros Combinados:** Os filtros de raridade e arma funcionam em conjunto.
* **Feedback Visual:** Botões de filtro ativos mudam de cor para indicar a seleção atual.
* **Feedback de Lista Vazia:** Exibe a mensagem "Nenhuma skin encontrada" se a combinação de filtros não retornar resultados.

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias:

* **React Native:** Framework para desenvolvimento de apps móveis nativos.
* **TypeScript:** Superset do JavaScript que adiciona tipagem estática.
* **React Hooks:**
    * `useState`: Para gerenciamento do estado dos filtros e da lista de skins.
    * `useEffect`: Para reagir a mudanças nos filtros e atualizar a lista exibida.
* **Componentes Core:** `View`, `Text`, `Image`, `ScrollView`, `TouchableOpacity`.
* **StyleSheet:** Para estilização e organização visual.

---

## 🚀 Como Executar o Projeto

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/nome-do-repositorio.git](https://github.com/seu-usuario/nome-do-repositorio.git)
    ```

2.  **Acesse a pasta do projeto:**
    ```bash
    cd nome-do-projeto
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    yarn install
    ```

4.  **Inicie o Metro Bundler:**
    ```bash
    npm start
    # ou
    yarn start
    ```

5.  **Em outro terminal, execute o app no emulador/dispositivo:**

    * **Para Android:**
        ```bash
        npm run android
        # ou
        yarn android
        ```
    * **Para iOS:**
        ```bash
        npm run ios
        # ou
        yarn ios
        ```

## 🧠 Conceitos Aplicados

Este projeto foi um exercício para demonstrar o domínio dos seguintes conceitos fundamentais do React Native:

* **Componentização:** Criação de componentes reutilizáveis (`SkinCard`, `FiltroBotao`) que recebem `props` e são responsáveis pela sua própria renderização e estilo.
* **Gerenciamento de Estado:** Uso do hook `useState` para controlar o estado dos filtros (`filtroRaridade`, `filtroTipoArma`) e o estado da lista renderizada (`skinsExibidas`).
* **Efeitos Colaterais:** Uso do hook `useEffect` para reagir a mudanças no estado dos filtros e disparar a lógica de filtragem da lista principal.
* **Tipagem com TypeScript:** Definição de `interfaces` (como `Skin`) e `types` (como `Raridade`, `TipoArma`) para garantir a integridade dos dados e prevenir bugs.
* **Renderização de Listas:** Uso do método `.map()` em um array de estado para renderizar dinamicamente uma lista de componentes.
* **Estilização Condicional:** Aplicação de estilos diferentes (ex: cor de fundo) com base no estado do componente (ex: `isAtivo` no `FiltroBotao`).
* **Layout com Flexbox:** Organização da estrutura visual do app utilizando as propriedades do Flexbox (`flexDirection`, `alignItems`, etc.).

---

Este projeto foi desenvolvido por **[Seu Nome]** como parte da avaliação da disciplina de Desenvolvimento Mobile.