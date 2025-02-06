import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* ...more routes */}
      </Routes>
    </BrowserRouter>
  );
}

//In Home.js
export default function Home(){
    return(
        <div>
            <h1>Home</h1>
        </div>
    );
}

//In About.js
export default function About(){
    return(
        <div>
            <h1>About</h1>
        </div>
    );
}