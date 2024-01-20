import {
  skillIcons,
  frameworkIcons,
  toolsIcons,
} from "../lib/content/skillIcons.js";
import SkillsCard from "/src/components/SkillsCard.jsx";

export const AboutPage = () => {
  return (
    <>
      <h1>About Profit Source Advance Bookkeeping</h1>
      <div className="about-card flex my-10 lg:card-side bg-base-100">
      {/* <figure className="about-image"> */}
          <img className="about w-36 h-36" src="/imagesNew/karenTodd.jpeg" alt="Me Image" />
          {/* </figure> */}
   
        <div className="about-card-body flex flex-col justify-center pr-50px">
          {/* <h2 className="card-title">New album is released!</h2> */}
          <p>
            {" "}
            As a team player, Profit Source provides these financial management services:
            Setup/Maintenance of accounting, document management, and customer management, database software, and/or software (often integrated with accounting software) time and project tracking solutions
            o	QuickBooks Online ProAdvisor
            o	QuickBooks Desktop Expert - Enterprise, Warehouse, Pro, Premier, and Mac, working remotely using either client’s server or Right Networks,
            o	Xero Certified
            o	FreshBooks Certified
            o	Intacct – an ERP cloud solution for larger companies
            o	A myriad of document, customer, and database management solutions are available, but we will find the best solution for your business needs
            Setup or clean-up Chart of Accounts with appropriate account numbers
            Preparation/clean-up financials for tax-readiness for tax year and ongoing for precise visibility for decision-makers
            “Back-office” Bookkeeping work including processing all Payables and Receivables, including entering vendor’s bills and customer invoices, collections calls and/or serve as a contact for billing
            Manage payroll, file all payroll tax returns, and submit payments
            o	Quickly resolve payroll tax issues if behind
            o	Vacation / Sick pay tracking
            o	Assist to find affordable health care plans
            o	Assess ACA Compliance
            Manage sales tax returns, 1099 & 1096
            Cost Management to determine cost behavior, appropriate prices, and/or an effective budget
            Inventory and/or asset tracking
            Regular reporting, including optional extensive analysis to determine risks and strengths
            Preparation of simple, complex, and attractive presentations using PowerPoint for investors and decision-makers
            We facilitate the relationship between the client and the CPA:
            **We understand the difficulties faced by CPAs in that documents and answers to questions are often hard to obtain, and are at times given at the last minute, causing a rush of work at tax deadlines, and we offer to CPAs the ability to facilitate that relationship and send all information and paperwork needed to support the tax return.
            Completed and full financial statement review and reconciliation, so that you can quickly tie balance sheet accounts to workpapers.
            Provide all necessary workpapers for each Balance Sheet Account, including bank statements, detail and documents for all acquisitions & disposals, A/R and A/P detail at year-end, payroll reports to support all Wages and Employee taxes as well as year-end liabilities, Loan documents, sales tax liability report for year-end, etc. etc.
            Ready to answer any/all questions immediately. No need to wait for client response.
            In the event that a CPA hired Profit Source, we can either bill the client directly or bill the CPA firm.
            Consulting Services for small to large businesses
            Assist your start-up to establish business filings, marketing, and business plans
            Assess internal controls, propose efficiency improvements, and workflow procedures
            Research your business to present the best options for passive and active marketing
            Create advertising and marketing strategies and help to implement plan
          </p>
        </div>
      </div>
      <h1 className="my-10" id="skills">
        Skills
      </h1>
    
    </>
  );
};
export default AboutPage;
