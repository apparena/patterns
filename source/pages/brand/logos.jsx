import React from 'react';
import {Card, Row, Col, Button, ReactComponent} from 'apparena-patterns-react';
import styles from './brand.scss';

const title = 'Logos';

class render extends ReactComponent {
    static defaultProps = {
        logosVector: [
            {
                caption: 'Logo bright',
                url: 'https://s3.app-arena.com/brand/logos/AA_Logo_bright.svg',
                format: 'svg'
            },
            {
                caption: 'Logo bright transparent',
                url: 'https://s3.app-arena.com/brand/logos/AA_Logo_bright_trans.svg',
                format: 'svg'
            },
            {
                caption: 'Logo dark',
                url: 'https://s3.app-arena.com/brand/logos/AA_Logo_dark.svg',
                format: 'svg'
            },
            {
                caption: 'Logo dark transparent',
                url: 'https://s3.app-arena.com/brand/logos/AA_Logo_dark_trans.svg',
                format: 'svg'
            },
            {
                caption: 'Logo circle grey',
                url: 'https://s3.app-arena.com/brand/logos/AA_Logo_circle_grey.svg',
                format: 'svg'
            },
            {
                caption: 'Logo circle dark',
                url: 'https://s3.app-arena.com/brand/logos/AA_Logo_circle_dark.svg',
                format: 'svg'
            },
            {
                caption: 'Logo circle bright',
                url: 'https://s3.app-arena.com/brand/logos/AA_Logo_circle_bright.svg',
                format: 'svg'
            }

        ],
        logosDark: [
            {
                caption: 'Logo dark 150px',
                url: 'https://s3.app-arena.com/brand/logos/AA_Logo_dark_150px.png',
                format: 'png'
            },
            {
                caption: 'Logo dark 150px transparent',
                url: 'https://s3.app-arena.com/brand/logos/AA_Logo_dark_150px_trans.png',
                format: 'png'
            },
            {
                caption: 'Logo dark 500px',
                url: 'https://s3.app-arena.com/brand/logos/AA_Logo_dark_500px.png',
                format: 'png'
            },
            {
                caption: 'Logo dark 500px transparent',
                url: 'https://s3.app-arena.com/brand/logos/AA_Logo_dark_500px_trans.png',
                format: 'png'
            },
            {
                caption: 'Logo dark 1000px',
                url: 'https://s3.app-arena.com/brand/logos/AA_Logo_dark_1000px.png',
                format: 'png'
            },
            {
                caption: 'Logo dark 1000px transparent',
                url: 'https://s3.app-arena.com/brand/logos/AA_Logo_dark_1000px_trans.png',
                format: 'png'
            }

        ],
        logosBright: [
            {
                caption: 'Logo bright 500px',
                url: 'https://s3.app-arena.com/brand/logos/AA_Logo_bright_500px.png',
                format: 'png'
            },
            {
                caption: 'Logo bright 500px transparent',
                url: 'https://s3.app-arena.com/brand/logos/AA_Logo_bright_500px_trans.png',
                format: 'png'
            },
            {
                caption: 'Logo bright 1000px',
                url: 'https://s3.app-arena.com/brand/logos/AA_Logo_bright_1000px.png',
                format: 'png'
            },
            {
                caption: 'Logo bright 1000px transparent',
                url: 'https://s3.app-arena.com/brand/logos/AA_Logo_bright_1000px_trans.png',
                format: 'png'
            },
            {
                caption: 'Logo bright 1024px Square',
                url: 'https://s3.app-arena.com/brand/logos/AA_Logo_bright_quadrat-1024px.jpg',
                format: 'jpg'
            },
            {
                caption: 'Logo bright 1024px Square transparent',
                url: 'https://s3.app-arena.com/brand/logos/AA_Logo_bright_quadrat-1024px_trans.png',
                format: 'png'
            }

        ]
    };

    /**
     * Renders the Markup for 1 logo
     */
    renderLogo(logo) {
        return (
            <div className={styles.logoContainer}>
                <Row>
                    <Col sm="3">
                        <img src={logo.url} alt={logo.caption} />
                    </Col>
                    <Col sm="9">
                        <p>
                            [{logo.format}] {logo.caption}
                        </p>
                        <Button type="outline-primary"
                                href={logo.url}
                                className={styles.readMoreButton}
                        >
                            Download
                        </Button>
                    </Col>
                </Row>
            </div>
        );
    }

    render() {
        return (
            <div>
                <Card>
                    <div type="card-header">
                        Logos vector
                    </div>
                    <div type="card-body">
                        {/*Render all logos*/}
                        {this.props.logosVector.map((logo) => {
                            return this.renderLogo(logo);
                        })}
                    </div>
                </Card>
                <Card>
                    <div type="card-header">
                        Logos dark
                    </div>
                    <div type="card-body">
                        {/*Render all logos*/}
                        {this.props.logosDark.map((logo) => {
                            return this.renderLogo(logo);
                        })}
                    </div>
                </Card>
                <Card>
                    <div type="card-header">
                        Logos bright
                    </div>
                    <div type="card-body">
                        {/*Render all logos*/}
                        {this.props.logosBright.map((logo) => {
                            return this.renderLogo(logo);
                        })}
                    </div>
                </Card>
            </div>
        );
    }
}

export default {
    title,
    render
};