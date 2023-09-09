import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Navigate, useNavigate } from 'react-router-dom';

const Poster = () => {
  const Navigate = useNavigate();
  const [film, setFilm] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=2130a36c43def715d1029ef24cf94f49');
    const data = await response.json();
    setFilm(data.results);
  };
  return (
    <div className="container-fluid p-0">
      <Carousel>
        {film.map((film, key) => {
          return (
            <Carousel.Item
              className="container-fluid m-0 p-0"
              id="posterImage"
              key={key}
              style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,1)), url(https://image.tmdb.org/t/p/w500/' + `${film.backdrop_path}` + ')', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
            >
              <div className="container heightResponsive">
                <div className="row">
                  <div className="col-md-6 d-flex  justify-content-md-center justify-content-start align-items-center heightResponsive">
                    <div className="row ">
                      <div className="col-12 ms-md-5 d-flex d-md-block flex-column justify-content-center align-items-center">
                        <p className="text-white">Realese Date : {film.release_date}</p>
                        <p className="text-white">Rating : {film.vote_average}</p>
                        <h1 className="text-danger">{film.original_title ? film.original_title : film.original_name}</h1>
                        <p className="text-light text-md-start text-center">{film.overview.substr(0, 150)} ...</p>
                        <div>
                          <button
                            className="btn btn-danger"
                            onClick={() => {
                              Navigate(`/single/${film.id}`);
                            }}
                          >
                            View Detail
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 d-md-flex d-none justify-content-end align-items-center">
                    <div className="row d-flex justify-content-end align-items-center">
                      <div className="col-5 me-5">
                        <img src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`} alt="" className="img-fluid rounded" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Poster;
