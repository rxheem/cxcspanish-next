import FA from "react-fontawesome";
import Quote from "../../../../common/Quote";
import Answer from "../../../../common/Answer";

const WordBank = props => (
  <div className="box">
    <h1 className="title is-6 has-text-danger">Word Bank</h1>
    <div className="columns">
      <div className="column">
        <Answer
          text="por lo menos"
          translated="at least"
          href="https://www.spanishdict.com/translate/por%20lo%20menos"
        />
        <Answer noIcon text="el concierto" translated="concert" href="" />
        <Answer
          text="a mi parecer"
          translated="in my opinion"
          href="https://www.spanishdict.com/translate/a%20mi%20parecer"
        />
        <Answer noIcon text="el caribe" translated="Caribbean" href="" />
        <Answer noIcon text="..." translated="..." href="" />
        <Answer noIcon text="..." translated="..." href="" />
        <Answer noIcon text="..." translated="..." href="" />
      </div>
      <div className="column">
        <Answer noIcon text="sin embargo" translated="however" href="" />
        <Answer noIcon text="" translated="" href="" />
        <Answer noIcon text="" translated="" href="" />
        <Answer noIcon text="..." translated="..." href="" />
        <Answer noIcon text="..." translated="..." href="" />
        <Answer noIcon text="experiencia" translated="experience" href="" />
        <Answer noIcon text="performar" translated="to perform" href="" />
      </div>
    </div>
  </div>
);

export default WordBank;
