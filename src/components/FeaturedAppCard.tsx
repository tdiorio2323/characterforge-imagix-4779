
import { ArrowRight, Play } from "lucide-react";

interface FeaturedAppCardProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  isNew?: boolean;
}

export const FeaturedAppCard = ({ title, subtitle, imageSrc, isNew = false }: FeaturedAppCardProps) => {
  return (
    <div className="feature-card glass-card rounded-[25px] overflow-hidden flex flex-col hover:bg-white/10 transition-all duration-300">
      <div className="relative">
        <img src={imageSrc} alt={title} className="w-full h-40 object-cover" />
        {isNew && (
          <span className="absolute top-3 right-3 bg-green-600/80 text-white text-[10px] px-2 py-0.5 rounded-[8px] font-bold backdrop-blur-sm">
            New
          </span>
        )}
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-medium text-white">{title}</h3>
        <p className="text-sm text-gray-400 mt-1">{subtitle}</p>
        
        <div className="mt-auto pt-4 flex justify-end">
          <button className="run-button bg-blue-600/80 text-white px-4 py-1.5 rounded-[12px] flex items-center justify-center gap-1.5 text-sm font-medium hover:bg-blue-600 transition-all duration-200 backdrop-blur-sm">
            <Play size={14} className="fill-white" />
            <span>Run</span>
          </button>
        </div>
      </div>
    </div>
  );
};
