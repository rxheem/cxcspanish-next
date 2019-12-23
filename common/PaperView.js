import uuid4 from "uuid";

const PaperView = props => (
  <a target="_blank" download href={props.href}>
    <style>{`
    @media only screen and (min-width: 600px) {
      .preview-image {
        max-height: 200px;
        max-width: 123.3px;
        padding-right: 15px;
      }
    }

    @media only screen and (max-width: 601px) {
      .preview-image {
        max-height: 250px;
        max-width: 108px;
        padding-right: 15px;
      }
    }
    `}</style>

    <img className="preview-image" alt="past paper" src={props.src} />
  </a>
);

export default PaperView;
