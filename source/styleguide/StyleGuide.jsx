import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'react-styleguidist/lib/rsg-components/Styled';

const xsmall = '@media (max-width: 600px)';

const styles = ({
  font, base, light, link, baseBackground, mq,
}) => ({
  root: {
    color: base,
    backgroundColor: base,
  },
  header: {
    color: '#000',
    backgroundColor: '#FFF',
    height: '50px',
    borderBottom: '2px solid #F8F9FA',
  },
  bar: {
    display: 'flex',
    alignItems: 'center',
    [xsmall]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  nav: {
    marginLeft: 'auto',
    marginRight: '-0.5em',
    [xsmall]: {
      margin: [[10, 0, 0]],
    },
  },
  content: {
    backgroundColor: base,
    maxWidth: 1000,
    padding: [[15, 30]],
    margin: [[0, 'auto']],
    [mq.small]: {
      padding: 15,
    },
    display: 'block',
  },
  components: {
    overflow: 'auto', // To prevent the pane from growing out of the screen
  },
  sidebar: {
    position: 'absolute',
    left: 0,
    backgroundColor: '#FFF',
    top: '50px',
    height: '100%',
    borderRight: '2px solid #F8F9FA',
  },
});

export function StyleGuideRenderer({
  classes, title, homepageUrl, children, toc
}) {
  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <div className={classes.content}>
          <div className={classes.bar}>
            <nav className={classes.nav}>
            </nav>
          </div>
        </div>
      </header>
      <main className={classes.content}>
        {children}
        <div className={classes.sidebar}>
          {toc}
        </div>
      </main>
    </div>
  );
}

StyleGuideRenderer.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  homepageUrl: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  toc: PropTypes.node.isRequired
};

export default Styled(styles)(StyleGuideRenderer);
