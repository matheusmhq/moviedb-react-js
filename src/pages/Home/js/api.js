import api from "services/api";

const qtyMaxOfPages = 500;
const qtyMaxOfResults = 10000;

export const getList = (
  query,
  page,
  setLastPage,
  setTotalResults,
  setList,
  setLoading
) => {
  setLoading(true);

  var params = {
    page,
    sort_by: "popularity.desc",
  };
  var endpoint = "/movie/popular";

  if (query) {
    params.query = query;
    endpoint = "/search/movie";
  }

  api
    .get(endpoint, {
      params,
    })
    .then((response) => {
      if (response.status == 200) {
        const { results, total_pages, total_results } = response.data;
        setList(results);
        setLastPage(total_pages > qtyMaxOfPages ? qtyMaxOfPages : total_pages);
        setTotalResults(
          total_results > qtyMaxOfResults ? qtyMaxOfResults : total_results
        );
      }
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => setLoading(false));
};
