import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Plus, Clock, Eye, Download } from "lucide-react";

const mockVideos = [
  {
    id: 1,
    title: "Epic Fantasy Battle Scene",
    thumbnail: "/lovable-uploads/12cd0679-f352-498e-a6ad-9faaa1ffbec9.png",
    duration: "2:45",
    views: 15420,
    downloads: 847,
    category: "Fantasy",
    status: "Completed",
    createdAt: "2 days ago"
  },
  {
    id: 2,
    title: "Cyberpunk City Flythrough", 
    thumbnail: "/lovable-uploads/142dea30-a410-4e79-84d0-70189e8fcd07.png",
    duration: "1:32",
    views: 9876,
    downloads: 523,
    category: "Sci-Fi",
    status: "Processing",
    createdAt: "1 day ago"
  },
  {
    id: 3,
    title: "Character Animation Demo",
    thumbnail: "/lovable-uploads/4255fa40-8036-4424-a210-e3bcd99754df.png", 
    duration: "0:58",
    views: 7234,
    downloads: 412,
    category: "Animation",
    status: "Completed",
    createdAt: "3 days ago"
  },
  {
    id: 4,
    title: "Nature Landscape Timelapse",
    thumbnail: "/lovable-uploads/92333427-5a32-4cf8-b110-afc5b57c9f27.png",
    duration: "3:21",
    views: 12843,
    downloads: 691,
    category: "Nature",
    status: "Completed", 
    createdAt: "5 days ago"
  },
  {
    id: 5,
    title: "Abstract Motion Graphics",
    thumbnail: "/lovable-uploads/a3dc041f-fb55-4108-807b-ca52164461d8.png",
    duration: "1:47",
    views: 5632,
    downloads: 298,
    category: "Abstract",
    status: "Rendering",
    createdAt: "6 hours ago"
  },
  {
    id: 6,
    title: "Portrait Study Collection",
    thumbnail: "/lovable-uploads/b67f802d-430a-4e5a-8755-b61e10470d58.png",
    duration: "2:14",
    views: 8901,
    downloads: 445,
    category: "Portrait",
    status: "Completed",
    createdAt: "1 week ago"
  }
];

export default function Videos() {
  return (
    <div className="min-h-screen glass-bg p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent mb-2">
              Videos
            </h1>
            <p className="text-white/70">AI-generated video content and animations</p>
          </div>
          <Button className="glass-card border-white/20 text-white hover:bg-white/20">
            <Plus className="w-4 h-4 mr-2" />
            Create Video
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockVideos.map((video) => (
            <Card key={video.id} className="glass-card border-white/20 hover:border-white/40 transition-all duration-300 group">
              <CardContent className="p-0">
                <div className="relative aspect-video overflow-hidden rounded-t-[25px]">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button size="lg" className="rounded-full bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30">
                      <Play className="w-6 h-6" />
                    </Button>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {video.duration}
                  </div>
                  <Badge 
                    variant={video.status === 'Completed' ? 'default' : video.status === 'Processing' ? 'secondary' : 'outline'}
                    className="absolute top-2 left-2 glass-card border-white/20"
                  >
                    {video.status}
                  </Badge>
                </div>
                
                <div className="p-4">
                  <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2">{video.title}</h3>
                  
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="border-white/20 text-white/80">
                      {video.category}
                    </Badge>
                    <span className="text-white/60 text-sm">{video.createdAt}</span>
                  </div>

                  <div className="flex items-center justify-between text-sm text-white/70 mb-4">
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {video.views.toLocaleString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Download className="w-4 h-4" />
                      {video.downloads}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1 border-white/20 text-white hover:bg-white/20">
                      <Play className="w-4 h-4 mr-1" />
                      Play
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
      </div>
    </div>
  );
}