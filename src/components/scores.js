import { Typography, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  center: {
    textAlign: "center",
  },
}));

const Scores = ({ isAdmin, endGame, score }) => {
  const classes = useStyles();

  return (
    <Typography>
      <h1 className={classes.center}>Dostałeś {score} punktów</h1>
      {isAdmin && (
        <Button variant={"contained"} onClick={endGame}>
          Zakończ grę
        </Button>
      )}
    </Typography>
  );
};

export default Scores;
