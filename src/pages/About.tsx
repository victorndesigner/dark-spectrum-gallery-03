import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguageUpdater } from "@/hooks/useLanguageUpdater";
import { Youtube, Twitter, Instagram } from "lucide-react";

const About = () => {
  const { t } = useTranslation();
  useLanguageUpdater();

  return (
    <div 
      className="relative min-h-screen bg-black"
      style={{ 
        backgroundImage: `url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&h=800&fit=crop&crop=center')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-black/60" style={{ backdropFilter: 'sepia(100%) hue-rotate(270deg) saturate(3)' }}></div>
      
      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center md:justify-start">
              <div className="w-96 h-96 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-1 shadow-2xl">
                <div className="w-full h-full rounded-xl overflow-hidden bg-gradient-to-br from-gray-900 to-black">
                  <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop&crop=face"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Description Card */}
            <div className="text-center md:text-left">
              <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-2xl">
                <h1 className="text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-6">
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
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 border-0 transition-all duration-300"
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
                    className="border-white/20 hover:bg-white/10"
                    onClick={() => window.open('https://twitter.com', '_blank')}
                  >
                    <Twitter className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-white/20 hover:bg-white/10"
                    onClick={() => window.open('https://instagram.com', '_blank')}
                  >
                    <Instagram className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;