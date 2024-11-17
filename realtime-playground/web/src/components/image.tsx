import { useState, useEffect } from 'react';
import Image from 'next/image';

const Home = () => {
  const [imageSrc, setImageSrc] = useState('/received_image.png');

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Append a timestamp to the image path to force reload
      setImageSrc(`/received_image.png?${new Date().getTime()}`);
    }, 5000); // Update every 5 seconds (adjust as needed)

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div>
      <h1>Auto-Updating Image Display</h1>
      <Image
        src={imageSrc}
        alt="Auto-updated Image"
        width={500}
        height={500}
      />
    </div>
  );
};

export default Home;
