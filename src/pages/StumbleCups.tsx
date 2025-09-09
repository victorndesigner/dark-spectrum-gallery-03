import { GamePost } from "@/components/GamePost";
import { PageBanner } from "@/components/PageBanner";
import { games } from "@/data/games";
import { useTranslation } from "@/hooks/useTranslation";

const StumbleCups = () => {
  const { t } = useTranslation();

  // Filter games for stumble cups theme (using games 6-12)
  const stumbleGames = games.slice(6, 12);

  return (
    <div className="min-h-screen bg-background">
      <PageBanner 
        title={t('stumbleCups')}
        description="Competições e torneios épicos"
      />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Torneios e Competições
          </h2>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {stumbleGames.map((game) => (
            <GamePost
              key={game.id}
              id={game.id}
              name={game.name}
              version={game.version}
              thumbnail={game.thumbnail}
              steamLink={game.steamLink}
              mobileLink={game.mobileLink}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default StumbleCups;