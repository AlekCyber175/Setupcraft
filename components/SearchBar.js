import React from 'react';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { colors } from '../theme/colors';

const SearchBar = ({ value, onChangeText, onClear, placeholder = 'Buscar setups' }) => (
  <View style={styles.container}>
    <Ionicons name="search" size={20} color={colors.textoSecundario} />
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={colors.textoSecundario}
      autoCorrect={false}
      returnKeyType="search"
    />
    {value.length > 0 && (
      <Pressable onPress={onClear} hitSlop={12} accessibilityRole="button" accessibilityLabel="Limpar pesquisa">
        <Ionicons name="close-circle" size={20} color={colors.textoSecundario} />
      </Pressable>
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 48,
    paddingHorizontal: 14,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.borda,
    backgroundColor: colors.superficie,
  },
  input: {
    flex: 1,
    marginHorizontal: 10,
    paddingVertical: 10,
    fontSize: 16,
    color: colors.textoPrincipal,
  },
});

export default SearchBar;
