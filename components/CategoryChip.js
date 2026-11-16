import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { colors } from '../theme/colors';

const CategoryChip = ({ categoria, selected, onSelect }) => (
  <Pressable
    onPress={() => onSelect(categoria.id)}
    accessibilityRole="button"
    accessibilityState={{ selected }}
    style={({ pressed }) => [styles.chip, selected && styles.chipSelected, pressed && styles.pressed]}
  >
    <Ionicons
      name={categoria.icone}
      size={16}
      color={selected ? colors.textoPrincipal : colors.textoSecundario}
    />
    <Text style={[styles.label, selected && styles.labelSelected]}>{categoria.nome}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 44,
    paddingHorizontal: 16,
    marginRight: 8,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: colors.borda,
    backgroundColor: colors.superficie,
  },
  chipSelected: {
    backgroundColor: colors.destaque,
    borderColor: colors.destaque,
  },
  pressed: {
    opacity: 0.8,
  },
  label: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: '600',
    color: colors.textoSecundario,
  },
  labelSelected: {
    color: colors.textoPrincipal,
  },
});

export default CategoryChip;
