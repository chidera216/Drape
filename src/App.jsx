import Header from "./components/Header";
import Hero from "./components/Hero";
import Trust from "./components/trust";

function App() {
  return (
    <div className="overflow-x-hidden container max-w-350 mx-auto">
      <Header />
      <Hero id="home" />
      <Trust />
    </div>
  );
}

export default App;
