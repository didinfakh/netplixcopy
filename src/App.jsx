import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import All from './All';
import Single from './page/Single';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ResultsSearch from './page/ResultsSearch';
import { connect } from 'react-redux';
import 'bootstrap/dist/js/bootstrap.bundle';

const mapGlobalStateToProps = (state) => {
  //mengambil global state
  return {
    movieSearch: state.movieSearch,
  };
};
function App(props) {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={props.movieSearch ? <ResultsSearch /> : <All />} />
          <Route path="/single/:id" element={<Single />} />
        </Routes>
      </Router>
    </>
  );
}

export default connect(mapGlobalStateToProps)(App);
