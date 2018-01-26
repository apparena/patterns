import React from 'react';
import {Card} from 'apparena-patterns-react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import {tomorrow} from 'react-syntax-highlighter/styles/prism';

const title = 'SDK Usage';

function render() {
    return [
        <Card key={'1'}>
            <div type="card-header">
                Use Analytics.js to send data to our platform
            </div>
            <div type="card-body">
                <h3>Advantages</h3>
                <ul>
                    <li>Send and monitor data within our platform</li>
                </ul>

                <h3>Installation</h3>

                <p>
                    To enable your web app to send data to our platform, you need to integrate our analytics.js SDK to
                    your web app code.

                    Add this to your <code>&lt;head&gt;</code> section of your app:
                </p>

                <SyntaxHighlighter
                    language={'html'}
                    style={tomorrow}
                    showLineNumbers
                >
                    {`<script src="https://cdn-am.app-arena.com/v1/sdk.js" id="aa_analytics"></script>`}
                </SyntaxHighlighter>

                <p>
                    And this to your footer script. Please be aware of the Variables (App-ID and Company-ID) inserted by
                    the PHP SDK!
                </p>

                <SyntaxHighlighter
                    language={'html'}
                    style={tomorrow}
                    showLineNumbers
                >
                    {`<script>
    if (window.analytics) {
        analytics.initialize({
            AppArena: {
                appId: <?=$app_manager->getId()?>,
                companyId: <?=$app_manager->getInfo('companyId')?>
            }
        }, {initialPageview: true})
    }
</script>`}
                </SyntaxHighlighter>

                <h3>Usage</h3>
                <p>
                    The SDK has registered an analytics object within the window object. You can use one of the
                    following functions to send data to the cluster:
                </p>

                <h4>page</h4>
                <p>
                    The page call lets you record whenever a user sees a page of your website, along with any optional
                    properties about the page.
                    For more information
                    see <a href="https://segment.com/docs/spec/page/">https://segment.com/docs/spec/page/</a>
                </p>

                <SyntaxHighlighter
                    language={'javascript'}
                    style={tomorrow}
                    showLineNumbers
                >
                    {`window.analytics.page('Home');`}
                </SyntaxHighlighter>

                <h4>track</h4>
                <p>
                    The track API call is how you record any actions your users perform, along with any properties that
                    describe the action.
                    For more information
                    see <a href="https://segment.com/docs/spec/track/">https://segment.com/docs/spec/track/</a>
                </p>

                <SyntaxHighlighter
                    language={'javascript'}
                    style={tomorrow}
                    showLineNumbers
                >
                    {`window.analytics.track('Signed Up', {
  plan: "Pro Annual",
  accountType: "Facebook"
});`}
                </SyntaxHighlighter>

                <h4>identify</h4>
                <p>
                    identify lets you tie a user to their actions and record traits about them. It includes a unique
                    User ID and any optional traits you know about them like their email, name, etc.
                    For more information
                    see <a href="https://segment.com/docs/spec/indentify/">https://segment.com/docs/spec/indentify/</a>
                </p>

                <SyntaxHighlighter
                    language={'javascript'}
                    style={tomorrow}
                    showLineNumbers
                >
                    {`window.analytics.identify('user@email.com', {
    'name': 'John Doe',
    'email': 'user@email.com',
    'gender': 'male'
);`}
                        </SyntaxHighlighter>

                        <h4>alias</h4>
                        <p>
                        The alias method is used to merge two user identities, effectively connecting two sets of user data
                        as one. This is an advanced method, but it is required to manage user identities successfully in
                        some of our destinations.
                        For more information
                        see <a href='https://segment.com/docs/spec/alias/'>https://segment.com/docs/spec/alias/</a>
                        </p>

                        <SyntaxHighlighter
                        language={'javascript'}
                        style={tomorrow}
                        showLineNumbers
                        >
                        {`window.analytics.alias('user@email.com');`}
                        </SyntaxHighlighter>

                        <h4>group</h4>
                        <p>
                        The group API call is how you associate an individual user with a group—be it a company,
                        organization, account, project, team or whatever other crazy name you came up with for the same
                        concept!
                        For more information
                        see <a href="https://segment.com/docs/spec/group/">https://segment.com/docs/spec/group/</a>
                        </p>

                        <SyntaxHighlighter
                        language={'javascript'}
                        style={tomorrow}
                        showLineNumbers
                        >
                    {`window.analytics.group('user@email.com', {
  name: "Initech",
  industry: "Technology",
  employees: 329,
  plan: "enterprise",
  "total billed": 830
});`}
                        </SyntaxHighlighter>

                        <h3>Debugging</h3>
                        If you want more detailled debug information about the Analytics JS behaviour type:

                        <SyntaxHighlighter
                        language={'javascript'}
                        style={tomorrow}
                        showLineNumbers
                        >
                        {`window.analytics.debug();`}
                        </SyntaxHighlighter>

                        Hit enter and reload the page. You should see detailled logs in your Dev-Tools console now.
                        </div>
                        </Card>
                        ];
                        }

                    export default {
                    title,
                    render
                };