import React, { Component } from 'react';
import Product from './Product';

class CocaCola extends Component {
  render () {
    return (
      <main role="main">
        <div class="jumbotron">
          <div class="container">
            <h1 class="display-3">CocaCola App v1</h1>
            <p>
              Cloud Academy is an enterprise-ready training platform that accelerates teams and digital transformation.
              Leverage our multi-cloud training library to move faster.
              Skills are built when knowledge, experience, and context intersect. Our vendor neutral training catalog is developed and maintained by experts on AWS, Azure, GCP, CI/CD, containers, security, IoT, data science, machine learning, big data, and beyond.

            </p>
            <p>
              <a class="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a>
            </p>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-md-4">              
                <Product/>
              </div>
              <div class="col-md-4">              
                <Product/>
              </div>
              <div class="col-md-4">              
                <Product/>
              </div>
          </div>
          <hr />
        </div>
      </main>
    )
  }
}

export default CocaCola;
