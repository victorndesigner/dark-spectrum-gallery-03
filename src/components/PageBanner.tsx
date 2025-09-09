import { Button } from "@/components/ui/button";
import { Youtube } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguageUpdater } from "@/hooks/useLanguageUpdater";

interface PageBannerProps {
  title: string;
  description?: string;
  backgroundImage?: string;
}

export const PageBanner = ({ title, description, backgroundImage }: PageBannerProps) => {
  const { t } = useTranslation();
  useLanguageUpdater();
  
  return (
    <div 
      className="relative h-56 md:h-72 flex items-center justify-center text-center bg-cover bg-center"
      style={{ 
        backgroundImage: backgroundImage 
          ? `url(${backgroundImage})` 
          : `url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&h=400&fit=crop&crop=center')`,
        filter: 'sepia(50%) hue-rotate(270deg) saturate(2) brightness(0.8)'
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-6">
        <h1 className="text-3xl md:text-5xl font-bold mb-4" style={{ 
          background: 'linear-gradient(to right, #8b5cf6, #ec4899)', 
          WebkitBackgroundClip: 'text', 
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          {title}
        </h1>
        {description && (
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-6">
            {description}
          </p>
        )}
        <Button 
          size="lg" 
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 border-0 transition-all duration-300"
          onClick={() => window.open('https://youtube.com', '_blank')}
        >
          <Youtube className="h-5 w-5 mr-2" />
          {t('subscribe')}
        </Button>
      </div>
    </div>
  );
};