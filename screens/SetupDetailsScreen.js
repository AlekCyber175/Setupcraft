import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import EmptyState from '../components/EmptyState';
import EquipmentItem from '../components/EquipmentItem';
import FavoriteButton from '../components/FavoriteButton';
import SetupCover from '../components/SetupCover';
import { getNomeCategoria, setups } from '../data/setups';
import { colors } from '../theme/colors';

const SetupDetailsScreen = ({ navigation, route, favorites, onToggleFavorite }) => {
  const insets = useSafeAreaInsets();
  const { setupId } = route.params ?? {};
  const setup = setups.find((item) => item.id === setupId);

  if (!setup) {
    return (
      <View style={styles.screen}>
        <EmptyState
          titulo="Setup não encontrado"
          descricao="Não existe um setup com esse identificador no catálogo."
          acaoLabel="Voltar"
          onAction={() => navigation.goBack()}
        />
      </View>
    );
  }

  const { nome, categoria, descricao, finalidade, icone, cor, equipamentos, caracteristicas } = setup;

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={[styles.content, { paddingBottom: insets.bottom + 24 }]}
    >
      <SetupCover icone={icone} cor={cor} altura={200} />
      <Text style={styles.caption}>Capa ilustrativa</Text>

      <View style={styles.body}>
        <Text style={styles.category}>{getNomeCategoria(categoria)}</Text>
        <Text style={styles.title}>{nome}</Text>
        <FavoriteButton
          showLabel
          active={favorites.includes(setup.id)}
          onPress={() => onToggleFavorite(setup.id)}
        />

        <Text style={styles.description}>{descricao}</Text>

        <Text style={styles.sectionTitle}>Finalidade</Text>
        <Text style={styles.text}>{finalidade}</Text>

        <Text style={styles.sectionTitle}>Características</Text>
        <View style={styles.tags}>
          {caracteristicas.map((item) => (
            <View key={item} style={styles.tag}>
              <Text style={styles.tagText}>{item}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Equipamentos</Text>
        {equipamentos.map((equipamento) => (
          <EquipmentItem key={equipamento.nome} equipamento={equipamento} />
        ))}

        <Pressable
          onPress={() => navigation.navigate('Builder', { setupId: setup.id })}
          accessibilityRole="button"
          style={({ pressed }) => [styles.builderButton, pressed && styles.pressed]}
        >
          <Ionicons name="construct-outline" size={20} color={colors.destaqueSecundario} />
          <Text style={styles.builderLabel}>Montar este setup</Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.goBack()}
          accessibilityRole="button"
          style={({ pressed }) => [styles.backButton, pressed && styles.pressed]}
        >
          <Text style={styles.backLabel}>Voltar ao catálogo</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.fundo,
  },
  content: {
    flexGrow: 1,
  },
  caption: {
    paddingHorizontal: 16,
    paddingTop: 6,
    fontSize: 12,
    color: colors.textoSecundario,
  },
  body: {
    padding: 16,
  },
  category: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.destaqueSecundario,
  },
  title: {
    marginTop: 4,
    marginBottom: 12,
    fontSize: 28,
    fontWeight: '800',
    color: colors.textoPrincipal,
  },
  description: {
    marginTop: 16,
    fontSize: 16,
    lineHeight: 24,
    color: colors.textoPrincipal,
  },
  sectionTitle: {
    marginTop: 24,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: '700',
    color: colors.textoPrincipal,
  },
  text: {
    fontSize: 15,
    lineHeight: 22,
    color: colors.textoSecundario,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    marginRight: 8,
    marginBottom: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.borda,
    backgroundColor: colors.superficie,
  },
  tagText: {
    fontSize: 13,
    color: colors.textoPrincipal,
  },
  builderButton: {
    marginTop: 24,
    minHeight: 48,
    borderRadius: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.destaqueSecundario,
  },
  builderLabel: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '700',
    color: colors.destaqueSecundario,
  },
  backButton: {
    marginTop: 12,
    minHeight: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.destaque,
  },
  pressed: {
    opacity: 0.8,
  },
  backLabel: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.textoPrincipal,
  },
});

export default SetupDetailsScreen;
