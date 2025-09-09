import { useState } from 'react';
import { Play, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { useTranslation } from '@/hooks/useTranslation';

interface VideoCardProps {
  id: number;
  title: string;
  titleEn: string;
  thumbnail: string;
  youtubeUrl: string;
  videoId: string;
}

export const VideoCard = ({ title, titleEn, thumbnail, youtubeUrl, videoId }: VideoCardProps) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const { t, language } = useTranslation();

  const currentTitle = language === 'br' ? title : titleEn;

  return (
    <>
      <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-purple transition-all duration-300 group">
        <div className="relative aspect-video overflow-hidden">
          <img
            src={thumbnail}
            alt={currentTitle}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button
              size="icon"
              onClick={() => setIsVideoOpen(true)}
              className="h-12 w-12 rounded-full bg-primary hover:bg-primary/90"
            >
              <Play className="h-6 w-6 fill-white" />
            </Button>
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-3 line-clamp-2 group-hover:text-primary transition-colors">
            {currentTitle}
          </h3>
          
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() => setIsVideoOpen(true)}
              className="flex-1"
            >
              <Play className="h-4 w-4 mr-2" />
              Play
            </Button>
            
            <Button
              size="sm"
              variant="secondary"
              onClick={() => window.open(youtubeUrl, '_blank')}
              className="flex-1"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              {t('watchOnYoutube')}
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="max-w-4xl w-full">
          <DialogHeader>
            <DialogTitle>{currentTitle}</DialogTitle>
          </DialogHeader>
          <div className="aspect-video w-full">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title={currentTitle}
              className="w-full h-full rounded-lg"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};