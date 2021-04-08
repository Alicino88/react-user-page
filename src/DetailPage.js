import { Container } from "@material-ui/core";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

function DetailPage(props) {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    try {
      const users = await axios.get(
        "https://jsonplaceholder.typicode.com/users/" + id
      );
      setUsers(users.data);

      console.log(users.data);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);
  let { id } = useParams();
  console.log(id);

  /*
  let arr = [
    { name: "string 1", value: "this", other: "that" },
    { name: "string 2", value: "this", other: "that" },
  ];

  let obj = arr.find((o) => o.name === "string 1");

  console.log(obj);
  let user = users.find((o) => o.id === id);
  console.log(user);*/

  return (
    <Container
      style={{
        fontSize: "25px",
        color: "#251351",
        backgroundColor: "#c1edcc",
        padding: "50px 30px",
      }}
    >
      <div>
        <h2>Main info</h2>
        <p>
          <strong>Name:</strong> {users.name}
        </p>
        <p>
          <strong>Phone:</strong> {users.phone}
        </p>
        <p>
          <strong>Email:</strong> {users.email}
        </p>
        <p>
          <strong>Username:</strong> {users.username}
        </p>
        <p>
          <strong>Website:</strong> {users.website}
        </p>
        <h2
          style={{
            marginTop: "25px",
          }}
        >
          Address
        </h2>
        {/*We add the following syntax as we try to access data before useEffect runs*/}
        <p>
          <strong>Suite:</strong>{" "}
          {users && users.address && users.address.suite}&nbsp;
        </p>
        <p>
          <strong>Street:</strong>{" "}
          {users && users.address && users.address.street}&nbsp;
        </p>
        <p>
          <strong>City:</strong> {users && users.address && users.address.city}
          &nbsp;
        </p>
        <h2
          style={{
            marginTop: "25px",
          }}
        >
          Company
        </h2>
        <p>
          <strong>Name:</strong> {users && users.company && users.company.name}
          &nbsp;
        </p>
        <p>
          <strong>Catchphrase:</strong>{" "}
          {users && users.company && users.company.catchPhrase}
          &nbsp;
        </p>
        <p>
          <strong>Business:</strong>{" "}
          {users && users.company && users.company.bs}
          &nbsp;
        </p>
      </div>
    </Container>
  );
}

export default DetailPage;
