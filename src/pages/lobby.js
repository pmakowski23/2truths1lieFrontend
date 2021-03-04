import React, { useState } from "react";
import { io } from "socket.io-client";
import { useAuthState } from "react-firebase-hooks/auth";
import useEffectOnlyOnce from "../hooks/useEffectOnlyOnce";
import GameRules from "../components/gameRules";
import { auth } from "../firebase";
import Sentences from "../components/sentences";
import Scores from "../components/scores";
import Choosing from "../components/choosing";
import Players from "../components/players";
import { Button } from "@material-ui/core";

const ENDPOINT = "https://two-truths-one-lie.herokuapp.com/";
let socket;

const Lobby = (props) => {
  const [user] = useAuthState(auth);

  const [lobbyData, setLobbyData] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffectOnlyOnce(() => {
    socket = io(ENDPOINT);

    socket.emit(
      "login",
      { userId: user.uid, displayName: user.displayName, lobby: props.id },
      (lobby) => {
        setLobbyData(lobby);
        setIsAdmin(lobby.admin === user.uid);
      }
    );

    socket.on("update", (data) => {
      setLobbyData(data);
      data.players.forEach((player) => {
        if (player.userId === user.uid) {
          setUserData(player);
        }
      });
    });

    return () => socket.disconnect();
  });

  const removePlayer = (playerUid) => {
    socket.emit("removePlayerFromLobby", playerUid);
  };

  const sendSentences = (sentences, lie, isReady) => {
    socket.emit("sentencesReady", {
      playerUid: user.uid,
      sentences,
      lie,
      isReady,
    });
  };

  const choosen = (index, isReady) => {
    socket.emit("choosen", { playerUid: user.uid, index, isReady });
  };

  const startGame = () => {
    socket.emit("startGame");
  };

  const endGame = () => {
    socket.emit("endGame");
  };

  return (
    <>
      {lobbyData ? (
        <div>
          <Players
            lobbyData={lobbyData}
            userUid={user.uid}
            removePlayer={removePlayer}
          />
          {lobbyData.stage === 0 && <GameRules />}
          {lobbyData.stage === 1 && <Sentences sendSenteces={sendSentences} />}
          {lobbyData.stage === 2 && (
            <Choosing
              choosen={choosen}
              user={user}
              timer={lobbyData.timer}
              lier={lobbyData.lier}
            />
          )}
          {lobbyData.stage === 3 && (
            <Scores
              round={lobbyData.round}
              numOfPlayers={lobbyData.players.length}
              isAdmin={isAdmin}
              endGame={endGame}
              score={userData.newScore}
            />
          )}
          {isAdmin && lobbyData.stage === 0 && (
            <Button variant="contained" onClick={startGame}>
              Zacznij grę
            </Button>
          )}
        </div>
      ) : (
        <h1>Nie jesteś w lobby albo lobby nie istnieje.</h1>
      )}
    </>
  );
};

export default Lobby;
