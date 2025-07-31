import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import {useRouter} from 'expo-router';
export default function Peito() {
    const router = useRouter();
  const exercicios = [
    {
      nome: 'Supino Reto',
      imagem: 'https://treinomestre.com.br/wp-content/uploads/2017/08/supino-fechado-cp.jpg',
      series: '4 séries',
      repeticoes: '10 repetições',
    },
    {
      nome: 'Supino Inclinado com Halteres',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsz0JmFi79GPveMqaSvfYhe5wa6U79Z8te9w&s',
      series: '3 séries',
      repeticoes: '12 repetições',
    },
    {
      nome: 'Crucifixo Reto com Halteres',
      imagem: 'https://www.basefitness.com.br/wp-content/uploads/2024/07/crucifixo-com-halteres.webp',
      series: '3 séries',
      repeticoes: '12 repetições',
    },
    {
      nome: 'Crossover no Cabo',
      imagem: 'https://www.treinoemalta.com.br/wp-content/uploads/2023/07/Crossover-na-Polia-Baixa.gif',
      series: '3 séries',
      repeticoes: '15 repetições',
    },
    {
      nome: 'Flexão de Braço',
      imagem: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/flexao-de-bracos.gif',
      series: '3 séries',
      repeticoes: '20 repetições',
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#292929' }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.titulo}>Treino de Peito</Text>
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
