export default function AnimeCard(props: any) {
  function concatDescription(description: string) {
    return description.slice(0, 100) + "...";
  }

  const { anime, key } = props;
  return (
    <div key={key} className="flex">
      <div className="w-full">
        <div className="w-full text-center mb-2">
          <h3 className="text-xl">{anime.title}</h3>
          <h4>Rating: {anime.rating}</h4>
        </div>
        <p className="text-xs">{concatDescription(anime.description)}</p>
      </div>
      <div className="w-60">
        <img src={anime.promo_image.source} alt={anime.title} width={320} height={180} />
      </div>
    </div>
  );
}
