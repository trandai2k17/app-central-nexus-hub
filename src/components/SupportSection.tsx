
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SupportSection = () => {
  return (
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
  );
};

export default SupportSection;
