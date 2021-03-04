import React from "react";
import Countdown from "react-countdown";

//Copied partially from
//https://stackoverflow.com/questions/40885923/countdown-timer-in-react

const Timer = ({ timer }) => {
  return (
    <div>
      {timer && (
        <Countdown date={timer + 120000}>
          <div>Czas dyskusji</div>
        </Countdown>
      )}
    </div>
  );
};

export default Timer;
