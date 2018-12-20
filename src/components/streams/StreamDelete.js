import React from 'react';
import Modal from '../Modal';
import history from '../../history';

class StreamDelete extends React.Component {
  actions = (
    <React.Fragment>
      <button className="ui button negative">Delete</button>
      <button className="ui button">Cancel</button>
    </React.Fragment>
  );

  render () {
    return (
      <div>
        <h3>Stream Delete</h3>
        <Modal
          title="Delete Stream"
          content="Are you sure you want to delete this string?"
          actions={this.actions}
          onDismiss={() => history.push('/')}
        ></Modal>
      </div>
    );
  }
}

export default StreamDelete;