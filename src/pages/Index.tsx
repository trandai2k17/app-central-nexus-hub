
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Monitor, Globe, Info, FileText, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { format } from "date-fns";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const Index = () => {
  // Sample carousel announcements - replace with your actual announcements
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

  // Sample application data - replace with your actual applications
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

  return (
    <div className="min-h-screen">
      {/* Fixed Header */}
      <header className={`${isScrolled ? 'header-fixed py-2' : 'py-4'} transition-all duration-300 w-full z-50`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold">AP</div>
            <h1 className={`font-bold ${isScrolled ? 'text-lg' : 'text-xl'} transition-all duration-300`}>App Portal</h1>
          </div>
          <div className="relative max-w-sm">
            <Input
              type="text"
              placeholder="Search applications..."
              className="pl-10 border-slate-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-[1400px] mt-10">
        {/* Hero Carousel Section */}
        <div className="mb-16 relative overflow-hidden rounded-2xl">
          <Carousel className="h-[500px]">
            <CarouselContent>
              {carouselAnnouncements.map((announcement, index) => (
                <CarouselItem key={index} className="relative">
                  <div 
                    className="h-[500px] w-full flex items-center relative" 
                    style={{ background: announcement.bgImage }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
                    
                    {/* Decorative Laptop */}
                    <div className="absolute right-[10%] top-1/2 transform -translate-y-1/2 hidden lg:block">
                      <div className="w-[400px] h-[280px] bg-slate-800 rounded-t-xl p-2">
                        <div className="w-full h-full rounded-md border-4 border-slate-700 overflow-hidden">
                          <div className="laptop-screen w-full h-full flex items-center justify-center">
                            <div className="text-center">
                              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 animate-pulse"></div>
                              <div className="h-2 w-32 bg-white/20 rounded-full mx-auto mb-3"></div>
                              <div className="h-2 w-24 bg-white/20 rounded-full mx-auto"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[440px] h-6 bg-slate-700 rounded-b-xl mx-auto"></div>
                      <div className="w-[120px] h-4 bg-slate-600 rounded-b-xl mx-auto"></div>
                    </div>

                    {/* Content */}
                    <div className="container mx-auto px-8 relative z-10">
                      <div className="max-w-lg glass-effect p-8 rounded-2xl opacity-0 carousel-title">
                        <h2 className="text-4xl font-bold text-white mb-3">{announcement.title}</h2>
                        <p className="text-white/80 text-lg mb-6 opacity-0 carousel-desc">{announcement.description}</p>
                        <Button className="liquid-button opacity-0 carousel-cta" asChild>
                          <a href={announcement.ctaLink}>{announcement.cta}</a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute bottom-4 right-4 flex gap-2 z-20">
              <CarouselPrevious className="relative bg-white/20 hover:bg-white/40 border-white/30 text-white" />
              <CarouselNext className="relative bg-white/20 hover:bg-white/40 border-white/30 text-white" />
            </div>
          </Carousel>
        </div>

        {/* Application Tabs */}
        <Tabs defaultValue="all" className="mb-10">
          <div className="flex justify-center mb-6">
            <TabsList className="grid grid-cols-3 w-full max-w-md">
              <TabsTrigger value="all">All Apps</TabsTrigger>
              <TabsTrigger value="web">Web Apps</TabsTrigger>
              <TabsTrigger value="desktop">Desktop Apps</TabsTrigger>
            </TabsList>
          </div>

          {/* Category Filters */}
          <div className="flex justify-center mb-8">
            <ToggleGroup type="multiple" variant="outline" className="flex flex-wrap justify-center gap-2">
              {categories.map((category, index) => (
                <ToggleGroupItem 
                  key={index} 
                  value={category.toLowerCase()}
                  onClick={() => setSearchTerm(category)}
                  className="px-4 filter-button"
                >
                  {category}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>

          {/* All Apps */}
          <TabsContent value="all" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredWebApps.map((app, index) => (
                <AppCard 
                  key={`web-${index}`} 
                  app={app} 
                  type="web" 
                  onShowUpdate={(updateInfo) => {
                    setSelectedAppUpdate(updateInfo);
                    setIsUpdateDialogOpen(true);
                  }}
                  onShowDescription={(description) => {
                    setSelectedAppDescription(description);
                    setIsDescriptionDialogOpen(true);
                  }}
                />
              ))}
              {filteredDesktopApps.map((app, index) => (
                <AppCard 
                  key={`desktop-${index}`} 
                  app={app} 
                  type="desktop" 
                  onShowUpdate={(updateInfo) => {
                    setSelectedAppUpdate(updateInfo);
                    setIsUpdateDialogOpen(true);
                  }}
                  onShowDescription={(description) => {
                    setSelectedAppDescription(description);
                    setIsDescriptionDialogOpen(true);
                  }}
                />
              ))}
            </div>
          </TabsContent>

          {/* Web Apps */}
          <TabsContent value="web" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredWebApps.map((app, index) => (
                <AppCard 
                  key={index} 
                  app={app} 
                  type="web" 
                  onShowUpdate={(updateInfo) => {
                    setSelectedAppUpdate(updateInfo);
                    setIsUpdateDialogOpen(true);
                  }}
                  onShowDescription={(description) => {
                    setSelectedAppDescription(description);
                    setIsDescriptionDialogOpen(true);
                  }}
                />
              ))}
            </div>
          </TabsContent>

          {/* Desktop Apps */}
          <TabsContent value="desktop" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredDesktopApps.map((app, index) => (
                <AppCard 
                  key={index} 
                  app={app} 
                  type="desktop" 
                  onShowUpdate={(updateInfo) => {
                    setSelectedAppUpdate(updateInfo);
                    setIsUpdateDialogOpen(true);
                  }}
                  onShowDescription={(description) => {
                    setSelectedAppDescription(description);
                    setIsDescriptionDialogOpen(true);
                  }}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Update Info Dialog */}
        <Dialog open={isUpdateDialogOpen} onOpenChange={setIsUpdateDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Update Information</DialogTitle>
              <DialogDescription>Latest update details for this application</DialogDescription>
            </DialogHeader>
            {selectedAppUpdate && (
              <div className="space-y-4 pt-4">
                <div className="grid grid-cols-[100px_1fr] gap-2 items-start">
                  <span className="text-sm font-semibold">Title:</span>
                  <span>{selectedAppUpdate.title}</span>
                </div>
                <div className="grid grid-cols-[100px_1fr] gap-2 items-start">
                  <span className="text-sm font-semibold">Description:</span>
                  <span>{selectedAppUpdate.description}</span>
                </div>
                <div className="grid grid-cols-[100px_1fr] gap-2 items-start">
                  <span className="text-sm font-semibold">Updated By:</span>
                  <span>{selectedAppUpdate.updatedBy}</span>
                </div>
                <div className="grid grid-cols-[100px_1fr] gap-2 items-start">
                  <span className="text-sm font-semibold">Date:</span>
                  <span>{format(selectedAppUpdate.date, 'PPP')}</span>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Description Dialog */}
        <Dialog open={isDescriptionDialogOpen} onOpenChange={setIsDescriptionDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Application Description</DialogTitle>
              <DialogDescription>Detailed overview of this application's functionality</DialogDescription>
            </DialogHeader>
            <div className="pt-4">
              <p>{selectedAppDescription}</p>
            </div>
          </DialogContent>
        </Dialog>

        {/* Announcements Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Announcements & Updates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {announcements.map((announcement, index) => (
              <Card key={index} className={`card-glow ${announcement.type === 'warning' ? "border-amber-300" : "border-blue-300"}`}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    {announcement.type === 'warning' ? (
                      <svg className="h-5 w-5 mr-2 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    ) : (
                      <svg className="h-5 w-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    {announcement.title}
                  </CardTitle>
                  <CardDescription>{announcement.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{announcement.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Support Section */}
        <div className="mb-16 bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl p-10">
          <h2 className="text-2xl font-bold mb-8 text-center">Need Help?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-300 card-glow">
              <CardHeader className="items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <CardTitle>FAQ</CardTitle>
                <CardDescription>Find answers to commonly asked questions about our applications.</CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-center pt-0">
                <Button variant="outline" className="filter-button">View FAQs</Button>
              </CardFooter>
            </Card>
            
            <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-300 card-glow">
              <CardHeader className="items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <CardTitle>Contact Support</CardTitle>
                <CardDescription>Get in touch with our support team for assistance with any issues.</CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-center pt-0">
                <Button variant="outline" className="filter-button">Contact Us</Button>
              </CardFooter>
            </Card>
            
            <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-300 card-glow">
              <CardHeader className="items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <CardTitle>Documentation</CardTitle>
                <CardDescription>Access user guides and documentation for all applications.</CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-center pt-0">
                <Button variant="outline" className="filter-button">View Docs</Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-slate-900 to-blue-900 text-white rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h5 className="font-bold text-lg mb-2">Company Name</h5>
              <p className="text-slate-300">© 2025 Company Name. All rights reserved.</p>
            </div>
            <div className="flex flex-wrap gap-4 justify-start md:justify-end items-center">
              <Button variant="ghost" size="sm" className="text-white hover:text-white hover:bg-white/10 filter-button">
                <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg> Email
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:text-white hover:bg-white/10 filter-button">
                <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg> Contact
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:text-white hover:bg-white/10 filter-button">
                <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg> Privacy Policy
              </Button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

// App Card Component with enhanced styling
const AppCard = ({ app, type, onShowUpdate, onShowDescription }) => {
  const isDesktop = type === "desktop";
  
  return (
    <Card className="card-glow border relative overflow-hidden group">
      {/* Glow border effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 -m-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-xl animate-[gradient-shift_3s_ease_infinite]"></div>
      </div>
      
      <CardHeader className="pb-3 relative">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <div className={`p-2 rounded-lg ${isDesktop ? "bg-gradient-to-br from-amber-100 to-amber-200 text-amber-700" : "bg-gradient-to-br from-blue-100 to-blue-200 text-blue-700"}`}>
              {isDesktop ? (
                <Monitor className="h-5 w-5" />
              ) : (
                <Globe className="h-5 w-5" />
              )}
            </div>
            <div>
              <CardTitle className="text-lg">{app.name}</CardTitle>
              <CardDescription className="line-clamp-2">{app.description}</CardDescription>
            </div>
          </div>
          <div className="flex space-x-2">
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-8 w-8 hover:bg-slate-100 transition-colors"
                >
                  <Info className="h-4 w-4" />
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">{app.name} Details</h4>
                  <p className="text-sm">{app.detailedDescription.substring(0, 100)}...</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full mt-2" 
                    onClick={() => onShowDescription(app.detailedDescription)}
                  >
                    View Full Description
                  </Button>
                </div>
              </HoverCardContent>
            </HoverCard>
            
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-8 w-8 hover:bg-slate-100 transition-colors"
                >
                  <FileText className="h-4 w-4" />
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">{app.lastUpdate.title}</h4>
                  <p className="text-sm text-muted-foreground">{format(app.lastUpdate.date, "MMM d, yyyy")}</p>
                  <p className="text-sm">{app.lastUpdate.description.substring(0, 100)}...</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full mt-2" 
                    onClick={() => onShowUpdate(app.lastUpdate)}
                  >
                    View Update Details
                  </Button>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-3 relative">
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="bg-gradient-to-r from-slate-100 to-slate-200 hover:from-slate-200 hover:to-slate-300 transition-colors">
            {app.category}
          </Badge>
          <Badge variant={isDesktop ? "outline" : "default"} className={isDesktop ? "border-amber-300" : "bg-gradient-to-r from-blue-500 to-indigo-500"}>
            {isDesktop ? "Desktop App" : "Web App"}
          </Badge>
        </div>
        <div className="flex items-center mt-3 text-sm text-muted-foreground">
          <Calendar className="h-3.5 w-3.5 mr-1.5" />
          <span>Modified: {format(app.lastModified, "MMM d, yyyy")}</span>
        </div>
      </CardContent>
      <CardFooter className={`relative ${isDesktop ? "grid grid-cols-2 gap-2" : ""}`}>
        {isDesktop ? (
          <>
            <Button variant="default" className="w-full liquid-button" size="sm">Download</Button>
            <Button variant="outline" className="w-full filter-button" size="sm">Guide</Button>
          </>
        ) : (
          <Button className="w-full liquid-button" variant="default" size="sm" asChild>
            <a href={app.url} target="_blank" rel="noreferrer">Open Application</a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default Index;
