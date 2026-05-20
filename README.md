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

Como rodar
---------
Recomendado usar um servidor local simples para evitar problemas com carregamento de imagens externas:

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

Observações e próximos passos
---------------------------
- As imagens atualmente vêm de `https://picsum.photos/` (placeholders). Para imagens reais, substitua as URLs em `js/script.js` ou coloque imagens locais e ajuste os caminhos.
- Melhorias possíveis: rota/SPA para página de produto, sincronização do carrinho com backend, autenticação, testes automatizados (Jest/Playwright), melhorias de acessibilidade (aria-live refinado, revisão de compatibilidade com leitores de tela).

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
