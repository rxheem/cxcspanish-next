import HeaderImports from "../common/HeaderImports";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ReactGA from "react-ga";
import Head from "next/head";
import LazyLoad from "react-lazyload";

// CSS imports
import CSS from "../assets/bulma.css";
import Emojis from "../assets/emoji.css";
import BulmaAccordianCSS from "../assets/bulma-accordian.css";

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMobile: false
    };
  }

  componentWillMount() {}

  componentDidMount() {
    ReactGA.initialize("UA-146229442-1");
    ReactGA.pageview(window.location.pathname + window.location.search);

    window.mobilecheck = function() {
      let check = false;
      (function(a) {
        if (
          /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
            a
          ) ||
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
            a.substr(0, 4)
          )
        )
          check = true;
      })(navigator.userAgent || navigator.vendor || window.opera);

      this.setState({
        isMobile: check
      });
    };
  }

  render() {
    return (
      <div className="app">
        <HeaderImports />
        <Navbar />

        <br />
        <main role="main" id="main">
          <div className={this.props.full ? "container-fluid" : "container"}>
            {this.props.children}
          </div>
        </main>
        <br />
        <Footer />

        <style jsx>{`
          * {
            box-sizing: border-box;
          }

          .slider {
            width: 300px;
            text-align: center;
            overflow: hidden;
          }

          .slides {
            display: flex;

            overflow-x: auto;
            scroll-snap-type: x mandatory;

            scroll-behavior: smooth;
            -webkit-overflow-scrolling: touch;

            /*
  scroll-snap-points-x: repeat(300px);
  scroll-snap-type: mandatory;
  */
          }
          .slides::-webkit-scrollbar {
            width: 10px;
            height: 10px;
          }
          .slides::-webkit-scrollbar-thumb {
            background: black;
            border-radius: 10px;
          }
          .slides::-webkit-scrollbar-track {
            background: transparent;
          }
          .slides > div {
            scroll-snap-align: start;
            flex-shrink: 0;
            width: 300px;
            height: 300px;
            margin-right: 50px;
            border-radius: 10px;
            background: #eee;
            transform-origin: center center;
            transform: scale(1);
            transition: transform 0.5s;
            position: relative;

            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 100px;
          }
          .slides > div:target {
            /*   transform: scale(0.8); */
          }
          .author-info {
            background: rgba(0, 0, 0, 0.75);
            color: white;
            padding: 0.75rem;
            text-align: center;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            margin: 0;
          }
          .author-info a {
            color: white;
          }
          img {
            object-fit: cover;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }

          .slider > a {
            display: inline-flex;
            width: 1.5rem;
            height: 1.5rem;
            background: white;
            text-decoration: none;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            margin: 0 0 0.5rem 0;
            position: relative;
          }
          .slider > a:active {
            top: 1px;
          }
          .slider > a:focus {
            background: #000;
          }

          /* Don't need button navigation */
          @supports (scroll-snap-type) {
            .slider > a {
              display: none;
            }
          }

          html,
          body {
            height: 100%;
            overflow: hidden;
          }
          body {
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(to bottom, #74abe2, #5563de);
            font-family: "Ropa Sans", sans-serif;
          }

          * {
            background-color: #f6f8fa;
          }

          .black {
            color: black !important;
          }

          .styled-ul li {
            list-style: disc !important;
            padding-bottom: 1.5em;
          }

          .container {
            width: 100%;
            padding-right: 15px;
            padding-left: 15px;
            margin-right: auto;
            margin-left: auto;
          }

          @media (min-width: 576px) {
            .container {
              max-width: 540px;
            }
          }

          @media (min-width: 768px) {
            .container {
              max-width: 720px;
            }
          }

          @media (min-width: 992px) {
            .container {
              max-width: 960px;
            }
          }

          @media (min-width: 1200px) {
            .container {
              max-width: 1140px;
            }
          }

          .rounded {
            border-radius: 15px;
            border: 1px solid #eee;
            padding-left: 20px;
            padding-top: 20px;
          }

          .hidden {
            display: none !important;
          }

          .hidden * {
            display: none !important;
          }

          .underline:hover {
            text-decoration: underline !important;
          }

          caption {
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
            color: #6c757d;
            text-align: left;
            caption-side: bottom;
          }

          .scrollable {
            overflow: auto !important;
            height: 100px !important;
          }

          .rainbow-text {
            background-image: linear-gradient(
              to left,
              violet,
              indigo,
              blue,
              green,
              yellow,
              orange,
              red
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .shadow-sm {
            box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
          }

          .shadow {
            box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
          }

          .shadow-lg {
            box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
          }

          .shadow-none {
            box-shadow: none !important;
          }

          .list-unstyled {
            padding-top: 10px;
            list-style: none !important;
            margin: 0px !important;
          }

          .list-unstyled li {
            margin-bottom: 13px;
          }

          /* Navigation icon padding */
          .nav-icon-1 {
            padding-right: 1px;
          }

          .nav-icon-2 {
            padding-right: 2px;
          }

          .nav-icon-3 {
            padding-right: 3px;
          }

          .nav-icon-4 {
            padding-right: 4px;
          }

          .nav-icon-5 {
            padding-right: 5px;
          }

          .nav-icon-6 {
            padding-right: 6px;
          }

          .nav-icon-7 {
            padding-right: 7px;
          }

          .nav-icon-8 {
            padding-right: 8px;
          }

          .nav-icon-9 {
            padding-right: 9px;
          }

          .nav-icon-10 {
            padding-right: 10px;
          }

          .nav-icon-11 {
            padding-right: 11px;
          }

          .nav-icon-12 {
            padding-right: 12px;
          }

          .nav-icon-13 {
            padding-right: 13px;
          }

          .nav-icon-14 {
            padding-right: 14px;
          }

          .nav-icon-15 {
            padding-right: 15px;
          }

          .nav-icon-17 {
            padding-right: 17px;
          }

          /* Master.css */

          .fa-linkedin-in {
            display: none !important;
          }

          p,
          span,
          li {
            line-height: 20px;
          }

          .sticky {
            position: fixed;
            top: 0;
            width: 100%;
          }

          /* Add some top padding to the page content to prevent sudden quick movement (as the header gets a new position at the top of the page (position:fixed and top:0) */
          .sticky + .content {
            padding-top: 102px;
          }

          .inline-icon {
            margin-right: 8px;
          }

          .nav-icon {
            margin-right: 5px;
          }

          .breadcrumb {
            background: transparent !important;
          }

          /* Index.css */

          .nav-tabs > li.active > a,
          .nav-tabs > li.active > a:focus,
          .nav-tabs > li.active > a:hover {
            border: 0 !important;
          }

          .navbar-item.is-mega {
            position: static;
          }

          .is-mega-menu-title {
            margin-bottom: 0;
            padding: 0.375rem 1rem;
          }

          .push-down {
            margin-top: 5px;
          }

          .translation {
            color: #0d0314;
            background-color: #eeeeee;
            width: 100%;
            padding: 10px;
            margin: 5px;
          }

          .menu-link:hover {
            color: #8a3ab9;
          }

          .menu-link {
            color: #209cee !important;
          }

          .my-blue {
            color: #209cee !important;
          }

          .my-blue:hover {
            text-decoration: none;
            color: #00d8ff !important;
          }

          .my-blue-on-hover:hover {
            color: #209cee !important;
          }

          .support-text {
            color: grey;
          }

          .facebook-blue {
            color: #3b5998 !important;
          }

          .blink {
            animation-duration: 4000ms;
            animation-name: blink;
            animation-iteration-count: infinite;
            animation-direction: alternate;
          }

          @keyframes blink {
            from {
              opacity: 1;
            }

            to {
              opacity: 0;
            }
          }

          .loader,
          .loader:before,
          .loader:after {
            border-radius: 50%;
            width: 2.5em;
            height: 2.5em;
            animation-fill-mode: both;
            animation: load7 1.8s infinite ease-in-out;
          }

          .loader {
            color: #ffffff;
            font-size: 10px;
            margin: 80px auto;
            position: relative;
            text-indent: -9999em;
            transform: translateZ(0);
            animation-delay: -0.16s;
          }

          .loader:before,
          .loader:after {
            content: "";
            position: absolute;
            top: 0;
          }

          .loader:before {
            left: -3.5em;
            animation-delay: -0.32s;
          }

          .loader:after {
            left: 3.5em;
          }

          @keyframes load7 {
            0%,
            80%,
            100% {
              box-shadow: 0 2.5em 0 -1.3em;
            }

            40% {
              box-shadow: 0 2.5em 0 0;
            }
          }

          .midnight-blue {
            color: #003366;
          }

          /* https://www.w3schools.com/howto/howto_css_zoom_hover.asp */
          .zoom {
            padding: 50px;
            background-color: green;
            transition: transform 0.2s;
            /* Animation */
            width: 200px;
            height: 200px;
            margin: 0 auto;
          }

          .zoom:hover {
            transform: scale(1.5);
            /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
          }

          /* MAKE YOUTUBE VIDEOS RESPONSIVE - https://avexdesigns.com/responsive-youtube-embed/  */
          .video-container {
            position: relative;
            padding-bottom: 56.25%;
            padding-top: 30px;
            height: 0;
            overflow: hidden;
          }

          .video-container iframe,
          .video-container object,
          .video-container embed {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }

          @media (max-width: 767px) {
            .text-sm-center {
              text-align: center !important;
            }
          }

          /* 6fb9f5 is a very nice color */

          .remove-btn {
            padding: 0px !important;
            border: none !important;
            background: none !important;
          }

          .spin {
            -webkit-animation: spin 4s infinite linear;
          }

          @-webkit-keyframes spin {
            0% {
              -webkit-transform: rotate(0deg);
            }

            100% {
              -webkit-transform: rotate(360deg);
            }
          }

          footer {
            color: #c9c9c9 !important;
          }

          footer a {
            color: #c9c9c9 !important;
          }

          footer a:hover {
            color: white !important;
          }

          .u-navbar {
            border-bottom: 1px solid #bbbbbb;
          }

          .u-nav-link {
            text-decoration: none;
            padding: 10px 0px;
            margin: 0px 10px;
            display: inline-block;
            position: relative;
            opacity: 0.75;
          }

          .u-nav-link:hover {
            opacity: 1;
          }

          .u-nav-link::before {
            transition: 300ms;
            height: 5px;
            content: "";
            position: absolute;
            background-color: #031d44;
          }

          .u-nav-link-ltr::before {
            width: 0%;
            bottom: 10px;
          }

          .u-nav-link-ltr:hover::before {
            width: 100%;
          }

          .u-nav-link-fade-up::before {
            width: 100%;
            bottom: 5px;
            opacity: 0;
          }

          .u-nav-link-fade-up:hover::before {
            bottom: 10px;
            opacity: 1;
          }

          .u-nav-link-grow-up::before {
            height: 0%;
            width: 100%;
            bottom: 0px;
          }

          .u-nav-link-grow-up:hover::before {
            height: 5px;
          }

          .is-mobile-only {
            visibility: hidden !important;
            padding-left: 5px;
          }

          @media screen and (max-width: 600px) and (max-width: 840px) {
            .is-centered-on-small {
              text-align: center !important;
            }

            .white-on-small {
              color: white !important;
            }

            .is-mobile-only {
              visibility: visible !important;
              padding-left: 5px;
            }

            main {
              margin: 0px 10px !important;
            }

            .scrollable {
              height: auto;
            }
          }

          footer li {
            line-height: 25px !important;
          }

          .field {
            padding: 5px 0px;
          }

          a:hover {
            text-decoration: none !important;
          }

          .pre-scrollable {
            max-height: 340px;
            overflow-y: scroll;
          }
        `}</style>
        <script
          src="https://ajax.cloudflare.com/cdn-cgi/scripts/7089c43e/cloudflare-static/rocket-loader.min.js"
          data-cf-settings="5e6cacd3a5277d4e55cfe64b-|49"
          defer=""
        ></script>
      </div>
    );
  }
}

export default Layout;
