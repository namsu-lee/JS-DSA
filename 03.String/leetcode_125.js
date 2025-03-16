var isPalindrome = function (s) {
  const reverse = s
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase()
    .split("")
    .reverse()
    .join("");

  return (
    reverse ===
    s
      .replace(/[^a-zA-Z0-9]/g, "")
      .toLowerCase()
      .split("")
      .join("")
  );
};
