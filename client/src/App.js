import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import NatalityGraph from './components/NatalityGraph'
import MapChart from './components/MapChart'
import Selector from './components/Selector'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      data: [],
      query: 1
    }

    this.getCmpe255Query(this.state.query)
    
  }

  getCmpe255Query(query) {
    axios.get(`cmpe255hw1/${query}`)
      .then(res => {
        console.log(res.data)
        this.setState({ data: res.data })
      })
  }

  handleQuery = (queryValue) => {
      console.log(queryValue)
      this.setState({query: queryValue});
      this.getCmpe255Query(queryValue)
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="React-BigQuery"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            showMenuIconButton = {false}
          />
          <Selector onQueryChange={this.handleQuery} query={this.state.query}/>
          <NatalityGraph data={this.state.data}/>
          <MapChart data={this.state.data}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
