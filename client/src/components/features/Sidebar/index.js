import React from 'react';
import MarketPlaceContainer from './MarketPlaceContainer';
import HideShowArrow from './MarketPlaceContainer/HideShowArrow';
import axios from 'axios';
import './style.css';

class SideBar extends React.Component {
  constructor() {
    super();
    this.state = {
      showSideBar: false,
      todos: []
    };
  }

  componentDidMount() {
    axios.get('/todos/minStar/0').then(response => {
      this.setState({
        todos: [...this.state.todos, response.data]
      });
    });
  }

  toggleSidebar = () => {
    this.setState({
      showSideBar: !this.state.showSideBar
    });
  };

  render() {
    let { showSideBar } = this.state;
    console.log(this.state);

    return (
      <div class={`sidebar-container ${showSideBar ? 'show' : 'hide'}`}>
        <h1 id="market-header">Market Place</h1>
        <MarketPlaceContainer data={this.state.todos[0]} />
        <HideShowArrow
          showSideBar={showSideBar}
          toggleSidebar={this.toggleSidebar}
        />
      </div>
    );
  }
}

export default SideBar;
