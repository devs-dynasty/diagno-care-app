import { cardio } from "ldrs";

cardio.register();
const Loading = () => {
  return (
    <div className="absolute bg-black bg-opacity-40 rounded-lg w-96 h-96 flex items-center justify-center">
      <l-cardio size="50" stroke="4" speed="2" color="black"></l-cardio>
    </div>
  );
};

export default Loading;
