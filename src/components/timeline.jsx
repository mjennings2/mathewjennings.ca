import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta"></span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Queens's University - Mathematics and Engineering: Computing and Communications <span>Class of 2023</span></h2>
                        <p>Bachelor of Applied Science - BASc, Mathematics and Engineering Computing and Communications</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-briefcase" />
                      </div>
                      <div className="timeline-label">
                        <h2>Summer Intern in Data Analytics - Fasken Martineau DuMoulin LLP <span>Summer 2022</span></h2>
                        <p>
                          <ul>
                            <li>Assisted Fasken’s Knowledge Service Team with data retrieval and analysis.</li>
                            <li>Created Python functions in Microsoft Azure to scrape information from the web based off lawyers requests.</li>
                            <li>Set up SQL Databases and Queries for use as a backend for Microsoft Power BI Dashboards</li>
                            <li>Used Microsoft Power Automate to create flows updating SQL Databases triggered by Automated Azure Functions.</li>
                            <li>Created python tools for staff to automatically adjust and clean Excel files for lawyer consumption.</li>
                          </ul>
                          </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-briefcase" />
                      </div>
                      <div className="timeline-label">
                        <h2>Embedded Sotfware Engineering Intern - Cisco Meraki <span>May 2020 - August 2021</span></h2>
                        <p>
                          <ul>
                            <li>Worked with Meraki’s Platform and Hardware teams on firmware for several Linux-kernel based products (C/C++, Device Tree).</li>
                            <li>Worked effectively on both individual projects and collaboratively on various 2-10 person teams.</li>
                            <li>Platform bring up using Yocto and OpenWRT – SoC, PHYs, memory, other peripherals (Make).</li>
                            <li>Bootloader Development (U-boot).</li>
                            <li>Embedded software for BLE, LTE, GPS communication (C/C++).</li>
                            <li>Built Custom drivers for NPI IoT sensors on Meraki’s new MT product line (C).</li>
                            <li>Worked with vendors such as Qualcomm and Marvell to validate the compatibility of SoCs for upcoming Meraki Products.</li>
                          </ul>
                        </p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-book2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Queen's Mostly Autonomous Sailboat Team - Queen's University <span>2017-2020</span></h2>
                        <p>
                          <ul>
                            <li>Head Manager for the Queen’s Autonomous Sailboat Team, leading three separate software development teams to design and program a self-driving boat using image recognition and wind speed / direction detection software.</li>
                            <li>The boat is entered in annual competitions that test navigation, tactics, and design.</li>
                          </ul>
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
