import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin(stream) {
    if (stream.userId === this.props.currentUserId)
    return (
      <div className="right floated content">
        <button className="ui button primary">
        Edit
        </button>
        <button className="ui button negative">
        Delete
        </button>
      </div>
      )
  }

// in order to correctly style the buttons, we need to move them to the top of the div
  renderList() {
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
        <div>{this.renderAdmin(stream)}</div>
          <i className="large middle aligned icon camera" />
          <div className="content">
            {stream.title}
          <div className="description">{stream.description}</div>
        </div>
      </div>)
    })
  }


  render() {
    return (
        <div>
          <h2>Streams</h2>
          <div className="ui celled list">{this.renderList()}</div>
        </div>
      )
  }
}

const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams),
    currentUserID: state.auth.userId
  };
};

export default connect(
  mapStateToProps,
  { fetchStreams }
  )(StreamList);
