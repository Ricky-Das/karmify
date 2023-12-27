export const updateSearch = (text) => {
  console.log("searching");
  setSearchTerm(text);
  const fuse = new Fuse(allDonations, {
    keys: ["title"],
    includeScore: true,
  });

  if (text.length > 0) {
    const results = fuse.search(text);
    setSearchResults(results.map((result) => result.item));
  } else {
    setSearchResults(allDonations);
  }
};
