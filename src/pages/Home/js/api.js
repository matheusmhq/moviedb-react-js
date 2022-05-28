import api from "services/api";

export const getList = (
  page,
  setLastPage,
  setTotalResults,
  setList,
  setLoading
) => {
  api
    .get(`/movie/popular`, {
      params: {
        page,
        sort_by: "popularity.desc",
      },
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
