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
      <div>

        <h3>Tabs</h3>
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

        <hr/>

        <h3>Vertical</h3>
        <Nav vertical>
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

        <hr/>

        <h3>Inline</h3>
        <Nav inline>
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

        <hr/>

        <h3>Pills vertical</h3>
        <Nav pills vertical>
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
      </div>
    );
  }

}
