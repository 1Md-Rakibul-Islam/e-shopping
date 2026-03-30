const CardSkeleton = () => {
  return (
    <div className="bg-white animate-pulse">
      {/* Image Skeleton */}
      <div className="md:rounded-lg sm:rounded-md rounded-[0.25rem] overflow-hidden">
        <div className="w-full h-[210px] bg-gray-200" />
      </div>

      {/* Content Skeleton */}
      <div className="sm:p-2 p-1.5">
        {/* Category */}
        <div className="h-4 w-24 bg-gray-200 rounded mb-2" />

        {/* Title */}
        <div className="h-4 w-full bg-gray-200 rounded mb-1" />
        <div className="h-4 w-3/4 bg-gray-200 rounded mb-3" />

        {/* Price */}
        <div className="h-5 w-16 bg-gray-200 rounded" />
      </div>
    </div>
  );
};

export default CardSkeleton;
