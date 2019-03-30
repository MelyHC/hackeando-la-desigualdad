import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import * as Data from './data/ques.json';
import Usuario from './view/Usuario';
import Avatar from './view/Avatar';
import Quest from './view/Quest';
import './App.css';

class App extends Component {
  state = {
    avatar: [],
    questPath: ''
  }

  // sumTotalOrder = (arr) => {
  //   let sum = 0;
  //   arr.forEach(({ webPrice, count }) => {
  //     const num = parseFloat(webPrice.split(' ')[1]);
  //     sum += num * count
  //   });
  //   this.setState({ total: sum.toFixed(2) })
  // }

  // addCount = (id) => {
  //   const { orderList } = this.state;
  //   orderList.forEach(item => {
  //     if (item.id === id) item.count++;
  //   })

  //   this.sumTotalOrder(orderList);
  //   this.setState({ orderList });
  // }

  // addItem = (item) => {
  //   const { orderList } = this.state;

  //   if (orderList.find(({ id }) => id === item.id)) {
  //     this.addCount(item.id)
  //   } else {
  //     orderList.push(item)
  //   }
  //   this.sumTotalOrder(orderList);
  //   this.setState({ orderList });
  // }

  // removeItem = (index) => {
  //   const { orderList } = this.state;
  //   orderList.splice(index, 1);
  //   this.sumTotalOrder(orderList);
  //   this.setState({ orderList });
  // }

  // reduceCount = (id, index) => {
  //   const { orderList } = this.state;
  //   orderList.forEach(item => {
  //     if (item.id === id) {
  //       item.count--;
  //       if (item.count === 0) {
  //         this.removeItem(index)
  //         // if (item.count === 0) item.count = 1;
  //       }
  //     }
  //   })
  //   this.sumTotalOrder(orderList);
  //   this.setState({ orderList });
  // }

  // componentWillMount() {
  //   this.setState({ brands: Data.default })
  // }

  render() {
    const { avatar, questPath } = this.state;
    return (
      <Router basename={'/hackeando-la-desigualdad'}>
        <Switch>
          <Route
            path='/avatar'
            exact
            render={() => <Avatar />}
          />
          {
            avatar.length ?
              <Fragment>
                <Route
                  path='/usuario'
                  exact
                  render={() => <Usuario />}
                />
                <Route
                  path={`/${questPath}`}
                  exact
                  render={() => <Quest />}
                />
              </Fragment>
              : <Redirect to='/avatar' />
          }
        </Switch>
      </Router>
    )
  }
};

export default App;
