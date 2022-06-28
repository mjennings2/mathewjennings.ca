import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.jpeg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Mathew Jennings</a></h1>
              <span className="email">matjenning@gmail.com</span>
              <span className="email">(647) - 330 - 4286</span>

            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  {/*<li><a href="#" data-nav-section="projects">Projects</a></li>*/}
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
              <li><a href="https://www.linkedin.com/in/15mj35/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
              <li><a href="https://github.com/mjennings2" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
              <li><a href="mailto:matjenning@gmail.com" target="_blank" rel="noopener noreferrer"><i className="icon-mail" /></a></li>
              <li><a href="tel:6473304286" target="_blank" rel="noopener noreferrer"><i className="icon-phone" /></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                  
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
