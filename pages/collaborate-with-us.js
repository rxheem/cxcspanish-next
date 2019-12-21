import Layout from "../components/Layout";
import Head from "next/head";
import Link from "next/link";
import Breadcrumb from "../common/Breadcrumb";
import BreadcrumbItem from "../common/BreadcrumbItem";

const Collaborate = props => (
  <Layout>
    <Head>
      <title>Collaborate With Us | CXC Spanish Guide</title>
      <meta
        name="description"
        content="Learn how to join our team of professionals or let us help you find and teach Spanish in your area!"
      />
      <meta
        name="keywords"
        content="cxc,csec spanish,spanish jamaica,contact,cxc spanish,cxc spansih jamaica,espanol jamaica, csec spanish past papers, spanish, cape, caribbean examination counsil,caribbean examination counsel, español, espanol, study guide, study, pass csec spanish exam, caribbean examination counsil,caribbean examination counsel, español, espanol, study guide, study, directed situations, free response,present tense,imperfect tense,ser vs estar,subjunctive mood,subjunctive tense spanish,reading comprehension,contextual dialogue, contextual announcements, poster,spanish,pass"
      />

      {/* Facebook meta tags */}
      <meta name="og:title" content="" />
      <meta name="og:url" content="" />
      <meta name="og:description" content="" />
    </Head>
    <Breadcrumb>
      <BreadcrumbItem title="Collaborate With Us" href="/collaborate-with-u" />
    </Breadcrumb>
    <section className="">
      <h1 className="title is-4">Collaborate With Us</h1>
      <p>
        We're glad that you are interested in joining our efforts. As teachers,
        we understand how difficult it is for students to fully grasp certain
        concepts in Spanish, and we understand that some students are more far
        behind than others.
      </p>
      <br />
      <p>
        We are a small team located in Kingston, Jamaica. When we came together
        back in June, we realized that there was an abundance of detailed
        resources online for other CXC subjects such as Math, English A & B,
        Social Studies and Information Technology, but none offered modern and
        in-depth explanations of Spanish. And although there are countless
        website that teach Spanish, their contents were scattered and not guided
        towards the CXC Syallabus.
      </p>
      <br />
      <p>
        That is why we decided to make CXC Spanish Online, a website dedicated
        to teach Spanish at the CSEC level, and includes:
      </p>
      <br />
      <ul style={{ listStyleType: "disc", marginLeft: "20px" }}>
        <li>
          <p>
            A review of all the exam topics and tenses covered on the CXC
            Syllabus with downloadable exercise booklets and study notes.
          </p>
        </li>
        <li style={{ paddingTop: "15px" }}>
          <p>
            High quality and interactive video tutorials on most topics on the
            CSEC syllabus.
          </p>
        </li>
        <li style={{ paddingTop: "15px" }}>
          <p>Online practice exams with feedback.</p>
        </li>
        <li style={{ paddingTop: "15px" }}>
          <p>
            Free weekly emails to student subscribers with handouts and exercies
            booklets taken directly from past papers.
          </p>
        </li>
      </ul>
    </section>
    <br />
    <p>
      As you can tell, our efforts are very ambitious and we need your help
      wherever you can.
    </p>
    <br /> <br />
    <section className="">
      <h1 className="title is-5">A Little of Our Stats</h1>
      <p>
        We still have not yet uploaded all our material for our website and yet
        we have a stong student base. So far, we have
      </p>

      <br />
      <ul style={{ listStyleType: "disc", marginLeft: "20px" }}>
        <li>
          <p>
            Over 8,000 website visits from all CXC-participating Caribbean
            islands.{" "}
          </p>
        </li>
        <li style={{ paddingTop: "15px" }}>
          <p>Over 500 subscribers to our mailing list</p>
        </li>
        <li style={{ paddingTop: "15px" }}>
          <p>Over 1000 student followers on Instagram</p>
        </li>
        <li style={{ paddingTop: "15px" }}>
          <p>Over 400 likes and followers on Facebook</p>
        </li>
        <li style={{ paddingTop: "15px" }}>
          <p>And we're growing everyday!</p>
        </li>
      </ul>
    </section>
    <br />
    <br />
    <section>
      <h1 className="title is-5">What We Need</h1>

      <p>
        You can send us any material you may have. If you wish to be one of our
        writers then just let us know! We are currenly looking for tips how how
        to appraoch each topic on Paper II and advice on how to approach the
        oral exam.
      </p>
      <br />
      <p>
        Your contribution will be shared with students and credit will be given.
      </p>

      <br />
      <p>
        Send us your material or any questions that you may have at{" "}
        <a href="mailto:hola@cxcspanish.com">hola@cxcspanish.com</a> or{" "}
        <a href="mailto:holacxcspanish@gmail.com">holacxcspanish@gmail.com</a>{" "}
        We look forward to working with you as we psuh our students to aim for
        and reach greater heights.
      </p>
    </section>
  </Layout>
);

export default Collaborate;
