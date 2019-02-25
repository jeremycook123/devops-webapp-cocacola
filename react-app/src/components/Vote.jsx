import React, { Component } from 'react';
import './CocaCola.css';
import axios from 'axios'

class Vote extends Component{
    constructor () {
      super();
      this.voteurl = "https://jsonplaceholder.typicode.com/todos/1";

      this.state = {
        username: '',
        vote: 0
      }
      
      this.handleClick = this.handleClick.bind(this)
    }
  
    unusedMethod() {
      try {
        
      } catch (error) {
        
      } finally {
        if (1==2){
          return 1;
        } else {
          return 2;
        }
      }
    }

    handleClick () {
      axios.get(this.voteurl)
        .then(response => this.setState({username: response.data.title, vote: this.state.vote+1}))
    }
  
    render () {
      return (
        <div class="container">
            <button className='button' onClick={this.handleClick} type="button" class="btn btn-outline-success">+1</button>
            <p>{this.state.vote}</p>
        </div>
      )
    }
  }

  export default Vote;