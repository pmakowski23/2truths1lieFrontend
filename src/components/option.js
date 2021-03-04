import { Paper, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  margin: {
    display: "block",
    width: 300,
    height: 200,
    margin: 20,
  },
  full: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  wrap: {
    wordWrap: "wrap",
  },
  marginAround: {
    margin: 20,
  },
}));

const Option = ({ index, sentence, isSelected, setIsAnySelected, isLier }) => {
  const classes = useStyles();

  const handleClick = async () => {
    if (!isSelected) {
      setIsAnySelected(index);
    }
  };

  return (
    <div className={classes.margin}>
      <Paper elevation={3} className={classes.full}>
        <p className={classes.wrap}>{sentence}</p>
        {!isLier && (
          <Button
            className={classes.marginAround}
            variant={"contained"}
            onClick={handleClick}
            disabled={isSelected}
          >
            Wybierz
          </Button>
        )}
      </Paper>
    </div>
  );
};

export default Option;
