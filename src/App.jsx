import WeatherForm from "./components/WeatherForm";

function App() {
  return (
    <div className="container mx-auto my-10 flex flex-col gap-4 items-center">
      <h1 className="text-3xl font-bold text-center">SolidJS Weather App</h1>
      <WeatherForm />
    </div>
  );
}

export default App;
