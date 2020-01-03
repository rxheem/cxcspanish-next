import uuidv4 from "uuid";
import LazyLoad from "react-lazyload";
import { Animated } from "react-animated-css";
import Img from "react-image";
import Loader from "react-loader-spinner";

const PaperView = props => (
  <li id={uuidv4()}>
    <a target="_blank" download href={props.href}>
      <style>{`
    @media only screen and (min-width: 600px) {
      .preview-image {
        max-height: 200px;
        max-width: 123.3px;
      }
    }

    @media only screen and (max-width: 601px) {
      .preview-image {
        max-height: 250px;
        max-width: 108px;
      }
    }
    `}</style>

      <Animated
        animationIn="slideInRight"
        animationOut="fadeOut"
        isVisible={true}
      >
        <LazyLoad>
          <figure>
            <Img
              className="preview-image"
              alt="past paper"
              src={props.src}
              loader={
                <Loader
                  type="ThreeDots"
                  color="#00BFFF"
                  height={100}
                  width={100}
                  timeout={3000} //3 secs
                />
              }
            />
          </figure>
        </LazyLoad>
      </Animated>
    </a>
  </li>
);

export default PaperView;
