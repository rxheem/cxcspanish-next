import Link from "next/link";

const DropItem = props => (
  <div>
    <input type="checkbox" id={props.id} name="q" className="questions" />
    <div className="plus"></div>
    <label for={props.id} class="question">
      <li style={{ paddingBottom: "15px" }}> {props.question}</li>
    </label>
    <div className="answers">
      <p style={{ color: "black" }}> {props.answer}</p>
    </div>

    <style jsx>{`
      .content {
        width: 99%;
      }

      .centerplease {
        margin: 0 auto;
        max-width: 270px;
        font-size: 40px;
      }

      .question {
        position: relative;

        margin: 0;
        padding: 10px 5px 0px 40px;
        display: block;
        width: 100%;
        cursor: pointer;
      }
      .answers {
        background: white;
        margin: 5px 0;
        max-height: 0;
        overflow: hidden;
        z-index: -1;
        position: relative;
        opacity: 0;
        -webkit-transition: 0.7s ease;
        -moz-transition: 0.7s ease;
        -o-transition: 0.7s ease;
        transition: 0.7s ease;
      }

      .questions:checked ~ .answers {
        max-height: 500px;
        opacity: 100;
        padding: 15px;
      }

      .plus {
        position: absolute;
        margin-left: 5px;
        z-index: 5;
        font-size: 2em;
        line-height: 100%;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        -o-user-select: none;
        user-select: none;
        -webkit-transition: 0.3s ease;
        -moz-transition: 0.3s ease;
        -o-transition: 0.3s ease;
        transition: 0.3s ease;
      }

      .questions:checked ~ .plus {
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
      }

      .questions {
        display: none;
      }
    `}</style>
  </div>
);

export default DropItem;
