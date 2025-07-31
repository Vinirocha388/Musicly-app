import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from "react-native";
import { useRouter } from "expo-router";

export default function PrivacyPolicyScreen() {
  const router = useRouter();

  const handleAccept = () => {
    router.push("/login");
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Termos de Privacidade</Text>
        <Text style={styles.text}>
          Bem-vindo à nossa Política de Privacidade. Este documento descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais. Ao usar nosso aplicativo, você concorda com as práticas descritas abaixo.
        </Text>
        <Text style={styles.subtitle}>1. Coleta de Informações</Text>
        <Text style={styles.text}>
          Coletamos informações que você fornece diretamente, como nome, e-mail e senha, durante o cadastro ou uso do aplicativo. Também podemos coletar dados de uso, como interações com o aplicativo, para melhorar sua experiência.
        </Text>
        <Text style={styles.subtitle}>2. Uso das Informações</Text>
        <Text style={styles.text}>
          Utilizamos suas informações para fornecer e melhorar nossos serviços, personalizar sua experiência, processar transações e enviar comunicações relacionadas ao aplicativo.
        </Text>
        <Text style={styles.subtitle}>3. Compartilhamento de Informações</Text>
        <Text style={styles.text}>
          Não compartilhamos suas informações pessoais com terceiros, exceto quando necessário para cumprir obrigações legais ou proteger nossos direitos.
        </Text>
        <Text style={styles.subtitle}>4. Segurança</Text>
        <Text style={styles.text}>
          Adotamos medidas de segurança para proteger suas informações contra acesso não autorizado, alteração ou destruição. No entanto, nenhum método de transmissão pela internet é 100% seguro.
        </Text>
        <Text style={styles.subtitle}>5. Seus Direitos</Text>
        <Text style={styles.text}>
          Você tem o direito de acessar, corrigir ou excluir suas informações pessoais. Entre em contato conosco para exercer esses direitos.
        </Text>
        <Text style={styles.subtitle}>6. Alterações nesta Política</Text>
        <Text style={styles.text}>
          Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre mudanças significativas por meio do aplicativo ou outros canais.
        </Text>
        <Text style={styles.text}>
          Ao continuar a usar o aplicativo, você concorda com os termos desta Política de Privacidade.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={handleAccept}
        >
          <Text style={styles.buttonText}>Aceitar e Voltar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#292929",
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "600",
    marginTop: 15,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: "#ccc",
    lineHeight: 24,
    marginBottom: 15,
    textAlign: "justify",
  },
  button: {
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 30,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});