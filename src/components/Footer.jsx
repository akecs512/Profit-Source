function Footer() {
  return (
    <>
      <footer>
        {/* <div className="footer items-center p-1 bg-primary text-neutral-content"> */}
          <nav className="footer grid-flow-col gap-2 flex items-center h-4 p-1 bg-primary pl-20">
            {/* <div className="flex items-center h-4"> */}
              <a href="https://www.linkedin.com/in/profitsource/">
                <img
                  className="footer-icon"
                  src="/images/contact/LinkedinLogo.png"
                  alt="LinkedIn"
                />
              </a>
              <a href="https://www.facebook.com/ProfitSource.biz">
                <img
                  className="footer-icon"
                  src="/imagesNew/facebook.png"
                  alt="Facebook"
                />
              </a>
              <a href="2theledgerlady@gmail.com">
                <img
                  className="footer-icon"
                  src="/images/contact/emailIcon.png"
                  alt="email"
                />
              </a>
              <div className="flex flex-row items-center content-right">
              <a href="tel://5129879239">
                <img
                  className="footer-icon"
                  src="/images/contact/phoneIcon.png"
                  alt="phone"
                />
              </a>
          (512) 987-9239
          </div>  


            {/* </div> */}

          </nav>
        {/* <aside className="items-center grid-flow-col">
          <p className="text-2xl font-bold pl-4">Contact Me</p>
        </aside> */}
        {/* <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <div className="flex items-center h-10">
            <a href="tel://5126533573">
              <img
                className="footer-icon"
                src="/images/contact/phoneIcon.png"
                alt="phone"
              />
            </a>
            <a href="mailto:akecs619@yahoo.com">
              <img
                className="footer-icon"
                src="/images/contact/emailIcon.png"
                alt="email"
              />
            </a>
          

            <a href="https://github.com/akecs512">
              <img
                className="footer-icon"
                src="/images/contact/githubLogo.png"
                alt="github"
              />
            </a>
          </div>
        </nav> */}
        {/* </div> */}
      </footer>
    </>
  );
}

export default Footer;
