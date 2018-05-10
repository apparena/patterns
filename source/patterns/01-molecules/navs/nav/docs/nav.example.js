import React from 'react';
import { Nav, NavItem } from 'apparena-patterns-react';

export default class NavExample extends React.Component{

  state = {
    activeItem: "nav1"
  };

  handleChange(e){
    this.setState({
      activeItem: e.target.id
    });
  }

  render() {
    return (
      <Nav tabs>
        <NavItem active={this.state.activeItem === "nav1"}>
          <a id="nav1" onClick={this.handleChange.bind(this)}>Active item</a>
        </NavItem>
        <NavItem active={this.state.activeItem === "nav2"}>
          <a id="nav2" onClick={this.handleChange.bind(this)}>Default item</a>
        </NavItem>
        <NavItem active={this.state.activeItem === "nav3"}>
          <a id="nav3" onClick={this.handleChange.bind(this)}>Default item</a>
        </NavItem>
      </Nav>
    );
  }

}
