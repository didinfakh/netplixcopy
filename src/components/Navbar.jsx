import search from '../icon/search.svg';
import { connect } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  const [navActive, setNavActive] = useState('Home');
  const [valueInput, setValueInput] = useState();
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-transparent border-bottom navbar-dark fixed-top " id="containerNavbar">
        <div className="container">
          <a className="navbar-brand text-danger fw-bold" href="#">
            NETPLIX
          </a>
          <div className="d-flex align-items-center">
            <input
              type="text"
              id="input"
              onChange={(e) => {
                setValueInput(e.target.value);
              }}
              className="bg-transparent text-white rounded me-2"
              value={valueInput}
            />
            <div id="containerImgSearch" style={{ width: '40px', height: '40px' }}>
              <img
                src={search}
                alt=""
                className="img-fluid"
                onClick={() => {
                  props.onSearch(valueInput);
                }}
              />
            </div>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto me-4 ">
              <a
                onClick={() => {
                  setNavActive('Home');
                }}
                className={`nav-link ${navActive == 'Home' && 'active border-bottom'} border-danger`}
                aria-current="page"
                href="/#Home"
              >
                Home
              </a>
              <a
                onClick={() => {
                  setNavActive('Movie');
                }}
                className={`nav-link ${navActive == 'Movie' && 'active  border-bottom'} border-danger`}
                href="/#Movie"
              >
                Movie
              </a>
              <a
                onClick={() => {
                  setNavActive('Series');
                }}
                className={`nav-link ${navActive == 'Series' && 'active border-bottom'} border-danger`}
                href="/#Series"
              >
                Series
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
const mapGlobalStateToProps = (state) => {
  //mengambil global state
  return {
    movieSearch: state.movieSearch,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearch: (par) => dispatch({ type: 'SEARCH', value: par }),
  };
};
export default connect(mapGlobalStateToProps, mapDispatchToProps)(Navbar);
