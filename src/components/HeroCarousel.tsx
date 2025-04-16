
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface CarouselAnnouncement {
  title: string;
  description: string;
  cta: string;
  ctaLink: string;
  bgImage: string;
}

interface HeroCarouselProps {
  announcements: CarouselAnnouncement[];
}

const HeroCarousel = ({ announcements }: HeroCarouselProps) => {
  return (
    <div className="mb-16 relative overflow-hidden rounded-2xl">
      <Carousel className="h-[500px]">
        <CarouselContent>
          {announcements.map((announcement, index) => (
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
  );
};

export default HeroCarousel;
