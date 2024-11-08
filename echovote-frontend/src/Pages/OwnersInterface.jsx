import React, { useState } from 'react';  
import CurrentSong from '../Components/CurrentSong';  
import { assets } from '../assets/assets';
import { useParams } from 'react-router-dom';  
import './pageStyle.css'  
import AddSongs from '../Components/AddSongs';

function OwnersInterface() {
    const {venueName} = useParams(); 
    const songsData = [
        { name: 'Song 1', url: 'URL', votes: 0 },
        { name: 'Song 2', url: 'URL', votes: 0 },
        { name: 'Song 3', url: 'URL', votes: 0 },
        { name: 'Song 4', url: 'URL', votes: 0 },
        { name: 'Song 5', url: 'URL', votes: 0 },
    ];

    const [songs, setSongs] = useState(songsData);
    const [currentSong, setCurrentSong] = useState(songs[0]);

    // Function to handle upvoting/downvoting
    const handleVote = (songName, type) => {
        setSongs((prevSongs) => {
            const updatedSongs = prevSongs.map(song => {
                if (song.name === songName) {
                    return {
                        ...song,
                        votes: type === 'upvote' ? song.votes + 1 : Math.max(song.votes - 1, 0)
                    };
                }
                return song;
            }).sort((a, b) => b.votes - a.votes); // Sort by votes in descending order

            // Set the current song to the song with the highest votes
            setCurrentSong(updatedSongs[0]);

            return updatedSongs;
        });
    };

    return (
        <div className='relative flex flex-col justify-center items-center w-full px-4 text-center text-white'>
            {/* Background Image */}
            <img 
                src={assets.PlayListBackground} 
                alt="Background Image" 
                className='fixed top-0 left-0 w-full h-full object-cover z-[-1]' 
            />

            {/* Main Content */}
            <div className='relative z-10 flex flex-col justify-center items-center w-full'>
                <h1 className='text-5xl text-center font-medium mb-10'>{venueName}</h1>

                {/* Currently Playing */}
                <div className='flex flex-col items-center p-10 w-full max-w-4xl'>
                    <h1 className='text-2xl font-semibold mb-4'>Now Playing</h1>
                    <CurrentSong song={currentSong} /> 
                </div>

                {/* Scrollable Song List */}
                <div className='text-center p-10 w-full max-w-4xl '>
                  <div className='flex justify-around'>
                    <h1 className='text-2xl font-semibold '>Add Songs</h1>
                    <input
                        className='w-full max-w-xs px-4 py-2 mb-4 border rounded-lg outline-none text-blue-500 text-lg'
                        type="search"
                        placeholder="Search songs..." 
                        />
                  </div>
                  <AddSongs songs={songs}/>
                </div>
 
            </div> 
        </div>
    );
}

export default OwnersInterface;
