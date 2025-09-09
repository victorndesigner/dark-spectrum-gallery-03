import { Download, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface GamePostProps {
  id: number;
  name: string;
  version: string;
  thumbnail: string;
  steamLink: string;
  mobileLink: string;
}

export function GamePost({ name, version, thumbnail, steamLink, mobileLink }: GamePostProps) {
  return (
    <Card className="group overflow-hidden bg-gradient-surface shadow-card hover:shadow-purple transition-all duration-300 border-border/50 hover:border-primary/30">
      <div className="aspect-video overflow-hidden bg-surface">
        <img
          src={thumbnail}
          alt={`${name} thumbnail`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-4 space-y-4">
        <div>
          <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground">
            Versão {version}
          </p>
        </div>
        
        <div className="flex gap-2">
          <Button
            variant="default"
            size="sm"
            className="flex-1 bg-gradient-primary hover:shadow-glow transition-all duration-300"
            onClick={() => window.open(steamLink, '_blank')}
          >
            <Download className="h-4 w-4 mr-2" />
            Steam
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex-1 border-primary/50 hover:bg-primary/10 hover:border-primary transition-all duration-300"
            onClick={() => window.open(mobileLink, '_blank')}
          >
            <Smartphone className="h-4 w-4 mr-2" />
            Mobile
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}