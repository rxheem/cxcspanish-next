import uuidv4 from "uuid";
import LazyLoad from "react-lazyload";
import { Animated } from "react-animated-css";
import Img from "react-image";
import Loader from "react-loader-spinner";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";

const HomeCarousel = props => (
  <CarouselProvider
    naturalSlideWidth={100}
    naturalSlideHeight={40}
    totalSlides={3}
  >
    <Slider>
      <Slide index={0}>I am the first Slide.</Slide>
      <Slide index={1}>I am the second Slide.</Slide>
      <Slide index={2}>I am the third Slide.</Slide>
    </Slider>
  </CarouselProvider>
);

export default HomeCarousel;
