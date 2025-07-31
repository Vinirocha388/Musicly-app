import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';
import CustomHeader from '../components/CustomHeader';

export default function Workouts() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#292929' }}>
      <CustomHeader />
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Treinos</Text>
        <View style={styles.cardsContainer}>
          {/* Card Peito */}
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push('/treinos/peito')}
          >
            <Image
              source={{
                uri: 'https://blog.naturemed.com.br/wp-content/uploads/2023/09/treino-de-peito.jpg',
              }}
              style={styles.image}
            />
            <Text style={styles.cardTitle}>Peito</Text>
            <Text style={styles.cardDesc}>
              Treinos focados em peitoral para força e definição.
            </Text>
          </TouchableOpacity>

          {/* Card Perna */}
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push('/treinos/perna')}
          >
            <Image
              source={{
                uri: 'https://s2-ge.glbimg.com/DX4au5rZkW7mY5CJ6__YDDw_FxI=/0x0:1326x791/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/7/V/hmGkGBTJSgTIqR6cmpjw/treino-de-perna-na-academia.jpg',
              }}
              style={styles.image}
            />
            <Text style={styles.cardTitle}>Perna</Text>
            <Text style={styles.cardDesc}>
              Exercícios para quadríceps, posteriores e glúteos.
            </Text>
          </TouchableOpacity>

          {/* Card Ombro */}
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push('/treinos/ombros')}
          >
            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV-J_HHu8uQrUdgnItz8B_MRGuX5Rs4Kd9_Q&s',
              }}
              style={styles.image}
            />
            <Text style={styles.cardTitle}>Ombro</Text>
            <Text style={styles.cardDesc}>
              Rotina para deltoides e estabilidade dos ombros.
            </Text>
          </TouchableOpacity>

          {/* Card Costas */}
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push('/treinos/costas')}
          >
            <Image
              source={{
                uri: 'https://musculacaoonline.com.br/wp-content/uploads/2018/02/treino-de-costas_10-melhores-exerc%C3%ADcios-e1517778731626.jpg',
              }}
              style={styles.image}
            />
            <Text style={styles.cardTitle}>Costas</Text>
            <Text style={styles.cardDesc}>
              Fortaleça dorsais, trapézio e lombar.
            </Text>
          </TouchableOpacity>

          {/* Card Braço */}
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push('/treinos/braco')}
          >
            <Image
              source={{
                uri: 'https://sportlife.com.br/wp-content/uploads/2021/11/treino-de-braco-1.jpg',
              }}
              style={styles.image}
            />
            <Text style={styles.cardTitle}>Braço</Text>
            <Text style={styles.cardDesc}>
              Bíceps, tríceps e antebraço para braços fortes.
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292929',
    paddingTop: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20,
    color: '#ffff',
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 16,
    paddingHorizontal: 8,
  },
  card: {
    backgroundColor: '#202020',
    borderRadius: 16,
    width: 170,
    margin: 8,
    shadowColor: '#22223b',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
    alignItems: 'center',
    padding: 16,
  },
  image: {
    width: 120,
    height: 80,
    borderRadius: 12,
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffff',
    marginBottom: 6,
  },
  cardDesc: {
    fontSize: 14,
    color: '#ffff',
    textAlign: 'center',
  },
});
