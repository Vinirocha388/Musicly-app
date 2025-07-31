import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useRouter} from 'expo-router';

export default function Braco() {
    const router = useRouter();
  const exercicios = [
    {
      nome: 'Rosca Direta com Barra',
      imagem: 'https://grandeatleta.com.br/blog/wp-content/uploads/2018/07/rosca-direta-barra-reta-ou-w.jpg',
      series: '4 séries',
      repeticoes: '8-12 repetições',
    },
    {
      nome: 'Rosca Martelo com Halteres',
      imagem: 'https://static1.minhavida.com.br/articles/39/76/c9/c4/makatserchykshutterstock-orig-1.jpg',
      series: '3 séries',
      repeticoes: '10-12 repetições',
    },
    {
      nome: 'Tríceps Pulley',
      imagem: 'https://treinomestre.com.br/wp-content/uploads/2017/09/tricepes-pulley-corda-polia--scaled.jpg',
      series: '4 séries',
      repeticoes: '10-15 repetições',
    },
    {
      nome: 'Tríceps Testa com Barra',
      imagem: 'https://i0.wp.com/meutreinador.com/wp-content/uploads/2023/12/35_Triceps-Testa-com-Barra-EZ.jpg?resize=640%2C480&ssl=1',
      series: '3 séries',
      repeticoes: '8-12 repetições',
    },
    {
      nome: 'Rosca Concentrada',
      imagem: 'https://www.basefitness.com.br/wp-content/uploads/2022/02/rosca-concentada-sentado-1024x443.webp',
      series: '3 séries',
      repeticoes: '12 repetições',
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#292929' }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.titulo}>Treino de Braço</Text>
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
