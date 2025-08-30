
import { ArrowRight, Plus, Lock } from "lucide-react";

interface ModelCardProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  isTrainYourOwn?: boolean;
  tags?: Array<{
    label: string;
    variant: 'blue' | 'green' | 'orange' | 'yellow';
  }>;
}

export const ModelCard = ({ 
  title, 
  subtitle, 
  imageSrc, 
  isTrainYourOwn = false,
  tags = []
}: ModelCardProps) => {
  return (
    <div className={`glass-card rounded-[25px] overflow-hidden flex flex-col relative hover:bg-white/10 transition-all duration-300 ${isTrainYourOwn ? 'border border-blue-500/30' : ''}`}>
      {isTrainYourOwn ? (
        <div className="flex-1 flex flex-col">
          <div className="h-[225px] flex items-center justify-center bg-blue-950/20 backdrop-blur-sm">
            <Plus size={50} className="text-blue-400" />
            {/* Lock icon in top right */}
            <div className="absolute top-3 right-3 bg-yellow-500/20 p-2 rounded-[12px] backdrop-blur-sm border border-yellow-400/30">
              <Lock size={20} className="text-yellow-400" />
            </div>
          </div>
          <div className="p-4 flex flex-col flex-grow">
            <h3 className="font-medium text-white text-xl">{title}</h3>
            <p className="text-sm text-gray-400 mt-1">{subtitle}</p>
          </div>
        </div>
      ) : (
        <div className="flex-1 flex flex-col">
          <div className="h-[225px]">
            <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
          </div>
          <div className="p-4 flex flex-col flex-grow">
            <h3 className="font-medium text-white text-xl">{title}</h3>
            <p className="text-sm text-gray-400 mt-1">{subtitle}</p>
            
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className={`px-3 py-1 rounded-[12px] text-xs font-medium backdrop-blur-sm
                      ${tag.variant === 'blue' ? 'bg-blue-500/20 text-blue-300 border border-blue-400/30' : ''}
                      ${tag.variant === 'green' ? 'bg-green-500/20 text-green-300 border border-green-400/30' : ''}
                      ${tag.variant === 'orange' ? 'bg-orange-500/20 text-orange-300 border border-orange-400/30' : ''}
                      ${tag.variant === 'yellow' ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-400/30' : ''}
                    `}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
      
      <div className="flex border-t border-white/15 divide-x divide-white/15">
        <button className="flex-1 py-3 text-white font-medium bg-blue-600/80 hover:bg-blue-600 transition-all duration-200 text-center backdrop-blur-sm">
          Create
        </button>
        <button className="flex-1 py-3 text-white font-medium hover:bg-white/10 transition-all duration-200 text-center backdrop-blur-sm">
          Gallery
        </button>
      </div>
    </div>
  );
};
