import React, { useState, useRef } from 'react';

const LyricsCardMaker = () => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [lyrics, setLyrics] = useState('');
  const [bgColor, setBgColor] = useState('#ffffff');
  const [textColor, setTextColor] = useState('#000000');
  const [fontSize, setFontSize] = useState(16);
  const cardRef = useRef(null);

  const exportCard = () => {
    if (!cardRef.current) return;
    // TODO: Implement image export
    console.log('Export card as image');
  };

  return (
      <div className="flex flex-col gap-4 w-full max-w-2xl mx-auto p-4">
        {/* Controls */}
        <div className="flex flex-col gap-4 bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold">Card Settings</h2>

          <div className="flex gap-4">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Song Title"
                className="flex-1 p-2 border rounded"
            />
            <input
                type="text"
                value={artist}
                onChange={(e) => setArtist(e.target.value)}
                placeholder="Artist Name"
                className="flex-1 p-2 border rounded"
            />
          </div>

          <textarea
              value={lyrics}
              onChange={(e) => setLyrics(e.target.value)}
              placeholder="Enter lyrics here..."
              className="w-full p-2 border rounded h-32"
          />

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm mb-1">Background</label>
              <input
                  type="color"
                  value={bgColor}
                  onChange={(e) => setBgColor(e.target.value)}
                  className="w-full h-8"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Text Color</label>
              <input
                  type="color"
                  value={textColor}
                  onChange={(e) => setTextColor(e.target.value)}
                  className="w-full h-8"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Font Size</label>
              <input
                  type="number"
                  value={fontSize}
                  onChange={(e) => setFontSize(Number(e.target.value))}
                  min={12}
                  max={32}
                  className="w-full p-2 border rounded"
              />
            </div>
          </div>

          <button
              onClick={exportCard}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Export as Image
          </button>
        </div>

        {/* Preview Card */}
        <div
            ref={cardRef}
            className="bg-white rounded shadow-lg overflow-hidden"
            style={{
              backgroundColor: bgColor,
              padding: '2rem',
              minHeight: '400px'
            }}
        >
          <h1
              style={{
                color: textColor,
                fontSize: '2rem',
                marginBottom: '0.5rem',
                fontWeight: 'bold'
              }}
          >
            {title || 'Untitled'}
          </h1>

          <h2
              style={{
                color: textColor,
                fontSize: '1.25rem',
                marginBottom: '2rem',
                opacity: 0.8
              }}
          >
            {artist || 'Unknown Artist'}
          </h2>

          <div
              style={{
                color: textColor,
                fontSize: `${fontSize}px`,
                whiteSpace: 'pre-wrap',
                lineHeight: 1.6
              }}
          >
            {lyrics || 'Your lyrics will appear here...'}
          </div>
        </div>
      </div>
  );
};

export default LyricsCardMaker;
