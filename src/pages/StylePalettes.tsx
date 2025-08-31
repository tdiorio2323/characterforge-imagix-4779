import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Heart, Download, Eye, Palette } from "lucide-react";

const mockPalettes = [
  {
    id: 1,
    name: "Sunset Dreams",
    colors: ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FFEAA7"],
    category: "Warm",
    likes: 2340,
    downloads: 1567,
    author: "Alex Chen",
    thumbnail: "/lovable-uploads/0c6db754-b805-46e5-a4b8-319a9d8fef71.png"
  },
  {
    id: 2,
    name: "Cyberpunk Neon",
    colors: ["#FF0080", "#00FFFF", "#8000FF", "#FF8000", "#00FF80"],
    category: "Futuristic",
    likes: 1890,
    downloads: 892,
    author: "Nova Studios",
    thumbnail: "/lovable-uploads/22f4141e-f83e-4b85-8c93-672e181d999b.png"
  },
  {
    id: 3,
    name: "Ocean Depths",
    colors: ["#006994", "#0085B8", "#00A1D8", "#4FC3F7", "#81D4FA"],
    category: "Cool",
    likes: 3120,
    downloads: 2014,
    author: "Marina Blue",
    thumbnail: "/lovable-uploads/739ab3ed-442e-42fb-9219-25ee697b73ba.png"
  },
  {
    id: 4,
    name: "Forest Whispers",
    colors: ["#2E7D32", "#388E3C", "#43A047", "#66BB6A", "#81C784"],
    category: "Nature",
    likes: 1567,
    downloads: 743,
    author: "Green Thumb",
    thumbnail: "/lovable-uploads/8827d443-a68b-4bd9-998f-3c4c410510e9.png"
  },
  {
    id: 5,
    name: "Royal Purple",
    colors: ["#4A148C", "#6A1B9A", "#7B1FA2", "#8E24AA", "#9C27B0"],
    category: "Elegant",
    likes: 2789,
    downloads: 1456,
    author: "Regal Design",
    thumbnail: "/lovable-uploads/92333427-5a32-4cf8-b110-afc5b57c9f27.png"
  },
  {
    id: 6,
    name: "Autumn Harvest",
    colors: ["#BF360C", "#D84315", "#E64A19", "#FF5722", "#FF7043"],
    category: "Seasonal",
    likes: 1345,
    downloads: 678,
    author: "Fall Vibes",
    thumbnail: "/lovable-uploads/a3dc041f-fb55-4108-807b-ca52164461d8.png"
  }
];

const categories = ["All", "Warm", "Cool", "Futuristic", "Nature", "Elegant", "Seasonal"];

export default function StylePalettes() {
  return (
    <div className="min-h-screen glass-bg p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent mb-2">
              Style Palettes
            </h1>
            <p className="text-white/70">Curated color palettes for your creative projects</p>
          </div>
          <Button className="glass-card border-white/20 text-white hover:bg-white/20">
            <Plus className="w-4 h-4 mr-2" />
            Create Palette
          </Button>
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
          {mockPalettes.map((palette) => (
            <Card key={palette.id} className="glass-card border-white/20 hover:border-white/40 transition-all duration-300">
              <CardContent className="p-0">
                <div className="aspect-video overflow-hidden rounded-t-[25px] relative">
                  <img 
                    src={palette.thumbnail} 
                    alt={palette.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <Badge variant="outline" className="absolute top-3 left-3 glass-card border-white/20 text-white">
                    {palette.category}
                  </Badge>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-white font-semibold text-lg">{palette.name}</h3>
                    <span className="text-white/60 text-sm">by {palette.author}</span>
                  </div>

                  {/* Color Swatches */}
                  <div className="flex gap-1 mb-4">
                    {palette.colors.map((color, index) => (
                      <div
                        key={index}
                        className="flex-1 h-8 rounded-lg cursor-pointer hover:scale-105 transition-transform"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-white/70 mb-4">
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      {palette.likes.toLocaleString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Download className="w-4 h-4" />
                      {palette.downloads.toLocaleString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      Preview
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1 border-white/20 text-white hover:bg-white/20">
                      <Heart className="w-4 h-4 mr-1" />
                      Like
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

        {/* Featured Color Tools */}
        <Card className="glass-card border-white/20 mt-12">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Palette className="w-5 h-5" />
              Color Tools
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="glass-card border-white/20 p-4 rounded-[20px] text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-blue-500 rounded-full mx-auto mb-3" />
                <h3 className="text-white font-medium mb-2">Color Picker</h3>
                <p className="text-white/60 text-sm">Extract colors from any image</p>
              </div>
              <div className="glass-card border-white/20 p-4 rounded-[20px] text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-purple-500 rounded-full mx-auto mb-3" />
                <h3 className="text-white font-medium mb-2">Harmony Generator</h3>
                <p className="text-white/60 text-sm">Create complementary color schemes</p>
              </div>
              <div className="glass-card border-white/20 p-4 rounded-[20px] text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-pink-500 rounded-full mx-auto mb-3" />
                <h3 className="text-white font-medium mb-2">Accessibility Checker</h3>
                <p className="text-white/60 text-sm">Verify color contrast ratios</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}