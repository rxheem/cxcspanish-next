import Link from "next/link";

const JoinMailingList = props => (
  <div className="box">
    <h1 className="title is-4 has-text-centered">Join Our Mailing List</h1>
    <p style={{ marginTop: "-7px" }}>
      Join our weekly mailing list and get free daily past paper questions and
      answers, verb tense challenges, study notes, our monthly newletter and a
      whole lot more. <Link href="/mailing-list">Learn more.</Link>
    </p>
    <br />
    <form className="form">
      <div className="columns is-centered">
        <div className="column ">
          <div className="field">
            <label className="label">First Name</label>
            <div class="control">
              <input
                class="input is-marginless is-relative	"
                type="text"
                id="firstName"
                name="firstName"
                placeholder=""
              />
            </div>
          </div>
        </div>
        <div className="column">
          <div className="field">
            <label className="label is-pulled-left	">Last Name</label>
            <div class="control">
              <input
                class="input"
                type="text"
                id="lastName"
                name="lastName"
                placeholder=""
              />
            </div>
          </div>
        </div>
        <div className="column">
          <div className="field">
            <label className="label">Email Address</label>
            <div class="control">
              <input
                class="input"
                type="emal"
                id="email"
                name="email"
                placeholder=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="field" style={{ margin: "auto" }}>
        <input
          type="submit"
          value="Sign Me Up"
          class="button is-link"
          placeholder="Sign me Up"
        />
      </div>
    </form>
  </div>
);

export default JoinMailingList;
