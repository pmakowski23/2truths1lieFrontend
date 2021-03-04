import { Typography } from "@material-ui/core";

const GameRules = () => {
  return (
    <Typography>
      <h1>Zasady gry</h1>
      <p>
        Każdy gracz przygotowuje 3 tezy o swoim życiu, a reszta musi odgadnąć
        która z nich jest kłamstwem. <br />
        <br />{" "}
      </p>
      <h3>Przebieg gry:</h3>
      <ol>
        <li>Każy musi wpisać swoje 3 tezy i zatwierdzić przyciskiem.</li>
        <li>
          Kłamiący zatwierdza odczytanie swoich tez przyciskiem co daje 2 minuty
          ekipie "detektywów" na zadawanie pytań dotyczących tych tez.
        </li>
        <li>
          Po tym czasie mają czas na dyskusję między sobą gdzie kłamiący nie
          musi już nic komentowac.
        </li>
        <li>
          Wszyscy wybierają swój typ (która teza jest kłamstwem) i zatwierdzają
          gotowość przyciskiem.
        </li>
        <li>
          Ogłaszana jest punktacja za rundę po czym kolejna osoba jest kłamcą.
        </li>
      </ol>
      <h3>Punktacja:</h3>
      <ul>
        <li>
          Kłamiący dostaje punkt za każdą osobę która nie zgadnie, a reszta
          dostaje punkty jak zgadnie która z tez jest kłamstwem.
        </li>
      </ul>
    </Typography>
  );
};

export default GameRules;
