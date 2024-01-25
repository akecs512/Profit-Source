

export const AboutPage = () => {
  return (
    <>
      <h1>About Profit Source Advance Bookkeeping</h1>


      <div className="card card-side text-black">
        <img className="about-image" src="/imagesNew/karenTodd.jpeg" alt="Me Image" />
        <div className="card-body">
          <p>  {" "}
            Profit Source offers the small to medium sized business an exceptional suite of bookkeeping services to maximize profit and ensure success.
            We work with you to provide the right financial management services to meet your needs.
            Some of the services we offer are:
            <ul className="list-disc">
              <li>Setup or maintenance of accounting and software</li>
              <li>Document and customer management</li>
              <li>Database software solutions</li>
              <li>Time and project tracking solutions</li>
              <li>Preparation/clean-up financial documents for tax-readiness</li>
              <li>Manage payroll</li>
              <li>Facilitate client/CPA relationship</li>
              <li>Consulting Services</li>
            </ul></p>
        </div>
      </div>



      <h1 className="my-10" id="skills">
        Certifications
      </h1>
      <div className="card text-black">
        <div className="card-body items-center">
          <p>
            <ul className="list-disc">
              <li>QuickBooks Online ProAdvisor</li>
              <li>QuickBooks Desktop Expert</li>
              <li>Xero Certified</li>
              <li>FreshBooks Certified</li>
              <li>Intacct</li>
            </ul>
          </p>
          <div className="certs flex h-20">
            <img className="cert-image h-20" src="/imagesNew/QuickbooksBadges.png" alt="Quickbooks Cert" />
            <img className="cert-image h-20" src="/imagesNew/xeroBadge.png" alt="Xero Cert" />
            <img className="cert-image h-20" src="public/imagesNew/freshbooksBadge.png" alt="Freshbooks Cert" />
            <img className="cert-image h-20" src="/imagesNew/intacctBadge.png" alt="Intacct Cert" />

          </div>
        </div>
      </div>


    </>
  );
};
export default AboutPage;
