import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { colors } from '../theme/colors';

const EmptyState = ({ icone = 'sad-outline', titulo, descricao, acaoLabel, onAction }) => (
  <View style={styles.container}>
    <Ionicons name={icone} size={48} color={colors.destaque} />
    <Text style={styles.title}>{titulo}</Text>
    <Text style={styles.description}>{descricao}</Text>
    {acaoLabel && onAction && (
      <Pressable
        onPress={onAction}
        accessibilityRole="button"
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      >
        <Text style={styles.buttonLabel}>{acaoLabel}</Text>
      </Pressable>
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 24,
  },
  title: {
    marginTop: 16,
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    color: colors.textoPrincipal,
  },
  description: {
    marginTop: 8,
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
    color: colors.textoSecundario,
  },
  button: {
    marginTop: 20,
    minHeight: 48,
    paddingHorizontal: 24,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.destaque,
  },
  pressed: {
    opacity: 0.8,
  },
  buttonLabel: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.textoPrincipal,
  },
});

export default EmptyState;
