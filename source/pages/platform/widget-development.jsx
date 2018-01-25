import React from 'react';
import {Card, Row, Col, Button, Tag} from 'apparena-patterns-react';
import Markdown from 'react-markdown';

const title = 'Widget development';

function render() {
    return [
        <Card key={'1'}>
            <div type="card-header">
                Develop and publish a Widget on App-Arena platform
            </div>
            <div type="card-body">
                <h3>Getting started</h3>

                <p>
                    To publish a new Widget on App-Arena Platform you need to fullfil the following steps:
                    <ol>
                        <li><a href="https://my.app-arena.com/projects">Create a new project</a> on App-Arena Platform</li>
                        <li>Create a new widget using the Yeoman CLI generator</li>
                        <li>Edit the widget</li>
                        <li>Build your widget template</li>
                        <li>Build a widget from your template</li>
                    </ol>
                </p>

                <h4>1. Create a new project</h4>

                <ol>
                    <li>
                        Head to <a href="https://my.app-arena.com/projects">https://my.app-arena.com/projects</a> and
                        create a new project
                    </li>
                    <li>Goto the default version > Templates > Create new template</li>
                    <li>Goto your new template > Apps > Create new app (Widget)</li>
                </ol>

                <h4>2. Generate widget</h4>

                <pre>
                    npm install -g yo
                    npm install -g generator-apparena-widget
                    yo apparena-widget
                </pre>

                Answer all questions of the generator.

                For more information about the generator head to: <a href="https://github.com/apparena/apparena-widget-generator">Widget generator on Github</a>


                <h4>3. Make some changes</h4>

                Start the node server including hot-reloading.

                <pre>
                    npm run start
                </pre>

                <p>
                    Edit the widget. E.g. <code>src/config/aa_config.json</code> or make some changes to
                    the render function of <code>src/containers/home.jsx</code>.
                </p>

                <h4>4. Build your widget template</h4>

                The widget template contains variables, which will be replaces for each customer later. This template
                can be generated using a NPM script.

                <pre>
                    npm run build:production
                </pre>

                <p>
                    This will generate your widget template, which you need to upload to a public host and add it to your
                    App-Arena Platform project. Then you will be able to generate new widgets out of your template.
                </p>

                <p>
                    So upload your widget to a server (in my case AWS S3)
                </p>

                <h4>5. Build a widget from your template</h4>

                Generate a widget instance from your widget template. The upload this template to a public host and use
                it on your website.

                <pre>
                    npm run XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                </pre>

            </div>
        </Card>
    ];
}

export default {
    title,
    render
};