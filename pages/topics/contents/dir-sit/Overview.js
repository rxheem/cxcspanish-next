import FA from "react-fontawesome";
import Quote from "../../../../common/Quote";
import Answer from "../../../../common/Answer";
import Img from "react-image";
import Loader from "react-loader-spinner";

const Overview = props => (
  <div>
    {/* General overview */}
    <div className="box">
      <p>
        Directed Situations are short situations or scenarios in which you are
        required to give a one sentence response in Spanish.
      </p>
      <br />
      <p>For example, you are given the following scenario:</p>
      <br />
      <Quote text="Your teacher is taking up a new job overseas. Write him/ her a farewell note and express good wishes." />
      <br />
      <p>In this example, you are required to </p>
      <ul
        style={{
          paddingTop: "20px",
          paddingLeft: "25px",
          listStyleType: "disc"
        }}
      >
        <li>Acknowledge that your teacher is leaving, and</li>
        <li>Express good wishes.</li>
      </ul>
      <br />
      <h1 className="has-text-danger title is-6">Suggested Responses</h1>
      <Answer
        text="Buenas suerte con tu nuevo trabajo y yo espero que usted haga bien"
        translated="Good luch with your new job and I hope that you do well"
        href="https://www.spanishdict.com/translate/%20Buenas%20suerte%20con%20tu%20nuevo%20trabajo%20y%20yo%20espero%20que%20usted%20haga%20bien"
      />
      <Answer
        text="Felicidades en su nuevo trabajo"
        translated="Congratulations on your new job"
        href="https://www.spanishdict.com/translate/Felicidades%20en%20su%20nuevo%20trabajo."
      />
    </div>

    {/* Important Tipa */}
    <div className="box">
      <div className="columns">
        <div className="column">
          <Img
            src={[
              "https://scanmarker.com/wp-content/uploads/2019/06/top-tips-1-1000x480.jpg",
              "https://blog.asana.com/wp-content/post-images/Asana-Tips-Feature-Roundup_Article-1024x655@2x.png",
              "https://blog.commlabindia.com/wp-content/uploads/2016/11/tips-to-design-effective-elearning.jpg"
            ]}
            alt="image of top tips"
            loader={
              <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000} //3 secs
              />
            }
          />
        </div>
        <div className="column">
          <ul
            style={{
              paddingLeft: "20px",
              listStyleType: "disc"
            }}
          >
            <li style={{ paddingBottom: "10px" }}>
              <p>
                <b>Only use ONE sentence per scenario</b>
              </p>
            </li>
            <li style={{ paddingBottom: "10px" }}>
              <p>Use simple sentences to reduce your chances of losing marks</p>
            </li>
            <li style={{ paddingBottom: "10px" }}>
              <p>Don't forget to use '¿' and '¡' when necessary</p>
            </li>
            <li style={{ paddingBottom: "10px" }}>
              <p></p>
            </li>
            <li style={{ paddingBottom: "10px" }}>
              <p></p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="notification box is-primary"></div>

    {/* Example 2 */}
    <div className="box">
      <p>Let's have a look at another example:</p>
      <br />
      <Quote text="You have to stay back at school this afternoon. Write the text that you send to your mother explaining why." />

      <br />
      <h1 className="has-text-danger title is-6">Suggested Responses</h1>

      <Answer
        text="Yo voy a limpiar mi aula esta tarde"
        translated="I am going to clean my classroom this afternoon"
        href="https://www.spanishdict.com/translate/I%20am%20going%20to%20clean%20my%20classroom%20this%20afternoon"
      />
      <Answer
        text="Mis amigos y yo vamos a un restaurante después de la escuela hoy"
        translated="My friends and I are going to a restaurant after school today"
        href="https://www.spanishdict.com/translate/My%20friends%20and%20I%20are%20going%20to%20a%20restaurant%20after%20school%20today.%20"
      />
      <Answer
        text="Hoy tengo detención desde las 3 y las 4 de la tarde"
        translated="I have detention today from 3pm to 4pm"
        href="https://www.spanishdict.com/translate/I%20have%20detention%20between%203%20and%204%20today.%20"
      />
    </div>
  </div>
);

export default Overview;
