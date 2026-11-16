import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { colors } from '../theme/colors';

const SlotTile = ({ slot, parte, selected, problem, onPress, style, children }) => (
  <Pressable
    onPress={onPress}
    accessibilityRole="button"
    accessibilityLabel={`${slot.nome}: ${parte.nome}. Toque para trocar`}
    style={({ pressed }) => [
      styles.tile,
      selected && styles.selected,
      problem && styles.problem,
      pressed && styles.pressed,
      style,
    ]}
  >
    <View style={styles.header}>
      <Ionicons
        name={problem ? 'warning-outline' : slot.icone}
        size={18}
        color={problem ? colors.erro : colors.destaqueSecundario}
      />
      <View style={styles.texts}>
        <Text style={styles.slotName}>{slot.nome}</Text>
        <Text style={styles.partName} numberOfLines={1}>
          {parte.nome}
        </Text>
      </View>
    </View>
    {children}
  </Pressable>
);

const styles = StyleSheet.create({
  tile: {
    minHeight: 56,
    padding: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.borda,
    backgroundColor: colors.cartao,
  },
  selected: {
    borderColor: colors.destaque,
    borderWidth: 2,
  },
  problem: {
    borderColor: colors.erro,
    borderWidth: 2,
  },
  pressed: {
    opacity: 0.8,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  texts: {
    flex: 1,
    marginLeft: 8,
  },
  slotName: {
    fontSize: 11,
    color: colors.textoSecundario,
  },
  partName: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.textoPrincipal,
  },
});

export default SlotTile;
