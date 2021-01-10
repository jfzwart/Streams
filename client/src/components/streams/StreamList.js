import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions'

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStream();
  }

  renderList() {
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          <i className="large middle aligned icon camera" />
          <div className="content">
            {stream.title}
          <div className="description">{stream.description}</div>
        </div>
      </div>)
    })
  }

  render() {
    return <div>StreamList</div>;

  }
}

export default connect(null, { fetchStream })(StreamList);
