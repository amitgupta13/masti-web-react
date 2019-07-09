import React, { useEffect, useState } from "react";

const Home = () => {
  const [profile, setProfile] = useState({});
  useEffect(() => {}, [profile]);
  return (
    <div>
      <h1>My portfolio</h1>
      <strong>Name: </strong> Amit Kumar Gupta
      <div />
    </div>
  );
};

export default Home;
