import React from 'react';
import PropTypes from 'prop-types';
import * as components from './components/index';
import componentsList from './components/list.json';
import cloneDeep from 'lodash/cloneDeep';
import {Card, Col, FormGroup, Input, Nav, Navbar, NavItem, NavSecondaryGroup, ReactComponent, Row, Table} from 'apparena-patterns-react';
import styles from './styles/home.scss';
import {Route, Link} from 'react-router-dom';
import {AnimatedSwitch} from "react-router-transition"
import staticPages from './staticPages';

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
        const minimizedCategories = categories.map((_) => {
            return true;
        });
        minimizedCategories[-1] = true;

        const hiddenStaticPages = {};
        staticPages.forEach((page) => {
            hiddenStaticPages[page.name] = false;
        });
        this.backupHiddenStaticPages = hiddenStaticPages;

        return {
            searchQuery: '',
            categories,
            minimizedCategories,
            hiddenStaticPages,
        };
    }

    search(e) {
        this.setState({
            searchQuery: e.target.value
        }, () => {
            if (this.state.searchQuery !== '') {
                const categories = cloneDeep(this.backupCategories);
                const hiddenStaticPages = cloneDeep(this.backupHiddenStaticPages);

                Object.keys(categories).forEach((cat) => {
                    categories[cat].componentList = categories[cat].componentList.filter((comp) => {
                        return comp.toLowerCase().includes(this.state.searchQuery.toLowerCase());
                    });

                    categories[cat].visible = categories[cat].componentList.length !== 0;
                });

                staticPages.forEach((page) => {
                    if (!page.name.toLowerCase().includes(this.state.searchQuery.toLowerCase())) {
                        hiddenStaticPages[page.name] = true;
                    } else {
                        hiddenStaticPages[page.name] = false;
                    }
                });

                this.setState({
                    categories,
                    hiddenStaticPages
                });
            } else {
                this.setState({
                    categories: this.backupCategories,
                    hiddenStaticPages: this.backupHiddenStaticPages,
                });
            }
        });
    }

    toggleCategory(index) {
        const minimizedCategories = this.state.minimizedCategories;
        minimizedCategories[index] = !minimizedCategories[index];

        this.setState({
            minimizedCategories
        });
    }

    scrollToTop() {
        window.scrollBy({
            top: -2000,
            behavior: 'smooth'
        });
    }

    renderCategories(category, index) {
        if (category.visible) {
            return (
                <NavSecondaryGroup
                    title={category.name}
                    key={index}
                    onClick={this.toggleCategory.bind(this, index)}
                    className={styles.categoryNavTitle}
                >
                    <Nav pills stacked vertical>
                        {this.state.minimizedCategories[index] === true ? category.componentList.map((component, i) => {
                            return (
                                <NavItem key={i} active={this.props.location.pathname.split('/')[1] === component}>
                                    <Link to={`/${component}`} onClick={::this.scrollToTop}>{component}</Link>
                                </NavItem>
                            );
                        }) : null}
                    </Nav>
                </NavSecondaryGroup>
            );
        }
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

    renderStaticPageLinks() {
        if (!Object.keys(this.state.hiddenStaticPages).reduce((a, b) => {
                return a & this.state.hiddenStaticPages[b] === true;
            }, true)) {
            return (
                <NavSecondaryGroup
                    title="Pages"
                    onClick={this.toggleCategory.bind(this, -1)}
                    className={styles.categoryNavTitle}
                >
                    <Nav pills stacked vertical>
                        {this.state.minimizedCategories[-1] === true ? staticPages.map((page, i) => {
                            if (!this.state.hiddenStaticPages[page.name]) {
                                return (
                                    <NavItem key={i} active={this.props.location.pathname.split('/')[1] === page.name}>
                                        <Link to={page.route} onClick={::this.scrollToTop}>{page.name}</Link>
                                    </NavItem>
                                );
                            }

                            return null
                        }) : null}
                    </Nav>
                </NavSecondaryGroup>
            );
        }
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
                    <Col lg="3" sm="4" xs="5" id="sidebar-menu">
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
                            {this.renderStaticPageLinks()}
                            {this.state.categories.map(::this.renderCategories)}
                        </div>
                    </Col>
                    <Col lg="9" sm="8" xs="7" className={styles.container}>
                        <AnimatedSwitch
                            atEnter={transitionStyles.atEnter}
                            atLeave={transitionStyles.atLeave}
                            atActive={transitionStyles.atActive}
                            mapStyles={mapStyles}
                        >
                            {Object.keys(components).map((component, i) => {
                                return <Route exact path={`/${component}`} component={components[component]} key={component + i}/>
                            })}
                            {staticPages.map((page, i) => {
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
