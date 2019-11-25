import React, {Component} from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {word: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({word: event.target.value});
  }

  handleSubmit(event) {
    console.log('A name was submitted: ' + this.state.word);

    axios.post(`http://localhost:8080/page?word=`, this.state.word)
      .then(res => {debugger
     console.log(res);
      })


    // axios({
    //   method: 'post',
    //   url: 'http://localhost:8080/page',
    //   data: this.state.word
    // }).then(response => {
    //     this.setState({
    //         loading: false
    //     });

    //     if (response.data.code === 200) {
    //         this.setState({
    //             sended: true,
    //             email: ''
    //         })
    //     }
    // });

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.word} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default App;