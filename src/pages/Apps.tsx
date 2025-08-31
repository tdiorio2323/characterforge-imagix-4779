import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Download, Play, ExternalLink, Clock } from "lucide-react";

const mockApps = [
  {
    id: 1,
    name: "PhotoMagic Pro",
    category: "Photo Editing",
    description: "Advanced AI-powered photo enhancement and editing suite",
    rating: 4.8,
    downloads: 125000,
    price: "Free",
    thumbnail: "/lovable-uploads/0c6db754-b805-46e5-a4b8-319a9d8fef71.png",
    tags: ["Photo", "Enhancement", "AI"],
    lastUpdated: "2 days ago",
    developer: "TD Studios"
  },
  {
    id: 2,
    name: "Character Builder",
    category: "Character Design",
    description: "Create and customize AI-generated characters for games and stories",
    rating: 4.9,
    downloads: 89500,
    price: "$9.99",
    thumbnail: "/lovable-uploads/22f4141e-f83e-4b85-8c93-672e181d999b.png",
    tags: ["Characters", "Design", "Gaming"],
    lastUpdated: "1 week ago",
    developer: "Creative Labs"
  },
  {
    id: 3,
    name: "Style Transfer Studio",
    category: "Art & Design",
    description: "Transform your images with artistic styles using neural networks",
    rating: 4.7,
    downloads: 67800,
    price: "Free",
    thumbnail: "/lovable-uploads/739ab3ed-442e-42fb-9219-25ee697b73ba.png",
    tags: ["Art", "Style", "Neural"],
    lastUpdated: "3 days ago",
    developer: "AI Artworks"
  },
  {
    id: 4,
    name: "Video Synthesizer",
    category: "Video Creation",
    description: "Generate stunning videos from text prompts and images",
    rating: 4.6,
    downloads: 54200,
    price: "$19.99",
    thumbnail: "/lovable-uploads/8827d443-a68b-4bd9-998f-3c4c410510e9.png",
    tags: ["Video", "Generation", "AI"],
    lastUpdated: "5 days ago",
    developer: "Motion AI"
  },
  {
    id: 5,
    name: "Palette Generator",
    category: "Color Tools",
    description: "Create beautiful color palettes with AI assistance",
    rating: 4.5,
    downloads: 43600,
    price: "Free",
    thumbnail: "/lovable-uploads/92333427-5a32-4cf8-b110-afc5b57c9f27.png",
    tags: ["Colors", "Palettes", "Design"],
    lastUpdated: "1 day ago",
    developer: "Color Co."
  },
  {
    id: 6,
    name: "3D Model Maker",
    category: "3D Design",
    description: "Generate 3D models from 2D images and text descriptions",
    rating: 4.4,
    downloads: 38900,
    price: "$14.99",
    thumbnail: "/lovable-uploads/a3dc041f-fb55-4108-807b-ca52164461d8.png",
    tags: ["3D", "Modeling", "Generation"],
    lastUpdated: "1 week ago",
    developer: "3D Forge"
  }
];

const categories = ["All", "Photo Editing", "Character Design", "Art & Design", "Video Creation", "Color Tools", "3D Design"];

export default function Apps() {
  return (
    <div className="min-h-screen glass-bg p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent mb-2">
              Apps
            </h1>
            <p className="text-white/70">Discover powerful AI-powered applications</p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className={`glass-card border-white/20 text-white hover:bg-white/20 cursor-pointer whitespace-nowrap ${
                category === "All" ? "bg-white/20" : ""
              }`}
            >
              {category}
            </Badge>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockApps.map((app) => (
            <Card key={app.id} className="glass-card border-white/20 hover:border-white/40 transition-all duration-300">
              <CardContent className="p-0">
                <div className="aspect-video overflow-hidden rounded-t-[25px] relative">
                  <img 
                    src={app.thumbnail} 
                    alt={app.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <Badge 
                    variant={app.price === "Free" ? "default" : "secondary"}
                    className="absolute top-3 right-3 glass-card border-white/20"
                  >
                    {app.price}
                  </Badge>
                  <div className="absolute bottom-3 left-3 text-white">
                    <h3 className="font-bold text-lg">{app.name}</h3>
                    <p className="text-white/80 text-sm">{app.developer}</p>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="border-white/20 text-white/80">
                      {app.category}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white/80 text-sm">{app.rating}</span>
                    </div>
                  </div>

                  <p className="text-white/70 text-sm mb-4 line-clamp-2">{app.description}</p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {app.tags.map((tag) => (
                      <span key={tag} className="text-xs text-white/60 bg-white/10 px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-white/70 mb-4">
                    <div className="flex items-center gap-1">
                      <Download className="w-4 h-4" />
                      {app.downloads.toLocaleString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {app.lastUpdated}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1 border-white/20 text-white hover:bg-white/20">
                      <Play className="w-4 h-4 mr-1" />
                      Try
                    </Button>
                    <Button size="sm" className="flex-1 glass-card border-white/20 text-white hover:bg-white/20">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Open
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* App Store Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
          <Card className="glass-card border-white/20 text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-white mb-2">200+</div>
              <div className="text-white/70">Available Apps</div>
            </CardContent>
          </Card>
          <Card className="glass-card border-white/20 text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-white mb-2">5.2M</div>
              <div className="text-white/70">Total Downloads</div>
            </CardContent>
          </Card>
          <Card className="glass-card border-white/20 text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-white mb-2">150K+</div>
              <div className="text-white/70">Active Users</div>
            </CardContent>
          </Card>
          <Card className="glass-card border-white/20 text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-white mb-2">4.8</div>
              <div className="text-white/70">Average Rating</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}