# 🎨 Retro Showcase - Landing Pages

![Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

Um showcase retrô e estiloso para exibir minhas landing pages desenvolvidas com HTML, CSS e JavaScript puro.

## 📸 Preview

*(Adicione aqui uma screenshot do seu showcase)*

## 🎯 Sobre o Projeto

Este repositório é uma vitrine de projetos, onde cada landing page é apresentada em um card interativo com preview e descrição. O design utiliza uma paleta de cores retrô vibrante inspirada nos anos 80/90.

### 🎨 Paleta de Cores

- **Amarelo:** `#FFC567`
- **Rosa:** `#FB7DA8`
- **Vermelho:** `#FD5A46`
- **Roxo:** `#552CB7`
- **Verde:** `#00995E`
- **Azul:** `#0588CD`
- **Preto:** `#1a1a1a` / `#2a2a2a`
- **Branco:** `#f5f5f5`

## 🚀 Estrutura do Projeto

```
showcase-landing-pages/
│
├── index.html              # Página principal (showcase)
├── css/
│   └── main.css           # Estilos da página principal (opcional)
├── js/
│   └── main.js            # Scripts da página principal (opcional)
├── assets/
│   └── previews/          # Imagens de preview dos projetos
│       └── exemplo-01.jpg
│
└── projects/              # Pasta com todas as landing pages
    ├── exemplo-01/
    │   ├── index.html
    │   ├── css/
    │   │   └── style.css
    │   ├── js/
    │   │   └── script.js
    │   └── assets/
    │       └── images/
    │
    ├── projeto-02/
    │   └── ...
    │
    └── projeto-03/
        └── ...
```

## ✨ Características

- ✅ Design retrô com estética anos 80/90
- ✅ Totalmente responsivo
- ✅ Animações suaves nos cards
- ✅ Cursor customizado temático
- ✅ Navegação fácil entre projetos
- ✅ HTML, CSS e JavaScript puros (sem frameworks)
- ✅ Dark mode por padrão

## 📋 Como Adicionar um Novo Projeto

1. **Crie uma nova pasta** dentro de `projects/` com o nome do seu projeto:
   ```
   projects/seu-projeto/
   ```

2. **Adicione seus arquivos** seguindo a estrutura:
   ```
   seu-projeto/
   ├── index.html
   ├── css/
   ├── js/
   └── assets/
   ```

3. **Adicione o botão de voltar** no footer da sua landing page:
   ```html
   <footer>
       <a href="../../index.html" class="back-button">← Voltar ao Showcase</a>
   </footer>
   ```

4. **Adicione o card no showcase** editando o `index.html` principal:
   ```html
   <div class="project-card" onclick="window.location.href='projects/seu-projeto/index.html'">
       <div class="project-preview">SP</div>
       <div class="project-info">
           <h3>SEU PROJETO</h3>
           <p>Descrição do seu projeto aqui.</p>
           <div class="project-tags">
               <span class="tag">HTML5</span>
               <span class="tag">CSS3</span>
               <span class="tag">JAVASCRIPT</span>
           </div>
       </div>
   </div>
   ```

## 🛠️ Tecnologias

- HTML5
- CSS3
- JavaScript (Vanilla)

## 📦 Como Usar

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/showcase-landing-pages.git
   ```

2. Abra o arquivo `index.html` no seu navegador

3. Ou use um servidor local:
   ```bash
   # Com Python 3
   python -m http.server 8000
   
   # Com Node.js (http-server)
   npx http-server
   ```

4. Acesse `http://localhost:8000`

## 🎨 Customização

### Alterar Cores
As cores principais estão definidas no CSS. Para alterar, procure por:
- `.project-preview` - cores dos previews
- `.tag` - cores das tags
- `header h1` - cores do título

### Adicionar Animações
Todas as animações estão no arquivo JavaScript principal, na seção de eventos DOMContentLoaded.

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👩‍💻 Autora

**[Seu Nome]**

- GitHub: [@seu-usuario](https://github.com/seu-usuario)
- LinkedIn: [seu-perfil](https://linkedin.com/in/seu-perfil)
- Portfolio: [seu-site.com](https://seu-site.com)

## 🤝 Contribuindo

Contribuições, issues e pedidos de features são bem-vindos!

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## ⭐ Mostre seu apoio

Se este projeto te ajudou, dê uma ⭐️!

---

**Desenvolvido com 💜 por Camila**