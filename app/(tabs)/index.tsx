import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

const App = () => {
  const [number, setNumber] = useState('');
  const [number2, setNumber2] = useState('');
  const [resultado, setResultado] = useState('');

  const soma = () => {
    setResultado(String(Number(number) + Number(number2)));
  };

  const subtrai = () => {
    setResultado(String(Number(number) - Number(number2)));
  };

  const multiplica = () => {
    setResultado(String(Number(number) * Number(number2)));
  };

  const divide = () => {
    if (Number(number2) !== 0) {
      setResultado(String(Number(number) / Number(number2)));
    } else {
      setResultado('Erro: Divisão por zero');
    }
  };

  return (
    <View style={styles.container}>
      <Text>CALCULADORA</Text>

      <TextInput
        onChangeText={setNumber}
        value={number} 
        placeholder="Digite o primeiro número"
        keyboardType="numeric"
        style={styles.input}
      />

      <TextInput
        onChangeText={setNumber2}
        value={number2} 
        placeholder="Digite o segundo número"
        keyboardType="numeric"
        style={styles.input}
      />

      <View style={styles.buttonContainer}>
        <Button 
          title="+"
          onPress={soma}
        />

        <Button 
          title="-"
          onPress={subtrai}
        />

        <Button 
          title="X"
          onPress={multiplica}
        />

        <Button 
          title="÷"
          onPress={divide}
        />
      </View>

      <Text>O valor é: {resultado}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  buttonContainer: { 
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
    width: '80%'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    width: '80%',
    paddingHorizontal: 10,
  }
});

export default App;
