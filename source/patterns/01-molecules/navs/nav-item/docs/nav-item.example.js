import React from 'react';
import { NavItem } from 'apparena-patterns-react';

export default class NavItemExample extends React.Component {

  state = {
    activeItem: 'nav1'
  };

  handleChange(e) {
    this.setState({
      activeItem: e.target.id
    });
  }

  render() {
    return (
      <div>
        <h3>Tabs</h3>
        <div>
          <NavItem tabs active={this.state.activeItem === 'nav1'}>
            <a id="nav1" onClick={this.handleChange.bind(this)}>Item 1</a>
          </NavItem>
          <NavItem tabs active={this.state.activeItem === 'nav2'}>
            <a id="nav2" onClick={this.handleChange.bind(this)}>Item 2</a>
          </NavItem>
          <NavItem tabs active={this.state.activeItem === 'nav3'}>
            <a id="nav3" href="javascript:void(false);" onClick={this.handleChange.bind(this)}>Link
              1</a>
          </NavItem>
          <NavItem tabs active={this.state.activeItem === 'nav4'}>
            <a id="nav4" href="javascript:void(false);" onClick={this.handleChange.bind(this)}>Link
              2</a>
          </NavItem>
          <NavItem tabs active={this.state.activeItem === 'nav5'} disabled>
            <a id="nav5" onClick={this.handleChange.bind(this)}>Disabled item</a>
          </NavItem>
        </div>

        <hr/>

        <h3>Vertical</h3>
        <div>
          <NavItem vertical active={this.state.activeItem === 'nav1'}>
            <a id="nav1" onClick={this.handleChange.bind(this)}>Item 1</a>
          </NavItem>
          <NavItem vertical active={this.state.activeItem === 'nav2'}>
            <a id="nav2" onClick={this.handleChange.bind(this)}>Item 2</a>
          </NavItem>
          <NavItem vertical active={this.state.activeItem === 'nav3'}>
            <a id="nav3" href="javascript:void(false);" onClick={this.handleChange.bind(this)}>Link
              1</a>
          </NavItem>
          <NavItem vertical active={this.state.activeItem === 'nav4'}>
            <a id="nav4" href="javascript:void(false);" onClick={this.handleChange.bind(this)}>Link
              2</a>
          </NavItem>
          <NavItem vertical active={this.state.activeItem === 'nav5'} disabled>
            <a id="nav5" onClick={this.handleChange.bind(this)}>Disabled item</a>
          </NavItem>
        </div>

        <hr/>

        <h3>Justified</h3>
        <div>
          <NavItem justified active={this.state.activeItem === 'nav1'}>
            <a id="nav1" onClick={this.handleChange.bind(this)}>Item 1</a>
          </NavItem>
          <NavItem justified active={this.state.activeItem === 'nav2'}>
            <a id="nav2" onClick={this.handleChange.bind(this)}>Item 2</a>
          </NavItem>
          <NavItem justified active={this.state.activeItem === 'nav3'}>
            <a id="nav3" href="javascript:void(false);" onClick={this.handleChange.bind(this)}>Link
              1</a>
          </NavItem>
          <NavItem justified active={this.state.activeItem === 'nav4'}>
            <a id="nav4" href="javascript:void(false);" onClick={this.handleChange.bind(this)}>Link
              2</a>
          </NavItem>
          <NavItem justified active={this.state.activeItem === 'nav5'} disabled>
            <a id="nav5" onClick={this.handleChange.bind(this)}>Disabled item</a>
          </NavItem>
        </div>

        <hr/>

        <h3>Inline</h3>
        <div>
          <NavItem active={this.state.activeItem === 'nav1'}>
            <a id="nav1" onClick={this.handleChange.bind(this)}>Item 1</a>
          </NavItem>
          <NavItem active={this.state.activeItem === 'nav2'}>
            <a id="nav2" onClick={this.handleChange.bind(this)}>Item 2</a>
          </NavItem>
          <NavItem active={this.state.activeItem === 'nav3'}>
            <a id="nav3" href="javascript:void(false);" onClick={this.handleChange.bind(this)}>Link
              1</a>
          </NavItem>
          <NavItem active={this.state.activeItem === 'nav4'}>
            <a id="nav4" href="javascript:void(false);" onClick={this.handleChange.bind(this)}>Link
              2</a>
          </NavItem>
          <NavItem active={this.state.activeItem === 'nav5'} disabled>
            <a id="nav5" onClick={this.handleChange.bind(this)}>Disabled item</a>
          </NavItem>
        </div>

        <hr/>

        <h3>Pills vertical</h3>
        <div>
          <NavItem pills active={this.state.activeItem === 'nav1'}>
            <a id="nav1" onClick={this.handleChange.bind(this)}>Item 1</a>
          </NavItem>
          <NavItem pills active={this.state.activeItem === 'nav2'}>
            <a id="nav2" onClick={this.handleChange.bind(this)}>Item 2</a>
          </NavItem>
          <NavItem pills active={this.state.activeItem === 'nav3'}>
            <a id="nav3" href="javascript:void(false);" onClick={this.handleChange.bind(this)}>Link
              1</a>
          </NavItem>
          <NavItem pills active={this.state.activeItem === 'nav4'}>
            <a id="nav4" href="javascript:void(false);" onClick={this.handleChange.bind(this)}>Link
              2</a>
          </NavItem>
          <NavItem pills active={this.state.activeItem === 'nav5'} disabled>
            <a id="nav5" onClick={this.handleChange.bind(this)}>Disabled item</a>
          </NavItem>
        </div>
      </div>
    );
  }

}
