import { montagemPadrao, montagensIniciais, partes, POTENCIA_BASE, slots } from '../data/parts';

const CHAVES_DESEMPENHO = ['jogos', 'trabalho', 'silencio'];

export const findSlot = (slotId) => slots.find((slot) => slot.id === slotId);

export const findParte = (slotId, parteId) => partes[slotId].find((parte) => parte.id === parteId);

export const montagemInicial = (setupId) => ({
  ...(montagensIniciais[setupId] ?? montagemPadrao),
});

export const calcularConsumo = (selecao) =>
  slots.reduce(
    (total, slot) => total + (findParte(slot.id, selecao[slot.id])?.potencia ?? 0),
    POTENCIA_BASE
  );

export const calcularDesempenho = (selecao) =>
  CHAVES_DESEMPENHO.reduce((resultado, chave) => {
    const pontos = slots.reduce(
      (total, slot) => total + (findParte(slot.id, selecao[slot.id])?.[chave] ?? 0),
      0
    );
    const maximo = slots.reduce(
      (total, slot) => total + Math.max(...partes[slot.id].map((parte) => parte[chave] ?? 0)),
      0
    );

    return { ...resultado, [chave]: Math.round((pontos / maximo) * 100) };
  }, {});

export const resumirEnergia = (selecao) => {
  const consumo = calcularConsumo(selecao);
  const capacidade = findParte('fonte', selecao.fonte).capacidade;
  const porcentagem = Math.round((consumo / capacidade) * 100);

  if (consumo > capacidade) {
    return { consumo, capacidade, porcentagem, nivel: 'insuficiente' };
  }

  return { consumo, capacidade, porcentagem, nivel: porcentagem > 80 ? 'justa' : 'ok' };
};

export const gpuCabeNoGabinete = (selecao) =>
  findParte('gpu', selecao.gpu).comprimento <= findParte('gabinete', selecao.gabinete).maxGpu;
