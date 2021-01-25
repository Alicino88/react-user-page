import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "./Card";
import Grid from "@material-ui/core/Grid";

const Home = () => {
  /*when the DOM has rendered the getUsers function is triggered and the users are fetched via Axios.
  Once the users are fetched, the setUsers method sets the current state variable. The state variable
  is an array which is then looped through with the map method*/
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    try {
      const users = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      /*setUsers returns the state varable which in this case is an array of objects which we loop through and display on the page*/
      setUsers(users.data);

      console.log(users.data);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);
  //*We have added an empty array, dependency array, to prevent the useEffect from running at every render.

  return (
    <div className="style">
      <h1
        style={{
          textAlign: "center",
          color: "#C1EDCC",
          marginBottom: "60px",
          fontSize: "60px",
        }}
      >
        Users
      </h1>

      <Grid container spacing={10} justify="center">
        {users.map((user) => (
          <Grid item key={user.id}>
            {/*curly braces are used for the prop because it's a dynamic value*/}
            <UserCard
              name={user.name}
              username={"@" + user.username}
              website={user.website}
              id={user.id}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
