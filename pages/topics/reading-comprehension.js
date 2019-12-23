import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Head from "next/head";
import Link from "next/link";
import Breadcrumb from "../../common/Breadcrumb";
import BreadcrumbItem from "../../common/BreadcrumbItem";
import $ from "jquery";

class ReadingComprehension extends React.Component {
  componentDidMount() {
    $(document).ready(function() {
      // Function to remove active class  from all <li />
      function removeActiveClass() {
        $(".liOverview").removeClass("is-active");
        $(".liResources").removeClass("is-active");
        $(".liExercises").removeClass("is-active");
        $(".liExamples").removeClass("is-active");
        $(".liTipsAndTricks").removeClass("is-active");
      }

      // Function to hide all the content
      function hideAllContent() {
        $("#overview").hide();
        $("#exercises").hide();
        $("#resources").hide();
        $("#examples").hide();
        $("#tipsandtricks").hide();
      }

      // On click event for overview
      $(".btnOverview").click(function() {
        removeActiveClass();
        hideAllContent();

        $("#overview").show();
        $(".liOverview").addClass("is-active");
      });

      // On click event for Examples
      $(".btnExamples").click(function() {
        removeActiveClass();
        hideAllContent();

        $("#examples").show();
        $(".liExamples").addClass("is-active");
      });

      // On click event for Examples
      $(".btnTipsAndTricks").click(function() {
        removeActiveClass();
        hideAllContent();

        $("#tipsandtricks").show();
        $(".liTipsAndTricks").addClass("is-active");
      });

      // On click event for Exercises
      $(".btnExercises").click(function() {
        removeActiveClass();
        hideAllContent();

        $("#exercises").show();
        $(".liExercises").addClass("is-active");
      });

      // On click event for overview
      $(".btnResources").click(function() {
        hideAllContent();
        removeActiveClass();

        $("#resources").show();
        $(".liResources").addClass("is-active");
      });

      // Triggers click on Overview tabs
      $(".btnOverview").trigger("click");
    });
  }

  render() {
    return (
      <Layout>
        <Head>
          <title>Reading Comprehension | CXC Spanish Guide</title>
          <meta
            name="description"
            content="CXC Spanish Online is the perfect free online study guide to pass your CXC Spanish exam with syllabus revision, exercises and downloadable resouces."
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
          <BreadcrumbItem title="Exam Topics" href="/exam-topics" />
          <BreadcrumbItem
            title="Reading Comprehension"
            href="/topics/reading-comprehension"
          />
        </Breadcrumb>

        <h1 className="title is-5">Reading Comprehension</h1>

        <div className="columns">
          <div className="column is-one-third">
            <div className=""></div>
          </div>
          <div className="column">
            {/* Tabs */}
            <div className="tabs">
              <ul>
                <li class="liOverview is-active">
                  <a className="btnOverview">Overview</a>
                </li>
                <li className="liExamples">
                  <a className="btnExamples">Examples</a>
                </li>
                <li className="liExercises">
                  <a className="btnExercises">Exercises</a>
                </li>
                <li className="liResources">
                  <a className="btnResources">Resources</a>
                </li>
              </ul>
            </div>

            {/* Section */}
            <section className="content">
              <div id="overview"></div>
              <div id="examples"></div>
              <div id="exercises"></div>
              <div id="resources"></div>
            </section>
          </div>
        </div>
      </Layout>
    );
  }
}
export default ReadingComprehension;
