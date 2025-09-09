import { Navbar } from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {children}
      
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