export const formatText = (text, symbolCount) => {
  let formattedText = "";
  if (text.length > symbolCount) {
    formattedText = text.slice(0, symbolCount) + "...";
  } else {
    formattedText = text;
  }
  return formattedText;
};
