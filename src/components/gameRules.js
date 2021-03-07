import { Typography } from "@material-ui/core";

const GameRules = () => {
  return (
    <Typography component={"span"} variant="body1">
      <h1>Zasady gry</h1>
      <p>
        Każdy gracz przygotowuje 3 tezy o swoim życiu, a reszta musi odgadnąć
        która z nich jest kłamstwem. <br />
        <br />{" "}
      </p>
      <h3>Przebieg gry:</h3>
      <ol>
        <li>Wszyscy wpisują swoje 3 tezy i muszą zatwierdzić przyciskiem.</li>
        <li>Potem gracze mają 2 minuty na zadawanie pytań.</li>
        <li>
          Po tym czasie mają czas na dyskusję między sobą, kłamca nie musi już
          nic komentować.
        </li>
        <li>
          Wszyscy wskazują fałszywą teżę i zatwierdzają gotowość przyciskiem.
        </li>
        <li>
          Wyświetlana jest punktacja za rundę, po czym kolejna osoba zostaje
          kłamcą.
        </li>
      </ol>
      <h3>Punktacja:</h3>
      <ul>
        <li>
          Kłamca dostaje punkt za każdą osobę która nie zgadnie, a reszta graczy
          dostaje punkty jak zgadnie która z tez jest falszywa.
        </li>
      </ul>
    </Typography>
  );
};

export default GameRules;
