import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import CustomHeader from '../components/CustomHeader';
import { StatusBar } from 'react-native-web';

export default function Musicians() {
  const musicians = [
    {
      id: 1,
      name: 'Filipe Martins',
      avatar: 'https://hotmart.s3.amazonaws.com/product_pictures/b32c10eb-344b-4c9d-84e2-8290f898b1a8/FilipeMartins27.jpg',
      instrument: 'Teclado',
      specialty: 'Tecladista e Produtor Musical',
      description: 'Filipe Martins é Tecladista e Produtor Musical, e tem contato com a música desde os 4 anos de idade. Iniciou no teclado aos 11 anos, e desenvolveu suas habilidades com muito empenho. Com isso, aos 15 anos, já tocava profissionalmente.',
      achievements: 'Já acompanhou vários cantores no meio Gospel entre eles Isadora Pompeo, Pc Baruk, Eli Soares, Eyshila, Midian Lima, Bruna Karla, entre outros.',
      icon: 'keyboard',
    },
    {
      id: 2,
      name: 'Milo Andreo',
      avatar: 'https://miloandreo.com.br/wp-content/uploads/2023/07/banner-perfil.jpg',
      instrument: 'Piano/Teclado',
      specialty: 'Professor e Produtor Musical',
      description: 'Milo Andreo é um professor de teclado e piano, produtor musical e músico. Ele é conhecido por seu canal no YouTube, onde ensina teclado e piano de forma acessível.',
      achievements: 'Fundador da Escola Moderna de Música e Produções (EMMP), reconhecido por seu método de ensino inovador.',
      icon: 'music'
    },
    {
      id: 3,
      name: 'Biel Sales',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuBK2YG7GD7Uwx0k9Zi8d_WoasQiAYl7Ccag&s',
      instrument: 'Bateria',
      specialty: 'Baterista Profissional',
      description: 'Biel Sales é um baterista brasileiro nascido em São Paulo em 1997. Ele começou a tocar bateria aos 7 anos e se destacou na cena gospel, acompanhando diversos artistas.',
      achievements: 'Atualmente é o baterista da cantora Isadora Pompeo e também ministra aulas particulares e workshops pelo Brasil.',
      icon: 'drum'
    },
    {
      id: 4,
      name: 'Aposan',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxQRYGwAIBSTQg7gaucinbse86l0YwNONMBw&s',
      instrument: 'Bateria',
      specialty: 'Baterista, Produtor e Compositor',
      description: 'Alexandre Aposan, nome artístico de Alexandre Apolinário dos Santos é um baterista, produtor musical e compositor brasileiro.',
      achievements: 'Já trabalhou com diversos artistas brasileiros e estrangeiros, em sua maioria cantores de música cristã contemporânea brasileira.',
      icon: 'drum'
    },
    {
      id: 5,
      name: 'Aninha Deleones',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Dt5wqdi8FtKnnDFG9DfUuoDqULRHcWyNFg&s',
      instrument: 'Baixo',
      specialty: 'Baixista e Influenciadora Musical',
      description: 'Aninha Deleones é uma jovem baixista brasileira, conhecida por seu talento e pela popularidade de seus vídeos nas redes sociais, onde compartilha covers e criações musicais.',
      achievements: 'Começou sua jornada musical aos 10 anos com seu pai Hugo Deleones. Aos 13 anos, seus vídeos começaram a viralizar, levando a parcerias com marcas como Strinberg.',
      icon: 'guitar'
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#000"
        translucent={false}
      />
      <CustomHeader />
      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Músicos em Destaque</Text>
        <Text style={styles.headerSubtitle}>Conheça os talentos da nossa comunidade</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {musicians.map(musician => (
          <View key={musician.id} style={styles.card}>
            <View style={styles.cardHeader}>
              <Image source={{ uri: musician.avatar }} style={styles.avatar} />
              <View style={styles.headerInfo}>
                <Text style={styles.musicianName}>{musician.name}</Text>
                <View style={styles.specialtyContainer}>
                  <FontAwesome5 name={musician.icon} size={16} color="#000" />
                  <Text style={styles.specialty}>{musician.specialty}</Text>
                </View>
                <Text style={styles.instrument}>{musician.instrument}</Text>
              </View>
            </View>
            
            <View style={styles.cardContent}>
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Sobre</Text>
                <Text style={styles.description}>{musician.description}</Text>
              </View>
              
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Conquistas</Text>
                <Text style={styles.achievements}>{musician.achievements}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fa',
  },
  header: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#666',
  },
  content: {
    padding: 16,
    paddingBottom: 30,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 16,
    borderWidth: 3,
    borderColor: '#000',
  },
  headerInfo: {
    flex: 1,
  },
  musicianName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 6,
  },
  specialtyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  specialty: {
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
    marginLeft: 8,
  },
  instrument: {
    fontSize: 14,
    color: '#888',
    backgroundColor: '#f8f9fa',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
    marginTop: 6,
  },
  cardContent: {
    padding: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#000',
    paddingLeft: 12,
  },
  description: {
    fontSize: 15,
    color: '#444',
    lineHeight: 24,
    textAlign: 'justify',
  },
  achievements: {
    fontSize: 15,
    color: '#555',
    lineHeight: 24,
    fontStyle: 'italic',
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#000',
  }
});
