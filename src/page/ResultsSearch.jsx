import { useEffect, useState } from 'react';
import CardFilm from '../components/CardFilm';
import { connect } from 'react-redux';
const mapGlobalStateToProps = (state) => {
  //mengambil global state
  return {
    movieSearch: state.movieSearch,
  };
};
const ResultsSearch = (props) => {
  const [filmList, setFilmList] = useState([]);
  useEffect(() => {
    getSearchList();
  }, [props.movieSearch]);
  const getSearchList = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/search/multi?query=${props.movieSearch}&api_key=2130a36c43def715d1029ef24cf94f49`);
    const data = await response.json();
    setFilmList(data.results);
  };
  console.log(filmList);
  return (
    <div className="container-fluid" style={{ backgroundColor: 'rgba(0,0,0,1' }}>
      <div className="align-items-end justify-content-center d-flex" style={{ height: '150px' }}>
        <h1 className="text-center text-white">Hasil penelusuran</h1>
        {console.log(filmList)}
      </div>
      <div className="container">
        <div className="row mt-1">
          {filmList.map((film, key) => {
            return <CardFilm key={key} title={film.title ? film.title : film.name} poster={film.poster_path} rilis={film.release_date} rating={film.vote_average} id={film.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default connect(mapGlobalStateToProps)(ResultsSearch);
