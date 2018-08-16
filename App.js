import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      todoInput: "",
      toDos: [{id: 929829, item: "sleep"}, {id: 920, item: "eat"}]
    }
  }

  addTodo(item){
    console.log("ITEM: ", item)
    const id = Math.floor((Math.random() * 2340) - 23)
    const newToDo = {
        id: id,
        item: item
    }
    this.setState({toDos: [...this.state.toDos, newToDo]})
  }

  deleteToDo = (item) =>{
    console.log(item.id)
    const removeToDo = this.state.toDos.filter(toDo=> {
      console.log(item)
      return toDo.id !== item.id
    });
    console.log(removeToDo)
    this.setState({toDos: removeToDo})
    
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
            renderItem={({item}) => (
              <View style={{ width: 100, marginTop: 10, flexDirection: 'row', flexWrap: 'wrap'}}>
                <Button title="X" onPress={()=>this.deleteToDo(item)}/>
                <Text>{item.item}</Text>
              </View>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
            
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    backgroundColor: '#fff',
  },
});
