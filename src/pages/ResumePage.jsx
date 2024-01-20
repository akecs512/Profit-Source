

export const ResumePage = () => {
  return (
    <>
      <h1>Resume</h1>
      <div className="">
        <div className="flex flex-col items-start">
          <button className="btn btn-accent my-4 ">
            <a href="/Adrienne Kecskes Resume 2023.pdf">Download My Resume</a>
          </button>
        </div>
        <div className="px-20 mx-20">
          <img src="/ResumePage1.png" alt="resume page 1" />
          <img src="/ResumePage2.png" alt="resume page 2" />
          <img src="/ResumePage3.png" alt="resume page 3" />
        </div>
      </div>
    </>
  );
};
export default ResumePage;
