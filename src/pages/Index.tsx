
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MagnifyingGlassIcon, ComputerDesktopIcon, GlobeAltIcon } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  // Sample application data - replace with your actual applications
  const webApps = [
    { name: "HR Portal", description: "Employee management system", url: "https://hr.company.com", icon: "users", category: "HR" },
    { name: "Finance Dashboard", description: "Financial reporting tool", url: "https://finance.company.com", icon: "banknote", category: "Finance" },
    { name: "CRM System", description: "Customer relationship management", url: "https://crm.company.com", icon: "user", category: "Sales" },
    { name: "Project Tracker", description: "Project management system", url: "https://projects.company.com", icon: "kanban", category: "Operations" },
    { name: "Support Desk", description: "IT support ticketing system", url: "https://support.company.com", icon: "headphones", category: "IT" },
  ];

  const desktopApps = [
    { name: "Inventory Manager", description: "Manage company inventory", downloadUrl: "#", installationGuide: "#", icon: "package", category: "Operations" },
    { name: "Data Analyzer", description: "Desktop analysis tool", downloadUrl: "#", installationGuide: "#", icon: "bar-chart", category: "Analytics" },
    { name: "Report Generator", description: "Generate custom reports", downloadUrl: "#", installationGuide: "#", icon: "file-text", category: "Finance" },
    { name: "Document Scanner", description: "Scan and process documents", downloadUrl: "#", installationGuide: "#", icon: "file-scan", category: "Admin" },
    { name: "Security Monitor", description: "System security monitoring", downloadUrl: "#", installationGuide: "#", icon: "shield", category: "IT" },
  ];

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

  return (
    <div className="container mx-auto px-4 py-8 max-w-[1400px]">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-10 mb-10 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Company Application Portal</h1>
          <p className="text-xl mb-6">Access all company applications in one place</p>
          <div className="relative max-w-md mx-auto">
            <Input
              type="text"
              placeholder="Search applications..."
              className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <MagnifyingGlassIcon className="absolute left-3 top-3.5 h-5 w-5 text-white/70" />
          </div>
        </div>
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
                className="px-4"
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
              />
            ))}
            {filteredDesktopApps.map((app, index) => (
              <AppCard 
                key={`desktop-${index}`} 
                app={app} 
                type="desktop" 
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
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Announcements Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Announcements & Updates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {announcements.map((announcement, index) => (
            <Card key={index} className={announcement.type === 'warning' ? "border-amber-300" : "border-blue-300"}>
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
      <div className="mb-16 bg-slate-50 rounded-xl p-10">
        <h2 className="text-2xl font-bold mb-8 text-center">Need Help?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-0 shadow-sm">
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
              <Button variant="outline">View FAQs</Button>
            </CardFooter>
          </Card>
          
          <Card className="border-0 shadow-sm">
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
              <Button variant="outline">Contact Us</Button>
            </CardFooter>
          </Card>
          
          <Card className="border-0 shadow-sm">
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
              <Button variant="outline">View Docs</Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white rounded-xl p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h5 className="font-bold text-lg mb-2">Company Name</h5>
            <p className="text-slate-300">© 2025 Company Name. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap gap-4 justify-start md:justify-end items-center">
            <Button variant="ghost" size="sm" className="text-white hover:text-white hover:bg-white/10">
              <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg> Email
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:text-white hover:bg-white/10">
              <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg> Contact
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:text-white hover:bg-white/10">
              <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg> Privacy Policy
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

// App Card Component
const AppCard = ({ app, type }) => {
  const isDesktop = type === "desktop";
  
  return (
    <Card className="transition-all duration-200 hover:shadow-md border">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <div className={`p-2 rounded-lg ${isDesktop ? "bg-amber-100 text-amber-700" : "bg-blue-100 text-blue-700"}`}>
              {isDesktop ? (
                <ComputerDesktopIcon className="h-5 w-5" />
              ) : (
                <GlobeAltIcon className="h-5 w-5" />
              )}
            </div>
            <div>
              <CardTitle className="text-lg">{app.name}</CardTitle>
              <CardDescription className="line-clamp-2">{app.description}</CardDescription>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-3">
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">{app.category}</Badge>
          <Badge variant={isDesktop ? "outline" : "default"}>
            {isDesktop ? "Desktop App" : "Web App"}
          </Badge>
        </div>
      </CardContent>
      <CardFooter className={isDesktop ? "grid grid-cols-2 gap-2" : ""}>
        {isDesktop ? (
          <>
            <Button variant="default" className="w-full" size="sm">Download</Button>
            <Button variant="outline" className="w-full" size="sm">Guide</Button>
          </>
        ) : (
          <Button className="w-full" variant="default" size="sm" asChild>
            <a href={app.url} target="_blank" rel="noreferrer">Open Application</a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default Index;
