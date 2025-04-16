
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface Announcement {
  title: string;
  content: string;
  date: string;
  type: string;
}

interface AnnouncementsProps {
  announcements: Announcement[];
}

const Announcements = ({ announcements }: AnnouncementsProps) => {
  return (
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
  );
};

export default Announcements;
