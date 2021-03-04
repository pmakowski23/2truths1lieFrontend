import React from "react";
import Player from "./player";
import { Typography, Button, Grid, Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  buttonFullWidth: {
    width: "100%",
  },
  paper: {
    padding: "5px 10px 10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const Players = ({ lobbyData, userUid, removePlayer }) => {
  const classes = useStyles();

  return (
    <Typography component={"span"} variant="body1">
      <h1>Players</h1>
      <Grid container spacing={3}>
        {lobbyData.players.map((player) => (
          <Grid item key={player.userId}>
            <Paper className={classes.paper} elevation={3}>
              <Player player={player} />
              {lobbyData.admin === userUid && (
                <Button
                  className={classes.buttonFullWidth}
                  variant="contained"
                  onClick={() => removePlayer(player.userId)}
                >
                  Usuń
                </Button>
              )}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Typography>
  );
};

export default Players;
