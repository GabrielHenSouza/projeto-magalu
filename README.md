Magalu — demo (HTML / CSS / JS)

Descrição
--------
Projeto de demonstração de uma loja (estilo Magalu) em HTML, CSS e JavaScript puro.

Funcionalidades
--------------
- Grid de produtos renderizado dinamicamente (arquivo `js/script.js`).
- Busca com debounce, filtro por categoria e ordenação.
- Modal de produto com foco gerenciado (focus trap) e retorno de foco ao fechar.
- Carrinho lateral com persistência em `localStorage` (adicionar, aumentar, diminuir, remover, esvaziar, checkout simulado).
- Estilos responsivos e skeletons de carregamento para imagens.

Projeto Magalu — Demo (HTML / CSS / JS)

Este repositório contém um site demo (versão *frontend-only*) com HTML, CSS e JavaScript separados. É uma loja fictícia no estilo Magalu para fins de aprendizado.

Conteúdo
- `index.html` — Estrutura da página
- `style.css` — Estilos e responsividade
- `js/script.js` — Lógica do frontend: listagem de produtos, busca, filtros, ordenação e carrinho (localStorage)
- `images/` — Imagens usadas pelos produtos e background

Como rodar localmente
1. Abra um terminal na raiz do projeto.
2. Rode um servidor estático (Python):

```bash
python3 -m http.server 8000
```

3. Abra no navegador: `http://localhost:8000`

Deploy (GitHub Pages)
- Eu já criei e enviei uma branch `gh-pages` com os arquivos do site. Se o repositório for público, o site deverá estar disponível em:

	`https://GabrielHenSouza.github.io/projeto-magalu`

- Para atualizar o site no GitHub Pages, basta commitar na branch `gh-pages` (ou construir e substituir os arquivos na mesma branch) e dar push para o remoto.

Notas sobre imagens
- As imagens usadas aqui foram colocadas em `images/` e incluem cópias locais para evitar hotlinking. Se quiser trocar qualquer imagem, substitua o arquivo e atualize os caminhos em `js/script.js` quando necessário.

Contribuição
- Este é um projeto de estudo. Sinta-se à vontade para abrir issues ou enviar pull requests com melhorias (UI, acessibilidade, performance, otimização de imagens).

Licença
- Uso educacional/demonstração. Ajuste conforme necessário para respeitar licenças das imagens originais.

---
_Gerado/atualizado automaticamente pelo assistente de desenvolvimento local._

```bash
# a partir da pasta do projeto
python3 -m http.server 8000
# abra http://localhost:8000
```

Testes rápidos
-------------
- Buscar produtos pelo nome ou descrição.
- Filtrar por categoria e ordenar por preço ou nome.
- Abrir o modal (botão "Ver") e usar Tab/Shift+Tab para verificar o foco preso no modal.
- Adicionar produtos ao carrinho, verificar persistência ao recarregar a página.

Imagens
-------
As imagens dos produtos foram atualizadas para usar fotos reais via Unsplash (hotlink usando `https://source.unsplash.com/` com consultas de termos). Essas imagens são fornecidas pelo Unsplash e podem variar a cada carregamento porque a URL retorna uma imagem aleatória relacionada ao termo.

Licença / atribuição
--------------------
As imagens obtidas via Unsplash estão sob a licença do Unsplash (uso gratuito, incluindo para fins comerciais, sem necessidade de atribuição, embora a atribuição seja apreciada). Se você precisa de imagens fixas ou garantia de controle (mesmas imagens sempre), envie assets ou substitua as URLs por imagens com IDs fixos da API do Unsplash ou por arquivos locais.

Imagem de fundo
---------------
O projeto agora suporta uma imagem de fundo global definida em CSS. Por padrão ela usa `images/p4.jpg`. Para trocar a imagem de fundo, edite `style.css` e atualize a variável `--bg-image` no bloco `:root` para o caminho desejado, por exemplo:

```css
:root { --bg-image: url('images/meu-fundo.jpg'); }
```

Boas práticas:
- Use imagens otimizadas para web (JPEG/WEBP) em resoluções adequadas (por exemplo 1200x800).
- Mantenha a imagem com boa margem/área negativa para que o conteúdo sobreposto continue legível.
- Se preferir um background com paralaxe ou diferente comportamento, posso adicionar rapidamente a opção.

Licença
------
Projeto demo — sem fins comerciais. Não representa oficialmente a Magalu.

Imagens
-------
As imagens dos produtos foram atualizadas para usar fotos reais via Unsplash (hotlink usando `https://source.unsplash.com/` com consultas de termos). Essas imagens são fornecidas pelo Unsplash e podem variar a cada carregamento porque a URL retorna uma imagem aleatória relacionada ao termo.

Licença / atribuição
--------------------
As imagens obtidas via Unsplash estão sob a licença do Unsplash (uso gratuito, incluindo para fins comerciais, sem necessidade de atribuição, embora a atribuição seja apreciada). Se você precisa de imagens fixas ou garantia de controle (mesmas imagens sempre), envie assets ou substitua as URLs por imagens com IDs fixos da API do Unsplash ou por arquivos locais.

Imagem de fundo
---------------
O projeto agora suporta uma imagem de fundo global definida em CSS. Por padrão ela usa `images/p4.jpg`. Para trocar a imagem de fundo, edite `style.css` e atualize a variável `--bg-image` no bloco `:root` para o caminho desejado, por exemplo:

```css
:root { --bg-image: url('images/meu-fundo.jpg'); }
```

Boas práticas:
- Use imagens otimizadas para web (JPEG/WEBP) em resoluções adequadas (por exemplo 1200x800).
- Mantenha a imagem com boa margem/área negativa para que o conteúdo sobreposto continue legível.
- Se preferir um background com paralaxe ou diferente comportamento, posso adicionar rapidamente a opção.

Licença
------
Projeto demo — sem fins comerciais. Não representa oficialmente a Magalu.
