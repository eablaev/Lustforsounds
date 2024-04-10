import React from 'react';

const SpotifyEmbed = () => {
  return (
    <iframe
      title="Spotify Playlist"
      style={{ borderRadius: '16px' }}
      src="https://open.spotify.com/embed/playlist/2RYqUUqLQzZE02JTQ5GHOp?utm_source=generator&theme=0"
      width="90%"
      height="152"
      frameBorder="0"
      allowFullScreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
};

export default SpotifyEmbed;