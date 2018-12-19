import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamEdit extends React.Component {
  
  componentDidMount() {
    const streamId = this.props.match.params.id;
    this.props.fetchStream(streamId);
  }

  renderEdit = stream => {
    if (!stream) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>{stream.title}</h3>
        <p>{stream.description}</p>
      </div>
    )
  }

  render () {
    return (
      <div>
        <h2>Stream Edit</h2>
        {this.renderEdit(this.props.stream)}
      </div>
    );
  };
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream })(StreamEdit);