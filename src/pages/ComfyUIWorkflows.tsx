import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Play, Star, Eye, Code, Workflow, Clock } from "lucide-react";

const mockWorkflows = [
  {
    id: 1,
    name: "Portrait Enhancement Pro",
    description: "Advanced workflow for enhancing portrait photos with multiple AI models",
    author: "ProWorkflows",
    category: "Portrait",
    difficulty: "Intermediate",
    rating: 4.9,
    downloads: 15420,
    views: 89560,
    nodes: 24,
    estimatedTime: "3-5 minutes",
    thumbnail: "/lovable-uploads/0c6db754-b805-46e5-a4b8-319a9d8fef71.png",
    tags: ["Portrait", "Enhancement", "Professional"]
  },
  {
    id: 2,
    name: "Anime Style Transfer",
    description: "Convert realistic photos to beautiful anime-style artwork",
    author: "AnimeAI",
    category: "Style Transfer",
    difficulty: "Beginner",
    rating: 4.7,
    downloads: 23890,
    views: 156780,
    nodes: 12,
    estimatedTime: "1-2 minutes",
    thumbnail: "/lovable-uploads/22f4141e-f83e-4b85-8c93-672e181d999b.png",
    tags: ["Anime", "Style", "Artistic"]
  },
  {
    id: 3,
    name: "Landscape Upscaling",
    description: "4K upscaling workflow specifically optimized for landscape photography",
    author: "LandscapePro",
    category: "Upscaling",
    difficulty: "Advanced",
    rating: 4.8,
    downloads: 8960,
    views: 45230,
    nodes: 18,
    estimatedTime: "5-8 minutes",
    thumbnail: "/lovable-uploads/739ab3ed-442e-42fb-9219-25ee697b73ba.png",
    tags: ["Landscape", "Upscaling", "4K"]
  },
  {
    id: 4,
    name: "Character Consistency",
    description: "Maintain character consistency across multiple generated images",
    author: "GameDevAI",
    category: "Character",
    difficulty: "Expert",
    rating: 4.6,
    downloads: 12340,
    views: 67890,
    nodes: 32,
    estimatedTime: "8-12 minutes",
    thumbnail: "/lovable-uploads/8827d443-a68b-4bd9-998f-3c4c410510e9.png",
    tags: ["Character", "Consistency", "Gaming"]
  },
  {
    id: 5,
    name: "Background Removal",
    description: "Clean background removal with edge refinement and transparency",
    author: "CleanCut",
    category: "Editing",
    difficulty: "Beginner",
    rating: 4.5,
    downloads: 34560,
    views: 201450,
    nodes: 8,
    estimatedTime: "30 seconds",
    thumbnail: "/lovable-uploads/92333427-5a32-4cf8-b110-afc5b57c9f27.png",
    tags: ["Background", "Editing", "Quick"]
  },
  {
    id: 6,
    name: "Cinematic Lighting",
    description: "Add dramatic cinematic lighting effects to any image",
    author: "CinemaAI",
    category: "Lighting",
    difficulty: "Intermediate",
    rating: 4.4,
    downloads: 19780,
    views: 112340,
    nodes: 20,
    estimatedTime: "4-6 minutes",
    thumbnail: "/lovable-uploads/a3dc041f-fb55-4108-807b-ca52164461d8.png",
    tags: ["Cinematic", "Lighting", "Dramatic"]
  }
];

const categories = ["All", "Portrait", "Style Transfer", "Upscaling", "Character", "Editing", "Lighting"];
const difficulties = ["All", "Beginner", "Intermediate", "Advanced", "Expert"];

export default function ComfyUIWorkflows() {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "text-green-400 border-green-400/30";
      case "Intermediate": return "text-yellow-400 border-yellow-400/30";
      case "Advanced": return "text-orange-400 border-orange-400/30";
      case "Expert": return "text-red-400 border-red-400/30";
      default: return "text-white/60 border-white/20";
    }
  };

  return (
    <div className="min-h-screen glass-bg p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent mb-2">
              ComfyUI Workflows
            </h1>
            <p className="text-white/70">Pre-built workflows for advanced AI image processing</p>
          </div>
        </div>

        {/* Filters */}
        <div className="space-y-4 mb-8">
          <div>
            <h3 className="text-white/80 text-sm font-medium mb-2">Category</h3>
            <div className="flex gap-2 overflow-x-auto pb-2">
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
          </div>
          
          <div>
            <h3 className="text-white/80 text-sm font-medium mb-2">Difficulty</h3>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {difficulties.map((difficulty) => (
                <Badge
                  key={difficulty}
                  variant={difficulty === "All" ? "default" : "outline"}
                  className={`glass-card border-white/20 text-white hover:bg-white/20 cursor-pointer whitespace-nowrap ${
                    difficulty === "All" ? "bg-white/20" : ""
                  }`}
                >
                  {difficulty}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockWorkflows.map((workflow) => (
            <Card key={workflow.id} className="glass-card border-white/20 hover:border-white/40 transition-all duration-300">
              <CardContent className="p-0">
                <div className="aspect-video overflow-hidden rounded-t-[25px] relative">
                  <img 
                    src={workflow.thumbnail} 
                    alt={workflow.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <Badge 
                    variant="outline" 
                    className={`absolute top-3 left-3 glass-card ${getDifficultyColor(workflow.difficulty)}`}
                  >
                    {workflow.difficulty}
                  </Badge>
                  <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full text-white text-xs">
                    <Workflow className="w-3 h-3" />
                    {workflow.nodes} nodes
                  </div>
                  <div className="absolute bottom-3 left-3 text-white">
                    <h3 className="font-bold text-lg">{workflow.name}</h3>
                    <p className="text-white/80 text-sm">by {workflow.author}</p>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="border-white/20 text-white/80">
                      {workflow.category}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white/80 text-sm">{workflow.rating}</span>
                    </div>
                  </div>

                  <p className="text-white/70 text-sm mb-4 line-clamp-2">{workflow.description}</p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {workflow.tags.map((tag) => (
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
                      <div className="text-white/90 font-medium">{workflow.downloads.toLocaleString()}</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-white/70">
                        <Eye className="w-3 h-3" />
                      </div>
                      <div className="text-white/90 font-medium">{workflow.views.toLocaleString()}</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-white/70">
                        <Clock className="w-3 h-3" />
                      </div>
                      <div className="text-white/90 font-medium text-xs">{workflow.estimatedTime}</div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1 border-white/20 text-white hover:bg-white/20">
                      <Code className="w-4 h-4 mr-1" />
                      View
                    </Button>
                    <Button size="sm" className="flex-1 glass-card border-white/20 text-white hover:bg-white/20">
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Workflow Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
          <Card className="glass-card border-white/20 text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-white/70">Available Workflows</div>
            </CardContent>
          </Card>
          <Card className="glass-card border-white/20 text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-white mb-2">1.8M</div>
              <div className="text-white/70">Total Downloads</div>
            </CardContent>
          </Card>
          <Card className="glass-card border-white/20 text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-white mb-2">45K+</div>
              <div className="text-white/70">Active Users</div>
            </CardContent>
          </Card>
          <Card className="glass-card border-white/20 text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-white mb-2">4.7</div>
              <div className="text-white/70">Average Rating</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}