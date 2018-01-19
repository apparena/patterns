import React from 'react';
import {Card, Button} from 'apparena-patterns-react';
import Markdown from 'react-markdown';

// Title defines the caption in the sidebar navigation
export const title = 'Personality';

export default function Personality() {
    return [
        <Card key={'1'}>
            <div type="card-header">
                Personality
            </div>
            <div type="card-body">
                <Markdown
                    source={`
# We are digital gladiators!

We do everything to make our client successful! We are fast, professional and have a deep knowledge on
digital marketing and commerce!
                            `}
                />
                <Button type="outline-primary"
                        href="https://bitbucket.org/apparena/multimedia-contest/src"
                        className={styles.readMoreButton}
                >
                    Read more
                </Button>
            </div>
        </Card>,

    ];
}