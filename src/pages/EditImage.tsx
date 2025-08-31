import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Upload, Wand2, Download, RefreshCw, Layers, Brush } from "lucide-react";
import { useState } from "react";

const editModes = [
  { id: "inpaint", name: "Inpainting", description: "Remove or replace parts of the image", icon: Brush },
  { id: "extend", name: "Extend Image", description: "Expand the image beyond its borders", icon: Layers },
  { id: "upscale", name: "Upscale", description: "Increase image resolution", icon: RefreshCw },
  { id: "style", name: "Style Transfer", description: "Apply new artistic styles", icon: Wand2 }
];

const recentEdits = [
  { original: "/lovable-uploads/0c6db754-b805-46e5-a4b8-319a9d8fef71.png", edited: "/lovable-uploads/22f4141e-f83e-4b85-8c93-672e181d999b.png", type: "Style Transfer" },
  { original: "/lovable-uploads/739ab3ed-442e-42fb-9219-25ee697b73ba.png", edited: "/lovable-uploads/8827d443-a68b-4bd9-998f-3c4c410510e9.png", type: "Inpainting" },
  { original: "/lovable-uploads/92333427-5a32-4cf8-b110-afc5b57c9f27.png", edited: "/lovable-uploads/a3dc041f-fb55-4108-807b-ca52164461d8.png", type: "Upscale" },
  { original: "/lovable-uploads/b67f802d-430a-4e5a-8755-b61e10470d58.png", edited: "/lovable-uploads/b89881e6-12b4-4527-9c22-1052b8116ca9.png", type: "Extend" }
];

export default function EditImage() {
  const [selectedMode, setSelectedMode] = useState("inpaint");
  const [editPrompt, setEditPrompt] = useState("");
  const [strength, setStrength] = useState([75]);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen glass-bg p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent mb-2">
              Edit Image
            </h1>
            <p className="text-white/70">Transform and enhance your images with AI</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Editing Panel */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Upload */}
            <Card className="glass-card border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Upload className="w-5 h-5" />
                  Upload Image
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-white/30 rounded-[20px] p-8 text-center hover:border-white/50 transition-colors cursor-pointer">
                  {uploadedImage ? (
                    <div className="aspect-video max-w-md mx-auto">
                      <img src={uploadedImage} alt="Uploaded" className="w-full h-full object-contain rounded-[15px]" />
                    </div>
                  ) : (
                    <div>
                      <Upload className="w-12 h-12 text-white/50 mx-auto mb-4" />
                      <p className="text-white/70 mb-2">Drop your image here or click to browse</p>
                      <p className="text-white/50 text-sm">Supports JPG, PNG, WebP up to 10MB</p>
                      <Button variant="outline" className="mt-4 border-white/20 text-white hover:bg-white/20">
                        Choose File
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Edit Modes */}
            <Card className="glass-card border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Edit Mode</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {editModes.map((mode) => (
                    <button
                      key={mode.id}
                      onClick={() => setSelectedMode(mode.id)}
                      className={`p-4 rounded-[20px] text-left transition-all duration-200 ${
                        selectedMode === mode.id 
                          ? 'bg-white/20 border-2 border-white/40' 
                          : 'glass-card border border-white/20 hover:bg-white/10'
                      }`}
                    >
                      <mode.icon className="w-6 h-6 text-white mb-2" />
                      <h3 className="text-white font-medium">{mode.name}</h3>
                      <p className="text-white/60 text-sm mt-1">{mode.description}</p>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Edit Prompt */}
            <Card className="glass-card border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Wand2 className="w-5 h-5" />
                  Edit Instructions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  placeholder="Describe what you want to change... (e.g., 'Change the sky to a sunset', 'Remove the person in the background')"
                  value={editPrompt}
                  onChange={(e) => setEditPrompt(e.target.value)}
                  className="min-h-24 glass-card border-white/20 text-white placeholder:text-white/50 resize-none"
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-white/80 text-sm font-medium mb-3 block">
                      Edit Strength: {strength[0]}%
                    </label>
                    <Slider
                      value={strength}
                      onValueChange={setStrength}
                      max={100}
                      step={5}
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label className="text-white/80 text-sm font-medium mb-2 block">Quality</label>
                    <Select>
                      <SelectTrigger className="glass-card border-white/20 text-white">
                        <SelectValue placeholder="Select quality" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="draft">Draft (Fast)</SelectItem>
                        <SelectItem value="standard">Standard</SelectItem>
                        <SelectItem value="high">High Quality</SelectItem>
                        <SelectItem value="ultra">Ultra HD</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button className="w-full glass-card border-white/20 text-white hover:bg-white/20 h-12 text-lg">
                  <Wand2 className="w-5 h-5 mr-2" />
                  Apply Edit
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Recent Edits */}
          <div className="space-y-6">
            <Card className="glass-card border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Recent Edits</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentEdits.map((edit, index) => (
                  <div key={index} className="glass-card border-white/20 p-4 rounded-[20px]">
                    <div className="flex gap-3 mb-3">
                      <div className="flex-1">
                        <div className="aspect-square rounded-[10px] overflow-hidden">
                          <img src={edit.original} alt="Original" className="w-full h-full object-cover" />
                        </div>
                        <p className="text-white/60 text-xs mt-1 text-center">Original</p>
                      </div>
                      <div className="flex items-center justify-center">
                        <RefreshCw className="w-4 h-4 text-white/50" />
                      </div>
                      <div className="flex-1">
                        <div className="aspect-square rounded-[10px] overflow-hidden">
                          <img src={edit.edited} alt="Edited" className="w-full h-full object-cover" />
                        </div>
                        <p className="text-white/60 text-xs mt-1 text-center">Edited</p>
                      </div>
                    </div>
                    
                    <Badge variant="outline" className="border-white/20 text-white/80 text-xs">
                      {edit.type}
                    </Badge>
                    
                    <div className="flex gap-2 mt-3">
                      <Button size="sm" variant="outline" className="flex-1 border-white/20 text-white hover:bg-white/20 text-xs">
                        Reuse
                      </Button>
                      <Button size="sm" className="flex-1 glass-card border-white/20 text-white hover:bg-white/20 text-xs">
                        <Download className="w-3 h-3 mr-1" />
                        Save
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}