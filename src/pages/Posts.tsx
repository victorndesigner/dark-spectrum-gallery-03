import { PageBanner } from "@/components/PageBanner";
import { VideoCard } from "@/components/VideoCard";
import { tutorials } from "@/data/tutorials";
import { useTranslation } from "@/hooks/useTranslation";

const Posts = () => {
  const { t } = useTranslation();

  // Get latest 3 videos
  const latestVideos = tutorials.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <PageBanner 
        title={t('posts')}
        description="Confira as últimas postagens e conteúdos"
      />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            {t('latestPosts')}
          </h2>
        </div>

        {/* Latest Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {latestVideos.map((video) => (
            <VideoCard
              key={video.id}
              id={video.id}
              title={video.title}
              titleEn={video.titleEn}
              thumbnail={video.thumbnail}
              youtubeUrl={video.youtubeUrl}
              videoId={video.videoId}
            />
          ))}
        </div>

        {/* More Content Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Mais Conteúdo
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card p-6 rounded-lg border">
              <h4 className="font-semibold text-lg mb-3">Análises de Jogos</h4>
              <p className="text-muted-foreground mb-4">
                Reviews completas dos jogos mais populares com análise detalhada de gameplay, 
                gráficos e experiência geral.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border">
              <h4 className="font-semibold text-lg mb-3">Dicas e Estratégias</h4>
              <p className="text-muted-foreground mb-4">
                Guias estratégicos para melhorar sua performance nos jogos favoritos 
                da comunidade.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Posts;