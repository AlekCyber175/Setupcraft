import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { colors } from '../theme/colors';

const EquipmentItem = ({ equipamento }) => {
  const { nome, descricao } = equipamento;

  return (
    <View style={styles.item}>
      <View style={styles.iconBox}>
        <Ionicons name="hardware-chip-outline" size={20} color={colors.destaqueSecundario} />
      </View>
      <View style={styles.texts}>
        <Text style={styles.name}>{nome}</Text>
        <Text style={styles.description}>{descricao}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginBottom: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.borda,
    backgroundColor: colors.cartao,
  },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.superficie,
  },
  texts: {
    flex: 1,
    marginLeft: 12,
  },
  name: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.textoPrincipal,
  },
  description: {
    marginTop: 2,
    fontSize: 13,
    lineHeight: 19,
    color: colors.textoSecundario,
  },
});

export default EquipmentItem;
