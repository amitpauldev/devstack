import { Suspense } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Technology from "./components/Technology";
import Footer from "./components/Footer";

function App() {
	return (
		<div>
			<Navbar />
			<Hero />
			<Technology />
			<Footer />
		</div>
	);
}

export default App;
