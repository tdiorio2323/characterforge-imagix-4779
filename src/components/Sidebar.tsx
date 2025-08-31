
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ChevronRight, HomeIcon, Users, Video, Image, Edit, Palette, Grid, LayoutGrid, Rss, Code, ChevronDown, BookOpen, HelpCircle, Sparkles, Palette as ThemeIcon, Newspaper, Clock, Bookmark, Heart, Album, Boxes } from "lucide-react";

type SidebarItemProps = {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  isNew?: boolean;
  hasDropdown?: boolean;
  onClick?: () => void;
};

type DropdownItemProps = {
  icon: React.ReactNode;
  label: string;
  isExternal?: boolean;
  isActive?: boolean;
  onClick?: () => void;
};

const SidebarItem = ({ icon, label, isActive = false, isNew = false, hasDropdown = false, onClick }: SidebarItemProps) => (
  <button 
    className={`w-full flex items-center gap-3 p-3 rounded-[15px] transition-all duration-200 backdrop-blur-sm ${isActive ? 'bg-white/15 border border-white/20' : 'hover:bg-white/10'}`}
    onClick={onClick}
  >
    <div className={isActive ? "text-white" : "text-gray-300"}>{icon}</div>
    <span className="text-white text-sm font-medium flex-1 text-left">{label}</span>
    {isNew && (
      <span className="bg-green-500/80 text-white text-[10px] px-1.5 py-0.5 rounded-[8px] font-bold backdrop-blur-sm">
        NEW
      </span>
    )}
    {hasDropdown && (
      isActive ? <ChevronDown size={16} className="text-gray-300" /> : <ChevronRight size={16} className="text-gray-300" />
    )}
  </button>
);

const DropdownItem = ({ icon, label, isExternal = false, isActive = false, onClick }: DropdownItemProps) => (
  <button 
    className={`w-full flex items-center gap-3 p-3 pl-12 hover:bg-white/10 rounded-[15px] transition-all duration-200 backdrop-blur-sm ${isActive ? 'bg-white/15 border border-white/20' : ''}`}
    onClick={onClick}
  >
    <div className={isActive ? "text-white" : "text-gray-300"}>{icon}</div>
    <span className={`text-sm ${isActive ? "text-white" : "text-gray-300"}`}>{label}</span>
    {isExternal && <span className="ml-2 px-1 bg-white/10 rounded-[6px] text-[10px] text-gray-300 backdrop-blur-sm">↗</span>}
  </button>
);

