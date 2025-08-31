import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Download, Play, Zap, Clock, Users } from "lucide-react";

const mockModels = [
  {
    id: 1,
    name: "Flux Pro Max",
    version: "v2.1",
    type: "Image Generation",
    description: "State-of-the-art text-to-image model with ultra-realistic outputs",
    rating: 4.9,
    downloads: 50420,
    users: 12340,
    speed: "Fast",
    tier: "Premium",
    thumbnail: "/lovable-uploads/0c6db754-b805-46e5-a4b8-319a9d8fef71.png",
    tags: ["Realistic", "High-Res", "Versatile"]
  },
  {
    id: 2,
    name: "StyleForge",
    version: "v1.8",
    type: "Style Transfer",
    description: "Advanced neural style transfer with artistic flair",
    rating: 4.7,
    downloads: 34280,
    users: 8960,
    speed: "Medium",
    tier: "Standard",
    thumbnail: "/lovable-uploads/22f4141e-f83e-4b85-8c93-672e181d999b.png",
    tags: ["Artistic", "Style", "Creative"]
  },
  {
    id: 3,
    name: "PortraitPro AI",
    version: "v3.0",
    type: "Portrait Enhancement",
    description: "Specialized model for generating and enhancing portraits",
    rating: 4.8,
    downloads: 28750,
    users: 7560,
    speed: "Fast",
    tier: "Premium",
    thumbnail: "/lovable-uploads/739ab3ed-442e-42fb-9219-25ee697b73ba.png",
    tags: ["Portraits", "Enhancement", "Professional"]
  },
  {
    id: 4,
    name: "AnimeMaster",
    version: "v2.5",
    type: "Anime Generation",
    description: "Perfect anime-style character and scene generation",
    rating: 4.6,
    downloads: 45680,
    users: 15420,
    speed: "Medium",
    tier: "Standard",
    thumbnail: "/lovable-uploads/8827d443-a68b-4bd9-998f-3c4c410510e9.png",
    tags: ["Anime", "Characters", "Manga"]
  },
  {
    id: 5,
    name: "LandscapeVision",
    version: "v1.9",
    type: "Landscape Generation",
    description: "Breathtaking natural landscapes and environments",
    rating: 4.5,
    downloads: 23140,
    users: 6780,
    speed: "Slow",
    tier: "Standard",
    thumbnail: "/lovable-uploads/92333427-5a32-4cf8-b110-afc5b57c9f27.png",
    tags: ["Nature", "Landscapes", "Environments"]
  },
  {
    id: 6,
    name: "VideoMorph",
    version: "v1.2",
    type: "Video Generation",
    description: "Generate smooth video sequences from text prompts",
    rating: 4.4,
    downloads: 18960,
    users: 4320,
    speed: "Slow",
    tier: "Premium",
    thumbnail: "/lovable-uploads/a3dc041f-fb55-4108-807b-ca52164461d8.png",
    tags: ["Video", "Animation", "Motion"]
  }
];

const modelTypes = ["All", "Image Generation", "Style Transfer", "Portrait Enhancement", "Anime Generation", "Landscape Generation", "Video Generation"];

export default function Models() {
  const getSpeedColor = (speed: string) => {
    switch (speed) {
      case "Fast": return "text-green-400";
      case "Medium": return "text-yellow-400";
      case "Slow": return "text-orange-400";
      default: return "text-white/60";
    }
  };

  const getTierColor = (tier: string) => {
    return tier === "Premium" ? "border-yellow-400/50 text-yellow-400" : "border-blue-400/50 text-blue-400";
  };

  return (
    <div className="min-h-screen glass-bg p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent mb-2">
              AI Models
            </h1>
            <p className="text-white/70">Explore and use cutting-edge AI models for your projects</p>
          </div>
        </div>

        {/* Model Type Filter */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {modelTypes.map((type) => (
            <Badge
              key={type}
              variant={type === "All" ? "default" : "outline"}
              className={`glass-card border-white/20 text-white hover:bg-white/20 cursor-pointer whitespace-nowrap ${
                type === "All" ? "bg-white/20" : ""
              }`}
            >
              {type}
            </Badge>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockModels.map((model) => (
            <Card key={model.id} className="glass-card border-white/20 hover:border-white/40 transition-all duration-300">
              <CardContent className="p-0">
                <div className="aspect-video overflow-hidden rounded-t-[25px] relative">
                  <img 
                    src={model.thumbnail} 
                    alt={model.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <Badge variant="outline" className={`absolute top-3 left-3 glass-card ${getTierColor(model.tier)}`}>
                    {model.tier}
                  </Badge>
                  <div className="absolute bottom-3 left-3 text-white">
                    <h3 className="font-bold text-lg">{model.name}</h3>
                    <p className="text-white/80 text-sm">{model.version}</p>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="glass-card border-white/20 text-white/90">
                      {model.type}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white/80 text-sm">{model.rating}</span>
                    </div>
                  </div>

                  <p className="text-white/70 text-sm mb-4 line-clamp-2">{model.description}</p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {model.tags.map((tag) => (
                      <span key={tag} className="text-xs text-white/60 bg-white/10 px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-2 mb-4 text-xs">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-white/70">
                        <Download className="w-3 h-3" />
                      </div>
                      <div className="text-white/90 font-medium">{model.downloads.toLocaleString()}</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-white/70">
                        <Users className="w-3 h-3" />
                      </div>
                      <div className="text-white/90 font-medium">{model.users.toLocaleString()}</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-white/70">
                        <Clock className="w-3 h-3" />
                      </div>
                      <div className={`font-medium ${getSpeedColor(model.speed)}`}>{model.speed}</div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1 border-white/20 text-white hover:bg-white/20">
                      <Play className="w-4 h-4 mr-1" />
                      Try
                    </Button>
                    <Button size="sm" className="flex-1 glass-card border-white/20 text-white hover:bg-white/20">
                      <Zap className="w-4 h-4 mr-1" />
                      Use Model
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Model Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
          <Card className="glass-card border-white/20 text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-white mb-2">150+</div>
              <div className="text-white/70">Available Models</div>
            </CardContent>
          </Card>
          <Card className="glass-card border-white/20 text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-white mb-2">2.4M</div>
              <div className="text-white/70">Total Downloads</div>
            </CardContent>
          </Card>
          <Card className="glass-card border-white/20 text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-white mb-2">50K+</div>
              <div className="text-white/70">Active Users</div>
            </CardContent>
          </Card>
          <Card className="glass-card border-white/20 text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-white/70">Uptime</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}