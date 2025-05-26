import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { healthItems } from '../../data/mockData';
import { cn } from '../../lib/utils';

const CDN_IMAGE_URL = 'https://upload.wikimedia.org/wikipedia/commons/1/13/Muscular_system.svg';

export function HealthStatus({ className }) {
  const [selectedBodyPart, setSelectedBodyPart] = useState(null);
  const [imageError, setImageError] = useState(false);

  return (
    <div className={cn("bg-white rounded-lg shadow-card p-4 flex flex-col md:flex-row gap-4 w-full", className)}>
      <div className="w-full md:w-1/2 relative flex items-center justify-center min-h-[300px] md:min-h-[500px] bg-gray-50 rounded-lg overflow-hidden">
        <img
          src={CDN_IMAGE_URL}
          alt="Detailed muscular human body anatomy"
          className="w-full h-full object-contain p-4"
          onError={() => setImageError(true)}
        />
        
        {imageError && (
          <div className="absolute inset-0 flex items-center justify-center bg-white p-4">
            <span className="text-gray-500">Image failed to load</span>
          </div>
        )}

        {healthItems.map((item, index) => (
          <HealthIndicator
            key={index}
            item={item}
            position={getPositionForPart(item.title)}
            isSelected={selectedBodyPart === item.title}
            onClick={() => setSelectedBodyPart(item.title)}
          />
        ))}

        <button 
          className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors z-10"
          aria-label="Search body parts"
        >
          <Search className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      <div className="w-full md:w-1/2 space-y-3">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Muscle Health Status</h2>
        {healthItems.map((item, index) => (
          <HealthDetail 
            key={index} 
            item={item} 
            isSelected={selectedBodyPart === item.title}
            onClick={() => setSelectedBodyPart(item.title)}
          />
        ))}
      </div>
    </div>
  );
}

function HealthIndicator({ item, position, isSelected, onClick }) {
  return (
    <button
      className={cn(
        "absolute transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2",
        "rounded-full p-2 shadow-md hover:scale-110 z-20",
        isSelected ? "bg-blue-600 text-white" : "bg-white text-gray-800 border border-gray-200"
      )}
      style={{ 
        top: position.top, 
        left: position.left,
        transform: isSelected ? 'translate(-50%, -50%) scale(1.1)' : 'translate(-50%, -50%)'
      }}
      onClick={onClick}
      aria-label={`Select ${item.title}`}
    >
      <item.icon className={cn("w-5 h-5", isSelected ? "text-white" : item.color)} />
      
      {isSelected && (
        <span className="absolute whitespace-nowrap text-xs font-medium bg-blue-600 text-white px-2 py-1 rounded-full -translate-y-full -translate-x-1/4 -mt-1 shadow-sm">
          {item.title}
        </span>
      )}
    </button>
  );
}

function HealthDetail({ item, isSelected, onClick }) {
  return (
    <div 
      className={cn(
        "p-3 rounded-lg cursor-pointer transition-all border-2",
        isSelected 
          ? "bg-blue-50 border-blue-300 shadow-sm" 
          : "bg-white border-gray-100 hover:bg-gray-50"
      )}
      onClick={onClick}
    >
      <div className="flex items-center gap-3 mb-2">
        <div className={cn(
          "p-2 rounded-full shadow-sm border",
          isSelected ? "bg-blue-100 border-blue-200" : "bg-gray-100 border-gray-200"
        )}>
          <item.icon className={cn("w-5 h-5", item.color)} />
        </div>
        <div className="flex-1">
          <h3 className="font-medium text-gray-900">{item.title}</h3>
          <p className="text-xs text-gray-500">Last examined: {item.date}</p>
        </div>
      </div>
      
      <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className={cn(
            "h-full rounded-full transition-all duration-500",
            getStatusColor(item.status)
          )}
          style={{ width: `${item.status}%` }}
        />
      </div>
      <div className="flex justify-between mt-1 text-xs text-gray-500">
        <span>0%</span>
        <span>100%</span>
      </div>
    </div>
  );
}

function getPositionForPart(part) {
  const positions = {
    'Chest': { top: '30%', left: '50%' },
    'Biceps': { top: '35%', left: '25%' },
    'Triceps': { top: '35%', left: '75%' },
    'Abs': { top: '45%', left: '50%' },
    'Quads': { top: '65%', left: '40%' },
    'Hamstrings': { top: '70%', left: '60%' },
    'Calves': { top: '85%', left: '50%' },
    'Back': { top: '40%', left: '50%' },
    'Shoulders': { top: '25%', left: '50%' }
  };
  return positions[part] || { top: '50%', left: '50%' };
}

function getStatusColor(status) {
  if (status >= 80) return 'bg-green-500';
  if (status >= 60) return 'bg-blue-500';
  if (status >= 40) return 'bg-yellow-500';
  if (status >= 20) return 'bg-orange-500';
  return 'bg-red-500';
}

export default HealthStatus;