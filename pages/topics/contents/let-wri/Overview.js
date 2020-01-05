import FA from "react-fontawesome";
import Quote from "../../../../common/Quote";
import Answer from "../../../../common/Answer";
import Img from "react-image";
import Loader from "react-loader-spinner";

// Carousel
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";

// React Fragment
const Fragment = React.Fragment;

const Overview = props => (
  <div>
    <div className="box">
      <p>
        The letter writing section on your exam is <i>optional</i> and you can
        instead choose to write a <a href="/topics/composition">Composition</a>.
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
              Make sure to discuss all points given
            </li>
            <li style={{ paddingBottom: "10px" }}>
              Be conversational when writing
            </li>
            <li style={{ paddingBottom: "10px" }}>
              Use phrases and expressions often
            </li>
            <li style={{ paddingBottom: "10px" }}>
              Choose the verb tenses appropriate for the topic
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="box"></div>
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

    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={50}
      totalSlides={3}
      style={{ height: "auto" }}
    >
      <Slider>
        <Slide style={{ height: "auto" }} index={0}>
          <div className="box notification is-primary">1</div>
        </Slide>
        <Slide index={1}>
          <div className="box  notification is-danger">2</div>
        </Slide>
        <Slide index={2}>
          <div className="box notification is-link">3</div>
        </Slide>
      </Slider>
    </CarouselProvider>
  </div>
);

export default Overview;
