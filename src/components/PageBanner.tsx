import bannerBg from '@/assets/banner-bg.jpg';

interface PageBannerProps {
  title: string;
  description?: string;
  backgroundImage?: string;
}

export const PageBanner = ({ title, description, backgroundImage }: PageBannerProps) => {
  return (
    <div 
      className="relative h-48 md:h-64 flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage || bannerBg})` }}
    >
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
          {title}
        </h1>
        {description && (
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};