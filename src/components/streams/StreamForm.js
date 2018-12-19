import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {
  renderError({error, touched}) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({
    input,
    label,
    meta
  }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;    
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    )
  }

  onSubmit = formProps => {
    this.props.onSubmit(formProps);
  }

  render () {
    return (
      <form 
        onSubmit={this.props.handleSubmit(this.onSubmit)} 
        className="ui form error"
        >
        <Field name="title" component={this.renderInput} label="Enter Title" type="text" />
        <Field name="description" component={this.renderInput} label="Enter Description" type="text" />
        <button className="ui button primary">Submit</button>
      </form>
    );   
  }
}

const validate = (formProps) => {
  const errors = {};

  if (!formProps.title) {
    errors.title = 'Required'
  }

  if (!formProps.description) {
    errors.description = 'Required'
  }

  return errors;
}

export default reduxForm({
  form: 'StreamForm',
  validate
})(StreamForm);