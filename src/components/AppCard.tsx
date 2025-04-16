
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Monitor, Globe, Info, FileText, Calendar } from "lucide-react";
import { format } from "date-fns";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

interface AppUpdate {
  title: string;
  description: string;
  updatedBy: string;
  date: Date;
}

interface AppProps {
  name: string;
  description: string;
  category: string;
  lastModified: Date;
  lastUpdate: AppUpdate;
  detailedDescription: string;
  icon: string;
  url?: string;
  downloadUrl?: string;
  installationGuide?: string;
}

interface AppCardProps {
  app: AppProps;
  type: "web" | "desktop";
  onShowUpdate: (updateInfo: AppUpdate) => void;
  onShowDescription: (description: string) => void;
}

const AppCard = ({ app, type, onShowUpdate, onShowDescription }: AppCardProps) => {
  const isDesktop = type === "desktop";
  
  return (
    <Card className="card-glow border relative overflow-hidden group">
      {/* Glow border effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 -m-1 bg-gradient-to-r from-blue-500 via-indigo-600 to-blue-500 rounded-xl animate-[gradient-shift_3s_ease_infinite]"></div>
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
            <Button variant="default" className="w-full liquid-button bg-transparent" size="sm">Download</Button>
            <Button variant="outline" className="w-full filter-button" size="sm">Guide</Button>
          </>
        ) : (
          <Button className="w-full liquid-button bg-transparent" variant="default" size="sm" asChild>
            <a href={app.url} target="_blank" rel="noreferrer">Open Application</a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default AppCard;
