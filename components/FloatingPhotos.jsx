import React from "react";

const FloatingPhotos = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      
      {/* Card Pertama */}
      <div className="relative cursor-pointer [transform:perspective(800px)_rotateY(10deg)] hover:[transform:perspective(800px)_rotateY(-10deg)] w-52 h-52 bg-violet-300 rounded-lg shadow-lg group duration-300">
        <img
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-60 max-w-none duration-300 group-hover:scale-110" 
          src="/img/STYLE2.png"
          alt="Stylish person 1"
        />
      </div>

     
    </div>
  );
};

export default FloatingPhotos;
