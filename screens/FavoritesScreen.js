import React from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import EmptyState from '../components/EmptyState';
import SetupCard from '../components/SetupCard';
import { setups } from '../data/setups';
import { colors } from '../theme/colors';

const FavoritesScreen = ({ navigation, favorites, onToggleFavorite }) => {
  const insets = useSafeAreaInsets();
  const favoriteSetups = setups.filter((setup) => favorites.includes(setup.id));

  const handleOpenSetup = (setupId) => {
    navigation.navigate('SetupDetails', { setupId });
  };

  return (
    <FlatList
      style={styles.screen}
      contentContainerStyle={[styles.content, { paddingBottom: insets.bottom + 24 }]}
      data={favoriteSetups}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <SetupCard
          setup={item}
          isFavorite
          onPress={handleOpenSetup}
          onToggleFavorite={onToggleFavorite}
        />
      )}
      ListHeaderComponent={
        favoriteSetups.length > 0 ? (
          <Text style={styles.counter}>{`${favoriteSetups.length} setup(s) salvo(s)`}</Text>
        ) : null
      }
      ListEmptyComponent={
        <EmptyState
          icone="heart-outline"
          titulo="Nada por aqui ainda"
          descricao="Você ainda não salvou nenhum setup. Explore o catálogo e encontre suas inspirações favoritas."
          acaoLabel="Explorar catálogo"
          onAction={() => navigation.navigate('Home')}
        />
      }
    />
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
  counter: {
    marginBottom: 12,
    fontSize: 14,
    color: colors.textoSecundario,
  },
});

export default FavoritesScreen;
