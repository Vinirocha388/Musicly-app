import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import {useRouter} from 'expo-router';
export default function Ombro() {
    const router = useRouter();
  const exercicios = [
    {
      nome: 'Desenvolvimento com Halteres',
      imagem: 'https://treinomestre.com.br/wp-content/uploads/2018/09/desenvolvimento-com-halteres-.jpg',
      series: '4 séries',
      repeticoes: '10 repetições',
    },
    {
      nome: 'Elevação Lateral',
      imagem: 'https://static.strengthlevel.com/images/exercises/dumbbell-lateral-raise/dumbbell-lateral-raise-800.jpg',
      series: '3 séries',
      repeticoes: '12 repetições',
    },
    {
      nome: 'Remada Alta',
      imagem: 'https://static.strengthlevel.com/images/exercises/upright-row/upright-row-800.jpg',
      series: '3 séries',
      repeticoes: '10 repetições',
    },
    {
      nome: 'Elevação Frontal',
      imagem: 'https://static.strengthlevel.com/images/exercises/dumbbell-front-raise/dumbbell-front-raise-800.jpg',
      series: '3 séries',
      repeticoes: '12 repetições',
    },
    {
      nome: 'Encolhimento de Ombros',
      imagem: 'https://static.wixstatic.com/media/2edbed_ccbd8070639b4539ac2331b17f690d27~mv2.gif/v1/fill/w_360,h_360,al_c,pstr/2edbed_ccbd8070639b4539ac2331b17f690d27~mv2.gif',
      series: '4 séries',
      repeticoes: '15 repetições',
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#292929' }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.titulo}>Treino de Ombro</Text>
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
