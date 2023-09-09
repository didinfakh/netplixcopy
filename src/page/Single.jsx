import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import imdb from '../icon/imdb.svg';
import CardFilm from '../components/CardFilm';

const Single = () => {
  const { id } = useParams();
  const [filmDetail, setFilmDetail] = useState([]);
  const [filmRecomendations, setFilmRecomendations] = useState([]);
  useEffect(() => {
    getFilmDetail();
    getFilmRecomendations();
  });
  const getFilmDetail = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=2130a36c43def715d1029ef24cf94f49`);
    const data = await response.json();
    setFilmDetail(data);
  };
  const getFilmRecomendations = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=2130a36c43def715d1029ef24cf94f49`);
    const data = await response.json();
    setFilmRecomendations(data.results);
  };
  console.log(filmRecomendations);
  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: 'rgba(3,3,3,1)' }}>
        <div className="row" style={{ height: '80vh' }}>
          <div
            className="col-12 p-0 d-flex flex-column justify-content-between"
            style={{
              height: '100%',
              backgroundImage: 'linear-gradient(90deg, rgba(3,3,3,0.9528186274509804) 40%, rgba(1,1,1,0.1881127450980392) 68%), url(https://image.tmdb.org/t/p/w500/' + `${filmDetail.backdrop_path}` + ')',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          >
            <div className="container d-flex align-items-end" style={{ height: '100%' }}>
              <div className="row">
                <div className="col-6">
                  <h1 className="text-danger">{filmDetail.title}</h1>
                  <div className="container-fluid p-0 d-flex align-items-center">
                    <div className="d-flex align-items-center">
                      <img src={imdb} alt="" width={35} className="" />
                      <p className="fst-bold text-white m-0 ms-1">{filmDetail.vote_average}</p>
                    </div>
                    <p className="m-0 ms-3 text-secondary">{filmDetail.runtime} minutes</p>
                    <p className="m-0 ms-3 text-secondary">{filmDetail.original_language}</p>
                  </div>
                  <p className="text-secondary">{filmDetail.overview}</p>
                </div>
              </div>
            </div>
            <div className="container-fluid   " style={{ height: '100px', background: 'linear-gradient(0deg, rgba(3,3,3,0.9528186274509804) 0%, rgba(1,1,1,0) 26%)' }}></div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="container">
              <h1 className="border-bottom text-white m-0">Recomendation</h1>
              <div className="row mt-5">
                {filmRecomendations.map((film, key) => {
                  return <CardFilm key={key} title={film.title} poster={film.poster_path} rilis={film.release_date} rating={film.vote_average} id={film.id} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Single;
