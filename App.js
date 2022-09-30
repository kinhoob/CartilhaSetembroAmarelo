import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        SETEMBRO AMARELO
      </Text>
      <Card style={styles.cartao}>
        <Text style={styles.textocartao}>
          Esta é uma cartilha, com o intuito de conscientizar sobre a importancia da prevenção ao suicídio
        </Text>
      </Card>
      <Text style={styles.paragraph}>
        POSSÍVEIS SINAIS
      </Text>
      <Card style={styles.cartao}>
        <Text style={styles.textocartao}>
          - Crises de ansiedade com certa frequencia{'\n'} {'\n'}
          - O individuo se isola e possui comportamentos antisociais{'\n'} {'\n'}
          - Pode apresentar auto multilação{'\n'} {'\n'}
          - Se apega facilmente a coisas que o desligam da realidade (Jogos, Drogas,    etc...){'\n'} {'\n'}
          - Grande variação de humor{'\n'}
        </Text>
      </Card>
      <Image
        style={styles.logo}
        source={require('./assets/fita_amarela.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#000',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
  cartao: {
    backgroundColor: '#e5ff00',
    padding: '20px',
  },
  textocartao: {
    fontFamily: 'sans-serif',
    fontSize: '20px',
    textAlign: 'center',
  },
  logo: {
    width: '300px',
    height: '300px',
    marginTop: '50px',
  },
  
});