# Portfólio Pessoal - Desenvolvimento Web

![HTML5](https://img.shields.io/badge/HTML5-E34C26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 🎯 Objetivo do Projeto

Site de portfólio pessoal desenvolvido como projeto acadêmico, apresentando interesses profissionais, contexto da disciplina Projeto 1, recursos de estudo e inspirações na área de tecnologia.

---

## 📋 Requisitos Atendidos

- ✅ **Layout bem estruturado** - Usando CSS Grid e Flexbox
- ✅ **Diversidade de componentes** - Tags semânticas HTML5 (header, nav, main, section, article, footer)
- ✅ **Navegação com múltiplas páginas** - 3 páginas (index.html, sobre.html, projetos.html)
- ✅ **Recurso em JavaScript** - Contador de visitas com localStorage
- ✅ **Marcação válida** - Código validado no W3C Markup Validation Service
- ✅ **README com múltiplos commits** - Documentação completa + histórico de atualizações

---

## 🚀 Tecnologias Utilizadas

### Frontend

- **HTML5**: Marcação semântica e acessível
  - Tags: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
  - Atributos: `lang`, `viewport`, `rel`, `target`

- **CSS3**: Design responsivo e moderno
  - **Grid**: Layout principal do header com navegação
  - **Flexbox**: Navegação, cards de projetos, responsividade
  - **Gradientes**: Hero section com gradient linear
  - **Media Queries**: Adaptação para dispositivos móveis

- **JavaScript (ES6+)**: Interatividade
  - `localStorage` para persistência de dados
  - `DOMContentLoaded` para execução segura
  - Manipulação do DOM com `getElementById` e `textContent`

---

## 📋 Páginas do Portfólio

### 1. **index.html** - Página Inicial
- **Hero Section**: Apresentação com gradient de fundo
- **Contador de Visitas**: JavaScript que persiste visitas entre sessões
- **Navegação**: Menu com links para as 2 páginas

**URL**: `https://seuusuario.github.io/portfolio-site/`

### 2. **sobre.html** - Página Sobre
Contém as seguintes seções:

#### 📏 Sobre Mim
Contexto geral sobre formação e entrada na área de programação.

#### 💼 Interesses Profissionais
Detalha meus 3 áreas de foco:
- **Cibersegrança**: Desenvolvimento de soluções seguras
- **Banco de Dados**: Otimização e gerenciamento de dados
- **Criação de Jogos**: Exploração de lógica de programação e criatividade

#### 🎓 Artefato Projeto 1
Descreve a disciplina acadêmica e o Artefato do meu grupo:
- Grupos de ~8 integrantes
- Simulação de desafio real do mercado de trabalho
- Desenvolvimento de **hard skills** (técnicas) e **soft skills** (comunicação, organização, trabalho em equipe)

- Artefato: Nós estamos trabalhando num jogo de perguntas e respostas para conscientização sobre relacionado ao tema mobilidade sustentável, o jogo vai ser composto de um volante feito de MDF e com comandos feitos no arduino para responder as perguntas, o player vai utilizar deste volante para responder as perguntas movendo ele para a direita e aa esquerda, nesse volante terão hastes atrás dele que irão pressionar botões para responder as perguntas que serão disponibilizadas, além de um botão no meio do volante onde seria uma buzina que também serve para responder a pergunta. A medida que o player for acertando ele vai avançando, um carrinho numa esteira também funcionando via arduino vai se mover para frente a cada pergunta acertada e a cada pergunta errada o player ira regredir.

#### 📚 Links de Estudo
Lista de **8 recursos gratuitos** cobrindo as linguagens e áreas de atuao:

| Recurso | Linguagem/Área | Plataforma |
|---------|---|----------|
| FreeCodeCamp | JavaScript | Interativa |
| MDN Web Docs | JavaScript | Documentação |
| Trybe | JavaScript | Curso em vídeo |
| Python.org | Python | Oficial |
| Asimov Academy | Python | Blog com links |
| ENAP | Cibersegrança | Curso com certificado |
| UP Cursos | Banco de Dados | Curso gratuito |
| Cursa | Desenvolvimento de Jogos (Godot) | Curso com certificado |

#### 💡 O que me inspira
Reflexão sobre o contato com computadores desde cedo e motivação para criar soluções inovadoras.

**URL**: `https://seuusuario.github.io/portfolio-site/sobre.html`

## 🎫 Design e Layout

### Cores
- **Header/Footer**: `#2c3e50` (cinza escuro)
- **Hero**: Gradient `#667eea` → `#764ba2` (roxo)
- **Cards**: `#f8f9fa` (cinza claro)
- **Hover**: `#3498db` (azul)

### Tipografia
- **Fonte**: Arial, sans-serif
- **Line Height**: 1.6
- **Espaçamento**: Consistente com `rem` e `gap`

### Responsividade
```css
@media (max-width: 768px) {
  /* Navegação em coluna */
  .nav-list { flex-direction: column; }
  /* Projetos em coluna */
  .projetos-grid { flex-direction: column; }
}
```

---

## 🔧 Funcionalidades JavaScript

### Contador de Visitas
**Arquivo**: `script.js`

```javascript
document.addEventListener('DOMContentLoaded', function() {
  const visitasEl = document.getElementById('visitas');
  if (visitasEl) {
    let visitas = localStorage.getItem('visitas') || 0;
    visitas = parseInt(visitas) + 1;
    localStorage.setItem('visitas', visitas);
    visitasEl.textContent = `Visitas: ${visitas}`;
  }
});
```

**Funcionamento**:
1. Aguarda o DOM carregar completamente
2. Recupera contador do `localStorage` (ou inicia em 0)
3. Incrementa o valor
4. Salva novamente
5. Exibe na página

**Nota**: O contador persiste entre abas e sessões no mesmo navegador/dispositivo.

---

## ✅ Validação W3C

Todos os arquivos HTML foram validados no [W3C Markup Validator](https://validator.w3.org/).

### Checklist de Validação
- ✅ HTML5 válido (sem erros de markup)
- ✅ Tags semânticas corretas
- ✅ Atributos obrigatórios presentes (`charset`, `viewport`, `lang`)
- ✅ Nenhum elemento aninhado incorretamente

**Como validar**:
1. Acesse https://validator.w3.org/
2. Cole a URL da página (ex: `https://seuusuario.github.io/portfolio-site/index.html`)
3. Clique em **Check**
4. Resultado esperado: "Document valid according to the specified schema(s)"

---

## Deploy - GitHub Pages

### Como o site está online:

1. Repositório criado como **Public**
2. Arquivos adicionados ao branch `main`
3. GitHub Pages ativado em **Settings > Pages**:
   - Source: Deploy from a branch
   - Branch: `main`
   - Folder: `/ (root)`

### URL do site publicado:
```
https://seuusuario.github.io/portfolio-site/
```

---

## Como Rodar Localmente

### Método 1: Abrir arquivo local
```bash
cd portfolio-site
# Abra index.html no navegador
```

### Método 2: Servidor local (Python)
```bash
python -m http.server 8000
# Depois acesse http://localhost:8000
```

### Método 3: Servidor local (Node.js)
```bash
npm install -g http-server
http-server
```

---

## Histórico de Commits

| Commit | Mensagem | Descrição |
|--------|----------|----------|
| 1 | `feat: adiciona estrutura inicial` | HTML, CSS, JS |
| 2 | `chore: atualiza README completo` | Documentação detalhada |

---

## Links Importantes

- **Repositório GitHub**: https://github.com/seuusuario/portfolio-site
- **Site Online**: https://seuusuario.github.io/portfolio-site/
- **W3C HTML Validator**: https://validator.w3.org/
- **W3C CSS Validator**: https://jigsaw.w3.org/css-validator/

---

## Recursos Estudados

### HTML5 Semântico
- [MDN - HTML Elements](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element)

### CSS3 - Layout
- [MDN - CSS Grid](https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_Grid_Layout)
- [MDN - Flexbox](https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_Flexible_Box_Layout)

### JavaScript
- [MDN - localStorage](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage)
- [MDN - DOMContentLoaded](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/DOMContentLoaded_event)

---

## Aprendizados

Este projeto consolidou:
- HTML5 semântico
- Layout responsivo com Grid e Flexbox
- Persistência de dados com localStorage
- Validação de código W3C
- Deploy em GitHub Pages
- Documentação de projeto com README
- Versionamento com Git e GitHub

---

## Mel horias Futuras

- [ ] Animações CSS
- [ ] Dark mode
- [ ] Formulário de contato
- [ ] Imagens dos projetos
- [ ] Seção de blog/artigos
- [ ] Otimização de performance
- [ ] PWA (Progressive Web App)

---

## Contato

Para dúvidas ou sugestões sobre o projeto, abra uma **issue** ou **pull request** no repositório.

---

## Licença

Este projeto é de código aberto e pode ser usado livremente para fins educacionais.

---

Feito com ❤️ para demonstrar habilidades em desenvolvimento web front-end.

**Última atualização**: Dezembro de 2025  
**Status**: Completo e validado
