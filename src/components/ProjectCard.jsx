/* eslint-disable react/prop-types */
function ProjectCard({ title, items, subtitle }) {
  const { screenshot, screenshotAlt, pageLink, repoLink, bodyText, tags } =
    items;

  return (
    <>
      <div className="card bg-base-200 p-2 basis-1/3 shadow-sm shadow-slate-600 rounded-md">
        <figure>
          <img className="card-image" src={screenshot} alt={screenshotAlt} />
        </figure>
        <div className="card-body flex">
          <div className="card-text">
          <h2 className="card-title text-center">{title}</h2>
          <h3 className="card-subtitle text-center">{subtitle}</h3>
          {/* <ul className="list-disc">{bodyText}</ul> */}
          <ul className="list-disc pb-4">
            {bodyText &&
              bodyText.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
          </div>

          <div className="card-actions p-6 mt-2 justify-end">
            <a href={pageLink} className="btn btn-primary bg-bitter">
              Link
            </a>
            <a href={repoLink} className="btn btn-primary bg-bitter">
              Repo
            </a>
          </div>
          <div className="card-actions justify-center">
            {tags &&
              tags.map((tag, index) => (
                <div className="badge badge-outline" key={index}>
                  {tag}
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default ProjectCard;
