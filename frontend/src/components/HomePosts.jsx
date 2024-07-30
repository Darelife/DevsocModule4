import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function HomePosts({ title, author, date, time, description, imageUrl1, imageUrl2 }) {
  const [x, setX] = useState(1);

  useEffect(() => {
    // Example logic to update x dynamically
    const interval = setInterval(() => {
      setX(prevX => prevX + 1);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex mt-8 space-x-4">
      <div className="w-[35%] h-[200px] flex justify-center items-center">
          <img src={imageUrl1} alt="a" className="" />
      </div>
      <div className="flex flex-col w-[65%]">
        <h1 className="text-xl font-bold md:mb-2 mb-1 mb:text-2xl text-[#282828]">
          {title}
        </h1>
        <div className="flex mb-2 text-sm font-semibold text-[#282828] space-x-4 md:mb-4 items-center justify-between">
          <p>{author}</p>
          <div className="flex space-x-2">
            <p>{date}</p>
            <p>{time}</p>
          </div>
        </div>
        <p className="text-sm md:text-lg text-[#282828]">{description}</p>
      </div>
    </div>
  );
}

HomePosts.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl1: PropTypes.string.isRequired,
  imageUrl2: PropTypes.string.isRequired,
};

export default HomePosts;