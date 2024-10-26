import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
  <div className="flex flex-col background">

    <h1 className="bg-white rounded-lg w-11/12 text-center text-4xl mx-auto m-14 font-bold py-2 px-3">RANDOM GIFS</h1>

    <div className="flex flex-col gap-y-12">
      <Random/>
      <Tag/>
    </div>

  </div>);
}
