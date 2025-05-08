## 💻 Projeto: Tela de Login com React v2

### 🧾 Descrição Geral

Este é um projeto simples de tela de login criado com **React**, que tem como objetivo praticar conceitos fundamentais como **componentização**, **hooks**, **eventos**, **estilização com CSS** e o uso de **ícones com a biblioteca React Icons**.

---

### 📁 Estrutura dos Arquivos

#### `App.jsx`

É o **componente principal da aplicação**. Ele serve como ponto de entrada, onde tudo começa a ser exibido. Aqui, a tela de login é chamada (ou seja, o componente `<Login />` é inserido dentro da interface).

```jsx
import './App.css';
import Login from './Components/Login/Login';

function App() {
  return (
    <div className='App'>
      <Login />
    </div>
  );
}

export default App;
```

---

#### `Login.jsx`

É o **componente de tela de login**. Ele possui:

* Um formulário com campos para **e-mail e senha**.
* Ícones personalizados ao lado dos inputs.
* Validação simples (não permite enviar o formulário vazio).
* Um alerta simulando o envio dos dados digitados.

O React também está sendo usado com o **hook `useState`**, que serve para guardar o que o usuário digita.

---

#### `Login.css`

Contém todos os **estilos específicos da tela de login**, como:

* Layout do formulário
* Estilização dos inputs, botões e links
* Ícones posicionados corretamente
* Responsividade e aparência agradável

Além disso, agora o Login.css importa os seguintes arquivos de estilo para uma melhor organização:

/components/Login/styles/layout.css: Estilos gerais de layout para a tela de login.

/components/Login/styles/form.css: Estilos do formulário de login, como a estilização dos inputs e botões.

/components/Login/styles/imagem.css: Estilos para a área da imagem, incluindo o layout e o posicionamento das imagens.

/components/Login/styles/textos.css: Estilos relacionados ao texto na tela de login, como fontes, tamanhos e cores.

/components/Login/styles/responsivo.css: Estilos responsivos que garantem a boa exibição da tela em diferentes tamanhos de dispositivos.


---

#### `App.css`

Define os **estilos globais** da aplicação e também o **fundo da tela**, que usa uma imagem com ajustes para que ela fique visível sem cortes.

---

### 🧠 Conceitos Aplicados

* **ReactJS**: criação de interfaces reativas e baseadas em componentes.
* **Hooks (useState)**: gerenciamento de estado (armazenar o que o usuário digita).
* **Manipulação de eventos**: uso do `onSubmit` para controlar o envio do formulário.
* **CSS modular**: estilos separados por componente.
* **Responsividade e design visual**.
* **Importação de imagens e ícones** (React Icons).

---

### 🧪 Resultado Final

A aplicação exibe uma tela de login com:

* Campo de e-mail e senha com ícones.
* Botão "Entrar".
* Opção de lembrar o usuário.
* Link de recuperação de senha.
* Link para criar nova conta.
* Fundo estilizado com imagem SVG.

---

### 🚀 Como rodar o projeto

```bash
# Clone o repositório
git clone https://github.com/saracristinas/Sistema-de-adocao.git

# Acesse a pasta do projeto
cd nome-da-pasta

# Instale as dependências
npm install

# Inicie o projeto
npm run dev
```

