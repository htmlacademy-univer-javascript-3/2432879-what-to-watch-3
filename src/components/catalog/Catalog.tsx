import FilmCard, {FilmProps} from '../filmCard/FilmCard';

type CatalogProps = {
  title: string;
  filmCardInfo: FilmProps[];
  extraTitleStyle?: string;
}

function Catalog({title, filmCardInfo, extraTitleStyle = ''}: CatalogProps) {
  return (
    <section className="catalog">
      <h2 className={`catalog__title ${extraTitleStyle && extraTitleStyle}`}>{title}</h2>

      <div className="catalog__films-list">
        {filmCardInfo.map(({srcCard, filmName}: FilmProps) => (
          <FilmCard key={filmName} srcCard={srcCard} filmName={filmName}/>
        ))}
      </div>
    </section>
  );
}

export default Catalog;
