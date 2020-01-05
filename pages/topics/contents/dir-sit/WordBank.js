import FA from "react-fontawesome";
import Quote from "../../../../common/Quote";
import Answer from "../../../../common/Answer";

const WordBank = props => (
  <div className="box">
    <h1 className="title is-6 has-text-danger">Word Bank</h1>
    <div className="columns">
      <div className="column">
        <Answer noIcon text="el trabajo" translated="job" />
        <Answer noIcon text="el aula" translated="classroom" />
        <Answer
          text="entender"
          translated="to understand"
          href="https://www.spanishdict.com/translate/entender"
        />
        <Answer noIcon text="la comida" translated="food" />
        <Answer
          text="disponible"
          translated="available"
          href="https://www.spanishdict.com/translate/disponible"
        />
        <Answer
          text="agotar"
          translated="to sell out"
          href="https://www.spanishdict.com/translate/agotar"
        />
        <Answer noIcon text="el invitado" translated="guest" href="" />
      </div>
      <div className="column">
        <Answer noIcon text="la boda" translated="wedding" />
        <Answer noIcon text="la suerte" translated="luck" />
        <Answer noIcon text="la tarea" translated="task, assignment" />
        <Answer noIcon text="el piso" translated="floor" href="" />
        <Answer noIcon text="felicidades" translated="congrats" />
        <Answer text="el producto" translated="product" href="" />
        <Answer text="el restaurante" translated="restaurant" href="" />
      </div>
    </div>
  </div>
);

export default WordBank;
