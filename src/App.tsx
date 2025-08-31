import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Characters from "./pages/Characters";
import Videos from "./pages/Videos";
import CreateImage from "./pages/CreateImage";
import EditImage from "./pages/EditImage";
import StylePalettes from "./pages/StylePalettes";
import Models from "./pages/Models";
import Apps from "./pages/Apps";
import CommunityFeed from "./pages/CommunityFeed";
import ComfyUIWorkflows from "./pages/ComfyUIWorkflows";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/create-image" element={<CreateImage />} />
          <Route path="/edit-image" element={<EditImage />} />
          <Route path="/style-palettes" element={<StylePalettes />} />
          <Route path="/models" element={<Models />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/community-feed" element={<CommunityFeed />} />
          <Route path="/comfyui-workflows" element={<ComfyUIWorkflows />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
