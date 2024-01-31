import Carousel from "../components/Carousel"

function Header() {
  return (
    <>
    <div>
      <Carousel />
    </div>
    <div
      className="hero bg-cover"
      style={{ backgroundImage: "url(/imagesNew/cityline.jpeg" }}
    >
      {/* <div className="hero-overlay bg-opacity-10"></div> */}
      {/* <div className="hero-content flex text-center text-neutral-content"> */}
      <div className="header max-w-md flex flex-col">
        <h1 className="header-title mb-5 text-5xl font-bold ">Going Beyond <br/>the Numbers</h1>
      </div>
      {/* </div> */}
      <div className="contact-form text-black">
        <h3>Contact Form</h3>

      </div>
    </div>
    </>
  ); 
}

export default Header;
