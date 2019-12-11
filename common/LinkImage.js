import LazyLoad from "react-lazyload";

const LinkImage = props => (
  <LazyLoad once>
    <figure class="image">
      <img
        style={{ height: "15px", width: "15px" }}
        alt="image of a link"
        src="https://icon-library.net/images/links-icon-png/links-icon-png-26.jpg"
      />
    </figure>
  </LazyLoad>
);

export default LinkImage;
