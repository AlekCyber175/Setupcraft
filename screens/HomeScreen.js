import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import CategoryChip from '../components/CategoryChip';
import EmptyState from '../components/EmptyState';
import FavoritesBadgeButton from '../components/FavoritesBadgeButton';
import SearchBar from '../components/SearchBar';
import SetupCard from '../components/SetupCard';
import { categorias, getNomeCategoria, setups } from '../data/setups';
import { colors } from '../theme/colors';

const categoriasComTodas = [{ id: null, nome: 'Todas', icone: 'grid-outline' }, ...categorias];

const normalizar = (texto) =>
  texto
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();

const HomeScreen = ({ navigation, favorites, onToggleFavorite }) => {
  const insets = useSafeAreaInsets();
  const [searchText, setSearchText] = useState('');
  const [appliedSearch, setAppliedSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAppliedSearch(normalizar(searchText));
    }, 300);

    return () => clearTimeout(timer);
  }, [searchText]);

  const filteredSetups = setups.filter((setup) => {
    const matchesCategory = selectedCategory === null || setup.categoria === selectedCategory;
    const searchableText = normalizar(
      [setup.nome, getNomeCategoria(setup.categoria), setup.descricao, ...setup.caracteristicas].join(' ')
    );

    return matchesCategory && searchableText.includes(appliedSearch);
  });

  const featuredSetups = setups.filter((setup) => setup.destaque);
  const isFiltering = appliedSearch !== '' || selectedCategory !== null;

  const handleOpenSetup = (setupId) => {
    navigation.navigate('SetupDetails', { setupId });
  };

  const handleClearFilters = () => {
    setSearchText('');
    setAppliedSearch('');
    setSelectedCategory(null);
  };

  const renderSetup = ({ item }) => (
    <SetupCard
      setup={item}
      isFavorite={favorites.includes(item.id)}
      onPress={handleOpenSetup}
      onToggleFavorite={onToggleFavorite}
    />
  );

  const header = (
    <View>
      <View style={styles.brandRow}>
        <View style={styles.logo}>
          <Ionicons name="hardware-chip" size={26} color={colors.textoPrincipal} />
        </View>
        <View style={styles.brandTexts}>
          <Text style={styles.brand}>SetupCraft</Text>
          <Text style={styles.slogan}>Inspire-se. Monte. Evolua.</Text>
        </View>
        <FavoritesBadgeButton count={favorites.length} onPress={() => navigation.navigate('Favorites')} />
      </View>

      <Text style={styles.headline}>Encontre o setup ideal para você</Text>

      <SearchBar
        value={searchText}
        onChangeText={setSearchText}
        onClear={() => setSearchText('')}
        placeholder="Buscar por nome, categoria ou característica"
      />

      <Text style={styles.sectionTitle}>Categorias</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} keyboardShouldPersistTaps="handled">
        {categoriasComTodas.map((categoria) => (
          <CategoryChip
            key={String(categoria.id)}
            categoria={categoria}
            selected={selectedCategory === categoria.id}
            onSelect={setSelectedCategory}
          />
        ))}
      </ScrollView>

      {!isFiltering && (
        <View>
          <Text style={styles.sectionTitle}>Em destaque</Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={featuredSetups}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <SetupCard
                compact
                setup={item}
                isFavorite={favorites.includes(item.id)}
                onPress={handleOpenSetup}
                onToggleFavorite={onToggleFavorite}
              />
            )}
          />
        </View>
      )}

      <Text style={styles.sectionTitle}>
        {isFiltering ? `${filteredSetups.length} resultado(s)` : 'Todos os setups'}
      </Text>
    </View>
  );

  return (
    <FlatList
      style={styles.screen}
      contentContainerStyle={[
        styles.content,
        { paddingTop: insets.top + 12, paddingBottom: insets.bottom + 24 },
      ]}
      data={filteredSetups}
      keyExtractor={(item) => item.id}
      renderItem={renderSetup}
      ListHeaderComponent={header}
      ListEmptyComponent={
        <EmptyState
          icone="search-outline"
          titulo="Nenhum setup encontrado"
          descricao="Tente outro termo de busca ou escolha outra categoria."
          acaoLabel="Limpar filtros"
          onAction={handleClearFilters}
        />
      }
      keyboardShouldPersistTaps="handled"
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.fundo,
  },
  content: {
    paddingHorizontal: 16,
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 48,
    height: 48,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.destaque,
  },
  brandTexts: {
    flex: 1,
    marginLeft: 12,
  },
  brand: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.textoPrincipal,
  },
  slogan: {
    fontSize: 13,
    color: colors.destaqueSecundario,
  },
  headline: {
    marginBottom: 16,
    fontSize: 26,
    fontWeight: '700',
    lineHeight: 32,
    color: colors.textoPrincipal,
  },
  sectionTitle: {
    marginTop: 24,
    marginBottom: 12,
    fontSize: 18,
    fontWeight: '700',
    color: colors.textoPrincipal,
  },
});

export default HomeScreen;
