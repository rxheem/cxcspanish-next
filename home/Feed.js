import Link from "next/link";

const Feed = props => (
  <div className="box">
    <div className="columns">
      <div className="column is-one-third">
        <a
          href="https://drive.google.com/open?id=1dsiHYqGnJ0zCSHGlyHfZM97pY3-SxqoH"
          target="_blank"
        >
          <img
            className="image"
            alt="image of the cxc spansih textbooks"
            src="https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482630_4.jpg"
          />
        </a>
      </div>
      <div className="column">
        <h1 className="title is-5">CXC Spanish Online</h1>
        <p>
          CXC Spanish Online is the number one free online study guide for
          students sittng the CSEC Spanish examinations. We aim to help students
          by providing past paper examples and answers, weekly exercise
          booklets, live video tutorials, online quizzes and mock exams, and
          study notes.
        </p>

        <br />
        <span>
          Need more information? Read our <Link to="/FAQ">FAQ</Link>.
        </span>
        <br />

        <br />
        <p className="has-text-danger">
          Get the official CXC Spanish past papers today!
        </p>
        <br />
        <a
          target="_blank"
          href="https://drive.google.com/open?id=1dsiHYqGnJ0zCSHGlyHfZM97pY3-SxqoH"
          className="button is-link"
        >
          Download
        </a>
      </div>
    </div>
  </div>
);

export default Feed;
