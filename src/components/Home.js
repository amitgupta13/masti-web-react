import React, { useEffect } from "react";
import { connect } from "react-redux";
import { profile } from "../actions";

const Home = ({ profile, token, profileData }) => {
  useEffect(() => {
    if (token !== "") {
      profile(token);
    }
  }, [token]);
  return (
    <div>
      <h1>My portfolio</h1>
      <strong>Name: </strong> {profileData.name}
      <div />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    profileData: state.auth.profile
  };
};

export default connect(
  mapStateToProps,
  { profile }
)(Home);
