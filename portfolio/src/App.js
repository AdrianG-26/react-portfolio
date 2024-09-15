import "./App.css";

function App() {
  return (
    <div data-bs-spy="scroll" data-bs-target=".navbar">
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container flex-lg-column">
          <a className="navbar-brand mx-lg-auto mb-lg-4" href="/#">
            <span className="h3 fw-bold d-block d-lg-none">Adrian Galvez</span>
            <img
              src="./assets/images/person.jpg"
              className="d-none d-lg-block rounded-circle"
              alt=""
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto flex-lg-column text-lg-center">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#work">
                  Works
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* //NAVBAR */}

      {/* CONTENT WRAPPER */}
      <div id="content-wrapper">
        {/* HOME */}
        <section id="home" className="full-height px-lg-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-10">
                <h1 className="display-4 fw-bold" data-aos="fade-up">
                  Professional
                  <span className="text-brand">VIDEO EDITOR</span>
                  and
                  <span className="text-brand">GRAPHIC DESIGNER</span>
                </h1>
                <p
                  className="lead mt-2 mb-4"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  Hey, I'm ADRIAN GALVEZ. Here to deliver you creative visions
                  to life through visual storytelling. With a keen eye for
                  detail and a dedication to excellence, I specialize in
                  crafting engaging multimedia experiences that captivate
                  audiences. Let's collaborate to turn ideas into compelling
                  visuals that leave a lasting impression!
                </p>
                <div data-aos="fade-up" data-aos-delay="600">
                  <a href="#work" className="btn btn-brand me-3">
                    Explore My Work
                  </a>
                  <a
                    href="mailto:adriangalvez2602@gmail.com"
                    className="link-custom"
                  >
                    Email: adriangalvez2602@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* //HOME */}

        {/* SERVICES */}
        <section id="services" className="full-height px-lg-5">
          <div className="container">
            <div className="row pb-4" data-aos="fade-up">
              <div className="col-lg-8">
                <h6 className="text-brand">SERVICES</h6>
                <h1>Services That I Provide</h1>
              </div>
            </div>

            <div className="row gy-4">
              <div className="col-md-4" data-aos="fade-up">
                <div className="service p-4 bg-base rounded-4 shadow-effect">
                  <div className="iconbox rounded-4">
                    <i className="las la-video"></i>
                  </div>
                  <h5 className="mt-4 mb-2">Video Editing</h5>
                  <p>
                    With a passion for storytelling and a keen eye for detail, I
                    specialize in crafting visually stunning and engaging
                    videos.
                  </p>
                  <a
                    href="https://dlsleduph-my.sharepoint.com/:f:/g/personal/adrian_louise_galvez_dlsl_edu_ph/EsK5odzDyypFrrGzET46bIkBi66QItaCv7vwgIEXT43fuQ?e=OtX1Cp"
                    target="_blank"
                    className="link-custom"
                    rel="noreferrer"
                  >
                    See Video Editing Portfolio
                  </a>
                </div>
              </div>

              <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
                <div className="service p-4 bg-base rounded-4 shadow-effect">
                  <div className="iconbox rounded-4">
                    <i className="las la-pencil-ruler"></i>
                  </div>
                  <h5 className="mt-4 mb-2">Graphic Design</h5>
                  <p>
                    I strive to create visually compelling and impactful designs
                    that resonate with audiences.
                  </p>
                  <a
                    href="https://dlsleduph-my.sharepoint.com/:f:/g/personal/adrian_louise_galvez_dlsl_edu_ph/EqTGQnEmI-dDsX_XzVvRCPcBMpYFr-1MStF8KR2Facj7EA?e=ruO4jg"
                    target="_blank"
                    className="link-custom"
                    rel="noreferrer"
                  >
                    See Graphic Design Portfolio
                  </a>
                </div>
              </div>

              <div className="col-md-4" data-aos="fade-up" data-aos-delay="600">
                <div className="service p-4 bg-base rounded-4 shadow-effect">
                  <div className="iconbox rounded-4">
                    <i className="las la-laptop"></i>
                  </div>
                  <h5 className="mt-4 mb-2">General VA Tasks</h5>
                  <p>
                    I offer a wide range of administrative, technical, and
                    creative services tailored to meet your specific needs.
                  </p>
                  <a
                    href="https://dlsleduph-my.sharepoint.com/:b:/g/personal/adrian_louise_galvez_dlsl_edu_ph/EX5TNazOqB1KsYCbyZAmFckBycM-M8xa58vuJnLwU10Mhw?e=2DrC4C"
                    target="_blank"
                    className="link-custom"
                    rel="noreferrer"
                  >
                    See my Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* SERVICES */}

        {/* WORK */}

        {/* Modal 1 */}
        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content" object="background-color: #393e46">
              <div className="modal-header">
                <h1
                  object="color: #eef3db"
                  className="modal-title fs-5"
                  id="staticBackdropLabel"
                >
                  Gaming Reels
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body" object="color: #eef3db">
                Creating captivating short reels that showcase the excitement
                and highlights of game streaming content. I transform raw
                footage into engaging and shareable videos that resonate with
                audiences.
              </div>
              <div className="modal-footer">
                <a
                  href="https://dlsleduph-my.sharepoint.com/:f:/g/personal/adrian_louise_galvez_dlsl_edu_ph/EsK5odzDyypFrrGzET46bIkBi66QItaCv7vwgIEXT43fuQ?e=OtX1Cp"
                  target="_blank"
                  className="link-custom"
                  rel="noreferrer"
                >
                  See Video Editing Portfolio
                </a>
                <button
                  type="button"
                  className="btn btn-brand me-3"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* //Modal 1 */}
        {/* Modal 2 */}
        <div
          className="modal fade"
          id="staticBackdrop2"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content" object="background-color: #393e46">
              <div className="modal-header">
                <h1
                  object="color: #eef3db"
                  className="modal-title fs-5"
                  id="staticBackdropLabel2"
                >
                  Social Media Ads
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body" object="color: #eef3db">
                I excel at crafting compelling campaigns that drive engagement
                and conversions. With a deep understanding of various platforms
                and their audiences, I develop targeted ads that resonate with
                your ideal customers.
              </div>
              <div className="modal-footer">
                <a
                  href="https://dlsleduph-my.sharepoint.com/:f:/g/personal/adrian_louise_galvez_dlsl_edu_ph/EsK5odzDyypFrrGzET46bIkBi66QItaCv7vwgIEXT43fuQ?e=OtX1Cp"
                  target="_blank"
                  className="link-custom"
                  rel="noreferrer"
                >
                  See Video Editing Portfolio
                </a>
                <button
                  type="button"
                  className="btn btn-brand me-3"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* //Modal 2 */}
        {/* Modal 3 */}
        <div
          className="modal fade"
          id="staticBackdrop3"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content" object="background-color: #393e46">
              <div className="modal-header">
                <h1
                  object="color: #eef3db"
                  className="modal-title fs-5"
                  id="staticBackdropLabel3"
                >
                  Social Media Post
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body" object="color: #eef3db">
                I strive to create visually compelling and impactful designs
                that resonate with audiences. My work combines strong conceptual
                thinking, attention to detail, and a keen eye for aesthetics.
              </div>
              <div className="modal-footer">
                <a
                  href="https://dlsleduph-my.sharepoint.com/:f:/g/personal/adrian_louise_galvez_dlsl_edu_ph/EqTGQnEmI-dDsX_XzVvRCPcBMpYFr-1MStF8KR2Facj7EA?e=ruO4jg"
                  target="_blank"
                  className="link-custom"
                  rel="noreferrer"
                >
                  See Graphic Design Portfolio
                </a>
                <button
                  type="button"
                  className="btn btn-brand me-3"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* //Modal 3 */}

        <section id="work" className="full-height px-lg-5">
          <div className="container">
            <div className="row pb-4" data-aos="fade-up">
              <div className="col-lg-8">
                <h6 className="text-brand">WORKS</h6>
                <h1>My Recent Projects</h1>
              </div>
            </div>

            <div className="row gy-4">
              <div className="col-md-6" data-aos="fade-up">
                <div className="card-custom rounded-4 bg-base shadow-effect">
                  <div className="card-custom-image rounded-4">
                    <video width="567" height="400" controls>
                      <source
                        src="./assets/videos/Reel 1.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="card-custom-content p-4">
                    <h4>Video Editing</h4>
                    {/* Button */}
                    <button
                      type="button"
                      className="btn btn-brand me-3"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                    >
                      Show Details
                    </button>
                    {/* //Button */}
                  </div>
                </div>
              </div>

              <div className="col-md-6" data-aos="fade-up" data-aos-delay="300">
                <div className="card-custom rounded-4 bg-base shadow-effect">
                  <div className="card-custom-image rounded-4">
                    <video width="567" height="400" controls>
                      <source
                        src="./assets/videos/Kelixir Brand Video.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="card-custom-content p-4">
                    <h4>Video Editing</h4>
                    {/* Button */}
                    <button
                      type="button"
                      className="btn btn-brand me-3"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop2"
                    >
                      Show Details
                    </button>
                    {/* //Button */}
                  </div>
                </div>
              </div>

              <div className="col-md-6" data-aos="fade-up">
                <div className="card-custom rounded-4 bg-base shadow-effect">
                  <div className="card-custom-image rounded-4">
                    <img
                      className="rounded-4"
                      src="./assets/images/1.png"
                      alt=""
                    />
                  </div>
                  <div className="card-custom-content p-4">
                    <h4>Graphic Design</h4>
                    {/* Button */}
                    <button
                      type="button"
                      className="btn btn-brand me-3"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop3"
                    >
                      Show Details
                    </button>
                    {/* //Button */}
                  </div>
                </div>
              </div>

              <div className="col-md-6" data-aos="fade-up" data-aos-delay="300">
                <div className="card-custom rounded-4 bg-base shadow-effect">
                  <div className="card-custom-image rounded-4">
                    <img
                      className="rounded-4"
                      src="./assets/images/10.png"
                      alt=""
                    />
                  </div>
                  <div className="card-custom-content p-4">
                    <h4>Graphic Design</h4>
                    {/* Button */}
                    <button
                      type="button"
                      className="btn btn-brand me-3"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop3"
                    >
                      Show Details
                    </button>
                    {/* //Button */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* //WORK */}

        {/* ABOUT */}
        <section id="about" className="full-height px-lg-5">
          <div className="container">
            <div className="row pb-4" data-aos="fade-up">
              <div className="col-lg-8">
                <h6 className="text-brand">ABOUT ME</h6>
                <h1>Education & Experience</h1>
              </div>
            </div>

            <div className="row gy-5">
              <div className="col-lg-6">
                <h3 className="mb-4" data-aos="fade-up" data-aos-delay="300">
                  Education
                </h3>
                <div className="row gy-4">
                  <div
                    className="col-12"
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >
                    <div className="bg-base p-4 rounded-4 shadow-effect">
                      <h4>Bachelor of Science in Computer Science</h4>
                      <p className="text-brand mb-2">
                        De La Salle Lipa, Batangas (2022 - Present)
                      </p>
                    </div>
                  </div>

                  <div
                    className="col-12"
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >
                    <div className="bg-base p-4 rounded-4 shadow-effect">
                      <h4>Senior High School Certificate (STEM)</h4>
                      <p className="text-brand mb-2">
                        Mapúa University, Intramuros, Manila (2018 - 2020)
                      </p>
                    </div>
                  </div>

                  <div
                    className="col-12"
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >
                    <div className="bg-base p-4 rounded-4 shadow-effect">
                      <h4>Junior High School Certificate</h4>
                      <p className="text-brand mb-2">
                        St. Paul College of Bocaue, Bulacan (2014 - 2018)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <h3 className="mb-4" data-aos="fade-up" data-aos-delay="300">
                  Experience
                </h3>
                <div className="row gy-4">
                  <div
                    className="col-12"
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >
                    <div className="bg-base p-4 rounded-4 shadow-effect">
                      <h4>Freelance Video Editor and Graphic Designer</h4>
                      <p className="text-brand mb-2">2018 - Present</p>
                      <p className="mb-0">
                        As a freelancer, I am able to cater most creative needs
                        of my clients with whatever vision they wanted me to
                        deliver.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* //ABOUT */}

        {/* CONTACT */}
        <section id="contact" className="full-height px-lg-5">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8 pb-4" data-aos="fade-up">
                <h6 className="text-brand">CONTACT</h6>
                <h1>
                  Want to create engaging videos for your content? Let's Talk!
                </h1>
              </div>

              <div className="col-lg-8" data-aos="fade-up" data-aos-delay="300">
                <form
                  action="#"
                  className="row g-lg-3 gy-3"
                  onsubmit="return validateForm()"
                >
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="form-group col-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter subject"
                    />
                  </div>
                  <div className="form-group col-12">
                    <textarea
                      name=""
                      rows="4"
                      className="form-control"
                      placeholder="Enter your message"
                    ></textarea>
                  </div>
                  <div className="form-group col-12 d-grid">
                    <button
                      type="submit"
                      className="btn btn-brand"
                      onclick="message()"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* //CONTACT */}

        {/* FOOTER */}
        <footer className="py-5 px-lg-5">
          <div className="container">
            <div className="row gy-4 justify-content-between">
              <div className="col-auto"></div>
              <div className="col-auto">
                <div className="social-icons">
                  <a
                    href="https://www.facebook.com/adrianglvz26"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="lab la-facebook-f"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/adrianglvz26/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="lab la-instagram"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/adrian-galvez-71b8441ba/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="lab la-linkedin-in"></i>
                  </a>
                  <a
                    href="https://github.com/AdrianGlvz"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="lab la-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* //FOOTER */}
      </div>
      {/* //CONTENT WRAPPER */}
    </div>
  );
}

export default App;
