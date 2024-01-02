// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { CountriesProvider } from "./context/CountriesProvider";
import AppRoutes from "./routes/AppRoutes"
function App() {
  return (
    <>
    <div className="bg-gray-900">
      <CountriesProvider>
        <AppRoutes />
      </CountriesProvider>
    </div>
    </>
  );
}

export default App;
