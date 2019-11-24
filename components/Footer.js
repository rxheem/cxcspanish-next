import Link from "next/link";

class Footer extends React.Component {
  render() {
    const liStyle = {
      color: "#fff"
    };

    return (
      <footer id="footer" class="footer has-background-dark">
        <div className="container">
          {/* First column */}
          <div className="columns">
            <div className="column">
              <h3 className="title is-6 has-text-white">POPULAR GUIDES</h3>

              <ul style={{ lineHeight: "30px" }}>
                <li>
                  <Link href="/guides/pronunciation-tips">
                    <a style={liStyle}>Pronunciation Tips</a>
                  </Link>
                </li>
                <li>
                  <Link href="/guides/adverbs">
                    <a style={liStyle}>Adverbs</a>
                  </Link>
                </li>
                <li>
                  <Link href="/guides/ser-vs-estar">
                    <a style={liStyle}>'Ser' vs. 'Estar'</a>
                  </Link>
                </li>
                <li>
                  <Link href="/guides/flirting-in-spanish">
                    <a style={liStyle}> Flirting in Spanish</a>
                  </Link>
                </li>
                <li>
                  <Link href="/guides/genders-in-spanish">
                    <a style={liStyle}> Genders in Spanish</a>
                  </Link>
                </li>
                <li>
                  <Link href="/guides/numbers-in-spanish">
                    <a style={liStyle}> Numbers in Spanish</a>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Second column */}
            <div className="column">
              <h3 className="title is-6 has-text-white">TOOLS WE USE</h3>

              <ul style={{ lineHeight: "30px" }}>
                <li>
                  <a
                    style={liStyle}
                    target="_blank"
                    href="https://www.spanishdict.com"
                  >
                    SpanishDict
                  </a>
                </li>
                <li>
                  <a style={liStyle} target="_blank" href="https://www.cxc.org">
                    CXC
                  </a>
                </li>
                <li>
                  <a style={liStyle} href="https://cxc-store.com">
                    CXC Store
                  </a>
                </li>
                <li>
                  <a
                    style={liStyle}
                    target="_blank"
                    href="https://www.passmycxc.com/courses/view/spanish"
                  >
                    Pass My CXC
                  </a>
                </li>
              </ul>
            </div>

            {/* Third column */}
            <div className="column">
              <h3 className="title is-6 has-text-white">JUMP START</h3>

              <ul style={{ lineHeight: "30px" }}>
                <li>
                  <Link href="/">
                    <a style={liStyle}> Directed Situation</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a style={liStyle}> Reading Comprehension</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a style={liStyle}> Letter Writing</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a style={liStyle}> Contextual Dialogue</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a style={liStyle}> Contextual Announcement</a>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Fourth column */}
            <div className="column">
              <h3 className="title is-6 has-text-white">ABOUT US</h3>

              <ul style={{ lineHeight: "30px" }}>
                <li>
                  <Link href="/about">
                    <a style={liStyle}>About Us</a>
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-use">
                    <a style={liStyle}>Terms of Use</a>
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy">
                    <a style={liStyle}>Privacy Policy</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a style={liStyle}>Contact Us</a>
                  </Link>
                </li>
                <li>
                  <Link href="/sitemap.xml">
                    <a style={liStyle}>Sitemap</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
