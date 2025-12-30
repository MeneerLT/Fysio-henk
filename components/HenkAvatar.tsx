import React, { useState, useEffect } from 'react';

interface HenkAvatarProps {
  className?: string;
  imgClassName?: string;
}

// De officiële Fysio Henk robot afbeelding
const HENK_URL = "https://firebasestorage.googleapis.com/v0/b/clapy-7f287.appspot.com/o/processed_images%2F09a96e9f0d78c3c138887413b5ef21e428587d19.png?alt=media&token=86795498-8e67-4f6c-847e-89a194539655";

export const HenkAvatar: React.FC<HenkAvatarProps> = ({ className = "", imgClassName = "" }) => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Als de URL verandert of we een error hadden, proberen we het opnieuw
  useEffect(() => {
    setError(false);
    setIsLoading(true);
  }, []);

  return (
    <div className={`relative flex items-center justify-center overflow-hidden rounded-full bg-white border-2 border-[#ef5a24] shadow-md transition-all duration-300 ${className}`}>
      {!error ? (
        <img 
          src={HENK_URL} 
          alt="Fysio Henk" 
          onLoad={() => setIsLoading(false)}
          onError={() => {
            console.error("Fysio Henk afbeelding kon niet geladen worden.");
            setError(true);
            setIsLoading(false);
          }}
          className={`w-full h-full object-contain scale-125 translate-y-1.5 transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'} ${imgClassName}`}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-slate-50">
          <svg 
            viewBox="0 0 100 100" 
            className="w-2/3 h-2/3 text-[#ef5a24]" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Gedetailleerde Robot Fallback */}
            <rect x="20" y="30" width="60" height="45" rx="10" stroke="currentColor" strokeWidth="4" />
            <circle cx="38" cy="50" r="5" fill="currentColor" />
            <circle cx="62" cy="50" r="5" fill="currentColor" />
            <path d="M40 62H60" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            <line x1="50" y1="30" x2="50" y2="15" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            <circle cx="50" cy="15" r="5" fill="currentColor" />
            <rect x="15" y="45" width="5" height="15" rx="2" fill="currentColor" />
            <rect x="80" y="45" width="5" height="15" rx="2" fill="currentColor" />
          </svg>
        </div>
      )}
      
      {isLoading && !error && (
        <div className="absolute inset-0 bg-slate-100 animate-pulse flex items-center justify-center">
          <div className="w-4 h-4 bg-[#ef5a24] rounded-full animate-ping"></div>
        </div>
      )}
    </div>
  );
};