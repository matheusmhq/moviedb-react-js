import api from "services/api";

export const getDetails = (id, setTrailerId, setDetails, setLoading) => {
  api
    .get(`/movie/${id}`, {
      params: {
        append_to_response:
          "videos,external_ids,recommendations,keywords,credits",
      },
    })
    .then((response) => {
      if (response.status == 200) {
        const data = response.data;
        setDetails(data);

        if (data.videos?.results.length > 0) {
          setTrailerId(data.videos.results[0].key);
        }
      }
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => setLoading(false));
};
