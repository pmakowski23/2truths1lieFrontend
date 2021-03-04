import { useState, useEffect, useContext } from "react";
import { Link } from "@reach/router";
import { useAuthState } from "react-firebase-hooks/auth";
import useEffectOnlyOnce from "../hooks/useEffectOnlyOnce";
import { auth } from "../firebase";
import GameRules from "../components/gameRules";
import { IsAdminContext } from "../context";
import { io } from "socket.io-client";

import { Grid, Button, TextField, makeStyles } from "@material-ui/core";

const ENDPOINT = "https://two-truths-one-lie.herokuapp.com/";
let socket;

const useStyles = makeStyles(() => ({
  form: {
    display: "flex",
  },
  button: {
    alignSelf: "flex-end",
  },
}));

const LandingPage = () => {
  const classes = useStyles();

  const [lobbyName, setLobbyName] = useState("");
  const [disabled, setDisabled] = useState(false);

  const [isAdmin, setIsAdmin] = useContext(IsAdminContext);
  const [user] = useAuthState(auth);

  const [lobbyData, setLobbyData] = useState(null);

  useEffectOnlyOnce(() => {
    socket = io(ENDPOINT);

    socket.emit(
      "user",
      { userId: user.uid, displayName: user.displayName },
      (lobby) => {
        setLobbyData(lobby[0]);
      }
    );

    return () => socket.disconnect();
  });

  useEffect(() => {
    if (lobbyData) {
      setIsAdmin(true);
      setDisabled(true);
      setLobbyName(lobbyData.lobbyName);
    }
  }, [lobbyData, setIsAdmin]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisabled(true);

    socket.emit("createLobby", { admin: user.uid, lobbyName }, (lobby) => {
      setLobbyData(lobby);
    });
  };

  return (
    <div>
      <GameRules />
      <Grid container justify="center">
        <form id="form1" className={classes.form} onSubmit={handleSubmit}>
          <TextField
            id="standard-basic"
            label="Nazwa Lobby"
            value={lobbyName}
            onChange={(e) => setLobbyName(e.target.value)}
            disabled={disabled}
            required
          />

          {isAdmin ? (
            <div className={classes.button}>
              <Link to={`/lobby/${lobbyData?.admin}`}>
                <Button variant="contained">Moje lobby</Button>
              </Link>
            </div>
          ) : (
            <Button
              className={classes.button}
              variant="contained"
              type="submit"
              form="form1"
              value="Stwórz grę"
            >
              Stwórz grę
            </Button>
          )}
        </form>
      </Grid>
    </div>
  );
};

export default LandingPage;
