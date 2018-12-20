import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamShow extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderStream({title, description}) {
    return (
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    )
  }

  render () {
    if (!this.props.stream) {
      return <div>Loading...</div>
    }
    return this.renderStream(this.props.stream)
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id ]}
}

export default connect(mapStateToProps, { fetchStream })(StreamShow);