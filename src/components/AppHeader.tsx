
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface AppHeaderProps {
  isScrolled: boolean;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const AppHeader = ({ isScrolled, searchTerm, setSearchTerm }: AppHeaderProps) => {
  return (
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
  );
};

export default AppHeader;
