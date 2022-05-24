const DressSuggestionCard = ({ imgSrc, day, color, description }) => {
  return (
    <div class="p-4 mt-6 m-2 w-90 md:w-1/3 lg:m-32">
      <div class="h-full bg-slate-50 border-2 border-rose-300 border-opacity-60 rounded-lg overflow-hidden">
        <img
          class="lg:h-72 md:h-54 w-full object-cover object-center rounded"
          src={imgSrc}
          alt="blog"
        />
        <div class="p-6">
          <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            {day}
          </h2>
          <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
            {color}
          </h1>
          <p class="leading-relaxed mb-3">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default DressSuggestionCard;
