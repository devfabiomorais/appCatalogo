import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

function DetailScreen({ route }) {
  const { item } = route.params;  // Recebe os dados do expositor enviado da HomeScreen

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.tituloDetalhes}>{item.titulo}</Text>
      <Image source={{ uri: item.image }} style={styles.imagemDetalhes} />
      <View style={styles.informacoes}>
        <Text style={styles.textoDetalhes}>Largura: {item.largura} cm</Text>
        <Text style={styles.textoDetalhes}>Altura: {item.altura} cm</Text>
        <Text style={styles.textoDetalhes}>Comprimento: {item.comprimento} cm</Text>
        <Text style={styles.textoDetalhes}>Valor: {item.valor}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: '#fff',
  },
  tituloDetalhes: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  imagemDetalhes: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  informacoes: {
    width: '100%',
    paddingHorizontal: 20,
  },
  textoDetalhes: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333',
  },
});

export default DetailScreen;
