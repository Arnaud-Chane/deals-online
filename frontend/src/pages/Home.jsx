import Navbar from "../components/Navbar";
import DealsDisplay from "../components/DealsDisplay";

export default function Home() {
  return (
    <header className="App-header">
      <Navbar />
      <DealsDisplay />
      <DealsDisplay />
    </header>
  );
}
