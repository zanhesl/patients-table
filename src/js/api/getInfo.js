const getInfo = async urls => {
  const promiseStack = [];
  // Adding requests stack for different "api" links
  Object.values(urls).map(url => {
    const promise = fetch(url).then(response => response.json());
    promiseStack.push(promise);
    return true;
  });

  const responseStack = await Promise.all(promiseStack);
  // Could have used Object.fromEntries, but it's compatibility is poor
  // Returning object with keys from "urls" starting object and keys from results
  const result = await Object.assign(...Object.keys(urls).map((key, i) => ({ [key]: responseStack[i] })));
  return result;
};

export default getInfo;
