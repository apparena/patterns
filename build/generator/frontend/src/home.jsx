import React, {PropTypes} from "react";
import {Link} from "react-router";
import * as components from "./components/index";
import componentsList from "./components/list.json";
import cloneDeep from "lodash/cloneDeep";
import {
    Col,
    Container,
    FormGroup,
    Input,
    Nav,
    Navbar,
    NavItem,
    NavSecondaryGroup,
    ReactComponent,
    Row
} from "apparena-patterns-react";
import styles from "./styles/home.scss";

export default class Home extends ReactComponent {
    static propTypes = {
        location: PropTypes.object,
    };

    getInitState() {
        const categories = componentsList;
        this.backupCategories = categories;
        return {
            active: "",
            currentComponent: undefined,
            searchQuery: "",
            categories
        };
    }

    componentWillMount() {
        if (this.props.params.component) {
            this.setState({
                active: this.props.params.component,
                currentComponent: components[this.props.params.component],
            });
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.params && nextProps.params.component) {
            this.setState({
                active: nextProps.params.component,
                currentComponent: components[nextProps.params.component],
            });
        } else if (nextProps.route && nextProps.route.path === "/") {
            this.setState({
                active: "",
                currentComponent: undefined,
            });
        }
    }

    toggleVisibility(index) {
        const state = this.state;
        state.categories[index].visible = !state.categories[index].visible;
        this.setState({
            state
        })
    }

    search(e) {
        this.setState({
            searchQuery: e.target.value,
        }, () => {
            if (this.state.searchQuery !== "") {
                const categories = cloneDeep(this.backupCategories);
                Object.keys(categories).forEach((cat) => {
                    categories[cat].componentList = categories[cat].componentList.filter((comp) => {
                        return comp.toLowerCase().includes(this.state.searchQuery.toLowerCase());
                    });

                    categories[cat].visible = categories[cat].componentList.length !== 0;
                });

                this.setState({
                    categories,
                });
            } else {
                this.setState({
                    categories: this.backupCategories,
                });
            }
        })
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
                        )
                    })}
                </Nav>
            </NavSecondaryGroup>
        )
    }

    render() {
        return (
            <div className={styles.root}>
                <Row>
                    <Col xs="12">
                        <Navbar className={styles.navbarLight}>
                            <Row>
                                <Col xs="2">
                                    <a className={styles.navbarBrand} href="/">
                                        <img className={styles.logo} src="assets/logo.png" role="presentation"/>
                                    </a>
                                </Col>
                                <Col xs="9">
                                    <Nav>
                                        <NavItem>
                                            <Link to="/">App-Arena Dokumentationsplattform</Link>
                                        </NavItem>
                                    </Nav>
                                </Col>
                            </Row>
                        </Navbar>
                    </Col>
                </Row>
                <Row>
                    <Col xs="2">
                        <div className={styles.sidebar}>
                            <div className={styles.searchBox}>
                                <FormGroup label={"Suchen"}>
                                    <Input id="searchInput" onChange={::this.search} defaultValue={this.state.searchQuery}/>
                                </FormGroup>
                            </div>
                            {this.state.categories.map(::this.renderCategories)}
                        </div>
                    </Col>
                    <Container className={styles.container}>
                        <Row>
                            <Col xs="10">
                                {this.state.currentComponent !== undefined ? <this.state.currentComponent /> : (
                                    <div>
                                        <h3>Willkommen zur Dokumentationsplattform</h3>
                                        <p>
                                            Klicken Sie auf eine Komponente um zu ihrer Dokumentation zu gelangen!
                                        </p>
                                    </div>
                                )}
                            </Col>
                        </Row>
                    </Container>
                </Row>
            </div>
        );
    }
}
