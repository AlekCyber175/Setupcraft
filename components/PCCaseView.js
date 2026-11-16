import React from 'react';
import { StyleSheet, View } from 'react-native';

import { findParte, findSlot } from '../utils/montagem';
import SlotTile from './SlotTile';

const PCCaseView = ({ selecao, slotAberto, onSelectSlot, gpuProblem, fonteProblem }) => {
  const parteDe = (slotId) => findParte(slotId, selecao[slotId]);
  const propsDe = (slotId) => ({
    slot: findSlot(slotId),
    parte: parteDe(slotId),
    selected: slotAberto === slotId,
    onPress: () => onSelectSlot(slotId),
  });

  const cor = parteDe('iluminacao').cor;
  const gpu = parteDe('gpu');

  return (
    <View style={[styles.frame, { borderColor: cor }]}>
      <SlotTile {...propsDe('gabinete')} />

      <View style={styles.row}>
        <SlotTile {...propsDe('cpu')} style={styles.half} />
        <SlotTile {...propsDe('cooler')} style={styles.half}>
          <View style={styles.fanRow}>
            <View style={[styles.fan, styles.fanSmall, { borderColor: cor }]} />
          </View>
        </SlotTile>
      </View>

      <SlotTile {...propsDe('ram')}>
        <View style={styles.sticks}>
          {Array.from({ length: parteDe('ram').modulos }, (_, indice) => (
            <View key={indice} style={[styles.stick, { backgroundColor: cor }]} />
          ))}
        </View>
      </SlotTile>

      <SlotTile {...propsDe('gpu')} problem={gpuProblem}>
        {gpu.comprimento > 0 && (
          <View style={styles.fanRow}>
            <View style={[styles.fan, { borderColor: cor }]} />
            <View style={[styles.fan, { borderColor: cor }]} />
          </View>
        )}
      </SlotTile>

      <View style={styles.row}>
        <SlotTile {...propsDe('armazenamento')} style={styles.half} />
        <SlotTile {...propsDe('fonte')} style={styles.half} problem={fonteProblem} />
      </View>

      <SlotTile {...propsDe('iluminacao')}>
        <View style={[styles.led, { backgroundColor: cor }]} />
      </SlotTile>
    </View>
  );
};

const styles = StyleSheet.create({
  frame: {
    padding: 12,
    gap: 8,
    borderRadius: 20,
    borderWidth: 2,
    backgroundColor: '#0F131B',
  },
  row: {
    flexDirection: 'row',
    gap: 8,
  },
  half: {
    flex: 1,
  },
  fanRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 8,
  },
  fan: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 3,
  },
  fanSmall: {
    width: 26,
    height: 26,
    borderRadius: 13,
  },
  sticks: {
    flexDirection: 'row',
    gap: 6,
    marginTop: 8,
  },
  stick: {
    width: 10,
    height: 28,
    borderRadius: 3,
  },
  led: {
    height: 6,
    marginTop: 8,
    borderRadius: 3,
  },
});

export default PCCaseView;
