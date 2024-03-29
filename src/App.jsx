import './App.css';
import { MathJaxContext } from 'better-react-mathjax';
import Home from "./pages/Home";
import Exercises from "./pages/exercises/Exercises";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  
    const config = {
        loader: { load: ["[tex]/html", "[tex]/color"] },
        tex: {
            packages: { "[+]": ["html", "color"] },
            inlineMath: [
                ["$", "$"],
                ["\\(", "\\)"]
            ],
            displayMath: [
                ["$$", "$$"],
                ["\\[", "\\]"]
            ]
        }
    };

    return (
        <MathJaxContext config={config}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/exercises/*" element={<Exercises />} />
                </Routes>
            </BrowserRouter>
        </MathJaxContext>
    );
}

export default App;
