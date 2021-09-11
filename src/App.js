import React from "react";
import './App.css';
import ListItem  from './ListItem';

class App extends React.Component{
  state={
    itemData: [],
    inputValue: ""
  }

//this is responsible to add strike line to the data added to todo
  onCheck = (id)=>{
   this.setState({
     itemData: this.state.itemData.map(data=>{
       if(data.id === id){
        data.checked = !data.checked
       }
       console.log(this.state.itemData);
       return data
     })
    
   })
    
  // let findIndex = this.state.itemData.findIndex(data=> data.id ===id);
  // let newItemData = {
  //   ...this.state.itemData
  // }
  // newItemData[findIndex] = {
  //   ...newItemData[findIndex],
  //   checked: !newItemData[findIndex].checked
  // }
  // this.setState({
  //   itemData: newItemData
  // })

  // this.setState({
  //   itemData: this.state.itemData.find(data=>{
  //     if(data.id ===id){
  //       data.checked = true;
  //     }
  //     console.log(this.state.itemData);
  //     return data;
  //   })
  // })
  }
  addItem = (e)=>{
    e.preventDefault();
    let newInput = this.state.inputValue;
    if(newInput !== ""){
      let itemData = this.state.itemData.concat({
        id: Date.now(),
        item: newInput,
        checked: false
      });
     
      this.setState({
        itemData: itemData,
        inputValue: "",
        
      })
      
    }
    console.log(this.state.itemData);
    
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
    let change = this.state.itemData.map(data=>data.checked)
    // let listItem =  (
    //   this.state.itemData.map(data=>{
    //     return(
    //      <ListItem text={data.item}  checked={()=>this.onCheck(data.id)} key={data.id} clicked={()=>{
    //        this.deleteItem(data.id)
    //      }}/>
    //     )})
    // )
    // if(this.state.itemData.checked){
    //   listItem = (
    //   this.state.itemData.map(data=>{
    //     return(
    //      <ListItem text={data.item} style = {{
    //        textDecoration: "line-through"}} checked={()=>this.onCheck(data.id)} key={data.id} clicked={()=>{
    //        this.deleteItem(data.id)
    //      }}/>
    //     )}))
    // }
    return(
      <div>
        <input type="text" value={this.state.inputValue} onChange={this.onChange}/> 
        <button type="submit" onClick={this.addItem}>add</button>
        {
           this.state.itemData.map(data=>{
            return(
             <ListItem text={data.item} style={{
               textDecoration: this.state.itemData.map(data=>data.checked) ? "line-through" : "none"}}
              checked={()=>this.onCheck(data.id)} key={data.id} clicked={()=>{
               this.deleteItem(data.id)
             }}/>
            )})
        }
      </div>   
    );
  }
}
export default App;
