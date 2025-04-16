
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
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
  );
};

export default Footer;
