// Desafio 1 — Minha Loja: Simulador de Compras
// Os preços e a regra de desconto permanecem iguais à versão submetida.
const produtos = [
  { nome: 'Kit Body Maria Clara', precoCentavos: 5990 },
  { nome: 'Manta Soninho', precoCentavos: 7990 },
  { nome: 'Kit Primeiros Cuidados', precoCentavos: 4990 },
  { nome: 'Ursinho de Pelúcia', precoCentavos: 3990 }
];
const reais = centavos => (centavos / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
function simularCompra() {
  let subtotal = 0;
  const itens = [];
  for (const produto of produtos) {
    const resposta = prompt(`Quantas unidades de ${produto.nome} (${reais(produto.precoCentavos)}) deseja comprar?\nDigite 0 para não incluir.`);
    if (resposta === null) { alert('Simulação cancelada.'); return; }
    const quantidade = Number(resposta);
    if (resposta.trim() === '' || !Number.isSafeInteger(quantidade) || quantidade < 0) {
      alert('Quantidade inválida. Informe um número inteiro igual ou maior que zero.'); return;
    }
    if (quantidade > 0) {
      const valor = quantidade * produto.precoCentavos;
      if (!Number.isSafeInteger(valor) || !Number.isSafeInteger(subtotal + valor)) {
        alert('Quantidade muito alta. Tente novamente com valores menores.'); return;
      }
      subtotal += valor;
      itens.push(`${produto.nome}: ${quantidade} × ${reais(produto.precoCentavos)} = ${reais(valor)}`);
    }
  }
  if (!itens.length) { alert('Nenhum produto selecionado. Tente novamente!'); return; }
  const desconto = subtotal >= 15000 ? Math.round(subtotal * 0.10) : 0;
  const total = subtotal - desconto;
  alert(`MARIA CLARA BABY — RESUMO DA COMPRA\n\n${itens.join('\n')}\n\nSubtotal: ${reais(subtotal)}\nDesconto (10% a partir de R$ 150,00): ${reais(desconto)}\nTOTAL: ${reais(total)}\n\nLoja fictícia — nenhuma compra real foi realizada.`);
}
document.getElementById('simulate').addEventListener('click', simularCompra);
