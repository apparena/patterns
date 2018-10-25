import React from 'react';
import { Col, Icon, Row } from 'apparena-patterns-react';
import styles from './styles.module.scss';

export default class IconsExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    // Get the icons from the asset map
    const url = 'https://aa-fonts.s3.amazonaws.com/app-arena/app-arena.json';

    fetch(url)
      .then(res => res.json())
      .then((rows) => {
        this.setState({ data: rows });
      });
  }

  render() {
    return (
      <div>
        <h3>Sizes</h3>
        <Row>
          <Col xs="2" key="atoms-l" className={styles.iconColumn}>
            <Icon name="atoms-l" />
            <p>
              <code>&lt;Icon name="atoms-l"  /&gt;</code>
            </p>
          </Col>
          <Col xs="2" key="atoms-l" className={styles.iconColumn}>
            <Icon name="atoms-l" size="2x" />
            <p>
              <code>&lt;Icon name="atoms-l" size="2x" /&gt;</code>
            </p>
          </Col>
          <Col xs="2" key="atoms-l" className={styles.iconColumn}>
            <Icon name="atoms-l" size="3x" />
            <p>
              <code>&lt;Icon name="atoms-l" size="3x" /&gt;</code>
            </p>
          </Col>
          <Col xs="2" key="atoms-l" className={styles.iconColumn}>
            <Icon name="atoms-l" size="4x" />
            <p>
              <code>&lt;Icon name="atoms-l" size="4x" /&gt;</code>
            </p>
          </Col>
          <Col xs="2" key="atoms-l" className={styles.iconColumn}>
            <Icon name="atoms-l" size="5x" />
            <p>
              <code>&lt;Icon name="atoms-l" size="5x" /&gt;</code>
            </p>
          </Col>
        </Row>

        <h3>Fixed width</h3>
        <ul>
          <li>
            <Icon name="chevron-o-right" fixedWidth size="1x" />
            {' '}
Fixed width
          </li>
          <li>
            <Icon name="close" fixedWidth size="1x" />
            {' '}
Fixed width
          </li>
          <li>
            <Icon name="users" fixedWidth size="1x" />
            {' '}
Fixed width
          </li>
          <li>
            <Icon name="chevron-o-right" fixedWidth size="2x" />
            {' '}
Fixed width
          </li>
          <li>
            <Icon name="close" fixedWidth size="2x" />
            {' '}
Fixed width
          </li>
          <li>
            <Icon name="users" fixedWidth size="2x" />
            {' '}
Fixed width
          </li>
          <li>
            <Icon name="chevron-o-right" fixedWidth size="3x" />
            {' '}
Fixed width
          </li>
          <li>
            <Icon name="close" fixedWidth size="3x" />
            {' '}
Fixed width
          </li>
          <li>
            <Icon name="users" fixedWidth size="3x" />
            {' '}
Fixed width
          </li>
        </ul>
        <ul>
          <li>
            <Icon name="chevron-o-right" size="2x" />
            {' '}
Without fixed width
          </li>
          <li>
            <Icon name="close" size="2x" />
            {' '}
Without fixed width
          </li>
          <li>
            <Icon name="users" size="2x" />
            {' '}
Without fixed width
          </li>
        </ul>

        <h3>Animations</h3>
        <Row>
          <Col xs="2" key="atoms-l" className={styles.iconColumn}>
            <Icon name="atoms-l" pulse size="3x" />
            <p>
              <code>&lt;Icon name="atoms-l" pulse /&gt;</code>
            </p>
          </Col>
          <Col xs="2" key="atoms-l" className={styles.iconColumn}>
            <Icon name="atoms-l" spin size="3x" />
            <p>
              <code>&lt;Icon name="atoms-l" spin /&gt;</code>
            </p>
          </Col>
        </Row>

        <h3>Available icons</h3>
        <Row>
          {Object.keys(this.state.data)
            .sort()
            .map((key, index) => (
              <Col xs="2" key={key} className={styles.iconColumn}>
                <Icon name={key} size="2x" />
                <p>
                  <code>
&lt;Icon name="
                    {key}
" /&gt;
                  </code>
                </p>
              </Col>
            ))}
        </Row>
      </div>
    );
  }
}
