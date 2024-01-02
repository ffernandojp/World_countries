import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import CountrySites from '../pages/CountrySites';
import Country from '../components/CountryCard';
import Error404 from '../pages/Error404';
import CountrySearch from '../pages/CountrySearch';


export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/country/:countryName" element={<CountrySites />} component={Country} />
        <Route path='/countrySearch/:searchValue' element={<CountrySearch />} />
        {/* Add more routes here */}
        <Route path="*" element={<Error404 />} />
        
      </Routes>
    </Router>
  );
}
