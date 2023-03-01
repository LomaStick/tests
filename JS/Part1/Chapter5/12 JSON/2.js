function replacer(key, value) {
  return (key != "" && value == meetup) ? undefined : value;
};