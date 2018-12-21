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
    const { id } = this.props.match.params;

    this.props.fetchStream(id);
    this.buildPlayer();
  }

  componentDidUpdate() {
    this.buildPlayer();
  }

  renderStream({title, description}) {
    return (
      <div>
        <video style={{width: '100%'}} controls ref={this.videoRef}></video>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    )
  }

  buildPlayer() {
    if (this.player || !this.props.stream) {
      return;
    }

    const { id } = this.props.match.params;
    this.player = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${id}.flv`
    });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
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