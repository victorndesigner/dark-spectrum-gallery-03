import { GamePost } from "@/components/GamePost";
import { PageBanner } from "@/components/PageBanner";
import { games } from "@/data/games";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguageUpdater } from "@/hooks/useLanguageUpdater";

const Revive = () => {
  const { t } = useTranslation();
  useLanguageUpdater();

  // Filter games for revive theme (just example, using first 6 games)
  const reviveGames = games.slice(0, 6);

  return (
    <div className="min-h-screen bg-background">
      <PageBanner 
        title={t('revive')}
        description="Reviva os clássicos que marcaram época"
      />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Jogos Clássicos Revividos
          </h2>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {reviveGames.map((game) => (
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

export default Revive;