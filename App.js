import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [var1, setVar1] = useState(0)
  const [var2, setVar2] = useState(0)
  const [isOp, setIsOp] = useState(false)
  const [displayResult, setdisplayResult] = useState(false)
  const [op, setOp] = useState("")
  const [str, setStr] = useState("")
  const [result, setResult] = useState(0)

  const handlePress = (val) => {
    if(val>-1 && val<10){
      if(isOp){
        setVar2(var2*10+val)
        if(op=='+')
          setResult(var1 + var2*10+val)
        else if(op=='-')
          setResult(var1 - var2*10+val)
        else if(op=='*')
          setResult(var1 * (var2*10+val))
        else if(op=='/')
          setResult(var1 / (var2*10+val))
        setdisplayResult(false)
      }
      else{
        setVar1(var1*10+val)
        setResult(var1*10+val)
        setdisplayResult(false)
      }
      setStr(str+val)
    }
  }
  const handleOp = (val) => { 
    if (val == '='){
      if(isOp){
        if(op == '+'){
          setResult(var1+var2)
        }
        else if(op == '-'){
          setResult(var1-var2)
        }
        else if(op == '*'){
          setResult(var1*var2)
        }
        else if(op == '/'){
          setResult(var1/var2)
        }
        setIsOp(false)
        setVar1(result)
        setVar2(0)
        setOp('')
        setdisplayResult(true)
      }
      setStr("")
    }
    
      else{
      if(isOp==false){
        setOp(val)
        setIsOp(true)
      }
      else{
        setVar1(result)
        setOp(val)
      }
    }
    setStr(str+val)
  }

  const clear = ()=>{
    setResult(0)
    setVar1(0)
    setVar2(0)
    setIsOp(false)
    setdisplayResult(false)
    setOp("")
  }
  return (
    <>
    <Text style = {styles.title}>Calculator</Text>
    <View style={styles.container}>
      <View style={styles.box}>
        {var1? ( var2? (<Text style={styles.nums}>{var1} {op} {var2}</Text>) :  (<Text style={styles.nums}>{var1} {op}</Text>)): (<Text></Text>)}
        {displayResult? (<Text style={styles.nums}>{result}</Text>) : (<Text></Text>)}
      </View>
      <View style={styles.set}>
        <View style={styles.button}>
          <Button onPress={() => handlePress(1)} title="1" />
        </View>
        <View style={styles.button}>
          <Button onPress={() => handlePress(2)} title="2" />
        </View>
        <View style={styles.button}>
          <Button onPress={() => handlePress(3)} title="3" />
        </View>
        <View style={styles.button}>
          <Button onPress={() => handleOp('+')} title="+" />
        </View>
      </View>
      <View style={styles.set}>
        <View style={styles.button}>
          <Button onPress={() => handlePress(4)} title="4" />
        </View>
        <View style={styles.button}>
          <Button onPress={() => handlePress(5)} title="5" />
        </View>
        <View style={styles.button}>
          <Button onPress={() => handlePress(6)} title="6" />
        </View>
        <View style={styles.button}>
          <Button onPress={() => handleOp('-')} title="-" />
        </View>
      </View>
      <View style={styles.set}>
        <View style={styles.button}>
          <Button onPress={() => handlePress(7)} title="7" />
        </View>
        <View style={styles.button}>
          <Button onPress={() => handlePress(8)} title="8" />
        </View>
        <View style={styles.button}>
          <Button onPress={() => handlePress(9)} title="9" />
        </View>
        <View style={styles.button}>
          <Button onPress={() => handleOp('*')} title="*" />
        </View>
      </View>
      <View style={styles.set}>
        <View style={styles.button}>
          <Button onPress={() => handleOp('/')} title="/" />
        </View>
        <View style={styles.button}>
          <Button onPress={() => handlePress(0)} title="0" />
        </View>
        <View style={styles.button}>
          <Button onPress={() => handleOp('=')} title="=" />
        </View>
        <View style={styles.button}>
          <Button onPress={clear} title="C" />
        </View>
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  set: {
    flexDirection: 'row',
  },
  button:{
    width:100,
    height:60,
    justifyContent: 'center', // Align content vertically
    paddingHorizontal: 10, 
  },
  title: {
    paddingTop: 30,
    fontSize: 17,
    paddingHorizontal: 165,
    fontWeight:"bold",
  },
  box:{
    borderWidth:1,
    width: 380,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nums:{
    fontSize: 25,
    fontWeight: "bold",
  },
});
