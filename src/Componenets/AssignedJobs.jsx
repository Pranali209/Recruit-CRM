import React from "react";


const AssignedJobs = () => {
  const jobs = [
    {
      id: 1,
      title: "Senior Product Manager",
      company: "Recruit CRM",
      assignedTo: "William Sample",
      date: "Jul 10, 2023",
      status: "Assigned",
    },
    {
      id: 2,
      title: "Senior Product Manager",
      company: "Recruit CRM",
      assignedTo: "William Sample",
      date: "Jul 10, 2023",
      status: "Assigned",
    },
    {
      id: 3,
      title: "Senior Product Manager",
      company: "Recruit CRM",
      assignedTo: "William Sample",
      date: "Jul 10, 2023",
      status: "Assigned",
    },
  ];

  return (
    <div className="assigned-jobs-container">
      {/* Tabs */}
      <div className="tabs">
        <button className=" tab">All Details</button>
        <button className="tab active">Assigned Jobs</button>
        <button className="tab">Related Emails</button>
        <button className="tab">Candidate Questions</button>
        <button className="tab">Hotlists</button>
        <button className="tab">Related Deals</button>
        <button className="tab">Contact(s) Pitched</button>
      </div>
      <select className="tabs-dropdown">
        <option>All Details</option>
        <option>Assigned Jobs</option>
        <option>Related Emails</option>
        <option>Candidate Questions</option>
        <option>Hotlists</option>
        <option>Related Deals</option>
        <option>Contact(s) Pitched</option>
      </select>

      {/* Header */}
      <section className="PaddingSection">
        <div className="assigned-header">
          <span>Assigned Job to William Sample</span>
          <div className="header-actions">
            <button className="btn-primary">Assign To Job</button>
            <button className="btn-secondary">View All Assigned Jobs</button>
          </div>
        </div>

        {/* Job Cards */}
        <div className="job-list">
          {jobs.map((job) => (
            <div className="job-card" key={job.id}>
              <div className="job-left">
                <div className="job-avatar">M</div>
                <div>
                  <div className="job-title">{job.title}</div>
                  <div className="job-company">{job.company}</div>
                </div>
              </div>

              <div className="job-middle">
                <div className="jobs-board">
                  <i className='bxr bx-user-circle bx-xs'  ></i>
                  <span className="assigned-to">{job.assignedTo}</span>
                </div>
                <div className=" jobs-board">
                  <i class='bxr  bx-clock-3 bx-xs'  ></i>
                  <span className="assigned-date">{job.date}</span>
                </div>

              </div>

              <div>
                <span className="status">{job.status}</span>
              </div>

              <div>
                <button className="btn-secondary">View Files</button>
              </div>

              <div className="job-right">


                <label className="switch">
                  <input type="checkbox" defaultChecked />
                  <span className="slider"></span>
                </label>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AssignedJobs;
