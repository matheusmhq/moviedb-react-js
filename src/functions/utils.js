export function getImage(image, size) {
  if (image == undefined || image == null || image == "") return false;
  return `https://image.tmdb.org/t/p/${size || "w500"}${image}`;
}

export function urlParams() {
  return new URLSearchParams(window.location.search);
}

export function getUrlParameter(name, defaultValue) {
  return urlParams().get(name) || defaultValue;
}

export function setParamsUrl(navigate, obj) {
  var result = "";
  var path = window.location.pathname;
  obj.params.map((item) => {
    if (
      item.value != null &&
      item.value != undefined &&
      item.value != "" &&
      item.value != 0
    ) {
      result += `${result == "" ? `${path}?` : "&"}${item.name}=${item.value}`;
    }
  });
  if (result != "") navigate(result);
  else navigate(path);
}
