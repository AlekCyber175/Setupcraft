import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { colors } from '../theme/colors';

const FavoriteButton = ({ active, onPress, showLabel = false, style }) => (
  <Pressable
    onPress={onPress}
    hitSlop={8}
    accessibilityRole="button"
    accessibilityLabel={active ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
    style={({ pressed }) => [
      styles.button,
      showLabel && styles.buttonWithLabel,
      pressed && styles.pressed,
      style,
    ]}
  >
    <Ionicons
      name={active ? 'heart' : 'heart-outline'}
      size={22}
      color={active ? colors.favorito : colors.textoPrincipal}
    />
    {showLabel && (
      <Text style={[styles.label, active && styles.labelActive]}>
        {active ? 'Favoritado' : 'Favoritar'}
      </Text>
    )}
  </Pressable>
);

const styles = StyleSheet.create({
  button: {
    minWidth: 44,
    minHeight: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(11, 13, 18, 0.65)',
  },
  buttonWithLabel: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
    backgroundColor: colors.superficie,
    borderWidth: 1,
    borderColor: colors.borda,
  },
  pressed: {
    opacity: 0.7,
  },
  label: {
    marginLeft: 8,
    fontSize: 15,
    fontWeight: '600',
    color: colors.textoPrincipal,
  },
  labelActive: {
    color: colors.favorito,
  },
});

export default FavoriteButton;
