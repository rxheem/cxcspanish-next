import Layout from "../components/Layout";
import Head from "next/head";
import Link from "next/link";

// All other Header Imports
import Breadcrumb from "../common/Breadcrumb";
import BreadcrumbItem from "../common/BreadcrumbItem";

const Tutoring = props => (
  <Layout>
    <Head>
      <title>Tutoring | CXC Spanish Guide</title>
      <meta name="description" content="" />
      <meta name="keywords" content="your, tags" />

      {/* Facebook meta tags */}
      <meta name="og:title" content="" />
      <meta name="og:url" content="" />
      <meta name="og:description" content="" />
    </Head>

    <Breadcrumb>
      <BreadcrumbItem title="Tutoring" href="/tutoring" />
    </Breadcrumb>

    <div className="columns">
      <div className="column">
        <div>
          <h1 className="title is-4">Tutoring</h1>

          <p>
            Our tutoring classes begin in the week on January 18th, 2020. Please
            see schedule below.
          </p>

          <br />
          <p>
            <b>NOTE</b>: Schedule, lacation and tutor subjected to change.
          </p>
          <br />

          <table className="table is-striped is-narrow is-hoverable is-fullwidth">
            <tr>
              <th>Day</th>
              <th>Time</th>
              <th>Location</th>
              <th>Tutor</th>
            </tr>
            <tr>
              <td>
                <b>Saturday</b>
              </td>
              <td>9am - 11am</td>
              <td>TBA</td>
              <td>Raheem M.</td>
            </tr>
            <tr>
              <td></td>
              <td>12pm - 2pm</td>
              <td>TBA</td>
              <td>Raheem M.</td>
            </tr>
            <tr>
              <td></td>
              <td>3pm - 5pm</td>
              <td>TBA</td>
              <td>Raheem M.</td>
            </tr>
            <br /> <br />
            <tr>
              <td>
                <b>Sunday</b>
              </td>
              <td>10am - 12pm</td>
              <td>TBA</td>
              <td>Raheem M.</td>
            </tr>
            <tr>
              <td></td>
              <td>1pm - 3pm</td>
              <td>TBA</td>
              <td>Raheem M.</td>
            </tr>
          </table>
        </div>
      </div>
      <br />

      <div className="column is-one-third">
        <div className="box">
          <h1 className="title is-6">Have more questions?</h1>

          <p>
            Read our <Link href="/faq">FAQ</Link> or send us an enquiry at{" "}
            <a href="mailto:hola@cxcspanish.com">hola@cxcspanish.com</a>.
          </p>
        </div>
      </div>
    </div>
  </Layout>
);

export default Tutoring;
