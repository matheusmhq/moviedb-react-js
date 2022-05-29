import colors from "styles/colors";

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

export function hexToRgbA(hex, opacity) {
  if (hex == undefined || hex == null) return "";
  const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16));
  return `rgba(${r},${g},${b},${opacity})`;
}

export function getColorRating(rating) {
  if (rating == 0) {
    return "#000000";
  } else if (rating > 0 && rating <= 3) {
    return colors.brandRed;
  } else if (rating > 3 && rating <= 6) {
    return colors.brandYellow;
  } else if (rating > 6 && rating <= 10) {
    return colors.brandGreen;
  }
}
