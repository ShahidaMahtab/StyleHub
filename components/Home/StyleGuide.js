import React from "react";

export default function StyleGuide() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-gray-200 p-4 flex flex-col items-center justify-center">
        <img src="path_to_image.jpg" alt="Image" className="w-full" />
        <button className="hover:cursor-pointer">Style Guide</button>
      </div>
      <div className="bg-gray-200 p-4 flex flex-col items-center justify-center">
        <img src="path_to_image.jpg" alt="Image" className="w-full" />
        <button className="hover:cursor-pointer">Style Guide</button>
      </div>
    </div>
  );
}
