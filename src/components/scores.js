import { Typography, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  center: {
    textAlign: "center",
  },
  alignRight: {
    alignSelf: "flex-end",
  },
  alignLeft: {
    alignSelf: "flex-start",
  },
  flex: {
    display: "flex",
    flexDirection: "column",
  },
}));

const Scores = ({ round, numOfPlayers, isAdmin, endGame, score }) => {
  const classes = useStyles();

  return (
    <Typography className={classes.flex} component={"span"} variant="body1">
      <h1 className={classes.center}>
        Dostałeś {score}{" "}
        {score === 0 || score >= 5
          ? "punktów"
          : score === 1
          ? "punkt"
          : "punkty"}
      </h1>
      {isAdmin && round === numOfPlayers - 1 ? (
        <Button
          className={classes.alignRight}
          variant={"contained"}
          onClick={endGame}
        >
          Zakończ grę
        </Button>
      ) : (
        isAdmin && (
          <Button
            className={classes.alignLeft}
            variant={"contained"}
            onClick={endGame}
          >
            Następna runda
          </Button>
        )
      )}
    </Typography>
  );
};

export default Scores;
