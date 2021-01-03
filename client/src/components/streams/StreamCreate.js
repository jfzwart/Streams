import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
        );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`
    console.log(meta)
    // console.log(input)
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    );
  }
    // (
    //  <input
    //   onChange={formProps.input.onChange}
    //   value={formProps.input.value}
    //   />
    // );

    onSubmit(formValues) {
      // console.log(formValues)
    }

  render() {
      // console.log(this.props)
      return (
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
          <Field name="title" component={this.renderInput} label="Enter title"/>
          <Field name="description" component={this.renderInput} label="Entel description"/>
          <button className="ui button primary">Submit</button>
        </form>
        )
    }
};

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }

  if(!formValues.description) {
    errors.description = 'You must enter a descriptions'
  }

  return errors;
};

export default reduxForm({
  form: 'streamCreate',
  validate //name of the form
})(StreamCreate);
