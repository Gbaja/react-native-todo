import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      todoInput: "",
      toDos: ["Sleep", "Eat"]
    }
  }
  addTodo(item){
    console.log("ITEM: ", item)
    // const addToDoToArray = this.state.toDos.concat(item)
    this.setState({toDos: [...this.state.toDos, item]})
    console.log(this.state.toDos)
  
  }
  render() {
    console.log("TODO'S ",this.state.toDos)
    return (
      <View style={styles.container}>
        <Text>To Do App</Text>
        <TextInput 
          style={{height: 40, width: 300, borderColor: "red", borderWidth: 2, marginTop: 15, marginBottom: 15}}
          value={this.state.todoInput}
          onChangeText={(text)=>this.setState({todoInput: text})}
          />
          <Button
          onPress={()=> this.addTodo(this.state.todoInput)}
          title="Add to do"/>
          <FlatList
            data={this.state.toDos}
            renderItem={({item}) => <Text>{item}</Text>}
            />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    backgroundColor: '#fff',
  },
});
