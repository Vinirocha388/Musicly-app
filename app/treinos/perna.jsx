import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import {useRouter} from 'expo-router';
import { TouchableOpacity } from 'react-native';

export default function Perna() {
    const router = useRouter();
  const exercicios = [
    {
      nome: 'Agachamento Livre',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKyAIlIwR5QcLvxCsk3Mgv9k6QJllWXt8Ryg&s',
      series: '4 séries',
      repeticoes: '10 repetições',
    },
    {
      nome: 'Leg Press',
      imagem: 'https://www.shutterstock.com/image-illustration/lever-angled-leg-press-male-260nw-2586714377.jpg',
      series: '4 séries',
      repeticoes: '12 repetições',
    },
    {
      nome: 'Cadeira Extensora',
      imagem: 'https://static.wixstatic.com/media/2edbed_48d0ecb088004940b62f76ecd26ab590~mv2.png/v1/fill/w_666,h_818,al_c,q_90/2edbed_48d0ecb088004940b62f76ecd26ab590~mv2.png',
      series: '3 séries',
      repeticoes: '15 repetições',
    },
    {
      nome: 'Cadeira Flexora',
      imagem: 'https://static.wixstatic.com/media/2edbed_327777df377340488fd4821b16882fc8~mv2.png/v1/fill/w_500,h_251,al_c,q_85,enc_avif,quality_auto/2edbed_327777df377340488fd4821b16882fc8~mv2.png',
      series: '3 séries',
      repeticoes: '15 repetições',
    },
    {
      nome: 'Elevação de Panturrilha',
      imagem: 'https://cdn.atletis.com.br/atletis-website/base/235/c3a/635/elevacao-panturrilha-barra.png',
      series: '4 séries',
      repeticoes: '20 repetições',
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#292929' }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.titulo}>Treino de Perna</Text>
        {exercicios.map((item, index) => (
          <View key={index} style={styles.card}>
            <Image source={{ uri: item.imagem }} style={styles.imagem} />
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.info}>{item.series} • {item.repeticoes}</Text>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity
              style={{
                  backgroundColor: '#444',
                  padding: 14,
                  borderRadius: 8,
                  alignItems: 'center',
                  margin: 16,
              }}
              onPress={() => router.push("../workouts")}
          >
              <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>Voltar para Treinos</Text>
          </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#292929',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    alignSelf: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#1f1f1f',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 5,
  },
  imagem: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginBottom: 12,
  },
  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 6,
  },
  info: {
    fontSize: 16,
    color: '#ddd',
  },
});
