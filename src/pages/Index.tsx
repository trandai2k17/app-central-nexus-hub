
import { useState, useEffect } from "react";
import AppHeader from "@/components/AppHeader";
import HeroCarousel from "@/components/HeroCarousel";
import AppGrid from "@/components/AppGrid";
import AppDialogs from "@/components/AppDialogs";
import Announcements from "@/components/Announcements";
import SupportSection from "@/components/SupportSection";
import Footer from "@/components/Footer";

const Index = () => {
  // Sample carousel announcements
  const carouselAnnouncements = [
    {
      title: "New Finance Dashboard Released",
      description: "Access powerful financial data visualizations and reporting tools",
      cta: "Try it now",
      ctaLink: "#finance-dashboard",
      bgImage: "linear-gradient(to right, #4f46e5, #7c3aed)"
    },
    {
      title: "Upcoming System Maintenance",
      description: "Scheduled maintenance on April 20, 2025 from 2:00 AM to 4:00 AM",
      cta: "Read more",
      ctaLink: "#system-maintenance",
      bgImage: "linear-gradient(to right, #f59e0b, #d97706)"
    },
    {
      title: "Welcome to the New App Portal",
      description: "Discover all company applications in one centralized location",
      cta: "Explore apps",
      ctaLink: "#app-list",
      bgImage: "linear-gradient(to right, #0ea5e9, #0284c7)"
    }
  ];

  // Sample application data
  const webApps = [
    { 
      name: "HR Portal", 
      description: "Employee management system", 
      url: "https://hr.company.com", 
      icon: "users", 
      category: "HR",
      lastModified: new Date("2025-04-10"),
      lastUpdate: {
        title: "Bug fixes and performance improvements",
        description: "Fixed issue with employee data not loading correctly. Improved page load times.",
        updatedBy: "John Doe",
        date: new Date("2025-04-10")
      },
      detailedDescription: "The HR Portal provides comprehensive employee management capabilities including onboarding, performance reviews, time-off requests, and personnel records management. HR administrators can manage employee profiles, track attendance, and generate reports."
    },
    { 
      name: "Finance Dashboard", 
      description: "Financial reporting tool", 
      url: "https://finance.company.com", 
      icon: "banknote", 
      category: "Finance",
      lastModified: new Date("2025-04-15"),
      lastUpdate: {
        title: "Added new reporting features",
        description: "Added quarterly financial reports and enhanced data visualization capabilities.",
        updatedBy: "Jane Smith",
        date: new Date("2025-04-15")
      },
      detailedDescription: "The Finance Dashboard provides real-time financial data visualization and reporting tools. Users can generate balance sheets, income statements, cash flow reports, and create custom financial analyses with various chart types."
    },
    { 
      name: "CRM System", 
      description: "Customer relationship management", 
      url: "https://crm.company.com", 
      icon: "user", 
      category: "Sales",
      lastModified: new Date("2025-03-28"),
      lastUpdate: {
        title: "New contact management feature",
        description: "Added ability to import contacts from CSV files and improved search functionality.",
        updatedBy: "Mike Johnson",
        date: new Date("2025-03-28")
      },
      detailedDescription: "The CRM System helps manage customer relationships through comprehensive contact management, sales pipeline tracking, opportunity management, and customer service features. It integrates with email systems for seamless communication tracking."
    },
    { 
      name: "Project Tracker", 
      description: "Project management system", 
      url: "https://projects.company.com", 
      icon: "kanban", 
      category: "Operations",
      lastModified: new Date("2025-04-05"),
      lastUpdate: {
        title: "Added Kanban board view",
        description: "Implemented drag-and-drop Kanban board for visual project management.",
        updatedBy: "Sarah Williams",
        date: new Date("2025-04-05")
      },
      detailedDescription: "The Project Tracker enables teams to plan, execute, and monitor projects effectively. Features include task assignment, timeline visualization, resource allocation, progress tracking, and automated reporting capabilities."
    },
    { 
      name: "Support Desk", 
      description: "IT support ticketing system", 
      url: "https://support.company.com", 
      icon: "headphones", 
      category: "IT",
      lastModified: new Date("2025-04-12"),
      lastUpdate: {
        title: "Improved ticket categorization",
        description: "Enhanced ticket categorization and implemented automated routing based on ticket type.",
        updatedBy: "David Brown",
        date: new Date("2025-04-12")
      },
      detailedDescription: "The Support Desk manages IT support requests through an intuitive ticketing system. It includes automatic ticket assignment, SLA monitoring, knowledge base integration, and analytics dashboards for tracking support team performance."
    },
  ];

  const desktopApps = [
    { 
      name: "Inventory Manager", 
      description: "Manage company inventory", 
      downloadUrl: "#", 
      installationGuide: "#", 
      icon: "package", 
      category: "Operations",
      lastModified: new Date("2025-03-25"),
      lastUpdate: {
        title: "Added barcode scanning feature",
        description: "Implemented barcode scanning functionality for faster inventory updates.",
        updatedBy: "Alex Johnson",
        date: new Date("2025-03-25")
      },
      detailedDescription: "The Inventory Manager desktop application provides comprehensive inventory tracking capabilities. Users can monitor stock levels, manage purchase orders, track product locations, and generate inventory reports with real-time data."
    },
    { 
      name: "Data Analyzer", 
      description: "Desktop analysis tool", 
      downloadUrl: "#", 
      installationGuide: "#", 
      icon: "bar-chart", 
      category: "Analytics",
      lastModified: new Date("2025-04-08"),
      lastUpdate: {
        title: "Enhanced data visualization",
        description: "Added new chart types and improved export capabilities.",
        updatedBy: "Emily Chen",
        date: new Date("2025-04-08")
      },
      detailedDescription: "The Data Analyzer is a powerful desktop tool for data processing and visualization. It supports various data formats, provides statistical analysis functions, and offers interactive visualization options for effective data exploration."
    },
    { 
      name: "Report Generator", 
      description: "Generate custom reports", 
      downloadUrl: "#", 
      installationGuide: "#", 
      icon: "file-text", 
      category: "Finance",
      lastModified: new Date("2025-04-01"),
      lastUpdate: {
        title: "Added PDF export functionality",
        description: "Implemented PDF export with custom branding options.",
        updatedBy: "Robert Miller",
        date: new Date("2025-04-01")
      },
      detailedDescription: "The Report Generator creates professional custom reports from multiple data sources. Features include template customization, scheduled reporting, conditional formatting, and support for various output formats including PDF, Excel, and web formats."
    },
    { 
      name: "Document Scanner", 
      description: "Scan and process documents", 
      downloadUrl: "#", 
      installationGuide: "#", 
      icon: "file-scan", 
      category: "Admin",
      lastModified: new Date("2025-03-30"),
      lastUpdate: {
        title: "Improved OCR capabilities",
        description: "Enhanced OCR accuracy and added support for more languages.",
        updatedBy: "Lisa Wang",
        date: new Date("2025-03-30")
      },
      detailedDescription: "The Document Scanner enables efficient document digitization with OCR capabilities. Users can scan physical documents, convert them to searchable PDF files, and integrate with document management systems for organized storage."
    },
    { 
      name: "Security Monitor", 
      description: "System security monitoring", 
      downloadUrl: "#", 
      installationGuide: "#", 
      icon: "shield", 
      category: "IT",
      lastModified: new Date("2025-04-14"),
      lastUpdate: {
        title: "Enhanced threat detection",
        description: "Implemented advanced threat detection algorithms and real-time alerts.",
        updatedBy: "Thomas Anderson",
        date: new Date("2025-04-14")
      },
      detailedDescription: "The Security Monitor provides comprehensive system security oversight, including intrusion detection, vulnerability scanning, and security event monitoring. It offers real-time alerts, detailed logging, and compliance reporting features."
    },
  ];

  // Dialog states
  const [isUpdateDialogOpen, setIsUpdateDialogOpen] = useState(false);
  const [selectedAppUpdate, setSelectedAppUpdate] = useState(null);
  
  const [isDescriptionDialogOpen, setIsDescriptionDialogOpen] = useState(false);
  const [selectedAppDescription, setSelectedAppDescription] = useState("");

  const categories = Array.from(new Set([...webApps.map(app => app.category), ...desktopApps.map(app => app.category)]));
  
  const [searchTerm, setSearchTerm] = useState("");
  const filteredWebApps = webApps.filter(app => 
    app.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    app.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.category.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const filteredDesktopApps = desktopApps.filter(app => 
    app.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    app.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const announcements = [
    {
      title: "New Finance Dashboard Update",
      content: "The Finance Dashboard has been updated with new reporting features. Please check it out!",
      date: "April 15, 2025",
      type: "info"
    },
    {
      title: "Scheduled Maintenance",
      content: "The HR Portal will be unavailable on Sunday, April 20, 2025, from 2:00 AM to 4:00 AM for scheduled maintenance.",
      date: "April 12, 2025",
      type: "warning"
    }
  ];

  // Fixed header effect
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleShowUpdate = (updateInfo) => {
    setSelectedAppUpdate(updateInfo);
    setIsUpdateDialogOpen(true);
  };

  const handleShowDescription = (description) => {
    setSelectedAppDescription(description);
    setIsDescriptionDialogOpen(true);
  };

  const handleSelectCategory = (category) => {
    setSearchTerm(category);
  };

  return (
    <div className="min-h-screen">
      {/* Fixed Header */}
      <AppHeader 
        isScrolled={isScrolled}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <div className="container mx-auto px-4 py-8 max-w-[1400px] mt-10">
        {/* Hero Carousel Section */}
        <HeroCarousel announcements={carouselAnnouncements} />

        {/* Application Tabs */}
        <AppGrid 
          webApps={webApps}
          desktopApps={desktopApps}
          filteredWebApps={filteredWebApps}
          filteredDesktopApps={filteredDesktopApps}
          categories={categories}
          onSelectCategory={handleSelectCategory}
          onShowUpdate={handleShowUpdate}
          onShowDescription={handleShowDescription}
        />

        {/* Dialogs */}
        <AppDialogs 
          isUpdateDialogOpen={isUpdateDialogOpen}
          setIsUpdateDialogOpen={setIsUpdateDialogOpen}
          selectedAppUpdate={selectedAppUpdate}
          isDescriptionDialogOpen={isDescriptionDialogOpen}
          setIsDescriptionDialogOpen={setIsDescriptionDialogOpen}
          selectedAppDescription={selectedAppDescription}
        />

        {/* Announcements Section */}
        <Announcements announcements={announcements} />

        {/* Support Section */}
        <SupportSection />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Index;
