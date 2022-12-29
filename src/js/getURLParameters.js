// URL parameters as object
const getURLParameters = (url) => {
  return (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
    (a, v) => (
      (a[v.slice(0, v.indexOf("="))] = v.slice(v.indexOf("=") + 1)), a
    ),
    {}
  );
};

const a = getURLParameters("google.com");
console.log(a);

const b = getURLParameters("http://url.com/page?name=Adam&surname=Smith");
console.log(b);
