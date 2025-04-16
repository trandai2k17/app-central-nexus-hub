
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AppCard from "./AppCard";
import AppCategories from "./AppCategories";

interface AppUpdate {
  title: string;
  description: string;
  updatedBy: string;
  date: Date;
}

interface AppItem {
  name: string;
  description: string;
  url?: string;
  downloadUrl?: string;
  installationGuide?: string;
  icon: string;
  category: string;
  lastModified: Date;
  lastUpdate: AppUpdate;
  detailedDescription: string;
}

interface AppGridProps {
  webApps: AppItem[];
  desktopApps: AppItem[];
  filteredWebApps: AppItem[];
  filteredDesktopApps: AppItem[];
  categories: string[];
  onSelectCategory: (category: string) => void;
  onShowUpdate: (updateInfo: AppUpdate) => void;
  onShowDescription: (description: string) => void;
}

const AppGrid = ({
  webApps,
  desktopApps,
  filteredWebApps,
  filteredDesktopApps,
  categories,
  onSelectCategory,
  onShowUpdate,
  onShowDescription
}: AppGridProps) => {
  return (
    <Tabs defaultValue="all" className="mb-10">
      <div className="flex justify-center mb-6">
        <TabsList className="grid grid-cols-3 w-full max-w-md">
          <TabsTrigger value="all">All Apps</TabsTrigger>
          <TabsTrigger value="web">Web Apps</TabsTrigger>
          <TabsTrigger value="desktop">Desktop Apps</TabsTrigger>
        </TabsList>
      </div>

      {/* Category Filters */}
      <AppCategories categories={categories} onSelectCategory={onSelectCategory} />

      {/* All Apps */}
      <TabsContent value="all" className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredWebApps.map((app, index) => (
            <AppCard 
              key={`web-${index}`} 
              app={app} 
              type="web" 
              onShowUpdate={onShowUpdate}
              onShowDescription={onShowDescription}
            />
          ))}
          {filteredDesktopApps.map((app, index) => (
            <AppCard 
              key={`desktop-${index}`} 
              app={app} 
              type="desktop" 
              onShowUpdate={onShowUpdate}
              onShowDescription={onShowDescription}
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
              onShowUpdate={onShowUpdate}
              onShowDescription={onShowDescription}
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
              onShowUpdate={onShowUpdate}
              onShowDescription={onShowDescription}
            />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default AppGrid;
