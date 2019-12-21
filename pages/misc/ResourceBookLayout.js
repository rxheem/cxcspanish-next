import Link from "next/link";

const ResourceBookLayout = props => (
  <div id={props.id}>
    <a href="" target="_blank">
      <img
        className="image"
        src={props.src}
        alt="Image of paper booklet"
        style={{ height: "15em", width: "auto" }}
      />
    </a>
    <h1
      style={{ paddingTop: "10px", marginBottom: "3px" }}
      className="title is-6"
    >
      <span className="small sr-only">{props.level}</span>
      {props.title}
    </h1>
    <small>
      <i>
        May {props.yearStart} to June {props.yearEnd}
      </i>

      <span
        className={props.yearEnd <= "2016" ? "has-text-danger" : "is-hidden"}
      >
        <br />
        <b>NOTE:</b> Older than {new Date().getFullYear() - props.yearEnd} years
      </span>
    </small>
    <br /> <br /> <br />
  </div>
);

export default ResourceBookLayout;
