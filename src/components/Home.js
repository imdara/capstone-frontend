import { useSelector } from "react-redux";
import DressSuggestionCard from "./DressSuggestionCard";

const Home = () => {
  const name = useSelector((state) => state.name.value);
  const dressSuggestions = useSelector((state) => state.dressSuggestions.value);
  return (
    <section class="text-gray-600 body-font">
      {name && (
        <h2 class="text-l lg:text-2xl font-bold text-center text-rose-500 bg-slate-100 p-2">
          Welcome {name}
        </h2>
      )}
      <h2 class="text-l lg:text-2xl font-bold text-center p-2 mt-2">
        Daily Dress Color Suggestions for Women
      </h2>
      <div class="flex flex-wrap -m-4">
        {dressSuggestions.map((item, idx) => (
          <DressSuggestionCard
            imgSrc={item.imgSrc}
            day={item.day}
            color={item.color}
            description={item.description}
            key={idx + 1}
          />
        ))}
      </div>
    </section>
  );
};

export default Home;
