import React, { useState } from "react";
import Auth from "../../utils/auth";
import { useQuery } from "@apollo/client";
import { GET_EXPENSE } from "../../utils/query";
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

function Jumbotron({ children }) {
  const { data } = useQuery(GET_EXPENSE);
  console.log(data);
  const userData = data?.singleUser || [];
  console.log(userData);
  const userFirstName = userData.firstName
  const businessName = userData.businessName

  console.log(userFirstName, businessName)
  function loginJumbotron() {
  

    if (Auth.loggedIn()) {
      return (
        // <div class="container"></div>
        <div
          style={{
            height: 560,
            clear: "both",
            paddingTop: 120,
            textAlign: "center",
            textColor: "#267D9C",
            background: "#ffc34d",
            borderColor: "#ffc34d",
          }}
        >
          <h1>
            Hello {userFirstName}! Wecome to your {businessName} Page!
            {/* <h3>Hello! Welcome to your business page</h3> */}
          </h1>

          {children}
        </div>
      );
    } else {
      return (
        <div
          type="grod"
          style={{
            height: 560,
            clear: "both",
            paddingTop: 120,
            textAlign: "center",
            background: "#ffc34d",
            borderColor: "#ffc34d",
          }}
        >
          <ul className="flex-row">
            <ul className="mx-1">
              <card>
                <h3>Welcome! We're so glad you're here</h3>
              </card>
            </ul>
          </ul>
        </div>
      );
    }
  }
  return <div>{loginJumbotron()}</div>;
}

export default Jumbotron;
