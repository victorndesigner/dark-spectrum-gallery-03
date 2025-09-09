import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguageUpdater } from "@/hooks/useLanguageUpdater";
import { Youtube, Twitter, Instagram } from "lucide-react";

const About = () => {
  const { t } = useTranslation();
  useLanguageUpdater();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-black">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center md:justify-start">
              <div className="w-80 h-80 rounded-lg bg-gradient-primary flex items-center justify-center shadow-purple">
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop&crop=face"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Description */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold text-white mb-6">
                {t('aboutTitle')}
              </h1>
              
              <p className="text-lg text-white/90 mb-6 leading-relaxed">
                {t('aboutDescription')}
              </p>
              
              <p className="text-white/80 mb-8 leading-relaxed">
                Há mais de 5 anos criando conteúdo sobre jogos, especialmente Fall Guys, 
                sempre buscando trazer diversão e as melhores dicas para a comunidade gamer. 
                Acredito que os jogos são uma forma incrível de conectar pessoas e criar momentos únicos.
              </p>

              {/* Subscribe Button */}
              <div className="mb-8">
                <Button 
                  size="lg" 
                  className="bg-gradient-purple hover:opacity-90 text-white px-8 py-3 border-0"
                  onClick={() => window.open('https://youtube.com', '_blank')}
                >
                  <Youtube className="h-5 w-5 mr-2" />
                  {t('subscribe')}
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 justify-center md:justify-start">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => window.open('https://twitter.com', '_blank')}
                >
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => window.open('https://instagram.com', '_blank')}
                >
                  <Instagram className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;