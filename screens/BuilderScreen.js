import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import EmptyState from '../components/EmptyState';
import PartPicker from '../components/PartPicker';
import PCCaseView from '../components/PCCaseView';
import StatBar from '../components/StatBar';
import { partes } from '../data/parts';
import { setups } from '../data/setups';
import { colors } from '../theme/colors';
import {
  calcularDesempenho,
  findParte,
  findSlot,
  gpuCabeNoGabinete,
  montagemInicial,
  resumirEnergia,
} from '../utils/montagem';

const MENSAGENS_ENERGIA = {
  ok: { texto: 'A fonte tem boa folga para esta montagem.', cor: colors.sucesso },
  justa: { texto: 'A fonte está no limite. Considere uma mais forte.', cor: colors.aviso },
  insuficiente: { texto: 'A fonte não é suficiente para esta montagem.', cor: colors.erro },
};

const BuilderScreen = ({ navigation, route }) => {
  const insets = useSafeAreaInsets();
  const { setupId } = route.params ?? {};
  const setup = setups.find((item) => item.id === setupId);
  const [selecao, setSelecao] = useState(() => montagemInicial(setupId));
  const [slotAberto, setSlotAberto] = useState(null);

  if (!setup) {
    return (
      <View style={styles.screen}>
        <EmptyState
          titulo="Setup não encontrado"
          descricao="Abra o montador a partir da tela de detalhes de um setup."
          acaoLabel="Voltar"
          onAction={() => navigation.goBack()}
        />
      </View>
    );
  }

  const gabinete = findParte('gabinete', selecao.gabinete);
  const gpu = findParte('gpu', selecao.gpu);
  const gpuCabe = gpuCabeNoGabinete(selecao);
  const energia = resumirEnergia(selecao);
  const desempenho = calcularDesempenho(selecao);
  const mensagemEnergia = MENSAGENS_ENERGIA[energia.nivel];

  const handleSelectSlot = (slotId) => {
    setSlotAberto((atual) => (atual === slotId ? null : slotId));
  };

  const handleSelectPart = (parteId) => {
    setSelecao((anterior) => ({ ...anterior, [slotAberto]: parteId }));
  };

  const handleReset = () => {
    setSelecao(montagemInicial(setupId));
    setSlotAberto(null);
  };

  const getAviso = (opcao) => {
    if (slotAberto === 'gpu' && opcao.comprimento > gabinete.maxGpu) {
      return 'Não cabe no gabinete atual.';
    }
    if (slotAberto === 'gabinete' && gpu.comprimento > opcao.maxGpu) {
      return 'A placa de vídeo atual não caberia.';
    }
    return null;
  };

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={[styles.content, { paddingBottom: insets.bottom + 24 }]}
    >
      <Text style={styles.title}>{`Montando: ${setup.nome}`}</Text>
      <Text style={styles.hint}>Toque em uma peça para trocar. O visual e os números mudam na hora.</Text>

      <PCCaseView
        selecao={selecao}
        slotAberto={slotAberto}
        onSelectSlot={handleSelectSlot}
        gpuProblem={!gpuCabe}
        fonteProblem={energia.nivel === 'insuficiente'}
      />

      {slotAberto !== null && (
        <PartPicker
          slot={findSlot(slotAberto)}
          opcoes={partes[slotAberto]}
          selecionadoId={selecao[slotAberto]}
          onSelect={handleSelectPart}
          onClose={() => setSlotAberto(null)}
          getAviso={getAviso}
        />
      )}

      {!gpuCabe && (
        <View style={styles.alert}>
          <Text style={styles.alertText}>
            {`A placa de vídeo (${gpu.comprimento} mm) não cabe no gabinete (limite de ${gabinete.maxGpu} mm). Troque uma das duas peças.`}
          </Text>
        </View>
      )}

      <Text style={styles.sectionTitle}>Resumo da montagem</Text>
      <StatBar
        rotulo="Consumo estimado"
        valor={energia.porcentagem}
        cor={mensagemEnergia.cor}
        texto={`${energia.consumo} W de ${energia.capacidade} W`}
      />
      <Text style={[styles.energyMessage, { color: mensagemEnergia.cor }]}>{mensagemEnergia.texto}</Text>

      <StatBar rotulo="Jogos" valor={desempenho.jogos} cor={colors.destaque} />
      <StatBar rotulo="Trabalho e estudo" valor={desempenho.trabalho} cor={colors.destaqueSecundario} />
      <StatBar rotulo="Silêncio" valor={desempenho.silencio} cor={colors.favorito} />

      <Pressable
        onPress={handleReset}
        accessibilityRole="button"
        style={({ pressed }) => [styles.resetButton, pressed && styles.pressed]}
      >
        <Text style={styles.resetLabel}>Restaurar montagem original</Text>
      </Pressable>

      <Text style={styles.disclaimer}>
        As peças são genéricas e ilustrativas, sem modelos, preços ou medidas reais. Os números são uma
        estimativa simples para fins de demonstração.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.fundo,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.textoPrincipal,
  },
  hint: {
    marginTop: 4,
    marginBottom: 16,
    fontSize: 14,
    lineHeight: 20,
    color: colors.textoSecundario,
  },
  alert: {
    marginTop: 16,
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.erro,
    backgroundColor: colors.cartao,
  },
  alertText: {
    fontSize: 14,
    lineHeight: 20,
    color: colors.erro,
  },
  sectionTitle: {
    marginTop: 24,
    marginBottom: 12,
    fontSize: 18,
    fontWeight: '700',
    color: colors.textoPrincipal,
  },
  energyMessage: {
    marginTop: -4,
    marginBottom: 16,
    fontSize: 13,
  },
  resetButton: {
    marginTop: 8,
    minHeight: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.destaque,
  },
  pressed: {
    opacity: 0.8,
  },
  resetLabel: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.textoPrincipal,
  },
  disclaimer: {
    marginTop: 16,
    fontSize: 12,
    lineHeight: 18,
    color: colors.textoSecundario,
  },
});

export default BuilderScreen;
