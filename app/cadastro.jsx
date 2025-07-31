import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from "react-native";
import axios from "axios";
import { useRouter } from "expo-router";

const UserCard = ({ navigation }) => {
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [userInfo, setUserInfo] = useState({
    userName: "",
    name: "",
    email: "",
    password: "",
    cellPhone: "",
    age: "",
    sex: "",
    height: "",
    weight: "",
    descriptionObjective: "",
    restriction: "",
    conditioning: "",
  });


  const handleChange = (key, value) => {
    setUserInfo({ ...userInfo, [key]: value });
  };

  // Função para criar um novo usuário usando axios com a nova API
  const createUser = async () => {
    // Verificar campos obrigatórios
    if (!userInfo.userName || !userInfo.name || !userInfo.email || !userInfo.password || !userInfo.cellPhone) {
      Alert.alert("Erro", "Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    // Preparar os dados para envio
    const userData = {
      ...userInfo,
      age: parseInt(userInfo.age) || 0,
      height: parseFloat(userInfo.height) || 0,
      weight: parseFloat(userInfo.weight) || 0,
      cellPhone: parseInt(userInfo.cellPhone) || 0,
    };

    setLoading(true);
    try {
      // Fazer a requisição POST para a nova API
      const response = await axios.post(
        "https://bodyhealthy-back.onrender.com/auth/register",
        userData
      );
      
      console.log("Usuário criado:", response.data);
      Alert.alert(
        "Sucesso",
        "Cadastro realizado com sucesso!",
        [{ text: "OK" }]
      );
      
      Alert.alert(
        "Usuário Cadastrado",
        `Bem-vindo, ${response.data.name}!`,
        [{ text: "OK" }]
      );
      // Opcional: redirecionar para tela de login após cadastro bem-sucedido
       //navigation.navigate('Login');
      
    } catch (error) {
      console.error("Erro ao criar usuário:", error.response ? error.response.data : error.message);
      
      const errorMessage = error.response && error.response.data 
        ? error.response.data.message || "Falha ao criar usuário" 
        : "Não foi possível conectar ao servidor";
      
      Alert.alert("Erro", errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={[styles.card, { backgroundColor: darkMode ? "rgba(39, 39, 39, 0.8)" : "rgba(255, 255, 255, 0.8)" }]}>
      
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.profileImageContainer}>
          <ImageBackground
            source={{
              uri: "https://i.pinimg.com/736x/e5/df/45/e5df457e8de5d0aae37691c00e8a672e.jpg",
            }}
            style={styles.profileImage}
          />
        </View>

        <View style={styles.cardContent}>
          <Field 
            label="Nome de usuário" 
            value={userInfo.userName} 
            onChange={(text) => handleChange("userName", text)} 
            darkMode={darkMode}
          />
          <Field 
            label="Nome completo" 
            value={userInfo.name} 
            onChange={(text) => handleChange("name", text)} 
            darkMode={darkMode}
          />
          <Field 
            label="Email" 
            value={userInfo.email} 
            onChange={(text) => handleChange("email", text)} 
            keyboardType="email-address"
            darkMode={darkMode}
          />
          <Field 
            label="Senha" 
            value={userInfo.password} 
            onChange={(text) => handleChange("password", text)} 
            secureTextEntry={true}
            darkMode={darkMode}
          />
          <Field 
            label="Celular" 
            value={userInfo.cellPhone} 
            onChange={(text) => handleChange("cellPhone", text)} 
            keyboardType="numeric"
            darkMode={darkMode}
          />
          <Field 
            label="Idade" 
            value={userInfo.age} 
            onChange={(text) => handleChange("age", text)} 
            keyboardType="numeric" 
            darkMode={darkMode}
          />
          <Field 
            label="Sexo" 
            value={userInfo.sex} 
            onChange={(text) => handleChange("sex", text)} 
            darkMode={darkMode}
          />
          <Field 
            label="Altura (m)" 
            value={userInfo.height} 
            onChange={(text) => handleChange("height", text)} 
            keyboardType="numeric"
            darkMode={darkMode}
          />
          <Field 
            label="Peso (kg)" 
            value={userInfo.weight} 
            onChange={(text) => handleChange("weight", text)} 
            keyboardType="numeric"
            darkMode={darkMode}
          />
          <Field 
            label="Objetivo" 
            value={userInfo.descriptionObjective} 
            onChange={(text) => handleChange("descriptionObjective", text)} 
            multiline={true}
            darkMode={darkMode}
          />
          <Field 
            label="Restrições" 
            value={userInfo.restriction} 
            onChange={(text) => handleChange("restriction", text)} 
            multiline={true}
            darkMode={darkMode}
          />
          <Field 
            label="Condicionamento físico" 
            value={userInfo.conditioning} 
            onChange={(text) => handleChange("conditioning", text)} 
            darkMode={darkMode}
          />
        </View>
      </ScrollView>

      <TouchableOpacity 
        style={[
          styles.button, 
          { backgroundColor: darkMode ? "#fff" : "#fff", opacity: loading ? 0.7 : 1 }
        ]} 
        onPress={createUser}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? "Cadastrando..." : "Cadastrar"}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[
          styles.button, 
          { backgroundColor: darkMode ? "#fff" : "#fff" }
        ]}
        onPress={() => router.push("./login")}
      >
        <Text style={styles.buttonText}>Ir para Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const Field = ({ label, value, onChange, multiline = false, keyboardType = "default", secureTextEntry = false, darkMode }) => (
  <View style={styles.fieldContainer}>
    <Text style={[styles.cardTitle, { color: darkMode ? "#fff" : "#000" }]}>{label}</Text>
    <TextInput
      style={[
        styles.cardInput, 
        { 
          color: darkMode ? "#fff" : "#000",
          borderColor: darkMode ? "#ccc" : "#666",
          height: multiline ? 80 : undefined
        }
      ]}
      value={value}
      onChangeText={onChange}
      multiline={multiline}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      placeholder={`Digite ${label.toLowerCase()}`}
      placeholderTextColor={darkMode ? "#999" : "#666"}
    />
  </View>
);

const CadastroScreen = ({ navigation }) => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <View style={[styles.screenContainer, { backgroundColor: darkMode ? "#000" : "#fff" }]}>
      <ImageBackground
        source={{
          uri: "https://cdn.prod.website-files.com/64dd05b33f019f79a7ec8f43/66aaa0e993b2326603bcde44_academia-24-horas.webp",
        }}
        style={styles.backgroundImage}
        blurRadius={5}
      />
      <UserCard navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    width: "100%",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  iconRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    flexGrow: 1,
    padding: 20,
  },
  card: {
    flex: 1,
    padding: 0,
  },
  cardContent: {
    marginTop: 10,
  },
  fieldContainer: {
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 16,
    marginBottom: 5,
  },
  cardInput: {
    fontSize: 16,
    borderBottomWidth: 1,
    padding: 10,
  },
  profileImageContainer: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 30,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    overflow: "hidden",
  },
  button: {
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    margin: 20,
  },
  buttonText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CadastroScreen;
