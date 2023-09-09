import { useEffect, useState } from 'react';
import CardFilm from '../components/CardFilm';
import movieIcon from '../icon/movieIcon.svg';

const Movie = () => {
  const [listFilm, setListFilm] = useState([]);
  const [mode, setMode] = useState('popular');
  const [active, setActive] = useState('Popular');
  useEffect(() => {
    getListFilm();
  });
  const getListFilm = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${mode}?api_key=2130a36c43def715d1029ef24cf94f49`);
    const data = await response.json();
    setListFilm(data.results);
  };

  return (
    <>
      <div className="container-fluid" id="Movie" style={{ backgroundColor: 'rgba(0,0,0,1' }}>
        <div className="container">
          <div className="row">
            <div className="col border-bottom mt-5 d-flex">
              <div style={{ width: '50px', height: '50px' }}>
                <img src={movieIcon} alt="" />
              </div>
              <h1 className=" ms-3 text-white">Movies</h1>
            </div>
          </div>
          <div className="row mt-5 d-flex justify-content-start">
            <div className="col-md-4 d-flex justify-content-around p-0 m-0">
              <button
                onClick={() => {
                  setMode('popular');
                  setActive('Popular');
                }}
                className={` m-0 text-white btn ${active == 'Popular' && 'btn-danger'}  btnMovie`}
              >
                Popular
              </button>
              <button
                onClick={() => {
                  setMode('top_rated');
                  setActive('Top-Rated');
                }}
                className={` m-0 text-white btn ${active == 'Top-Rated' && 'btn-danger'}  btnMovie`}
              >
                Top Rated
              </button>
              <button
                onClick={() => {
                  setMode('upcoming');
                  setActive('Upcoming');
                }}
                className={` m-0 text-white btn ${active == 'Upcoming' && 'btn-danger'}  btnMovie`}
              >
                Upcoming
              </button>
            </div>
          </div>
          <div className="row mt-4">
            {listFilm.map((film, key) => {
              return <CardFilm key={key} title={film.title} poster={film.poster_path} rilis={film.release_date} rating={film.vote_average} id={film.id} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Movie;
