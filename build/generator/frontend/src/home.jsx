import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import * as components from './components/index';
import componentsList from './components/list.json';
import cloneDeep from 'lodash/cloneDeep';
import {Card, Col, FormGroup, Input, Nav, Navbar, NavItem, NavSecondaryGroup, ReactComponent, Row, Table} from 'apparena-patterns-react';
import styles from './styles/home.scss';

export default class Home extends ReactComponent {
    static propTypes = {
        location: PropTypes.object
    };

    getInitState() {
        const categories = componentsList;
        this.backupCategories = categories;
        return {
            active: '',
            currentComponent: undefined,
            searchQuery: '',
            categories
        };
    }

    componentWillMount() {
        if (this.props.params.component) {
            this.setState({
                active: this.props.params.component,
                currentComponent: components[this.props.params.component]
            });
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.params && nextProps.params.component) {
            this.setState({
                active: nextProps.params.component,
                currentComponent: components[nextProps.params.component]
            });
        } else if (nextProps.route && nextProps.route.path === '/') {
            this.setState({
                active: '',
                currentComponent: undefined
            });
        }
    }

    toggleVisibility(index) {
        const state = this.state;
        state.categories[index].visible = !state.categories[index].visible;
        this.setState({
            state
        });
    }

    search(e) {
        this.setState({
            searchQuery: e.target.value
        }, () => {
            if (this.state.searchQuery !== '') {
                const categories = cloneDeep(this.backupCategories);
                Object.keys(categories).forEach((cat) => {
                    categories[cat].componentList = categories[cat].componentList.filter((comp) => {
                        return comp.toLowerCase().includes(this.state.searchQuery.toLowerCase());
                    });

                    categories[cat].visible = categories[cat].componentList.length !== 0;
                });

                this.setState({
                    categories
                });
            } else {
                this.setState({
                    categories: this.backupCategories
                });
            }
        });
    }

    renderCategories(category, index) {
        return (
            <NavSecondaryGroup title={category.name} key={index} onClick={this.toggleVisibility.bind(this, index)}>
                <Nav pills stacked vertical>
                    {category.componentList.map((component, i) => {
                        return (
                            <NavItem key={i} active={this.state.active === component}>
                                <Link to={`/${component}`}>{component}</Link>
                            </NavItem>
                        );
                    })}
                </Nav>
            </NavSecondaryGroup>
        );
    }

    renderTable(category, index) {
        return (
            <div>
                <h3>{category.name}</h3>
                <Table hover key={index}>
                    <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Description
                        </th>
                        <th>
                            Latest
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {category.componentList.map((component, i) => {
                        return (
                            <tr key={`tr_${i}`}>
                                <td>
                                    <Link to={`/${component}`}>{component}</Link>
                                </td>
                                <td/>
                                <td/>
                            </tr>
                        );
                    })}
                    </tbody>
                </Table>
            </div>
        );
    }

    render() {
        return (
            <div className={styles.root}>
                <Row>
                    <Col xs="12">
                        <Navbar className={styles.navbarLight}>
                            <Row>
                                <Col autoWidth xsAutoContent>
                                    <a className={styles.navbarBrand} href="/">
                                        <img className={styles.logo} src="assets/logo.png" role="presentation"/>
                                    </a>
                                </Col>
                                <Col autoWidth>
                                    <Nav>
                                        <NavItem>
                                            <Link to="/">App-Arena Components</Link>
                                        </NavItem>
                                    </Nav>
                                </Col>
                            </Row>
                        </Navbar>
                    </Col>
                </Row>
                <Row>
                    <Col lg="2" sm="4" xs="5">
                        <div className={styles.sidebar}>
                            <div className={styles.searchBox}>
                                <FormGroup label={'Suchen'}>
                                    <Input
                                        id="searchInput"
                                        onChange={::this.search}
                                        defaultValue={this.state.searchQuery}
                                    />
                                </FormGroup>
                            </div>
                            {this.state.categories.map(::this.renderCategories)}
                        </div>
                    </Col>
                    <Col lg="10" sm="8" xs="7" className={styles.container}>
                        {this.state.currentComponent !== undefined ? <this.state.currentComponent/> : (
                            <Card>
                                <div type="card-header">
                                    Components
                                </div>
                                <div type="card-body">
                                    <p>
                                        These React components will help you build App-Arena applications
                                        and
                                        add-ons.
                                    </p>
                                    {this.state.categories.map(this.renderTable)}
                                </div>
                            </Card>
                        )}
                    </Col>
                </Row>
            </div>
        );
    }
}
