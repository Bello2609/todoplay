import React from "react";
import './App.css';
import ListItem  from './ListItem';
class App extends React.Component{
  state={
    itemData: [],
    inputValue: ""
  }
  addItem = (e)=>{
    e.preventDefault();
    let newInput = this.state.inputValue;
    if(newInput !== ""){
      let itemData = this.state.itemData.concat({
        id: Date.now(),
        item: newInput
      });
      console.log(itemData);
      this.setState({
        itemData: itemData,
        inputValue: ""
      })
    }
   
  }
  deleteItem = (id)=>{
    const filterData = this.state.itemData.filter(data=>{
      return data.id !== id;
    })
    this.setState({
      itemData: filterData
    })
  }
  onChange = (e)=>{
    this.setState({
      inputValue: e.target.value
    })
  }
  render(){
    return(
      <div>
        <input type="text" value={this.state.inputValue} onChange={this.onChange}/> 
        <button type="submit" onClick={this.addItem}>add</button>
           {this.state.itemData.map(data=>{
             return(
              <ListItem text={data.item} id={data.id} clicked={(id)=>{
                this.deleteItem(data.id)
              }}/>
             );
           })}
      </div>   
    );
  }
}
export default App;
