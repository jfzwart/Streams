import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';
import { Link } from 'react-router-dom';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/streams/edit/${stream.id}`} className="ui button primary">Edit</Link>
          <button className="ui button negative">
          Delete
          </button>
        </div>
        )
    }
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

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
          <div style={{ textAlign: 'right' }}>
            <Link to="/streams/new" className="ui button primary">
              Create Stream
            </Link>
          </div>
        )
    }
  }

  render() {
    return (
        <div>
          <h2>Streams</h2>
          <div className="ui celled list">{this.renderList()}</div>
          <div className="">{this.renderCreate()}</div>
        </div>
      )
  }
}

const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { fetchStreams }
  )(StreamList);
