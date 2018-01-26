import React from 'react';
import {Card, Row, Col, Button, Tag, Alert} from 'apparena-patterns-react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import {tomorrow} from 'react-syntax-highlighter/styles/prism';

const title = 'Widget development';

function render() {
    return [
        <Card key={'1'}>
            <div type="card-header">
                Develop a Widget on App-Arena platform
            </div>
            <div type="card-body">
                <h3>Getting started</h3>

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

                <SyntaxHighlighter
                    language={'bash'}
                    style={tomorrow}
                    showLineNumbers
                >
                    {`npm install -g yo
npm install -g generator-apparena-widget
yo apparena-widget`}
                </SyntaxHighlighter>

                Answer all questions of the generator.

                For more information about the generator head
                to: <a href="https://github.com/apparena/apparena-widget-generator">Widget generator on Github</a>

                <Alert type="info">
                    If you have already installed the generator: <strong>Please updrade it
                    using <code>yo</code></strong>
                </Alert>

                <h4>3. Make some changes</h4>

                Start the node server including hot-reloading.

                <SyntaxHighlighter
                    language={'bash'}
                    style={tomorrow}
                    showLineNumbers
                >
                    {`npm run start`}
                </SyntaxHighlighter>

                <h5>Define variables</h5>

                All content the customer should be able to change later for generating a customized widget, needs to be
                defined in <code>src/config/aa_config.json</code> and <code>src/config/aa_info.json</code>.
                These variables will be replaced automatically PLACEHOLDERS in the build process, so that you will get
                a <strong>Widget Template</strong>

                <h5>Use variables</h5>

                Ensure that your container (e.g. src/containers/home.jsx) is mapped to the config reducer:

                <SyntaxHighlighter
                    language={'javascript'}
                    style={tomorrow}
                    showLineNumbers
                >
                    {`export default connect(
  (state) => ({
    config: state.config,
  }),
  (dispatch) => ({
    ...bindActionCreators(logActions, dispatch)
  })
)(HomeContainer);`}
                </SyntaxHighlighter>

                Then you can use <code>this.props.config.YOURKEY</code> within your React containers or passed to
                your components.

                <h5>Change content</h5>

                <p>
                    Edit the widget. E.g. <code>src/config/aa_config.json</code> or make some changes to
                    the render function of <code>src/containers/home.jsx</code>.
                </p>

                <h4>4. Build your widget template</h4>

                The build script will replace all you variables from `aa_config.json` and `aa_info.json` with placeholders,
                which will be replaced by your customers configuration each time a new widget is created.

                <SyntaxHighlighter
                    language={'bash'}
                    style={tomorrow}
                    showLineNumbers
                >
                    {`npm run build:production`}
                </SyntaxHighlighter>

                Your `dist/main.min.js` widget template file has been generated.

                <h4>5. Upload your widget template</h4>

                <Alert type="info">
                    We will provide an API route later to upload your template.js file.
                </Alert>

                So upload your widget template to AWS S3 `aa-manager-20/companies/1/versions/354/template.js`

                <h4>6. Build a widget from your template</h4>

                Generate a widget instance from your widget template. Ensure that the files `build/apparena/config/config.json`
                and `build/apparena/config/info.json` contain the demo values, you want to have compiled into your widget.

                <SyntaxHighlighter
                    language={'bash'}
                    style={tomorrow}
                    showLineNumbers
                >
                    {`npm run build:widget`}
                </SyntaxHighlighter>

                Your `dist/main.HASH.js` widget file has been generated.

                <h4>7. Upload your widget</h4>

                <Alert type="info">
                    We will provide an API route later to upload your demo.HASH.js file.
                </Alert>

                So upload your widget to AWS S3 `aa-manager-20/companies/1/versions/354/widget.HASH.js`

            </div>
        </Card>,
        <Card key={'1'}>
            <div type="card-header">
                Publish your widget
            </div>
            <div type="card-body">
                <h3>Getting started</h3>

                <h4>1. Install your Widget on a channel</h4>

                In the first step of the 'development' process you created a new "App/Widget". To embed your widget on
                that channel, you need to publish it there: <a href="https://my.app-arena.com/apps/YOUR_APP_ID/publish/embed">https://my.app-arena.com/apps/YOUR_APP_ID/publish/embed</a>

            </div>
        </Card>
    ];
}

export default {
    title,
    render
};