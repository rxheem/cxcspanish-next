import Link from "next/link";

const Reviews = props => (
  <div style={{ color: "white" }}>
    <div className="columns">
      <div className="column">
        <div class="notification is-info">
          <h1 className="title is-5">Quick Reviews</h1>

          <ul style={{ listStyleType: "disc", marginLeft: "20px" }}>
            <li>
              <Link href="">
                <a style={{ textDecoration: "none" }}>
                  Directed Situations Review
                </a>
              </Link>
            </li>
            <li style={{ paddingTop: "5px" }}>
              <Link href="">
                <a style={{ textDecoration: "none" }}>Letter Writing Review</a>
              </Link>
            </li>
            <li style={{ paddingTop: "5px" }}>
              <Link href="">
                <a style={{ textDecoration: "none" }}>Composition Review</a>
              </Link>
            </li>
            <li style={{ paddingTop: "5px" }}>
              <Link href="">
                <a style={{ textDecoration: "none" }}>
                  Reading Comprehension Review
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="column">
        <div class="notification is-warning">
          <h1 className="title is-5">Quick Study Tips</h1>

          <ul style={{ listStyleType: "disc", marginLeft: "20px" }}>
            <li>
              <Link href="">
                <a style={{ textDecoration: "none" }}>
                  Talk to yourself in the mirror, everyday.
                </a>
              </Link>
            </li>
            <li style={{ paddingTop: "5px" }}>
              <Link href="">
                <a style={{ textDecoration: "none" }}>
                  Use flashcards, they come in handy.
                </a>
              </Link>
            </li>
            <li style={{ paddingTop: "5px" }}>
              <Link href="">
                <a style={{ textDecoration: "none" }}>
                  Use apps like HelloTalk or Duolingo
                </a>
              </Link>
            </li>
            <li style={{ paddingTop: "5px" }}>
              <Link href="">
                <a style={{ textDecoration: "none" }}>
                  Use your favorite website in Spanish
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="column">
        <div class="notification is-danger">
          <h1 className="title is-5">Popular Guides</h1>

          <ul style={{ listStyleType: "disc", marginLeft: "20px" }}>
            <li>
              <Link href="">
                <a style={{ textDecoration: "none" }}>Study Tips</a>
              </Link>
            </li>
            <li style={{ paddingTop: "5px" }}>
              <Link href="">
                <a style={{ textDecoration: "none" }}>'Tú' vs. 'Usted'</a>
              </Link>
            </li>
            <li style={{ paddingTop: "5px" }}>
              <Link href="">
                <a style={{ textDecoration: "none" }}>Funny Spanish Jokes</a>
              </Link>
            </li>
            <li style={{ paddingTop: "5px" }}>
              <Link href="">
                <a style={{ textDecoration: "none" }}>'Por' vs. 'Para'</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Reviews;
