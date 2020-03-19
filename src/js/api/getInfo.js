const getInfo = async () => {
  const url = '/assets/data/presentList.json';
  const res = await fetch(url);
  return res.json();
};

export default getInfo;
