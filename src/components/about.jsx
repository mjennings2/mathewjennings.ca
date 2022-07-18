import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta"></span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>I am a engineering student at Queens University, in my final year of the Mathematics and Engineering, 
                        Computing and Communications Program. </p>
                    <p>I have gained practical experience working as a Embedded Software Engineering Intern 
                        for 16 months at Cisco Meraki, and as a Intern within the Knowledge Services team at Fasken Martineau DuMoulin.
                        I am pursuing a Software Engineering career after grauduation, and am currently applying for positions starting in January 2023.</p>
                    <p>In my free time I have spent my life skiing, and sailing, spending 6+ years aplling my in-depth knowledge to coach children 
                        in both sports which allowed them to get the best start and master their skills. </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta"></span>
                <h2 className="colorlib-heading">My Skillset</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Software Development</h3>
                    <p>Working at Cisco Meraki I developed many algorithims and applications for Linux-kernel based products. 
                        I developed embedded software for BLE, LTE, GPS communication as well as custom drivers for IoT sensors.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Data Structures & Algorithms</h3>
                    <p>Enrolled in a program that specialized in both mathematics and computing, I have an in depth knowledge
                        and understanding of how various data structures and algorithims are built and operate.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Data Analytics</h3>
                    <p>At Fasken, I developed python scripts and web scraping algorithims to keep the lawyers informed and up to date. 
                        I also set up automated systems for data consumption by leveraging Microsoft Sharepont, Power Apps, and Microsoft Azure</p>
                </div>
                </div>
            </div>
            
            </div>
        </div>
        </section>
      </div>
    )
  }
}
