import { useNavigate } from 'react-router-dom';

const CardFilm = ({ title, key, poster, rilis, rating, id }) => {
  const Navigate = useNavigate();
  return (
    <>
      <div
        className="col-md-2 col-4 cardMovie rounded pt-2 mb-3"
        onClick={() => {
          Navigate(`/single/${id}`);
        }}
        key={key}
      >
        <div className="row">
          <div className="col">{poster ? <img src={`https://image.tmdb.org/t/p/w500/${poster}`} className="img-fluid rounded" /> : <h3 style={{ height: '100px' }}>poster not found</h3>}</div>
        </div>
        <div className="row">
          <div className="col-12" style={{ height: '80px' }}>
            <p className="text-white fs-6">{title}</p>
          </div>
          <div className="col d-flex justify-content-between align-self-end">
            <p className="text-white">{rilis}</p>
            <p className="text-white">⭐{rating ? rating : 'none'}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardFilm;
