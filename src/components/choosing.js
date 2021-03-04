import React, { useState } from "react";
import { Typography, Grid, makeStyles, Button } from "@material-ui/core";
import Timer from "./timer";
import Option from "./option";

const useStyles = makeStyles((theme) => ({
  center: {
    textAlign: "center",
  },
  flex: {
    justifyContent: "space-between",
  },
  marginTop: {
    marginTop: 40,
  },
}));

const Choosing = ({ timer, lier, user, choosen }) => {
  const classes = useStyles();

  const [isReady, setIsReady] = useState(false);
  const [selected, setSelected] = useState([false, false, false]);

  function handleChange(index) {
    let selectedArray = [...selected].fill(false);
    selectedArray[index] = true;
    setSelected(selectedArray);
    setIsReady(false);
  }

  const ready = () => {
    setIsReady(!isReady);
    choosen(selected.indexOf(true), !isReady);
  };

  return (
    <Typography component={"span"} variant="body1" className={classes.center}>
      <h1>Kłamcą jest: {lier && <div>{lier.displayName}</div>}</h1>

      <Timer timer={timer} />

      <Grid container className={classes.flex} xs={12}>
        {lier &&
          lier.sentences.map((sentence, i) => (
            <Option
              key={i}
              index={i}
              sentence={sentence}
              isLier={lier.userId === user.uid}
              isSelected={selected[i]}
              setIsAnySelected={handleChange}
            />
          ))}
      </Grid>

      <Button className={classes.marginTop} variant="contained" onClick={ready}>
        {isReady ? "Nie gotowy" : "Gotowy"}
      </Button>
    </Typography>
  );
};

export default Choosing;
