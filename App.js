import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, CheckBox } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      todoInput: "",
      checked: true,
      toDos: [
        {id: 929829, item: "sleep", completed: true},
         {id: 920, item: "eat", completed: false}
      ]
    }
  }

  addTodo(item){
    console.log("ITEM: ", item)
    const id = Math.floor((Math.random() * 2340) - 23)
    const newToDo = {
        id: id,
        item: item,
        completed: false
    }
    this.setState({toDos: [...this.state.toDos, newToDo]})
  }

  deleteToDo = (item) =>{
    console.log(item.id)
    const removeToDo = this.state.toDos.filter(toDo=> {
      console.log(item)
      return toDo.id !== item.id
    });
    this.setState({toDos: removeToDo})
  }

  completedToDo = (item) => {
   const changeCompleted = this.state.toDos.reduce((acc, currentToDo)=>{
     if(currentToDo.id === item.id){
       currentToDo.completed = !currentToDo.completed
     }
    return acc.concat(currentToDo)
   }, []);
   this.setState({toDos: changeCompleted})
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
                <CheckBox
                  value={item.completed}
                  onValueChange={()=> this.completedToDo(item)}
                />
                <Button title="X" onPress={()=>this.deleteToDo(item)}/>
                <Text style={item.completed && styles.completed}>{item.item}</Text>
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
  completed: {
    textDecorationLine: "line-through"
  }
});
