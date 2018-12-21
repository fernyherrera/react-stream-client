import React from 'react';
import flv from 'flv.js';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamShow extends React.Component {
  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
  }

  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderStream({title, description}) {
    return (
      <div>
        <video src="" style={{width: '100%'}} controls ref={this.videoRef}></video>
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