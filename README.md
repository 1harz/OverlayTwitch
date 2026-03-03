# Twitch Chat Overlay

Um overlay leve, invisível e "clicável através" (click-through) para ler o chat da sua live na Twitch mesmo quando você tem apenas um monitor. Perfeito para jogar sem perder a interação com seus viewers, sem precisar dar ALT+TAB toda hora!

---

## 📥 Para Usuários (Como Usar)

### Passo 1: Baixar o Projeto
1. Acesse o repositório do projeto
2. Clique no botão **"Code"** e depois em **"Download ZIP"**
3. Extraia o arquivo ZIP baixado para qualquer pasta do seu computador

### Passo 2: Executar o Aplicativo
✅ **Simples assim:** Dê um duplo clique no arquivo **`Iniciar_Overlay.bat`** na pasta onde você extraiu!

> **Nota:** Não é necessário instalar nada, compilar código ou usar o terminal. Apenas execute o arquivo `.bat`!

**Alternativa:** Se preferir, você também pode:
1. Abra a pasta **`Twitch Chat Overlay-win32-x64`** dentro do projeto
2. Dê um duplo clique no arquivo **`Twitch Chat Overlay.exe`**

### Passo 3: Configurar
1. Uma janela de **Controle** será aberta
2. Digite o nome do canal da Twitch que você quer monitorar (ex: seu próprio canal)
3. Ajuste as configurações de posição, tamanho e fonte conforme preferir
4. O overlay será exibido automaticamente na sua tela

---

## ⚙️ Configurações do Overlay

- **Posição:** Defina onde o chat aparecerá na tela (esquerda, direita, centro)
- **Largura e Altura:** Ajuste o tamanho do overlay
- **Tamanho da Fonte:** Aumente ou diminua o texto do chat para melhor leitura
- **Transparência:** O overlay é 100% transparente e click-through (os cliques passam através dele)

---

## 🎮 Como Usar Durante o Jogo

### Importante: Modo de Tela Cheia
Este overlay funciona "por cima" de outros aplicativos do Windows. Para funcionar enquanto você joga:

**Configure seus jogos no modo TELA CHEIA EM JANELA (Borderless / Windowed Full Screen)**

- A maioria dos jogos competitivos modernos possui essa opção nas configurações de vídeo
- Na Steam, você pode adicionar o parâmetro de launch: `-windowed -noborder`

### Funcionalidades Principais
- ✅ **100% Transparente:** O overlay fica invisível sobre o seu jogo
- ✅ **Click-through:** Os cliques do mouse "passam através" dele, então você nunca clicará no chat por engano
- ✅ **Sempre no topo:** O overlay permanece visível mesmo com outros programas abertos
- ✅ **Leve:** Não consome muitos recursos do seu computador

---

## 🛠️ Para Desenvolvedores

Caso queira contribuir com o código, clonar e testar rodando localmente, tenha o [Node.js](https://nodejs.org/) instalado em seu computador.

### Instalação do Ambiente de Desenvolvimento

1. Clone o repositório:
```bash
git clone https://github.com/SeuUsuario/Overlay-Chat-Twitch.git
cd Overlay-Chat-Twitch
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o aplicativo em modo de desenvolvimento:
```bash
npm start
```

### Tecnologias Utilizadas

- **[Electron](https://www.electronjs.org/)**: Para compilar o HTML/CSS e Javascript num App local de Windows com propriedades avançadas de janelas nativas
- **[tmi.js](https://tmijs.com/)**: Biblioteca oficial da Twitch para se conectar às mensagens do chat

### Como Compilar / Criar o `.exe`

Para criar o executável standalone para Windows, execute:

```bash
npm run build-exe
```

Isso criará uma pasta chamada **`Twitch Chat Overlay-win32-x64`** na raiz do projeto, contendo o arquivo `Twitch Chat Overlay.exe` e todos os arquivos necessários para executar o aplicativo.

**Para distribuir:** Compacte (ZIP) a pasta `Twitch Chat Overlay-win32-x64` inteira junto com o arquivo `Iniciar_Overlay.bat` e envie para os usuários.

---

## 📝 Personalização

Sinta-se livre para customizar esse overlay de chat e alterar estilos em `overlay.html` como contorno de bordas do texto (drop shadows) para deixar o layout que for melhor para suas streams.

---

## 📄 Licença

Este projeto é livre para uso e modificação. Sinta-se à vontade para adaptá-lo às suas necessidades!
