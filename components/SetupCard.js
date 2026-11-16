import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { getNomeCategoria } from '../data/setups';
import { colors } from '../theme/colors';
import FavoriteButton from './FavoriteButton';
import SetupCover from './SetupCover';

const SetupCard = ({ setup, isFavorite, onPress, onToggleFavorite, compact = false }) => {
  const { id, nome, categoria, descricao, icone, cor } = setup;

  return (
    <Pressable
      onPress={() => onPress(id)}
      accessibilityRole="button"
      accessibilityLabel={`Abrir detalhes de ${nome}`}
      style={({ pressed }) => [styles.card, compact && styles.compact, pressed && styles.pressed]}
    >
      <View>
        <SetupCover icone={icone} cor={cor} altura={compact ? 110 : 130} />
        <FavoriteButton
          active={isFavorite}
          onPress={() => onToggleFavorite(id)}
          style={styles.favorite}
        />
      </View>
      <View style={styles.body}>
        <Text style={styles.category}>{getNomeCategoria(categoria)}</Text>
        <Text style={styles.title} numberOfLines={1}>
          {nome}
        </Text>
        <Text style={styles.description} numberOfLines={2}>
          {descricao}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.cartao,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.borda,
    overflow: 'hidden',
    marginBottom: 16,
  },
  compact: {
    width: 260,
    marginRight: 12,
    marginBottom: 0,
  },
  pressed: {
    opacity: 0.85,
  },
  favorite: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
  body: {
    padding: 14,
  },
  category: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.destaqueSecundario,
    marginBottom: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.textoPrincipal,
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    color: colors.textoSecundario,
  },
});

export default SetupCard;
