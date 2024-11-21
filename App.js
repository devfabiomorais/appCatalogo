import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const Stack = createStackNavigator();

const dados = [
  { id: '1', image: 'https://via.placeholder.com/150', titulo: 'Expositor 1', largura: 100, altura: 200, comprimento: 50, valor: 'R$ 300,00' },
  { id: '2', image: 'https://via.placeholder.com/150', titulo: 'Expositor 2', largura: 120, altura: 220, comprimento: 60, valor: 'R$ 400,00' },
  { id: '3', image: 'https://via.placeholder.com/150', titulo: 'Expositor 3', largura: 130, altura: 230, comprimento: 70, valor: 'R$ 500,00' },
];

// Tela inicial
function TelaInicial({ navigation }) {
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

// Tela de detalhes
function TelaDetalhes({ route }) {
  const { item } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.containerDetalhes}>
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

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaInicial">
        <Stack.Screen name="TelaInicial" component={TelaInicial} />
        <Stack.Screen name="Detalhes" component={TelaDetalhes} />
      </Stack.Navigator>
    </NavigationContainer>
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
  containerDetalhes: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: '#fff',
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
