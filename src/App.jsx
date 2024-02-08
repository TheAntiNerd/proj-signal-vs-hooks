import { Link } from "react-router-dom"


function App() {
	return (
		<>
			<div>
				<div className="card-container">
						<div className="card">
							<h1>Signal Vs Hooks</h1>
							
							<p className="para">Click any one of the links below to check the demo.</p>
							<ul className="page-links">
								<li><a href="./signal">Checkout Signal Demo 👉</a></li>
								<li><a href="./state">Checkout Hooks Demo 👉</a></li>
							</ul>
						</div>
				</div>
			</div>
		</>
	)
}

export default App
