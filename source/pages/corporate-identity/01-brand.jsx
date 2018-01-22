import React from 'react';
import {Card} from 'apparena-patterns-react';
import Icons from '../../patterns/00-atoms/icons/docs/icons.example';
import './styles.ci';

const title = 'Brand';

function render() {
    const head = document.getElementsByTagName('head')[0];
    const alreadyInserted = Array.from(head.children).filter((child) => {
        return child.id === 'aa-css';
    }).length;

    if (!alreadyInserted) {
        const link = document.createElement('link');
        link.id = 'aa-css';
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = '/dist/styles/corporate-identity.css';
        head.appendChild(link);
    }

    return (
        <Card>
            <div type="card-header">
                Brand
            </div>
            <div type="card-body">
                <section className="header__ci">
                    <div className="container__ci">
                        <div className="row__ci">
                            <div className="col-md-12__ci">
                                <div className="mt-5__ci text-center__ci">
                                    <h2 className="mb-4__ci">Brand.</h2>

                                    <h5 className="text-muted__ci mb-4__ci">
                                        Principles, guidelines and assets for designing and building App-Arena experiences
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="jump-to__ci bg-faded__ci py-5__ci">
                    <div className="container__ci">
                        <h2 className="text-primary__ci text-center__ci text-uppercase__ci mb-5__ci">Jump to</h2>
                        <div className="row__ci">
                            <div className="offset-md-1__ci col-md-2__ci text-center__ci">
                                <div className="m-usp__ci">
                                    <a href="#logos">
                                        <i className="m-usp-icon__ci aa-icon__ci aa-icon-logo-l__ci" />
                                        <h3 className="m-usp-title__ci">Logo</h3>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-2__ci text-center__ci">
                                <div className="m-usp__ci">
                                    <a href="#colors">
                                        <i className="m-usp-icon__ci aa-icon__ci aa-icon-color-l__ci" />
                                        <h3 className="m-usp-title__ci">Colors</h3>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-2__ci text-center__ci">
                                <div className="m-usp__ci">
                                    <a href="#typography">
                                        <i className="m-usp-icon__ci aa-icon__ci aa-icon-text-l__ci" />
                                        <h3 className="m-usp-title__ci">Typography</h3>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-2__ci text-center__ci">
                                <div className="m-usp__ci">
                                    <a href="#icons">
                                        <i className="m-usp-icon__ci aa-icon__ci aa-icon-icons-l__ci" />
                                        <h3 className="m-usp-title__ci">Icons</h3>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-2__ci text-center__ci">
                                <div className="m-usp__ci">
                                    <a href="#layout">
                                        <i className="m-usp-icon__ci aa-icon__ci aa-icon-layout-l__ci" />
                                        <h3 className="m-usp-title__ci">Layout</h3>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="header__ci">
                    <div className="container__ci">
                        <div className="row__ci">
                            <div className="col-md-12__ci">
                                <div className="mt-5__ci text-center__ci">
                                    <hr className="boldline__ci" />
                                    <h2 className="mb-4__ci">Icons</h2>

                                    <h5 className="text-muted__ci mb-4__ci">
                                        Use icons from our webfont to provide a unfied user experience.
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="icons" className="icons">
                    <Icons />
                </section>
            </div>
        </Card>
    );
}

export default {
    title,
    render
}