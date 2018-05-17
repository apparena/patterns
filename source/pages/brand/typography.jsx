import React from 'react';
import { Button, Card } from 'apparena-patterns-react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { tomorrow } from 'react-syntax-highlighter/styles/prism';

const title = 'Typography';

function render() {
  const head = document.getElementsByTagName('head')[0];
  const alreadyInserted = Array.from(head.children)
    .filter(child => child.id === 'aa-css').length;

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
        Typography
      </div>
      <div type="card-body">
        <h1>h1. Roboto heading</h1>
        <h2>h2. Roboto heading</h2>
        <h3>h3. Roboto heading</h3>
        <h4>h4. Roboto heading</h4>
        <h5>h5. Roboto heading</h5>
        <h6>h6. Roboto heading</h6>

        <section>
          <h2>Download</h2>

          <p>
            <Button
              href="https://s3.app-arena.com/brand/typography/RobotoTTF.zip"
            >
              Download TTF
            </Button>
          </p>

          <h2>Embed Font</h2>
          <p> To embed your selected fonts into a webpage,
            copy this code into the <code>&lt;head&gt;</code> of your HTML document.
          </p>
          <SyntaxHighlighter
            language="html"
            style={tomorrow}
          >
            {`<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">`}
          </SyntaxHighlighter>
        </section>
        <section>
          <h2>Specify in CSS</h2>
          <p> Use the following CSS rules to specify these families: </p>
          <SyntaxHighlighter
            language="css"
            style={tomorrow}
          >
            {`font-family: 'Roboto', sans-serif;`}
          </SyntaxHighlighter>
          <code>

          </code>
        </section>

      </div>
    </Card>
  );
}

export default {
  title,
  render,
};
