export const sort = comments => {
  return [...comments].sort((a, b) => { return b.timestamp - a.timestamp });
}
