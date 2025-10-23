import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Cores } from '../constants/colors';
import { Skin } from '../constants/data';

type SkinCardProps = {
  skin: Skin;
};

export const SkinCard = ({ skin }: SkinCardProps) => {
  return (
    <View style={styles.skinCard}>
      <Image source={{ uri: skin.imageUrl }} style={styles.skinPreview} />
      <View style={styles.skinInfo}>
        <Text style={styles.skinNome}>{skin.nome}</Text>
        <Text style={styles.skinRaridade}>{skin.raridade}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  skinCard: {
    backgroundColor: Cores.fundoCard,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  skinPreview: {
    width: 180,
    height: 100,
    borderRadius: 8,
    marginRight: 16,
    backgroundColor: '#555',
  },
  skinInfo: {
    flex: 1,
  },
  skinNome: {
    fontSize: 18,
    fontWeight: '600',
    color: Cores.textoPrincipal,
  },
  skinRaridade: {
    fontSize: 14,
    color: Cores.textoSecundario,
    marginTop: 4,
  },
});