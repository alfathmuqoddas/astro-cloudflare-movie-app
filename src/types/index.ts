export type TResponseWithResults<T> = {
  results: T[];
  total_pages: number;
  total_results: number;
  page: number;
};

export type TTrendingMovies = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  origina_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type TTrendingTv = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  name: string;
  origina_language: string;
  original_name: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  first_air_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  origin_country: string[];
};
