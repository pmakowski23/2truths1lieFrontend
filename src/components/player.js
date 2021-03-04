const Player = ({ player }) => {
  return (
    <>
      {player && (
        <>
          <p>{player.status}</p>
          <p>{player.displayName}</p>
          <p>Punkty: {player.score}</p>
        </>
      )}
    </>
  );
};

export default Player;
