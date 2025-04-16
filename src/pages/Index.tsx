
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Load Bootstrap from CDN
    const bootstrapCSS = document.createElement("link");
    bootstrapCSS.rel = "stylesheet";
    bootstrapCSS.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css";
    bootstrapCSS.integrity = "sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN";
    bootstrapCSS.crossOrigin = "anonymous";
    document.head.appendChild(bootstrapCSS);

    const bootstrapJS = document.createElement("script");
    bootstrapJS.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js";
    bootstrapJS.integrity = "sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL";
    bootstrapJS.crossOrigin = "anonymous";
    document.body.appendChild(bootstrapJS);

    return () => {
      document.head.removeChild(bootstrapCSS);
      document.body.removeChild(bootstrapJS);
    };
  }, []);

  // Sample application data - replace with your actual applications
  const webApps = [
    { name: "HR Portal", description: "Employee management system", url: "https://hr.company.com", icon: "bi bi-people-fill", category: "HR" },
    { name: "Finance Dashboard", description: "Financial reporting tool", url: "https://finance.company.com", icon: "bi bi-cash-coin", category: "Finance" },
    { name: "CRM System", description: "Customer relationship management", url: "https://crm.company.com", icon: "bi bi-person-lines-fill", category: "Sales" },
    { name: "Project Tracker", description: "Project management system", url: "https://projects.company.com", icon: "bi bi-kanban", category: "Operations" },
    { name: "Support Desk", description: "IT support ticketing system", url: "https://support.company.com", icon: "bi bi-headset", category: "IT" },
  ];

  const desktopApps = [
    { name: "Inventory Manager", description: "Manage company inventory", downloadUrl: "#", installationGuide: "#", icon: "bi bi-box-seam", category: "Operations" },
    { name: "Data Analyzer", description: "Desktop analysis tool", downloadUrl: "#", installationGuide: "#", icon: "bi bi-graph-up", category: "Analytics" },
    { name: "Report Generator", description: "Generate custom reports", downloadUrl: "#", installationGuide: "#", icon: "bi bi-file-earmark-text", category: "Finance" },
    { name: "Document Scanner", description: "Scan and process documents", downloadUrl: "#", installationGuide: "#", icon: "bi bi-file-earmark-pdf", category: "Admin" },
    { name: "Security Monitor", description: "System security monitoring", downloadUrl: "#", installationGuide: "#", icon: "bi bi-shield-lock", category: "IT" },
  ];

  const categories = Array.from(new Set([...webApps.map(app => app.category), ...desktopApps.map(app => app.category)]));

  return (
    <div className="container-fluid px-0">
      {/* Hero Section */}
      <header className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Company Application Portal</h1>
          <p className="lead">Access all company applications in one place</p>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Search applications..." aria-label="Search applications" />
                <button className="btn btn-outline-light" type="button">Search</button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Filter Tabs */}
      <div className="container mt-4">
        <ul className="nav nav-pills mb-4 justify-content-center" id="appTabs" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="all-tab" data-bs-toggle="pill" data-bs-target="#all" type="button" role="tab" aria-controls="all" aria-selected="true">All Apps</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="web-tab" data-bs-toggle="pill" data-bs-target="#web" type="button" role="tab" aria-controls="web" aria-selected="false">Web Applications</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="desktop-tab" data-bs-toggle="pill" data-bs-target="#desktop" type="button" role="tab" aria-controls="desktop" aria-selected="false">Desktop Applications</button>
          </li>
          {categories.map((category, index) => (
            <li className="nav-item" role="presentation" key={index}>
              <button 
                className="nav-link" 
                id={`${category.toLowerCase()}-tab`} 
                data-bs-toggle="pill" 
                data-bs-target={`#${category.toLowerCase()}`} 
                type="button" 
                role="tab" 
                aria-controls={category.toLowerCase()} 
                aria-selected="false"
              >
                {category}
              </button>
            </li>
          ))}
        </ul>

        {/* App Cards */}
        <div className="tab-content" id="appTabsContent">
          {/* All Apps */}
          <div className="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tab">
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
              {webApps.map((app, index) => (
                <div className="col" key={`web-${index}`}>
                  <div className="card h-100 shadow-sm">
                    <div className="card-body">
                      <div className="d-flex align-items-center mb-3">
                        <i className={`${app.icon} fs-1 me-3 text-primary`}></i>
                        <h5 className="card-title mb-0">{app.name}</h5>
                      </div>
                      <p className="card-text">{app.description}</p>
                      <span className="badge bg-info mb-2">{app.category}</span>
                      <span className="badge bg-success ms-2 mb-2">Web App</span>
                    </div>
                    <div className="card-footer bg-transparent border-top-0">
                      <a href={app.url} className="btn btn-primary w-100" target="_blank" rel="noreferrer">Open Application</a>
                    </div>
                  </div>
                </div>
              ))}
              {desktopApps.map((app, index) => (
                <div className="col" key={`desktop-${index}`}>
                  <div className="card h-100 shadow-sm">
                    <div className="card-body">
                      <div className="d-flex align-items-center mb-3">
                        <i className={`${app.icon} fs-1 me-3 text-secondary`}></i>
                        <h5 className="card-title mb-0">{app.name}</h5>
                      </div>
                      <p className="card-text">{app.description}</p>
                      <span className="badge bg-info mb-2">{app.category}</span>
                      <span className="badge bg-warning text-dark ms-2 mb-2">Desktop App</span>
                    </div>
                    <div className="card-footer bg-transparent border-top-0 d-flex">
                      <a href={app.downloadUrl} className="btn btn-secondary flex-grow-1 me-2">Download</a>
                      <a href={app.installationGuide} className="btn btn-outline-secondary flex-grow-1">Guide</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Web Apps */}
          <div className="tab-pane fade" id="web" role="tabpanel" aria-labelledby="web-tab">
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
              {webApps.map((app, index) => (
                <div className="col" key={index}>
                  <div className="card h-100 shadow-sm">
                    <div className="card-body">
                      <div className="d-flex align-items-center mb-3">
                        <i className={`${app.icon} fs-1 me-3 text-primary`}></i>
                        <h5 className="card-title mb-0">{app.name}</h5>
                      </div>
                      <p className="card-text">{app.description}</p>
                      <span className="badge bg-info mb-2">{app.category}</span>
                      <span className="badge bg-success ms-2 mb-2">Web App</span>
                    </div>
                    <div className="card-footer bg-transparent border-top-0">
                      <a href={app.url} className="btn btn-primary w-100" target="_blank" rel="noreferrer">Open Application</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Apps */}
          <div className="tab-pane fade" id="desktop" role="tabpanel" aria-labelledby="desktop-tab">
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
              {desktopApps.map((app, index) => (
                <div className="col" key={index}>
                  <div className="card h-100 shadow-sm">
                    <div className="card-body">
                      <div className="d-flex align-items-center mb-3">
                        <i className={`${app.icon} fs-1 me-3 text-secondary`}></i>
                        <h5 className="card-title mb-0">{app.name}</h5>
                      </div>
                      <p className="card-text">{app.description}</p>
                      <span className="badge bg-info mb-2">{app.category}</span>
                      <span className="badge bg-warning text-dark ms-2 mb-2">Desktop App</span>
                    </div>
                    <div className="card-footer bg-transparent border-top-0 d-flex">
                      <a href={app.downloadUrl} className="btn btn-secondary flex-grow-1 me-2">Download</a>
                      <a href={app.installationGuide} className="btn btn-outline-secondary flex-grow-1">Guide</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Category Tabs */}
          {categories.map((category, index) => (
            <div className="tab-pane fade" id={category.toLowerCase()} role="tabpanel" aria-labelledby={`${category.toLowerCase()}-tab`} key={index}>
              <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
                {webApps.filter(app => app.category === category).map((app, i) => (
                  <div className="col" key={`web-${i}`}>
                    <div className="card h-100 shadow-sm">
                      <div className="card-body">
                        <div className="d-flex align-items-center mb-3">
                          <i className={`${app.icon} fs-1 me-3 text-primary`}></i>
                          <h5 className="card-title mb-0">{app.name}</h5>
                        </div>
                        <p className="card-text">{app.description}</p>
                        <span className="badge bg-info mb-2">{app.category}</span>
                        <span className="badge bg-success ms-2 mb-2">Web App</span>
                      </div>
                      <div className="card-footer bg-transparent border-top-0">
                        <a href={app.url} className="btn btn-primary w-100" target="_blank" rel="noreferrer">Open Application</a>
                      </div>
                    </div>
                  </div>
                ))}
                {desktopApps.filter(app => app.category === category).map((app, i) => (
                  <div className="col" key={`desktop-${i}`}>
                    <div className="card h-100 shadow-sm">
                      <div className="card-body">
                        <div className="d-flex align-items-center mb-3">
                          <i className={`${app.icon} fs-1 me-3 text-secondary`}></i>
                          <h5 className="card-title mb-0">{app.name}</h5>
                        </div>
                        <p className="card-text">{app.description}</p>
                        <span className="badge bg-info mb-2">{app.category}</span>
                        <span className="badge bg-warning text-dark ms-2 mb-2">Desktop App</span>
                      </div>
                      <div className="card-footer bg-transparent border-top-0 d-flex">
                        <a href={app.downloadUrl} className="btn btn-secondary flex-grow-1 me-2">Download</a>
                        <a href={app.installationGuide} className="btn btn-outline-secondary flex-grow-1">Guide</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Announcements Section */}
      <div className="container mt-5">
        <div className="card shadow-sm mb-5">
          <div className="card-header bg-light">
            <h4 className="mb-0">Announcements & Updates</h4>
          </div>
          <div className="card-body">
            <div className="alert alert-info">
              <h5><i className="bi bi-info-circle me-2"></i>New Finance Dashboard Update</h5>
              <p className="mb-0">The Finance Dashboard has been updated with new reporting features. Please check it out!</p>
              <small className="text-muted">Posted: April 15, 2025</small>
            </div>
            <div className="alert alert-warning">
              <h5><i className="bi bi-exclamation-triangle me-2"></i>Scheduled Maintenance</h5>
              <p className="mb-0">The HR Portal will be unavailable on Sunday, April 20, 2025, from 2:00 AM to 4:00 AM for scheduled maintenance.</p>
              <small className="text-muted">Posted: April 12, 2025</small>
            </div>
          </div>
        </div>
      </div>

      {/* Support Section */}
      <div className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Need Help?</h2>
          <div className="row">
            <div className="col-md-4 mb-4 mb-md-0">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <i className="bi bi-question-circle text-primary fs-1 mb-3"></i>
                  <h5 className="card-title">FAQ</h5>
                  <p className="card-text">Find answers to commonly asked questions about our applications.</p>
                  <a href="#" className="btn btn-outline-primary">View FAQs</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4 mb-md-0">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <i className="bi bi-chat-dots text-primary fs-1 mb-3"></i>
                  <h5 className="card-title">Contact Support</h5>
                  <p className="card-text">Get in touch with our support team for assistance with any issues.</p>
                  <a href="#" className="btn btn-outline-primary">Contact Us</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <i className="bi bi-journal-text text-primary fs-1 mb-3"></i>
                  <h5 className="card-title">Documentation</h5>
                  <p className="card-text">Access user guides and documentation for all applications.</p>
                  <a href="#" className="btn btn-outline-primary">View Docs</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white py-4 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h5>Company Name</h5>
              <p className="mb-0">© 2025 Company Name. All rights reserved.</p>
            </div>
            <div className="col-md-6 text-md-end">
              <a href="#" className="text-white me-3"><i className="bi bi-envelope"></i> Email</a>
              <a href="#" className="text-white me-3"><i className="bi bi-telephone"></i> Contact</a>
              <a href="#" className="text-white"><i className="bi bi-shield-lock"></i> Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Bootstrap Icons */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
    </div>
  );
};

export default Index;
