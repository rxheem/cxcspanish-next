import uuidv4 from "uuid";
import LazyLoad from "react-lazyload";
import { Animated } from "react-animated-css";

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

      <LazyLoad>
        <Animated
          animationIn="slideInRight"
          animationOut="fadeOut"
          isVisible={true}
        >
          <figure>
            <img className="preview-image" alt="past paper" src={props.src} />
          </figure>
        </Animated>
      </LazyLoad>
    </a>
  </li>
);

export default PaperView;
