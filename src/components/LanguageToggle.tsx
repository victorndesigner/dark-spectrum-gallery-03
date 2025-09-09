import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";

export const LanguageToggle = () => {
  const { language, changeLanguage } = useTranslation();

  const toggleLanguage = () => {
    changeLanguage(language === 'br' ? 'us' : 'br');
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="h-9 px-3 font-medium flex items-center gap-2"
    >
      <span className="text-base">🌐</span>
      {language === 'br' ? 'BR' : 'US'}
    </Button>
  );
};