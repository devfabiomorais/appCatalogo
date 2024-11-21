import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const dados = [
  { 
    id: '1', 
    image: './assets/images/expositor1.png', 
    titulo: 'Expositor 1', 
    largura: 100, 
    altura: 200, 
    comprimento: 50, 
    valor: 'R$ 30,00/m2' 
  },
  { 
    id: '2', 
    image: './assets/images/expositor2.png', 
    titulo: 'Expositor 2', 
    largura: 120, 
    altura: 220, 
    comprimento: 60, 
    valor: 'R$ 40,00/m2' 
  },
  { 
    id: '3', 
    image: './assets/images/expositor3.jpg', 
    titulo: 'Expositor 3', 
    largura: 130, 
    altura: 230, 
    comprimento: 70, 
    valor: 'R$ 50,00/m2' 
  },
];

// Tela inicial
function HomeScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.containerImagem} 
      onPress={() => navigation.navigate('Detalhes', { item })}
    >
      <Image source={{ uri: item.image }} style={styles.imagem} />
      <Text style={styles.tituloImagem}>{item.titulo}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.tituloTela}>Expositores</Text>
      <FlatList
        data={dados}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listaImagens}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    paddingTop: 20,
  },
  tituloTela: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  listaImagens: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  containerImagem: {
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagem: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  tituloImagem: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
});

export default HomeScreen;
