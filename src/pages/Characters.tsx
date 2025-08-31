import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus, Star, Download, Heart } from "lucide-react";

const mockCharacters = [
  {
    id: 1,
    name: "Aria Nightshade",
    category: "Fantasy",
    style: "Anime",
    image: "/lovable-uploads/0c6db754-b805-46e5-a4b8-319a9d8fef71.png",
    likes: 2847,
    downloads: 1293,
    rating: 4.8,
    tags: ["Dark Fantasy", "Warrior", "Magic"]
  },
  {
    id: 2,
    name: "Captain Steelbeard",
    category: "Sci-Fi",
    style: "Realistic",
    image: "/lovable-uploads/22f4141e-f83e-4b85-8c93-672e181d999b.png",
    likes: 1934,
    downloads: 892,
    rating: 4.6,
    tags: ["Cyberpunk", "Pilot", "Futuristic"]
  },
  {
    id: 3,
    name: "Luna Starweaver",
    category: "Fantasy",
    style: "Anime",
    image: "/lovable-uploads/739ab3ed-442e-42fb-9219-25ee697b73ba.png",
    likes: 3241,
    downloads: 1567,
    rating: 4.9,
    tags: ["Celestial", "Mage", "Ethereal"]
  },
  {
    id: 4,
    name: "Rex Ironhold",
    category: "Modern",
    style: "Realistic",
    image: "/lovable-uploads/8827d443-a68b-4bd9-998f-3c4c410510e9.png",
    likes: 1678,
    downloads: 743,
    rating: 4.4,
    tags: ["Military", "Tactical", "Modern"]
  }
];

export default function Characters() {
  return (
    <div className="min-h-screen glass-bg p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent mb-2">
              Characters
            </h1>
            <p className="text-white/70">Create and manage AI-generated characters</p>
          </div>
          <Button className="glass-card border-white/20 text-white hover:bg-white/20">
            <Plus className="w-4 h-4 mr-2" />
            Create Character
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mockCharacters.map((character) => (
            <Card key={character.id} className="glass-card border-white/20 hover:border-white/40 transition-all duration-300">
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden rounded-t-[25px]">
                  <img 
                    src={character.image} 
                    alt={character.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white font-semibold text-lg">{character.name}</h3>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white/80 text-sm">{character.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 mb-3">
                    <Badge variant="secondary" className="glass-card border-white/20 text-white/90">
                      {character.category}
                    </Badge>
                    <Badge variant="outline" className="border-white/20 text-white/80">
                      {character.style}
                    </Badge>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {character.tags.map((tag) => (
                      <span key={tag} className="text-xs text-white/60 bg-white/10 px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-white/70 mb-4">
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      {character.likes}
                    </div>
                    <div className="flex items-center gap-1">
                      <Download className="w-4 h-4" />
                      {character.downloads}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1 border-white/20 text-white hover:bg-white/20">
                      Edit
                    </Button>
                    <Button size="sm" className="flex-1 glass-card border-white/20 text-white hover:bg-white/20">
                      Use
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}