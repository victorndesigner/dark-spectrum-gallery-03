import { ThemeToggle } from "@/components/ThemeToggle";
import { GamePost } from "@/components/GamePost";
import { games } from "@/data/games";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                GameHub
              </h1>
              <p className="text-sm text-muted-foreground">
                Sua central de jogos favoritos
              </p>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Explore Nossa Coleção
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Descubra os melhores jogos disponíveis para Steam e Mobile. 
            Cada jogo oferece uma experiência única com gráficos impressionantes e gameplay envolvente.
          </p>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {games.map((game) => (
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

      {/* Footer */}
      <footer className="border-t border-border bg-card/30 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 GameHub. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;