import HomeCard from "./HomeCard";
import { routes } from "./routes";

const HomePage = () => {
  return (
    <div className=" h-full">
      <div className="text-center h-20 flex items-center justify-center text-xl font-medium bg-white shadow-lg">
        Welcome to my world
      </div>
      <div className="h-[calc(100%-100px)] overflow-y-scroll">
        <div className="grid grid-cols-1 h-full sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4 my-8 row-auto">
          {routes.map((route, index) => (
            <HomeCard key={index} route={route} index={index}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
