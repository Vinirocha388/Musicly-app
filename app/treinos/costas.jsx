import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import {useRouter} from 'expo-router';
export default function Costas() {
    const router = useRouter();
  const exercicios = [
    {
      nome: 'Puxada na Barra Fixa',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzksT1UzzhBPL2Tv2DST3oqo2RQ8X2yVTqLQ&s',
      series: '4 séries',
      repeticoes: '8-10 repetições',
    },
    {
      nome: 'Remada Curvada',
      imagem: 'https://static.wixstatic.com/media/2edbed_415e64c11fd848f6b3212697d708c43e~mv2.webp/v1/fill/w_980,h_515,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2edbed_415e64c11fd848f6b3212697d708c43e~mv2.webp',
      series: '4 séries',
      repeticoes: '10 repetições',
    },
    {
      nome: 'Remada Unilateral com Halteres',
      imagem: 'https://static.wixstatic.com/media/2edbed_cf8feb6f79494833b887104bc358843d~mv2.gif',
      series: '3 séries',
      repeticoes: '12 repetições',
    },
    {
      nome: 'Levantamento Terra',
      imagem: 'https://static.wixstatic.com/media/2edbed_f6350f329a6b4aa7b80eca372ae9aba2~mv2.webp/v1/fill/w_1000,h_1000,al_c,q_85,usm_0.66_1.00_0.01/2edbed_f6350f329a6b4aa7b80eca372ae9aba2~mv2.webp',
      series: '4 séries',
      repeticoes: '6-8 repetições',
    },
    {
      nome: 'Pullover com Halteres',
      imagem: 'https://ginasiovirtual.com/wp-content/uploads/2021/06/pullover-com-halter.jpg',
      series: '3 séries',
      repeticoes: '12 repetições',
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#292929' }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.titulo}>Treino de Costas</Text>
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
