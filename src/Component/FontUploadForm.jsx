import React, { useState } from "react";

const FontUploader = () => {
  const [fontFile, setFontFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    const extention = file.name.split('.')
    if (file && extention[1] === "ttf") {
      const formData = new FormData();
      formData.append('fontFile', file);
      console.log(formData);

      setFontFile(file);
      setErrorMessage("");
    } else {
      setFontFile(null);
      setErrorMessage("Only .ttf files are allowed!");
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const data = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'Editor' },

  ];

  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-col items-center justify-center h-40 border-2 border-dashed border-gray-400 rounded-lg text-gray-500 cursor-pointer"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {fontFile ? (
          <p className="text-green-500">Font file: {fontFile.name}</p>
        ) : (
          <p>Drag & Drop .ttf file here</p>
        )}
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      </div>
      <div className="overflow-x-auto my-5">
        <b>Our Fonts </b>
        <p className="text-sm text-gray-400 my-2">Browse a list of Zepto fonts to build yur font group </p>
        <table className="min-w-full bg-white border my-2 border-gray-200 rounded-lg shadow-md">
          <thead className="bg-gray-100 text-gray-600 uppercase text-sm">
            <tr className="text-left">
              <th className="py-3 px-4 border-b">Font Name</th>
              <th className="py-3 px-4 border-b">Preview</th>
              <th className="py-3 px-4 border-b">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm">
            {data.map((item,index) => (
              <tr key={index} className="hover:bg-zinc-50">
                <td className="py-3 px-4 border-b">{item.name}</td>
                <td className="py-3 px-4 border-b">
                  Example Style
                </td>
                <td className="py-3 px-4 border-b text-red-600">Delete</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  );
};

export default FontUploader;
