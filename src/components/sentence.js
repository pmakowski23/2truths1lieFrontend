import {
  Grid,
  makeStyles,
  TextField,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: 20,
  },
}));

const Sentence = ({
  sentences,
  setSentences,
  lies,
  setLies,
  index,
  setIsReady,
}) => {
  const classes = useStyles();

  const handleSentence = (event, index) => {
    const sentencesArray = [...sentences];
    sentencesArray[index] = event.target.value;
    setIsReady(false);
    setSentences(sentencesArray);
  };

  const handleCheckbox = (index) => {
    if (!lies[index]) {
      const lieArray = [...lies].fill(false);
      lieArray[index] = !lies[index];
      setLies(lieArray);
    }
    setIsReady(false);
  };

  return (
    <Grid item className={classes.margin}>
      <TextField
        id="outlined-multiline-flexible"
        label={`Teza ${index + 1}`}
        multiline
        rowsMax={4}
        value={sentences[index]}
        onChange={(e) => handleSentence(e, index)}
        variant="outlined"
      />
      <div>
        <FormControlLabel
          control={
            <Checkbox
              checked={lies[index]}
              onChange={() => handleCheckbox(index)}
              name={`lie${index}`}
              color="primary"
            />
          }
          label="Kłamstwo"
        />
      </div>
    </Grid>
  );
};

export default Sentence;
