import NavItem from "../common/NavItem";
import Link from "next/link";
import $ from "jquery";
import FA from "react-fontawesome";

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "CXC Spanish Online"
    };
  }

  componentDidMount() {
    $(".navbar-burger").click(function() {
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
    });
  }

  render() {
    return (
      <nav
        className="navbar has-shadow is-spaced is-link"
        role="navigation"
        ariaLabel="main navigation"
      >
        <div className="navbar-brand">
          <a href="/" className="navbar-item">
            <h1 className="title is-5" style={{ paddingBottom: "1px" }}>
              <span style={{ color: "white" }}>{this.state.title}</span>
            </h1>
          </a>

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
                <a href="exam-topics" className="navbar-link">
                  Exam Topics
                </a>
              </Link>

              <div className="navbar-dropdown">
                <NavItem
                  hasIcon
                  name="angle-double-right"
                  href="/topics/directed-situations"
                  title="Directed Situations"
                />
                <NavItem
                  hasIcon
                  name="angle-double-right"
                  href="/topics/letter-writing"
                  title="Letter Writing"
                />
                <NavItem
                  hasIcon
                  name="angle-double-right"
                  href="/topics/composition"
                  title="Composition"
                />
                <NavItem
                  hasIcon
                  name="angle-double-right"
                  href="/topics/contextual-announcements"
                  title="Contextual Announcements"
                />
                <NavItem
                  hasIcon
                  name="angle-double-right"
                  href="/topics/contextual-dialogue"
                  title="Contextual Dialogue"
                />
                <NavItem
                  hasIcon
                  name="angle-double-right"
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
          </div>

          <div className="navbar-end">
            <NavItem hasIcon name="users" title="About Us" href="/about" />
            <NavItem
              hasIcon
              name="chalkboard-teacher"
              title="Tutoring"
              href="/tutoring"
            />
            <NavItem hasIcon name="comment" title="FAQ" href="/FAQ" />
            <NavItem hasIcon name="id-badge" title="Contact" href="/contact" />
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
