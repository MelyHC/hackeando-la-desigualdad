import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Collaborator from './view/Collaborator';
import Home from './view/Home';
import Category from './view/Category';
import './App.css';

import firebase from 'firebase';
// import * as Data from './data/ques.json';

firebase.initializeApp({
  apiKey: "AIzaSyAoMIDwqVmYzHZTRKOG_z5tllHe5W5TtwU",
  authDomain: "menos-estereotipos.firebaseapp.com",
  projectId: "menos-estereotipos",
})

const db = firebase.firestore();
// const settings = {/* your settings... */ timestampsInSnapshots: true };
// db.settings();

class App extends Component {
  state = {
    urlCategory: '',
    activities: []
  }

  // handleClick = () => {
  //   const { user, items, totalPrice } = this.state.newOrder;
  //   db.collection("orders").add({
  //     user, items, totalPrice
  //   })
  //     .then(docRef => {
  //       this.setState({
  //         newOrder: {
  //           user: '',
  //           totalPrice: 0,
  //           items: []
  //         }
  //       })
  //       console.log("Document written with ID: ", docRef.id);
  //     })
  //     .catch((error) => {
  //       console.error("Error adding document: ", error);
  //     });
  // }

  selectCategory = (category) => this.setState({ urlCategory: category })

  componentDidMount() {
    const { activities } = this.state;

    db.collection('activities').get().then(snap => {
      snap.forEach((doc) => {
        doc.data().id = doc.id
        activities.push(doc.data());
        this.setState({
          activities
        })
      });
    });

  }

  render() {
    const { urlCategory, activities } = this.state;

    return (
      <Router basename={'/hackeando-la-desigualdad'}>
        <Switch>
          <Route
            path='/'
            exact
            render={() => <Home activities={activities} selectCategory={this.selectCategory} />}
          />
          <Route
            path={`/${urlCategory}`}
            exact
            render={() => <Category activities={activities} currentCategory={urlCategory} />}
          />
          <Route
            path='/collaborator'
            exact
            render={() => <Collaborator />}
          />
        </Switch>
      </Router>
    )
  }
};

export default App;
