import React from 'react';
import PropTypes from 'prop-types';
import * as components from './components/index';
import componentsList from './components/list.json';
import cloneDeep from 'lodash/cloneDeep';
import {Card, Col, FormGroup, Input, Nav, Navbar, NavItem, NavSecondaryGroup, ReactComponent, Row, Table} from 'apparena-patterns-react';
import styles from './styles/home.scss';
import {Route, Link} from 'react-router-dom';
import {AnimatedSwitch} from "react-router-transition"
import pages from './pages';

const transitionStyles = {
    atEnter: {
        opacity: .25,
        x: 1,
        position: 1,
    },
    atLeave: {
        opacity: .25,
        x: 1,
        position: 1,
    },
    atActive: {
        opacity: 1,
        x: 0,
        position: 0,
    }
};

function mapStyles(styles) {
    return {
        opacity: styles.opacity,
        transform: `translateX(${styles.x * 1000}px)`,
        position: styles.position === 0 ? 'relative' : 'absolute',
        width: '100%'
    };
}

export default class Home extends ReactComponent {
    static propTypes = {
        history: PropTypes.object,
        location: PropTypes.object,
        match: PropTypes.object,
    };

    getInitState() {
        const categories = componentsList;
        this.backupCategories = categories;
        return {
            searchQuery: '',
            categories
        };
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
            <NavSecondaryGroup title={category.name} key={index}>
                <Nav pills stacked vertical>
                    {category.componentList.map((component, i) => {
                        return (
                            <NavItem key={i} active={this.props.location.pathname.split('/')[1] === component}>
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

    renderContentContainer() {
        return (
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
        );
    }

    renderPageLinks() {
        return pages.map((page, i) => {
            return (
                <NavItem key={i}>
                    <Link to={page.route}>{page.name}</Link>
                </NavItem>
            );
        });
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
                                        {this.renderPageLinks()}
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
                        <AnimatedSwitch
                            atEnter={transitionStyles.atEnter}
                            atLeave={transitionStyles.atLeave}
                            atActive={transitionStyles.atActive}
                            mapStyles={mapStyles}
                        >
                            {Object.keys(components).map((component, i) => {
                                return <Route exact path={`/${component}`} component={components[component]} key={component + i}/>
                            })}
                            {pages.map((page, i) => {
                                return <Route exact path={`/${page.route}`} component={page.component} key={page.route + i} />
                            })}
                        </AnimatedSwitch>

                        {this.props.location.pathname === '/' ? this.renderContentContainer() : null}
                    </Col>
                </Row>
            </div>
        );
    }
}
