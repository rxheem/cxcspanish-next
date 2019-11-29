import NavItem from "../common/NavItem";
import Link from "next/link";
import $ from "jquery";

class Navbar extends React.Component {
  componentDidMount() {
    $(document).ready(function() {
      // Check for click events on the navbar burger icon
      $(".navbar-burger").click(function() {
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
      });
    });
  }

  render() {
    return (
      <nav
        className="navbar has-shadow is-spaced is-danger"
        role="navigation"
        ariaLabel="main navigation"
      >
        <div className="navbar-brand">
          <Link href="/">
            <a className="navbar-item">
              <h1 className="title is-5" style={{ paddingBottom: "1px" }}>
                <span style={{ color: "white" }}>CXC Spanish Guide</span>
              </h1>
            </a>
          </Link>

          <a
            role="button"
            className="navbar-burger burger"
            ariaLabel="menu"
            ariaExpanded="false"
            dataTarget="mainNavbar"
          >
            <span ariaHidden="true"></span>
            <span ariaHidden="true"></span>
            <span ariaHidden="true"></span>
          </a>
        </div>

        <div id="mainNavbar" className="navbar-menu">
          <div className="navbar-start">
            <NavItem title="Guides" href="/guide" />

            <a className="navbar-item has-dropdown is-hoverable">
              <Link href="exam-topics">
                <a className="navbar-link">Exam Topics</a>
              </Link>

              <div className="navbar-dropdown">
                <NavItem
                  href="/topics/directed-situations"
                  title="Directed Situations"
                />
                <NavItem href="/topics/letter-writing" title="Letter Writing" />
                <NavItem href="/topics/composition" title="Composition" />
                <NavItem
                  href="/topics/contextual-announcements"
                  title="Contextual Announcements"
                />
                <NavItem
                  href="/topics/contextual-dialogue"
                  title="Contextual Dialogue"
                />
                <NavItem
                  href="/topics/reading-comprehension"
                  title="Reading Comprehension"
                />
              </div>
            </a>

            <a className="navbar-item has-dropdown is-hoverable">
              <Link href="exam-topics">
                <a className="navbar-link">Verb Tenses</a>
              </Link>

              <div className="navbar-dropdown">
                <NavItem title="Present Tense" href="/tenses/present-tense" />
                <NavItem
                  title="Present Progressive"
                  href="/tenses/present-progressive"
                />
                <NavItem
                  title="Preterite Tense"
                  href="/tenses/preterite-tense"
                />
                <NavItem
                  title="Imperfect Tense"
                  href="/tenses/imperfect-tense"
                />
                <NavItem
                  title="Conditional Tense"
                  href="/tenses/conditional-tense"
                />
                <NavItem title="Future Tense" href="/tenses/subjunctive-mood" />
                <NavItem
                  title="Subjunctive Mood"
                  href="/tenses/subjunctive-mood"
                />
              </div>
            </a>

            <NavItem title="Resources" href="/resources" />
            <NavItem title="Quiz" href="/quiz" />
            <NavItem title="Forum" href="/forum" />
          </div>

          <div className="navbar-end">
            <NavItem title="About Us" href="/about" />
            <NavItem title="Tutoring" href="/tutoring" />
            <NavItem title="FAQ" href="/FAQ" />
            <NavItem title="Contact" href="/contact" />
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
