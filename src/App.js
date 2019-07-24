import React, { Component } from 'react';
import data from './data.json';
import './App.css';
import FeedItem from './FeedItem';

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = { feeds: data };
  }
  
  render() {    
    const feedItems = this.state.feeds.map(f => <FeedItem feed={f} />);    

    return (
      <div className="App">
        <header className="App-header">
          <p>
            <input type="date" />
          </p>
        </header>
        <div>
          {feedItems}
        </div>

        <div className="hidden">
          Added redux, redux-thunk, react-redux
          Put App in Provider
          Store = function creating store with reducer function
          Empty reducer

          Todo
          Simple shallow test for FeedItem
          Create actions
          Thunk in middleware
        </div>
      </div>
    );
  }
}
