import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { VideoCard } from '@/components/VideoCard';
import { tutorials } from '@/data/tutorials';
import { useTranslation } from '@/hooks/useTranslation';
import { useLanguageUpdater } from '@/hooks/useLanguageUpdater';

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
      {/* Header Section */}
      <div className="bg-gradient-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('tutorials')}
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Aprenda com nossos tutoriais detalhados e melhore suas habilidades nos jogos
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              placeholder={t('searchPlaceholder')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/70"
            />
          </div>
        </div>
      </div>

      {/* Tutorials Grid */}
      <main className="container mx-auto px-4 py-12">
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