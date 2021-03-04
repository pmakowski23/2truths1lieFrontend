import React, { useState } from "react";
import firebase from "firebase/app";
import { Router, Link } from "@reach/router";
import { auth } from "../firebase";
import LandingPage from "./landingPage";
import { useAuthState } from "react-firebase-hooks/auth";
import { IsAdminContext, UserContext } from "../context";
import Lobby from "./lobby";
import { Grid, Button, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  header: {
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
  },
  logo: {
    textDecoration: "none",
    color: "black",
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const [user] = useAuthState(auth);
  const isAdmin = useState(false);
  const userContext = useState(null);

  function SignIn() {
    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    };

    return (
      <Button
        variant="contained"
        className="sign-in"
        onClick={signInWithGoogle}
      >
        Zaloguj się używając Google
      </Button>
    );
  }

  function SignOut() {
    return (
      auth.currentUser && (
        <>
          <Button variant="contained" onClick={() => auth.signOut()}>
            Wyloguj się
          </Button>
        </>
      )
    );
  }

  return (
    <Grid container justify="center" spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center">
          <header className={classes.header}>
            <Link to="/">
              <img
                src={process.env.PUBLIC_URL + "/logo.png"}
                alt="2truths1lie logo"
              />
            </Link>
            <SignOut />
          </header>
        </Grid>
      </Grid>
      <section>
        {user ? (
          <UserContext.Provider value={userContext}>
            <IsAdminContext.Provider value={isAdmin}>
              <Router>
                <LandingPage path="/" />
                <Lobby path="/lobby/:id" />
              </Router>
            </IsAdminContext.Provider>
          </UserContext.Provider>
        ) : (
          <SignIn />
        )}
      </section>
    </Grid>
  );
};

export default Dashboard;
