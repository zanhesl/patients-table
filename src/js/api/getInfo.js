import calculateAge from './calculateAge';

const getInfo = async urls => {
  const promiseStack = [];
  try {
    // Adding requests stack for different "api" links
    Object.values(urls).map(url => {
      const promise = fetch(url).then(response => response.json());
      promiseStack.push(promise);
      return true;
    });

    const responseStack = await Promise.all(promiseStack);
    // Refactoring API info to match desired format
    const refactorStack = responseStack.map((response, num) => {
      if (!num)
        return response.map(res => ({
          initials: `${res.firstName} ${res.patrName} ${res.lastName}`,
          historyNumber: res.historyNumber,
          roomNumber: res.bedNumber,
          age: calculateAge(res.birthDate),
          diagnosis: res.diagnosis,
        }));
      return response.map(res => ({
        initials: `${res.firstName} ${res.patrName} ${res.lastName}`,
        historyNumber: res.historyNumber,
        cause: res.cause,
        age: calculateAge(res.birthDate),
        diagnosis: res.diagnosis,
      }));
    });
    // Could have used Object.fromEntries, but it's compatibility is poor
    // Returning object with keys from "urls" starting object and keys from results
    const result = await Object.assign(...Object.keys(urls).map((key, i) => ({ [key]: refactorStack[i] })));
    return result;
  } catch (err) {
    return Object.assign(...Object.keys(urls).map(key => ({ [key]: [] })));
  }
};

export default getInfo;
