import colors from "styles/colors";
import placeholder from "assets/images/placeholder.jpg";

export function getImage(image, size) {
  if (image) return `https://image.tmdb.org/t/p/${size || "w500"}${image}`;
  return placeholder;
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

export function convertRuntime(min) {
  if (min != 0) {
    let h = Math.floor(min / 60);
    let m = min % 60;
    h = h < 10 ? "0" + h + "h" : h + "h";
    m = m < 10 ? "0" + m + "min" : m + "min";
    if (h == "00h") h = "";
    if (m == "00min") m = "";
    return `${h} ${m}`;
  }
}
