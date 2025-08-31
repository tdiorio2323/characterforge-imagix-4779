import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Wand2, Settings, Image, Palette, Zap } from "lucide-react";
import { useState } from "react";

const stylePresets = [
  { name: "Photorealistic", icon: "📸", description: "Ultra-realistic photography style" },
  { name: "Anime", icon: "🎌", description: "Japanese animation style" },
  { name: "Oil Painting", icon: "🎨", description: "Classic oil painting technique" },
  { name: "Digital Art", icon: "💻", description: "Modern digital artwork" },
  { name: "Watercolor", icon: "🖌️", description: "Soft watercolor painting" },
  { name: "Cyberpunk", icon: "🤖", description: "Futuristic neon aesthetic" }
];

const recentGenerations = [
  "/lovable-uploads/0c6db754-b805-46e5-a4b8-319a9d8fef71.png",
  "/lovable-uploads/22f4141e-f83e-4b85-8c93-672e181d999b.png", 
  "/lovable-uploads/739ab3ed-442e-42fb-9219-25ee697b73ba.png",
  "/lovable-uploads/8827d443-a68b-4bd9-998f-3c4c410510e9.png"
];

export default function CreateImage() {
  const [prompt, setPrompt] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("");
  const [quality, setQuality] = useState([80]);
  const [creativity, setCreativity] = useState([60]);

  return (
    <div className="min-h-screen glass-bg p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent mb-2">
              Create Image
            </h1>
            <p className="text-white/70">Generate stunning AI artwork from text prompts</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Creation Panel */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="glass-card border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Wand2 className="w-5 h-5" />
                  Text Prompt
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  placeholder="Describe the image you want to create... (e.g., 'A majestic dragon soaring through storm clouds at sunset')"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="min-h-32 glass-card border-white/20 text-white placeholder:text-white/50 resize-none"
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-white/80 text-sm font-medium mb-2 block">Aspect Ratio</label>
                    <Select>
                      <SelectTrigger className="glass-card border-white/20 text-white">
                        <SelectValue placeholder="Select ratio" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1:1">Square (1:1)</SelectItem>
                        <SelectItem value="16:9">Landscape (16:9)</SelectItem>
                        <SelectItem value="9:16">Portrait (9:16)</SelectItem>
                        <SelectItem value="4:3">Classic (4:3)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-white/80 text-sm font-medium mb-2 block">Resolution</label>
                    <Select>
                      <SelectTrigger className="glass-card border-white/20 text-white">
                        <SelectValue placeholder="Select resolution" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="512">512x512 (Fast)</SelectItem>
                        <SelectItem value="1024">1024x1024 (Standard)</SelectItem>
                        <SelectItem value="2048">2048x2048 (HD)</SelectItem>
                        <SelectItem value="4096">4096x4096 (Ultra HD)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button className="w-full glass-card border-white/20 text-white hover:bg-white/20 h-12 text-lg">
                  <Zap className="w-5 h-5 mr-2" />
                  Generate Image
                </Button>
              </CardContent>
            </Card>

            {/* Style Presets */}
            <Card className="glass-card border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Palette className="w-5 h-5" />
                  Style Presets
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {stylePresets.map((style) => (
                    <button
                      key={style.name}
                      onClick={() => setSelectedStyle(style.name)}
                      className={`p-4 rounded-[20px] text-left transition-all duration-200 ${
                        selectedStyle === style.name 
                          ? 'bg-white/20 border-2 border-white/40' 
                          : 'glass-card border border-white/20 hover:bg-white/10'
                      }`}
                    >
                      <div className="text-2xl mb-2">{style.icon}</div>
                      <h3 className="text-white font-medium text-sm">{style.name}</h3>
                      <p className="text-white/60 text-xs mt-1">{style.description}</p>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Settings & Recent */}
          <div className="space-y-6">
            <Card className="glass-card border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  Advanced Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="text-white/80 text-sm font-medium mb-3 block">
                    Quality: {quality[0]}%
                  </label>
                  <Slider
                    value={quality}
                    onValueChange={setQuality}
                    max={100}
                    step={10}
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label className="text-white/80 text-sm font-medium mb-3 block">
                    Creativity: {creativity[0]}%
                  </label>
                  <Slider
                    value={creativity}
                    onValueChange={setCreativity}
                    max={100}
                    step={10}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="text-white/80 text-sm font-medium mb-2 block">Model</label>
                  <Select>
                    <SelectTrigger className="glass-card border-white/20 text-white">
                      <SelectValue placeholder="Select model" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="flux-pro">Flux Pro (Premium)</SelectItem>
                      <SelectItem value="flux-dev">Flux Dev (Standard)</SelectItem>
                      <SelectItem value="dalle-3">DALL-E 3</SelectItem>
                      <SelectItem value="midjourney">Midjourney Style</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Image className="w-5 h-5" />
                  Recent Generations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {recentGenerations.map((image, index) => (
                    <div key={index} className="aspect-square rounded-[15px] overflow-hidden cursor-pointer hover:scale-105 transition-transform">
                      <img src={image} alt={`Recent generation ${index + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}