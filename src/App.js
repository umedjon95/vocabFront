import React, {Component} from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

constructor(props) {
   super(props)
   this.state = {
      cards: [],
      word: ""
   }
   this.getcard = this.getcard.bind(this) 
   this.getcards = this.getcards.bind(this) 
   this.onChangeword = this.onChangeword.bind(this) 

}

componentDidMount() {
   this.getcards();
}

getcards() {
   axios.get('http://localhost:8080/word') 
   .then(res => {
      this.setState({ cards:  res.data.payload });
   })
}

getcard() {
   axios.get('http://localhost:8080/word/' + this.state.word) 
   .then(res => {
      console.log(res);
      
      this.setState({ cards:  res.data.payload });
   })
}

onChangeword(event) {
   this.setState ({word: event.target.value})
}

render() {
   var renderTableData = (
      this.state.cards.map (
         (card, index) => {
            const { id, word,  meaning } = card
            return (
               <tr key={id}>
                  <td>{id}</td>
                  <td>{word}</td>
                  <td>{meaning}</td>
               </tr>
            )
         }
      )
   )
   return (
      <div>
         <h1 id='title'>Wordlist</h1>
         <input onChange = {this.onChangeword} value = {this.state.word} />
         <button onClick = {this.getcard.bind(this)}>Getcard</button>
         <button onClick = {this.getcards.bind(this)}>Getcards</button>
         <table id='cards'>
            <tbody>
               <tr>
                  <th>id</th>
                  <th>word</th>
                  <th>meaning</th>
               </tr>
               { renderTableData }
            </tbody>
         </table>
      </div>
      )
   }
}

export default App;