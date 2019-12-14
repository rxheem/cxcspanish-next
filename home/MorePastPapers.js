import Link from "next/link";

const MorePastPapers = props => (
  <div className="box">
    <h1 className="title is-5">More Past Papers</h1>
    <p>
      Check out and download our free catalogue of CSEC and CAPE past paper
      booklets for other subjects,{" "}
      <span className="has-text-danger">
        <b>not just for Spanish!</b>
      </span>
    </p>

    <br />
    <div className="columns">
      <div className="column">
        <img
          style={{ height: "auto", width: "auto" }}
          src="https://cxc-store.com/media/catalog/product/cache/1/image/400x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482876_3.jpg"
          alt="cxc past paper booklet"
        />
      </div>
      <div className="column">
        <img
          style={{ height: "auto", width: "auto" }}
          src="https://cxc-store.com/media/catalog/product/cache/1/image/400x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482456_25.jpg"
          alt="cxc past paper booklet"
        />
      </div>
      <div className="column">
        <img
          style={{ height: "auto", width: "auto" }}
          src="https://cxc-store.com/media/catalog/product/cache/1/image/400x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482357_25.jpg"
          alt="cxc past paper booklet"
        />
      </div>
      <div className="column">
        <img
          style={{ height: "auto", width: "auto" }}
          src="https://cxc-store.com/media/catalog/product/cache/1/image/400x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482661_25.jpg"
          alt="cxc past paper booklet"
        />
      </div>
      <div className="column">
        <img
          style={{ height: "auto", width: "auto" }}
          src="https://cxc-store.com/media/catalog/product/cache/1/image/400x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230481831_23.jpg"
          alt="cxc past paper booklet"
        />
      </div>
    </div>

    <a className="has-text-info" style={{ marginBottom: "10px" }}>
      <Link>View all...</Link>
    </a>
  </div>
);

export default MorePastPapers;
