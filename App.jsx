import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function App() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const onPressButton = value => {
    if (value === ',') {
      const lastChar = input.slice(-1);
      if (!isNaN(parseInt(lastChar, 10))) {
        setInput(input + value);
      }
    } else {
      setInput(input + value);
    }
  };

  const clearDisplay = () => {
    setInput('');
    setOutput('');
  };

  const backspace = () => {
    setInput(input.slice(0, -1));
  };

  const calculateResult = () => {
    try {
      const sanitizedInput = input.replace(/,/g, '');
      let result = eval(sanitizedInput);
      result = result.toLocaleString('en');
      setOutput(result.toString());
      setInput(result.toString());
    } catch (error) {
      setOutput('Error');
    }
  };

  const calculatePercentage = () => {
    try {
      const result = parseFloat(input) / 100;
      setOutput(result.toString());
    } catch (error) {
      setOutput('Error');
    }
  };

  const handleThousandsSeparator = () => {
    const parts = input.split('.');
    let integerPart = parts[0];
    integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    const result =
      parts.length > 1 ? integerPart + '.' + parts[1] : integerPart;
    setInput(result);
  };

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.inputText}>{input}</Text>
        <Text style={styles.outputText}>{output}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={clearDisplay}>
          <Text style={styles.buttonTextfitur}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={backspace}>
          <Text style={styles.buttonTextfitur}>⌫</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={calculatePercentage}>
          <Text style={styles.buttonTextfitur}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => onPressButton('/')}>
          <Text style={styles.buttonTextfitur}>/</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => onPressButton('7')}>
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => onPressButton('8')}>
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => onPressButton('9')}>
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => onPressButton('*')}>
          <Text style={styles.buttonTextfitur}>x</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => onPressButton('4')}>
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => onPressButton('5')}>
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => onPressButton('6')}>
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => onPressButton('-')}>
          <Text style={styles.buttonTextfitur}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => onPressButton('1')}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => onPressButton('2')}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => onPressButton('3')}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => onPressButton('+')}>
          <Text style={styles.buttonTextfitur}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => onPressButton('00')}>
          <Text style={styles.buttonText}>00</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => onPressButton('0')}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => onPressButton(',')}>
          <Text style={styles.buttonText}>,</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonfitur} onPress={calculateResult}>
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  displayContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '100%',
    backgroundColor: '#000000',
  },
  inputText: {
    fontSize: 50,
    color: '#fff',
  },
  outputText: {
    fontSize: 40,
    color: '#666',
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    paddingTop: 3,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#rgba(0, 0, 0, 0)',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 40,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonfitur: {
    backgroundColor: '#DB6E00',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 40,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 35,
    fontWeight: '400',
    color: '#fff',
  },
  buttonTextfitur: {
    fontSize: 35,
    fontWeight: '400',
    color: '#AB5500',
  },
});
