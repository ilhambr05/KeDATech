import { Route, Routes } from "react-router-dom"

import FooterComponent from "./components/FooterComponent"
import NavbarComponents from "./components/NavbarComponents"

import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"

function App() {
	return <>
		<NavbarComponents></NavbarComponents>
		<Routes>
			<Route path="/" Component={HomePage} />
			<Route path="/login" Component={LoginPage} />
		</Routes>
		<FooterComponent></FooterComponent>
	</>
}

export default App
