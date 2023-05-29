import { FC, useMemo } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';

interface MediaRatingProps {
  rating: number
}

const MediaRating:FC<MediaRatingProps> = ({ rating }) => {
  const formattedRating = useMemo(() => Intl.NumberFormat('en-US', {
    style: 'decimal',
    maximumFractionDigits: 1,
    minimumFractionDigits: 1,
  }).format(rating), [rating]);

  return (
    <div className="mb-6 flex flex-row justify-center md:justify-start items-center text-app-white">
      <p className="mb-2 mr-2 text-4xl font-medium md:mr-4 md:mb-0">{formattedRating}</p>
      {Array.from({ length: 10 })
        .map((_, index) => ({ id: index + 1 }))
        .map((item, index) => (index + 1 <= Number(formattedRating)
          ? <FaStar key={item.id} />
          : <FaRegStar key={item.id} />))}
    </div>
  );
};

export default MediaRating;
