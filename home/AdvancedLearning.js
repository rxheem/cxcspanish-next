import Link from "next/link";
import LinkImage from "../common/LinkImage";

const AdvancedLearning = props => (
  <div className="box">
    <h1 className="title is-6">Advanced Learning</h1>
    <ul
      style={{
        paddingLeft: "10px"
      }}
    >
      <li style={{ paddingBottom: "15px" }}>
        <Link href="/faq">
          <LinkImage />
        </Link>
      </li>
      <li style={{ paddingBottom: "15px" }}>
        <LinkImage />
      </li>
      <li style={{ paddingBottom: "15px" }}>
        <LinkImage />
      </li>
      <li style={{ paddingBottom: "15px" }}>
        <LinkImage />
      </li>
      <li style={{ paddingBottom: "15px" }}>
        <LinkImage />
      </li>
      <li style={{ paddingBottom: "15px" }}>
        <LinkImage />
      </li>
    </ul>
  </div>
);

export default AdvancedLearning;
