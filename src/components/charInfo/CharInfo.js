import { useState, useEffect} from "react";
import { PropTypes } from "prop-types";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Skeleton from "../skeleton/Skeleton";
import MarvelService from "../../services/MarvelService";
import "./charInfo.scss";

const CharInfo=(props)=>{
  const [char, setChar]=useState(null);
  const [loading, setLoading ]=useState(true);
  const [error, setError ]=useState(false);

  const marvelService = new MarvelService();

  useEffect(()=>{
    updateChar();
  },[props.charId]);

  const onCharLoaded = (char) => {
    setChar(char=>char);
    setLoading(loading=>false);
  };

  const onError = () => {
    setLoading(loading=>false);
    setError(error=>true);
  };

  const onCharLoading = () => {
    setLoading(loading=>true);
  };

  const updateChar = () => {
    const { charId } = props;
    if (!charId) {
      return;
    }

    onCharLoading();

    marvelService
      .getCharacter(charId)
      .then(onCharLoaded)
      .catch(onError);
  };

  const skeleton = char || loading || error ? null : <Skeleton />;
  const errMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error || !char) ? <View char={char} /> : null;

  return (<div className="char__info">
    {skeleton}
    {errMessage}
    {spinner}
    {content}
  </div>
  );
}
const View = ({ char }) => {
  const { name, description, thumbnail, homepage, wiki, comics } = char;
  let imgStyle = {'objectFit' : 'cover'};
  if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
      imgStyle = {'objectFit' : 'contain'};
  }
  return (
    <>
      <div className="char__basics">
        <img src={thumbnail} alt="Chart info" style={imgStyle}/>
        <div>
          <div className="char__info-name">{name}</div>
          <div className="char__btns">
            <a href={homepage} className="button button__main">
              <div className="inner">Homepage</div>
            </a>
            <a href={wiki} className="button button__secondary">
              <div className="inner">Wiki</div>
            </a>
          </div>
        </div>
      </div>
      <div className="char__descr">
        {description}
      </div>
      <div className="char__comics">Comics:</div>
      <ul className="char__comics-list">
        {comics.length > 0 ? null : 'There is no comics with this character'}
        {
          comics.map((item,i)=>{
            // eslint-disable-next-line array-callback-return
            if (i > 9) return;
            return(
              <li key={i} className="char__comics-item">
                {item.name}
              </li>
            )
          })
        }
      </ul>
    </>
  );
};

CharInfo.propTypes={
  charId:PropTypes.number,
  
}

export default CharInfo;
