import api from "services/api";

export const getList = (
  query,
  page,
  setLastPage,
  setTotalResults,
  setList,
  setLoading
) => {
  var params = {
    page,
  };
  var endpoint = "/movie/popular";

  if (query) {
    params.query = query;
    endpoint = "/search/movie";
  } else params.sort_by = "popularity.desc";

  api
    .get(endpoint, {
      params,
    })
    .then((response) => {
      if (response.status == 200) {
        const { results, last_page, total_results } = response.data;
        setList(results);
        setLastPage(last_page);
        setTotalResults(total_results);
      }
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => setLoading(false));
};
