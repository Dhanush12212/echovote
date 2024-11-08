import React, { useState } from 'react';

function AddSongs({ songs }) {
  return (
    <div className="flex flex-col items-center gap-4">
      {songs.map((song, index) => (
        <SongVote key={index} song={song} />
      ))}
    </div>
  );
}

function SongVote({ song }) {
  const [count, setCount] = useState(0);

  const handleDelete = () => setCount( );
  const handleAdd = () => setCount();

  return (
    <div className="min-w-[300px] w-[800px] h-24 rounded-2xl flex items-center justify-center px-10 gap-6 relative scroll-container" style={{backdropFilter:'blur(1000px)'}}>
      {/* Thumbnail */}
      <div className="w-20 h-20 rounded-xl"></div>

      {/* Song Details */}  
      <div className="flex-1 mx-6">
        <h1 className="text-lg font-semibold">{song.name}</h1>
        <a href={song.url} className="underline">{song.url}</a>
      </div>

      {/* Add and Delete Songs Buttons */}
      <div className="flex items-center gap-2">
      
        <button
          onClick={handleDelete}
          className="bg-gray-500 w-16 h-12 rounded flex items-center justify-center text-lg font-bold "
        >
          <ion-icon name="trash-outline"></ion-icon>
        </button> 
      </div>
    </div>
  );
}

export default AddSongs;
