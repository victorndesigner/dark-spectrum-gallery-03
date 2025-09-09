import { PageBanner } from "@/components/PageBanner";
import { VideoCard } from "@/components/VideoCard";
import { Input } from "@/components/ui/input";
import { tutorials } from "@/data/tutorials";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguageUpdater } from "@/hooks/useLanguageUpdater";
import { useState, useMemo } from "react";
import { Search } from 'lucide-react';

const Tutorials = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { t, language } = useTranslation();
  useLanguageUpdater();

  const filteredTutorials = useMemo(() => {
    if (!searchTerm) return tutorials;
    
    return tutorials.filter((tutorial) => {
      const title = language === 'br' ? tutorial.title : tutorial.titleEn;
      return title.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }, [searchTerm, language]);

  return (
    <div className="min-h-screen bg-background">
      <PageBanner 
        title={t('tutorials')}
        description="Aprenda com nossos tutoriais detalhados e melhore suas habilidades nos jogos"
        backgroundImage="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&h=400&fit=crop&crop=center"
      />
      
      <main className="container mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <Input
            placeholder={t('searchPlaceholder')}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Tutorials Grid */}
        {filteredTutorials.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              Nenhum tutorial encontrado para "{searchTerm}"
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTutorials.map((tutorial) => (
              <VideoCard
                key={tutorial.id}
                id={tutorial.id}
                title={tutorial.title}
                titleEn={tutorial.titleEn}
                thumbnail={tutorial.thumbnail}
                youtubeUrl={tutorial.youtubeUrl}
                videoId={tutorial.videoId}
              />
            ))}
          </div>
        )}
        
        {searchTerm && filteredTutorials.length > 0 && (
          <div className="text-center mt-8">
            <p className="text-muted-foreground">
              {filteredTutorials.length} tutorial(s) encontrado(s) para "{searchTerm}"
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Tutorials;