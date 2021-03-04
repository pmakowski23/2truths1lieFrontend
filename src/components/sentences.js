import { useState } from "react";
import Sentence from "./sentence";
import { Typography, Button, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  marginTop: {
    marginTop: 50,
  },
}));

const Sentences = ({ sendSenteces }) => {
  const classes = useStyles();

  const [sentences, setSentences] = useState([
    "Pierwsza teza",
    "Druga teza",
    "Trzecia teza",
  ]);
  const [lies, setLies] = useState([true, false, false]);
  const [isReady, setIsReady] = useState(false);

  const handleLies = (newValue) => {
    setLies(newValue);
  };

  const handleSentences = (newValue) => {
    setSentences(newValue);
  };

  const handleIsReady = (newValue) => {
    setIsReady(newValue);
  };

  const handleSubmit = () => {
    setIsReady(!isReady);
    const lie = lies.indexOf(true);
    sendSenteces(sentences, lie, !isReady);
  };

  return (
    <Typography>
      <Grid className={classes.marginTop} container>
        {sentences.map((sentence, i) => (
          <Sentence
            key={i}
            sentences={sentences}
            setSentences={handleSentences}
            lies={lies}
            setLies={handleLies}
            index={i}
            setIsReady={handleIsReady}
          />
        ))}
      </Grid>
      <Grid className={classes.marginTop} container justify="center">
        <Button variant="contained" onClick={handleSubmit}>
          {isReady ? "Nie gotowy" : "Gotowy"}
        </Button>
      </Grid>
    </Typography>
  );
};

export default Sentences;
