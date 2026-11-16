import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { colors } from '../theme/colors';

const FavoritesBadgeButton = ({ count, onPress }) => (
  <Pressable
    onPress={onPress}
    hitSlop={8}
    accessibilityRole="button"
    accessibilityLabel={`Abrir meus favoritos, ${count} salvos`}
    style={({ pressed }) => [styles.button, pressed && styles.pressed]}
  >
    <Ionicons name="heart" size={22} color={colors.favorito} />
    {count > 0 && (
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{count}</Text>
      </View>
    )}
  </Pressable>
);

const styles = StyleSheet.create({
  button: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.borda,
    backgroundColor: colors.superficie,
  },
  pressed: {
    opacity: 0.7,
  },
  badge: {
    position: 'absolute',
    top: -2,
    right: -2,
    minWidth: 20,
    height: 20,
    paddingHorizontal: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.destaque,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.textoPrincipal,
  },
});

export default FavoritesBadgeButton;
