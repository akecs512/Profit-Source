import myGif from "/worried.gif";

export const ErrorPage = () => {
  return (
    <>
      <h1>Error</h1>

      <div className="border">
        <div>
          <h2 className="error bg-accent">Awww... Don't Cry.</h2>
          <div className="flex flex-col justify-items-center items-center">
            <p>It's just a 404 error!</p>
            <div className="worried flex justify-center">
              <img src={myGif} alt="my-gif" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ErrorPage;
