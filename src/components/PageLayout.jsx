import React from "react";
import Navbar from "react-bootstrap/Navbar";

import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";

/**
 * Renders the navbar component with a sign in or sign out button depending on whether or not a user is authenticated
 * @param props
 */
export const PageLayout = (props) => {
  const isAuthenticated = useIsAuthenticated();

  return (
    <>
      <Navbar bg="dark" variant="dark" className="navbarStyle">
        <a className="navbar-brand" href="/">
          FNS RPA
        </a>
        <a className="navbar-brand" href="/">
          Demo
        </a>
        <div className="collapse navbar-collapse justify-content-end">
          {isAuthenticated ? <SignOutButton /> : <SignInButton />}
        </div>
      </Navbar>
      <br />
      <br />
      <h5>
        <center>
          Welcome to the Microsoft Authentication Library For JavaScript - React
          SPA Tutorial
        </center>
      </h5>
      <br />
      <br />
      {props.children}
    </>
  );
};
