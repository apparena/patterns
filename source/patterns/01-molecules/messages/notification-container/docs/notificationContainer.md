### When and how to use this pattern?

The notification container provides a way to group multiple notifications together.
In most cases you'll want to use this pattern to keep track of notifications and
provide a unified way of displaying your notifications.  
To use it, simply pass an array of notifications to the NotificationContainer.

### Using Redux

Within various apps we use Redux to manage notifications and modals. To
implement that pattern you can do the follwing:

1. Add a NotificationContainer to your Root component and connect your
   redux store (e.g containers/myapp/index.tsx

```
...
class MyAppContainer extends React.Component {
  getInitState() {
    return {
      notifications: [],
    };
  }

  render() {
    const { notifications } = this.props;

    return (
      <ErrorBoundary>
        <NotificationContainer notifications={notifications} />
        <App
          {...this.props}
        />
      </ErrorBoundary>
    );
  }
}

export default connect(
  state => ({
    notifications: state.notifications,
  }),
  dispatch => ({
    ...bindActionCreators(notificationActions, dispatch),
  }),
)(UserContainer);

```

1. Add your `notificationActions` (e.g. actions/notifications.jsx)

```
import actionTypes from './types';

export function addNotification(id, props, closeTime = false) {
    return (dispatch) => {
        document.body.classList.add('notification-open');
        document.body.onkeydown = function (e) {
            if (e.keyCode === 27) {
                dispatch(closeNotification(id));
            }
        };
        if (closeTime) {
            setTimeout(() => {
                dispatch(closeNotification(id));
            }, closeTime);
        }
        dispatch({
            type: actionTypes.addNotification,
            id,
            props
        });
    };
}

export function closeNotification(id) {
    document.body.classList.remove('notification-open');
    document.body.onkeydown = null;
    return {
        type: actionTypes.closeNotification,
        id
    };
}

```

1. Add your reducer (e.g. reducers/notifications.jsx)

```
import actionTypes from '../actions/types';

const defaultState = [];

export default function overlaysReducer(state = defaultState, action = {}) {
    switch (action.type) {
        case actionTypes.addNotification:
            return [...state, {
                id: action.id,
                props: action.props
            }];
        case actionTypes.closeNotification:
            return state.filter((entry) => {
                return entry.id !== action.id;
            });
        default:
            return state;
    }
}
```

1. Add the reducer to your reducer index file (e.g. reducers/index.tsx)

```
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import modals from './modals';
import notifications from './notifications';

const appReducer = combineReducers({
  modals,
  notifications,
});

export default appReducer;

```

2. Add a notification within your component (e.g. components/app.jsx)

```
...
deleteEntityModal(entity, method = 'addModal', e) {
    if (e !== null) {
      e.stopPropagation();
    }

    this.props[method]('deleteKey', (
      <Modal
        type="danger"
      >
        <ModalHeader
          headerText="TEST HEADER"
          onClose={this.props.closeModal.bind(this, 'deleteKey')}
        />
        <ModalBody>
          <span>{this.translate('delete_player_msg')}</span>
        </ModalBody>
        <ModalFooter>
          <Button
            type="danger"
            state={(this.state.loading) ? 'loading' : 'default'}
            onClick={this.deleteEntity.bind(this, entity)}
          >
            {ReactComponent.t('delete')}
          </Button>
        </ModalFooter>
      </Modal>
    ));
  }
...
```
