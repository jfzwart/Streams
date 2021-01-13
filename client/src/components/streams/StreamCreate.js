import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {

    onSubmit = (formValues) => {
      this.props.createStream(formValues);
      // console.log(formValues)
    }

  render() {
      // console.log(this.props)
      return (
          <div>
            <h3>Creat a stream</h3>
            <StreamForm onSubmit={this.onSubmit} />
          </div>
        )
    }
};


export default connect(
  null,
   { createStream }
   )(StreamCreate);
