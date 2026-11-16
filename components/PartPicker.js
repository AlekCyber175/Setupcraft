import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { colors } from '../theme/colors';

const getDetalhe = (opcao) => {
  if (opcao.capacidade) {
    return `Capacidade: ${opcao.capacidade} W`;
  }

  return opcao.potencia > 0 ? `Consumo: ${opcao.potencia} W` : null;
};

const PartPicker = ({ slot, opcoes, selecionadoId, onSelect, onClose, getAviso }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.title}>{`Escolha: ${slot.nome}`}</Text>
      <Pressable onPress={onClose} hitSlop={12} accessibilityRole="button" accessibilityLabel="Fechar lista de peças">
        <Ionicons name="close" size={24} color={colors.textoSecundario} />
      </Pressable>
    </View>

    {opcoes.map((opcao) => {
      const selecionado = opcao.id === selecionadoId;
      const aviso = getAviso(opcao);
      const detalhe = getDetalhe(opcao);

      return (
        <Pressable
          key={opcao.id}
          onPress={() => onSelect(opcao.id)}
          accessibilityRole="button"
          style={({ pressed }) => [styles.option, selecionado && styles.optionSelected, pressed && styles.pressed]}
        >
          <View style={styles.optionTexts}>
            <Text style={styles.optionName}>{opcao.nome}</Text>
            <Text style={styles.optionDescription}>{opcao.descricao}</Text>
            {detalhe && <Text style={styles.detail}>{detalhe}</Text>}
            {aviso && <Text style={styles.warning}>{aviso}</Text>}
          </View>
          {selecionado && <Ionicons name="checkmark-circle" size={22} color={colors.sucesso} />}
        </Pressable>
      );
    })}
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    padding: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.destaque,
    backgroundColor: colors.superficie,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.textoPrincipal,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginTop: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.borda,
    backgroundColor: colors.cartao,
  },
  optionSelected: {
    borderColor: colors.sucesso,
  },
  pressed: {
    opacity: 0.8,
  },
  optionTexts: {
    flex: 1,
    marginRight: 8,
  },
  optionName: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.textoPrincipal,
  },
  optionDescription: {
    marginTop: 2,
    fontSize: 13,
    lineHeight: 19,
    color: colors.textoSecundario,
  },
  detail: {
    marginTop: 4,
    fontSize: 12,
    color: colors.destaqueSecundario,
  },
  warning: {
    marginTop: 4,
    fontSize: 12,
    fontWeight: '600',
    color: colors.erro,
  },
});

export default PartPicker;
