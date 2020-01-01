import FA from "react-fontawesome";
import Quote from "../../../../common/Quote";
import Answer from "../../../../common/Answer";

const Fragment = React.Fragment;

const Overview = props => (
  <div>
    <div className="box">
      <p>
        Letter writing is <i>optional</i> on your exam and you can instead
        choose to write a <a href="/topics/composition">Composition</a>.
        However, if you choose to do this question is is important to know what
        is required and how your letter is to be structured.
      </p>

      <br />
      <p>
        You will be given a template or a scenario in which you should compose
        your letter, which should
      </p>

      <br />
      <ul>
        <li style={{ paddingBottom: "15px" }}>
          <FA
            style={{ color: "coral", paddingRight: "10px" }}
            name="location-arrow"
          />
          Be written in Spanish
        </li>
        <li style={{ paddingBottom: "15px" }}>
          <FA
            style={{ color: "coral", paddingRight: "10px" }}
            name="location-arrow"
          />
          Be <b>no more</b> than 130 - 150 words
        </li>
        <li style={{ paddingBottom: "15px" }}>
          <FA
            style={{ color: "coral", paddingRight: "10px" }}
            name="location-arrow"
          />
          Use the tense appropriate to the topic which you have chosen
        </li>
      </ul>
    </div>

    <div className="box">
      <p>Lets take a look at an example question.</p>

      <br />
      <Quote
        text={
          <Fragment>
            You attend a benefit concert at which a famous Caribbean artiste
            performed. Write a letter to your best friend who lives in Argentina
            describing your experience. Be sure to include:
            <ul
              style={{
                paddingTop: "30px",
                paddingLeft: "20px",
                listStyleType: "disc"
              }}
            >
              <li style={{ paddingBottom: "15px" }}>
                when the concert was held and the name of the artiste
              </li>
              <li style={{ paddingBottom: "15px" }}>
                a description of the mood or the atmosphere on the night of the
                concert
              </li>
              <li style={{ paddingBottom: "15px" }}>
                what you liked and/ or disliked about the concert
              </li>
              <li style={{ paddingBottom: "15px" }}>
                how the proceeds from the concert will be used.
              </li>
            </ul>
          </Fragment>
        }
      />
    </div>
  </div>
);

export default Overview;
