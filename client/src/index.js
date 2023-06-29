import React from 'react';
import {StrictMode, useEffect, useMemo, useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";
import {
    createBrowserRouter,
    RouterProvider, useLocation, useOutlet,
} from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import {CSSTransition, SwitchTransition} from "react-transition-group";
import About from "./pages/About";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import AlertBanner from "./components/AlertBanner";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {icon} from "@fortawesome/fontawesome-svg-core/import.macro";
import styled from "styled-components";

const StyledReturnToTop = styled(FontAwesomeIcon)`
  position: fixed;
    bottom: 5%;
    left: 5%;
    opacity: 0.9;
    z-index: 1000;
    cursor: pointer;
    width: 5%;
    height: 5%;
    max-width: 50px;
    max-height: 50px;
  min-width: 25px;
    min-height: 25px;
`

const routes = [
    {
        path:    '/',
        element: <Home/>,
    },
    {
        path:    '/about',
        element: <About/>,
    },
    {
        path:    '/contact',
        element: <Contact/>,
    },
]

const router = createBrowserRouter([
    {
        path:     '/',
        element:  <App/>,
        children: routes.map((route) => {
            return {
                path:    route.path,
                element: route.element,
            }
        }),
    },
]);

function App() {
    const location      = useLocation();
    const currentOutlet = useOutlet();
    const navRef = React.useRef(null);
    const footerRef = React.useRef(null);
    const isNavInView = useIsInView(navRef);
    const isFooterInView = useIsInView(footerRef);
    const {nodeRef}     = routes.find((route) => route.path === location.pathname) ?? {};

    return (
            <div className="App">
                <Nav viewportRef={navRef}/>
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
                                    <div ref={nodeRef}
                                         className={`page ${state}`}>
                                        {currentOutlet}
                                    </div>
                            )}
                        </CSSTransition>
                    </SwitchTransition>
                </div>
                <Footer viewportRef={footerRef}/>
                {!isNavInView && !isFooterInView ?
                    <StyledReturnToTop icon={icon({
                        name: 'arrow-up',
                        style: 'regular',
                        family: 'sharp',
                    })}
                                     size={'2x'}
                                     className="scroll-to-top"
                                     onClick={() => window.scrollTo(0, 0)}/>
                    :
                    null
                }
            </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <StrictMode>
            <DevSupport ComponentPreviews={ComponentPreviews}
                        useInitialHook={useInitial}>
                <RouterProvider router={router}/>
            </DevSupport>
        </StrictMode>,
);

function useIsInView(ref) {
    const [isIntersecting, setIsIntersecting] = useState(false);

    const observer = useMemo(
        () =>
            new IntersectionObserver(([entry]) =>
                setIsIntersecting(entry.isIntersecting),
            ),
        [],
    );

    useEffect(() => {
        observer.observe(ref.current);

        return () => {
            observer.disconnect();
        };
    }, [ref, observer]);

    return isIntersecting;
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
