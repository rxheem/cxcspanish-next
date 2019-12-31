import uuid4 from "uuid";
import LazyLoad from "react-lazyload";

const PaperView = props => (
  <li>
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
        <img className="preview-image" alt="past paper" src={props.src} />
      </LazyLoad>
    </a>
  </li>
);

export default PaperView;
