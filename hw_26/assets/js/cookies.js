export function setCookey(name, value) {
  const MAX_AGE= "7200";
  document.cookie = name + "=" + value + ";" + "max-age=" + MAX_AGE;
}

export function getCookey(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
