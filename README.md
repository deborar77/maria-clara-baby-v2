# Maria Clara Baby 2.0 — Boutique Infantil

**Autora:** Débora Rodrigues dos Santos  
**Projeto:** Desafio 1 — Minha Loja: Simulador de Compras (versão visual alternativa)

Esta é uma **versão 2.0 independente** da loja fictícia Maria Clara Baby, preparada para comparação visual. **Não substitui automaticamente a versão já submetida** na plataforma Mais Robotic.

## Como executar

1. Extraia o ZIP.
2. Abra `index.html` no Chrome ou Edge.
3. Clique em **Simular compra** e informe a quantidade de cada produto.
4. Digite `0` para ignorar um produto. O programa apresenta um resumo em `alert()`.

Não é necessário instalar programas nem servidor. As ilustrações SVG estão em `assets/`.

## Tecnologias e arquitetura

- **HTML5** para estrutura semântica e acessível.
- **CSS3** para a nova identidade visual responsiva, com cartões, tipografia e layout.
- **JavaScript** para a simulação usando obrigatoriamente `prompt()`, `Number()` e `alert()`.
- Arquivos separados para facilitar manutenção.

## Produtos

| Produto | Preço |
|---|---:|
| Kit Body Maria Clara | R$ 59,90 |
| Manta Soninho | R$ 79,90 |
| Kit Primeiros Cuidados | R$ 49,90 |
| Ursinho de Pelúcia | R$ 39,90 |

**Desconto:** 10% sobre compras com subtotal a partir de R$ 150,00 (inclusive).

## Testes sugeridos

| Entrada | Resultado esperado |
|---|---|
| 1 Kit Body, demais 0 | R$ 59,90, sem desconto |
| 2 Mantas, demais 0 | R$ 159,80 subtotal; R$ 15,98 desconto; R$ 143,82 total |
| Todos 0 | Nenhum produto selecionado |
| Quantidade negativa, decimal, vazia ou texto | Mensagem de quantidade inválida |
| Cancelar uma pergunta | Simulação cancelada |

**Nota:** a lógica de simulação foi preservada conceitualmente e a sintaxe deve ser validada no navegador antes de qualquer publicação. Este projeto é uma loja fictícia, sem pagamentos reais.

## Uso de IA

Esta versão alternativa foi produzida com apoio de inteligência artificial na implementação do HTML, CSS, JavaScript e ilustrações SVG. Recomenda-se revisar, compreender e testar o código antes de apresentá-lo como trabalho acadêmico.
