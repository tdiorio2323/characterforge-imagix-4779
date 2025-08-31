import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal, TrendingUp, Clock } from "lucide-react";

const mockPosts = [
  {
    id: 1,
    author: {
      name: "Sarah Chen",
      username: "@sarahc_art",
      avatar: "/lovable-uploads/0c6db754-b805-46e5-a4b8-319a9d8fef71.png"
    },
    content: "Just finished this cyberpunk portrait using the new Flux Pro model! The detail is incredible 🔥",
    image: "/lovable-uploads/22f4141e-f83e-4b85-8c93-672e181d999b.png",
    likes: 234,
    comments: 18,
    shares: 7,
    timeAgo: "2h",
    tags: ["#cyberpunk", "#portrait", "#fluxpro"]
  },
  {
    id: 2,
    author: {
      name: "Marcus Rivera",
      username: "@mrivera_3d",
      avatar: "/lovable-uploads/739ab3ed-442e-42fb-9219-25ee697b73ba.png"
    },
    content: "Experimenting with style transfer on landscape photography. This dreamy watercolor effect turned out amazing! 🎨",
    image: "/lovable-uploads/8827d443-a68b-4bd9-998f-3c4c410510e9.png",
    likes: 156,
    comments: 12,
    shares: 23,
    timeAgo: "4h",
    tags: ["#landscape", "#watercolor", "#styletransfer"]
  },
  {
    id: 3,
    author: {
      name: "Alex Thompson",
      username: "@alexthompson",
      avatar: "/lovable-uploads/92333427-5a32-4cf8-b110-afc5b57c9f27.png"
    },
    content: "Created an entire character collection for my game project. The consistency across different poses is mind-blowing! 🎮",
    image: "/lovable-uploads/a3dc041f-fb55-4108-807b-ca52164461d8.png",
    likes: 389,
    comments: 45,
    shares: 12,
    timeAgo: "6h",
    tags: ["#gamedev", "#characters", "#consistency"]
  },
  {
    id: 4,
    author: {
      name: "Luna Star",
      username: "@lunastar_ai",
      avatar: "/lovable-uploads/b67f802d-430a-4e5a-8755-b61e10470d58.png"
    },
    content: "Tutorial: How to create ethereal fantasy scenes with proper lighting. Link in bio! ✨",
    image: "/lovable-uploads/b89881e6-12b4-4527-9c22-1052b8116ca9.png",
    likes: 512,
    comments: 67,
    shares: 89,
    timeAgo: "8h",
    tags: ["#tutorial", "#fantasy", "#lighting"]
  },
  {
    id: 5,
    author: {
      name: "David Kim",
      username: "@davidkim_art",
      avatar: "/lovable-uploads/d16f3783-6af1-4327-8936-c5a50eb0cab5.png"
    },
    content: "Working on a series of abstract compositions. The AI really understands color harmony! 🌈",
    image: "/lovable-uploads/d8b5e246-d962-466e-ad7d-61985e448fb9.png",
    likes: 201,
    comments: 24,
    shares: 15,
    timeAgo: "12h",
    tags: ["#abstract", "#colors", "#composition"]
  }
];

const trendingTopics = [
  { tag: "#FluxPro", posts: "2.3K posts" },
  { tag: "#CyberpunkArt", posts: "1.8K posts" },
  { tag: "#AIPortraits", posts: "4.1K posts" },
  { tag: "#StyleTransfer", posts: "891 posts" },
  { tag: "#GameDev", posts: "1.2K posts" }
];

export default function CommunityFeed() {
  return (
    <div className="min-h-screen glass-bg p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent mb-2">
              Community Feed
            </h1>
            <p className="text-white/70">Discover amazing creations from the community</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Feed */}
          <div className="lg:col-span-3 space-y-6">
            {mockPosts.map((post) => (
              <Card key={post.id} className="glass-card border-white/20">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={post.author.avatar} />
                        <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-white font-medium">{post.author.name}</h3>
                        <p className="text-white/60 text-sm">{post.author.username} • {post.timeAgo}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-white/60 hover:text-white hover:bg-white/10">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-white">{post.content}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-blue-400 text-sm hover:text-blue-300 cursor-pointer">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="aspect-video rounded-[20px] overflow-hidden">
                    <img 
                      src={post.image} 
                      alt="Post content"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-6">
                      <Button variant="ghost" size="sm" className="text-white/70 hover:text-red-400 hover:bg-white/10 p-2">
                        <Heart className="w-5 h-5 mr-2" />
                        {post.likes}
                      </Button>
                      <Button variant="ghost" size="sm" className="text-white/70 hover:text-blue-400 hover:bg-white/10 p-2">
                        <MessageCircle className="w-5 h-5 mr-2" />
                        {post.comments}
                      </Button>
                      <Button variant="ghost" size="sm" className="text-white/70 hover:text-green-400 hover:bg-white/10 p-2">
                        <Share2 className="w-5 h-5 mr-2" />
                        {post.shares}
                      </Button>
                    </div>
                    <Button variant="ghost" size="sm" className="text-white/70 hover:text-yellow-400 hover:bg-white/10 p-2">
                      <Bookmark className="w-5 h-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Trending Topics */}
            <Card className="glass-card border-white/20">
              <CardHeader>
                <h3 className="text-white font-semibold flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Trending
                </h3>
              </CardHeader>
              <CardContent className="space-y-3">
                {trendingTopics.map((topic, index) => (
                  <div key={index} className="flex items-center justify-between hover:bg-white/10 p-2 rounded-[10px] cursor-pointer transition-colors">
                    <div>
                      <p className="text-blue-400 font-medium">{topic.tag}</p>
                      <p className="text-white/60 text-sm">{topic.posts}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="glass-card border-white/20">
              <CardHeader>
                <h3 className="text-white font-semibold flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Recent Activity
                </h3>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-3">
                  <div className="text-sm">
                    <span className="text-white">Sarah Chen</span>
                    <span className="text-white/60"> liked your post</span>
                    <p className="text-white/50 text-xs mt-1">2 minutes ago</p>
                  </div>
                  <div className="text-sm">
                    <span className="text-white">Marcus Rivera</span>
                    <span className="text-white/60"> started following you</span>
                    <p className="text-white/50 text-xs mt-1">15 minutes ago</p>
                  </div>
                  <div className="text-sm">
                    <span className="text-white">Alex Thompson</span>
                    <span className="text-white/60"> commented on your post</span>
                    <p className="text-white/50 text-xs mt-1">1 hour ago</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="glass-card border-white/20">
              <CardContent className="p-4">
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-white">1.2K</div>
                  <div className="text-white/70 text-sm">Followers</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}