const formatFilmData = (filmData) => {
  return Object.assign({}, filmData, {
    id: filmData.id,
    filmName: filmData.name,
    posterImage: filmData.poster_image,
    previewImage: filmData.preview_image,
    backgroundImage: filmData.background_image,
    backgroundColor: filmData.background_color,
    filmSrc: filmData.video_link,
    filmPreview: filmData.preview_video_link,
    genre: filmData.genre,
    release: filmData.released,
    runtime: filmData.run_time,
    rating: filmData.rating,
    scoresCount: filmData.scores_count,
    describe: filmData.description,
    director: filmData.director,
    actors: filmData.starring,
    isFavorite: filmData.isFavorite,

  });
};

export {formatFilmData};