export const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [myStuffOpen, setMyStuffOpen] = useState(false);
  const [activeDropdownItem, setActiveDropdownItem] = useState("");
  
  const getActiveItem = () => {
    const path = location.pathname;
    if (path === "/") return "Home";
    if (path === "/characters") return "Characters";
    if (path === "/videos") return "Videos";
    if (path === "/create-image") return "Create Image";
    if (path === "/edit-image") return "Edit Image";
    if (path === "/style-palettes") return "Style Palettes";
    if (path === "/models") return "Models";
    if (path === "/apps") return "Apps";
    if (path === "/community-feed") return "Community Feed";
    if (path === "/comfyui-workflows") return "ComfyUI Workflows";
    return "Home";
  };

  const handleNavigation = (item: string, path: string) => {
    navigate(path);
  };

  if (isCollapsed) {
    return (
      <div className="w-16 bg-sidebar min-h-screen flex flex-col items-center py-4 border-r border-gray-800">
        <div className="mb-8">
          <img src="/lovable-uploads/407e5ec8-9b67-42ee-acf0-b238e194aa64.png" alt="Logo" className="w-8 h-8" />
        </div>
        <button
          onClick={() => setIsCollapsed(false)}
          className="absolute left-16 top-1/2 -translate-y-1/2 bg-gray-800 rounded-full p-1 text-white hover:bg-gray-700 transition-colors"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    );
  }

  return (
    <div className="w-[232px] glass-sidebar min-h-screen flex flex-col">
      <div className="flex items-center justify-between p-4 border-b border-white/15">
        <div className="flex items-center gap-2">
          <img src="/lovable-uploads/407e5ec8-9b67-42ee-acf0-b238e194aa64.png" alt="Logo" className="w-8 h-8" />
          <span className="text-white font-semibold">TD Studios</span>
        </div>
        <button
          onClick={() => setIsCollapsed(true)}
          className="text-gray-400 hover:text-white transition-colors p-1 rounded-[8px] hover:bg-white/10 backdrop-blur-sm"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      <div className="py-2 px-3 flex flex-col gap-1">
        <SidebarItem 
          icon={<HomeIcon size={20} />} 
          label="Home" 
          isActive={getActiveItem() === "Home"}
          onClick={() => handleNavigation("Home", "/")}
        />
        <SidebarItem 
          icon={<Users size={20} />} 
          label="Characters" 
          isNew 
          isActive={getActiveItem() === "Characters"}
          onClick={() => handleNavigation("Characters", "/characters")}
        />
        <SidebarItem 
          icon={<Video size={20} />} 
          label="Videos" 
          isActive={getActiveItem() === "Videos"}
          onClick={() => handleNavigation("Videos", "/videos")}
        />
        <SidebarItem 
          icon={<Image size={20} />} 
          label="Create Image" 
          isActive={getActiveItem() === "Create Image"}
          onClick={() => handleNavigation("Create Image", "/create-image")}
        />
        <SidebarItem 
          icon={<Edit size={20} />} 
          label="Edit Image" 
          isActive={getActiveItem() === "Edit Image"}
          onClick={() => handleNavigation("Edit Image", "/edit-image")}
        />
        <SidebarItem 
          icon={<Palette size={20} />} 
          label="Style Palettes" 
          isActive={getActiveItem() === "Style Palettes"}
          onClick={() => handleNavigation("Style Palettes", "/style-palettes")}
        />
        <SidebarItem 
          icon={<Grid size={20} />} 
          label="Models" 
          isActive={getActiveItem() === "Models"}
          onClick={() => handleNavigation("Models", "/models")}
        />
        <SidebarItem 
          icon={<LayoutGrid size={20} />} 
          label="Apps" 
          isActive={getActiveItem() === "Apps"}
          onClick={() => handleNavigation("Apps", "/apps")}
        />
        <SidebarItem 
          icon={<Rss size={20} />} 
          label="Community Feed" 
          isActive={getActiveItem() === "Community Feed"}
          onClick={() => handleNavigation("Community Feed", "/community-feed")}
        />
        <SidebarItem 
          icon={<Code size={20} />} 
          label="ComfyUI Workflows" 
          isActive={getActiveItem() === "ComfyUI Workflows"}
          onClick={() => handleNavigation("ComfyUI Workflows", "/comfyui-workflows")}
        />
      </div>

      <div className="flex-grow overflow-auto">
        <div className="py-2 px-3">
          <SidebarItem 
            icon={myStuffOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            label="My stuff" 
            isActive={false}
            hasDropdown
            onClick={() => setMyStuffOpen(!myStuffOpen)}
          />

          {myStuffOpen && (
            <div className="mt-1 space-y-1 animate-fade-in">
              <DropdownItem 
                icon={<Clock size={16} />} 
                label="Creation History" 
                isActive={activeDropdownItem === "Creation History"}
                onClick={() => setActiveDropdownItem("Creation History")}
              />
              <DropdownItem 
                icon={<Bookmark size={16} />} 
                label="Bookmarks" 
                isActive={activeDropdownItem === "Bookmarks"}
                onClick={() => setActiveDropdownItem("Bookmarks")}
              />
              <DropdownItem 
                icon={<Heart size={16} />} 
                label="Liked" 
                isActive={activeDropdownItem === "Liked"}
                onClick={() => setActiveDropdownItem("Liked")}
              />
              <DropdownItem 
                icon={<Album size={16} />} 
                label="Saved Albums" 
                isActive={activeDropdownItem === "Saved Albums"}
                onClick={() => setActiveDropdownItem("Saved Albums")}
              />
              <DropdownItem 
                icon={<Boxes size={16} />} 
                label="Trained Models" 
                isActive={activeDropdownItem === "Trained Models"}
                onClick={() => setActiveDropdownItem("Trained Models")}
              />
            </div>
          )}
        </div>

        <div className="py-2 px-3">
          <SidebarItem 
            icon={resourcesOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            label="Resources" 
            hasDropdown
            isActive={false}
            onClick={() => setResourcesOpen(!resourcesOpen)}
          />
          
          {resourcesOpen && (
            <div className="mt-1 space-y-1 animate-fade-in">
              <DropdownItem 
                icon={<BookOpen size={16} />} 
                label="Tutorials" 
                isActive={activeDropdownItem === "Tutorials"}
                onClick={() => setActiveDropdownItem("Tutorials")}
              />
              <DropdownItem 
                icon={<HelpCircle size={16} />} 
                label="Wiki" 
                isExternal 
                isActive={activeDropdownItem === "Wiki"}
                onClick={() => setActiveDropdownItem("Wiki")}
              />
              <DropdownItem 
                icon={<HelpCircle size={16} />} 
                label="Help Center" 
                isActive={activeDropdownItem === "Help Center"}
                onClick={() => setActiveDropdownItem("Help Center")}
              />
              <DropdownItem 
                icon={<Sparkles size={16} />} 
                label="What's New" 
                isActive={activeDropdownItem === "What's New"}
                onClick={() => setActiveDropdownItem("What's New")}
              />
              <DropdownItem 
                icon={<ThemeIcon size={16} />} 
                label="Theme Gallery" 
                isActive={activeDropdownItem === "Theme Gallery"}
                onClick={() => setActiveDropdownItem("Theme Gallery")}
              />
              <DropdownItem 
                icon={<Newspaper size={16} />} 
                label="Blog" 
                isExternal 
                isActive={activeDropdownItem === "Blog"}
                onClick={() => setActiveDropdownItem("Blog")}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
