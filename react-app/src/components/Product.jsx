import React, { Component } from 'react';
import './CocaCola.css';
import Vote from './Vote';

class Product extends Component{  
    render () {
      return (
        <div class="container">
          <h2>CocaCola</h2>
          <p>
            CARBONATED WATER, HIGH FRUCTOSE CORN SYRUP, CARAMEL COLOR, PHOSPHORIC ACID, NATURAL FLAVORS, CAFFEINE.
          </p>
          <div class="container">
            <div class="row">
              <div class="col">
                <img src="./img/cocacola-can.jpg" alt="cocacola" class="center-block"/>
              </div>
              <div class="col">
                <Vote/>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  export default Product;