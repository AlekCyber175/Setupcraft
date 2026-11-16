import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { colors } from '../theme/colors';

const SetupCover = ({ icone, cor, altura = 140 }) => (
  <View style={[styles.cover, { backgroundColor: cor, height: altura }]}>
    <View style={[styles.circle, styles.circleLarge]} />
    <View style={[styles.circle, styles.circleSmall]} />
    <Ionicons name={icone} size={Math.round(altura * 0.4)} color={colors.textoPrincipal} />
  </View>
);

const styles = StyleSheet.create({
  cover: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  circle: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
  },
  circleLarge: {
    width: 160,
    height: 160,
    borderRadius: 80,
    right: -30,
    top: -40,
  },
  circleSmall: {
    width: 90,
    height: 90,
    borderRadius: 45,
    left: 20,
    bottom: -30,
  },
});

export default SetupCover;
