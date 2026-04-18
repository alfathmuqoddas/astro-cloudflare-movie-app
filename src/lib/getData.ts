const API_KEY = "403829fffc80d8184aa974d631a475c5";

export const getPopularData = async (type: string, page?: number) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/${type}/popular?api_key=${
      API_KEY
    }&language=en-US&page=${page || 1}`,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch Popular data");
  }
  const { results } = await res.json();
  return results;
};

export const getTrendingData = async ({
  timeframe,
  type,
}: {
  timeframe: "day" | "week";
  type: "movie" | "tv" | "person";
}) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/${type}/${timeframe}?api_key=${
      API_KEY
    }&language=en-US&page=1`,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch trending data");
  }
  const { results } = await res.json();
  return results;
};

export const getNowPlayingData = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&page=1`,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch Now playing data");
  }
  const { results } = await res.json();
  return results;
};

export const getTopRatedData = async (page?: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${
      API_KEY
    }&language=en-US&page=${page || 1}`,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch top rated data");
  }
  const topRatedData = await res.json();
  return topRatedData;
};

export const getMediaDetails = async (type: string, id: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY}&language=en-US`,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch details data");
  }
  const mediaDetails = await res.json();
  return mediaDetails;
};

export const getCreditData = async (type: string, id: string) => {
  const credits = await fetch(
    `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${API_KEY}&language=en-US`,
  );
  const credit = await credits.json();
  return credit;
};

export const getPicsData = async (type: string, id: string) => {
  const pics = await fetch(
    `https://api.themoviedb.org/3/${type}/${id}/images?api_key=${API_KEY}`,
  );
  if (!pics.ok) {
    throw new Error("Failed to fetch pics data");
  }
  const pic = await pics.json();
  return pic;
};

export const getVideosData = async (type: string, id: string) => {
  const videos = await fetch(
    `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${API_KEY}`,
  );
  if (!videos.ok) {
    throw new Error("Failed to fetch videos data");
  }
  const { results } = await videos.json();
  return results;
};

export const getSimilarData = async (type: string, id: string) => {
  const similar = await fetch(
    `https://api.themoviedb.org/3/${type}/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`,
  );
  if (!similar.ok) {
    throw new Error("Failed to fetch similar data");
  }
  const { results } = await similar.json();
  return results;
};

export const getCelebData = async (id: string, type: string) => {
  const url = `https://api.themoviedb.org/3/person/${id}${type}?api_key=${API_KEY}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch celeb data");
  }
  const data = await response.json();
  return data;
};

export const queryData = async (searchType: string, query: string) => {
  const url = `https://api.themoviedb.org/3/search/${searchType}?api_key=${API_KEY}&query=${query}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const getDiscover = async (
  year: string,
  genreId: string,
  page: string,
  mediaType: string,
) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/${mediaType}?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=${page}&primary_release_year=${year}&sort_by=popularity.desc&with_genres=${genreId}`,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch discover data");
  }

  const discoverData = await res.json();
  return discoverData;
};

export const getGenres = async (mediaType: "tv" | "movie") => {
  const res = await fetch(
    `https://api.themoviedb.org/3/genre/${mediaType}/list?api_key=${API_KEY}&language=en-US`,
  );

  if (!res.ok) return new Error("Failed to fetch genres data");

  const genres = await res.json();

  return genres;
};
