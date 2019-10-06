/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';
import { rateTrening } from '../Actions/StepsActions';
import { required } from '../Helpers/ReduxFormValidation';

class AddRate extends Component {

  onSubmit(values) {
    this.props.rateStep(values, this.props.id, this.props.uid).then(() => { this.props.dispatch(reset('CreateCommentForm'));});
  }

  renderSteps(field) {
    const { meta: { touched, error } } = field;
    const errStyle = {
      borderColor: 'red'
    };
    return (
      <div>
        <textarea className="form-control" style={touched && error ? errStyle : null} {...field.input} />
      </div>
    );
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          name="content"
          component={this.renderSteps}
          validate={required}
        />
        <div className="d-flex justify-content-end mt-1">
          <button type="submit" className="btn btn-success btn-sm">Save</button>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'CreateCommentForm'
})(
  connect((state, ownProps) => ({ uid: state.user.uid }), { rateTrening })(AddRate)
);