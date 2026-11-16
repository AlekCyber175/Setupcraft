import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { colors } from '../theme/colors';

const StatBar = ({ rotulo, valor, cor, texto }) => (
  <View style={styles.container}>
    <View style={styles.labels}>
      <Text style={styles.label}>{rotulo}</Text>
      <Text style={styles.value}>{texto ?? `${valor}%`}</Text>
    </View>
    <View style={styles.track}>
      <View style={[styles.fill, { width: `${Math.min(valor, 100)}%`, backgroundColor: cor }]} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  labels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  label: {
    fontSize: 14,
    color: colors.textoPrincipal,
  },
  value: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.textoSecundario,
  },
  track: {
    height: 8,
    borderRadius: 4,
    overflow: 'hidden',
    backgroundColor: colors.superficie,
  },
  fill: {
    height: 8,
    borderRadius: 4,
  },
});

export default StatBar;
