import React from "react";
import { Field, reduxForm } from "redux-form";
import { signup } from "../../actions";
import { connect } from "react-redux";
import history from "../../history";

class Signup extends React.Component {
  componentDidMount() {
    if (localStorage.getItem("token")) history.push("/");
  }
  renderError({ error, touched }) {
    if (touched && error)
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
  }
  renderInput = ({ input, label, meta }, type) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input type={type} {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };
  onSubmit = formValues => {
    this.props.signup(formValues);
  };

  render() {
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field
          name="name"
          component={a => this.renderInput(a, "text")}
          label="Enter Name"
        />
        <Field
          name="email"
          component={a => this.renderInput(a, "text")}
          label="Enter email"
        />
        <Field
          name="password"
          component={a => this.renderInput(a, "password")}
          label="Enter password"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = ({ name, email, password }) => {
  const errors = {};
  if (!name) {
    errors.name = "You must enter a name";
  }
  if (!email) {
    errors.email = "You must enter a email";
  }
  if (!password) {
    errors.password = "You must enter a password";
  }
  return errors;
};

const mapStateToProps = state => {
  return {
    token: state.auth.token
  };
};

const formWrapper = reduxForm({
  form: "signup",
  validate
})(Signup);

export default connect(
  mapStateToProps,
  { signup }
)(formWrapper);
