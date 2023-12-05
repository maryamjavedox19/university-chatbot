import React from "react";
import Slider from "../inc/Slider";
import Footer from "./Footer";
import Chatbot from "./Chatbot";

export default function Home() {
  return (
    <div>

      <Chatbot></Chatbot>
      <Slider />

      <section className="section">
        <div className="text-center">
          <h1 className="NED-main-heading">Why Choose NED University?</h1>
          <p style={{ padding: '3rem' }}>
            NED University is renowned for its rigorous academic programs that
            prepare students for the challenges of the real world. The
            curriculum is designed to foster critical thinking, problem-solving
            skills, and hands-on experience, ensuring that graduates are
            well-equipped to excel in their careers.
          </p>
          <div></div>
        </div>
        <div className="containers">
          <img src="../images/slider2.jpg" className="image" />
          <div className="text">
            <h3>Inspiring And Dedicated Faculty:</h3>
            <p>
              The faculty members are approachable, readily available for
              guidance and support, and are known for their mentorship beyond
              the classroom. They inspire students to aim high, nurturing their
              talents and guiding them toward their career aspirations.
            </p>
          </div>
        </div>
        <div className="containers2">
          <div className="text">
            <h3>Academics:</h3>
            <p>
              The university offers a wide range of undergraduate and
              postgraduate programs in various engineering and technology
              disciplines. The emphasis on research and innovation is evident,
              as students are encouraged to engage in cutting-edge projects that
              have real-world applications.
            </p>
          </div>

          <img src="../images/pic1.jpg" className="image1" />
        </div>

        <div className="container">
          <div className="row ">
            <div className="col-md-12 ">
              <h3 className="main-heading">Masters Admissions</h3>
              <div className="underline"></div>
            </div>
          </div>
        </div>
        <hr />
        <div className="container">
          <div className="row ">
            <div className="col-md-12 text-center">
              <h2 className="second-heading">
                Important Instructions for Applicants of MS CSIT/IS/DS
                (FALL-2023)
              </h2>
              <div className="underlines mx-auto"></div>
            </div>
            <p>
              <span style={{ fontWeight: "bold", color: "red" }}>
                Important Note:
              </span>
              Guidelines for Fee payment and Courses Registration which includes
              portal login credentials UID / Password has been sent via email to
              all admitted candidates in MS CSIT/ IS / DS (E/W) for Fall 2023.
              All admitted candidates are advised to carefully follow the
              provided guidelines and register courses accordingly. Those
              admitted students who have not received the courses registration
              email are advised to immediately visit the Department of CS&IT
              during office hours.
            </p>
            <p>
              Students of Evening programmes may select maximum 2 courses while
              students of Weekend programme may select maximum of 4 courses in a
              semester. But this course limit does not include non credit
              courses.{" "}
            </p>
            <div>
              <div>
                <p>
                  <span style={{ fontWeight: "bold", fontStyle: "Arial" }}>
                    Registration Deadline Extended:{" "}
                  </span>
                  <span style={{ color: "red", backgroundColor: "yellow" }}>
                    27<sup>th</sup> October, 2023 ( with Rs.1,500/- late fees)
                  </span>
                </p>
              </div>
              <div>
                <p>
                  <span style={{ fontWeight: "bold", fontStyle: "Arial" }}>
                    Commencement Of Classes:{" "}
                  </span>
                  <span style={{ color: "blue" }}>
                    9<sup>th</sup> October, 2023
                  </span>
                </p>

                <div className="col-md-12 text-center">
                  <h4 className="second-heading">Note:</h4>
                  <p>
                    Candidates are advised to bring all original required
                    documents along with one complete photocopy set (attested)
                    in the interviews. Admission will not be granted if any of
                    the required documents will be missing at the time of the
                    interview.
                  </p>
                </div>
                <div className="container">
                  <div className="row ">
                    <div className="col-md-12 ">
                      <h5 className="third-heading">Required Documents</h5>
                      <p>
                        Candidates are required to bring all the following
                        Original Documents along with a set of attested
                        photocopies at the time of the interview:
                      </p>
                      <ol>
                        <li>S.S.C. Certificate</li>
                        <li>H.S.C. Certificate</li>
                        <li>
                          Marks/Transcript Certificates of qualifying
                          examination i.e. undergraduate/postgraduate programs
                        </li>
                        <li>
                          {" "}
                          Degree / Provisional Certificate of qualifying
                          examination
                        </li>
                        <li>Computerised National Identity Card</li>
                        <li>Domicile</li>
                        <li>
                          Registration Certificate of Pakistan Engineering
                          Council / Pakistan Council of Architects and Town
                          Planners (if applicable)
                        </li>
                        <li>
                          Migration Certificate (in original) in case of a
                          candidate has a degree from a University other than
                          NED University
                        </li>
                        <li>
                          No Objection Certificate (in original), from the
                          employer (if the candidate is employed)
                        </li>
                        <li>Two Latest Photographs 1” x 1”</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

      <Footer />

    </div >
  );
}


