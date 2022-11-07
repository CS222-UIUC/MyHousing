import './App.css';
import NavBarComp from './components/NavBarComp';
import background from "./assets/apt.png";

function App() {
  return (
    <div className="App">
      <NavBarComp />
      <header class="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
        <div
          class="relative z-50 p-5 text-5xl text-white"
        >
          Share Your Experiences
        </div>
        <img alt="bg" src={background} className="absolute z-10 w-auto min-w-full min-h-full max-w-none blur-sm">
        </img>
      </header>
      <body>
          <div class="relative">
            <p class="absolute text-3xl left-20">
              Reviews
            </p>
            <div class="absolute w-50 right-20">
              <input type="text" placeholder="Search" class="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pl-10" />
            </div>
          </div>
          
      </body>
    </div>
  );
}

export default App;