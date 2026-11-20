# Funil Cash Machine — Viral | BusinessUp Hub

Landing page estática de conversão para o produto digital Funil Cash Machine — Viral, preço informado de R$ 3,90.

## Arquivos
- `index.html`: página principal.
- `styles.css`: identidade visual, layout e responsividade.
- `script.js`: configuração centralizada de checkout, ano do rodapé e pontos opcionais de analytics.
- `robots.txt`: orientação básica para crawlers.
- `sitemap.xml`: placeholder para o domínio final.

## Checkout
O link está centralizado no `script.js`:
`https://go.hotmart.com/R108585614Y`

Também há hrefs de fallback no HTML para que CTAs continuem funcionando sem JavaScript. Se alterar o checkout, atualize a constante no `script.js` e os links do HTML.

## Deploy — GitHub + Vercel
1. Extraia o ZIP.
2. Envie os arquivos diretamente para a raiz de um repositório GitHub.
3. No Vercel, importe o repositório.
4. Framework Preset: Other.
5. Build Command: deixe vazio.
6. Output Directory: `.` (raiz).
7. Deploy.

## SEO
- Meta title, description, Open Graph e Twitter Cards já estão definidos.
- Atualize canonical, sitemap e Open Graph URL quando o domínio estiver definido.
- O sitemap atual é um placeholder e não deve ser enviado sem substituir o domínio.
- O conteúdo principal está disponível no HTML para indexação sem depender de JavaScript.

## Analytics
IDs não foram fornecidos. Há comentários no `script.js` para adicionar eventos de CTA e FAQ via dataLayer ou Meta Pixel. Não há trackers ativos por padrão.

## Personalização
- Cores da marca: lime `#A6FF00`, navy `#0B1320`, branco `#F5F7FA`, slate `#94A3B8`.
- Ajuste textos, preço, links e metadados em `index.html`.
- Atualize a constante `CHECKOUT_URL` em `script.js` e os hrefs do HTML se o checkout mudar.
