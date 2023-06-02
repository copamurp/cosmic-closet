import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";
import {
	createBrowserRouter,
	RouterProvider, useLocation, useOutlet
} from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import {CSSTransition, SwitchTransition} from "react-transition-group";
import About from "./pages/About";
import Footer from "./components/Footer";

const routes = [
	{path: '/', element: <Home/>},
	{path: '/about', element: <About/>},
]

const router = createBrowserRouter([
	{
		path: '/',
		element: <App/>,
		children: routes.map((route) => {
			return {
				path: route.path,
				element: route.element
			}
		})
	},
]);

function App() {
	const location = useLocation();
	const currentOutlet = useOutlet();
	const {nodeRef} = routes.find((route) => route.path === location.pathname) ?? {};

	return (
		<div className="App">
			<Nav />
			<div>
				<SwitchTransition>
					<CSSTransition
						in={true}
						key={location.pathname}
						nodeRef={nodeRef}
						timeout={100}
						unmountOnExit
						appear
						>
						{(state) => (
							<div ref={nodeRef} className={`page ${state}`}>
								{currentOutlet}
							</div>
						)}
					</CSSTransition>
				</SwitchTransition>
			</div>
			<Footer />
		</div>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<DevSupport ComponentPreviews={ComponentPreviews}
		            useInitialHook={useInitial}
		>
			<RouterProvider router={router} />
		</DevSupport>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
