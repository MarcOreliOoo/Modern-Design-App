import { Navbar, Welcome, Footer, Services, Transactions } from "./components"

const App = () => {
	return (
		<div><div className="min-h-screen">
			<div className="bg-gradient-to-r from-green-400 to-blue-500">
				<Navbar />
				<Welcome />
			</div>
			<Services />
			<Transactions />
			<Footer />
		</div>
		<button type="button" className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
 			Hover me
		</button>
		</div>
	);
}

export default App;
