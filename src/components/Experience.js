import React from "react";

const Experience = () => {
  return (
    <div id="experience" className=" container m-auto mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Experience
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className=" text-gray-700 font-medium w-[100%]">
          Here are my experiences and qualifications.
        </p>
      </div>
      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
        <div className="left flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Experience
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Data Analyst
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Applied Materials
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  Sep 2020 - Sep-2021
                </span>

                <div className=" text-[.9rem] text-justify break-words text-gray-500">
                  <ul>
                    <li>
                      •Responsible for improving data analysis process as part
                      of AMAT safety initiative.
                    </li>
                    <li>
                      •Developed a website in Sharepoint to maintain Safety
                      related activities and dashboards.{" "}
                    </li>
                    <li>
                      • Produce monthly and quarterly reports to identify trends
                      and provide results to management.
                    </li>
                    <li>
                      • First point of contact for user related issues and
                      questions related to overdue safety reports.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </fieldset>
        </div>

        <div className="right flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Experience
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Junior Engineer
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Flextronics India Pvt LTD
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  Nov 2017 - Aug 2020
                </span>
                <div className=" text-[.9rem] text-justify text-gray-500">
                  <ul>
                    <li>
                      •Built a Knowledge sharing portal using HTML5,CSS and
                      Javascript to maintain and share the internal
                      documentation.
                    </li>
                    <li>
                      •Managed Bill of Materials information and end-to-end
                      activities with customer and site.
                    </li>
                    <li>
                      •Act as the main point of contact for requests relating to
                      the Document Control.
                    </li>
                    <li>•Migrated internal Excel based reports to PowerBI.</li>
                  </ul>
                </div>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
      <div className="right flex-1 flex items-center justify-center">
        <fieldset
          data-aos="zoom-in"
          className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
        >
          <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
            Education
          </legend>
          <div className=" relative">
            {/* design */}
            <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
              <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
              <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
            </div>
            {/* design */}
            <div className=" flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
              <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                Electronics and Communication Engineering
              </h1>
              <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                SIETK,JNTU,Puttur.
              </span>
              <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                June 2013 - April 2017
              </span>
              <div className=" text-[.9rem] text-justify text-gray-500">
                <ul>
                  <li>
                    •Developed strong soft skills through dedicated learning
                    efforts, enhancing my ability to communicate effectively,
                    collaborate in teams, and adapt to dynamic work
                    environments.
                  </li>
                  <li>
                    •Acquired a basic foundation in SQL programming language,
                    enabling me to effectively manage and manipulate databases
                    for structured data storage.
                  </li>
                  <li>
                    •Attained a foundational understanding of the C programming
                    language.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default Experience;
