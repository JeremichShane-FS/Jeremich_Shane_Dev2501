const formatTimestamp = timestamp => {
  const postDate = new Date(timestamp);
  const currentDate = new Date();

  const diffInMilliseconds = currentDate - postDate;
  const diffInMinutes = Math.floor(diffInMilliseconds / 60000);
  const diffInHours = Math.floor(diffInMilliseconds / 3600000);
  const diffInDays = Math.floor(diffInMilliseconds / 86400000); // 1 day = 86400000 milliseconds

  if (diffInMinutes < 60) {
    return `${diffInMinutes} ${diffInMinutes === 1 ? "minute" : "minutes"} ago`;
  } else if (diffInHours < 24) {
    return `${diffInHours} ${diffInHours === 1 ? "hour" : "hours"} ago`;
  } else if (diffInDays < 7) {
    return `${diffInDays} ${diffInDays === 1 ? "day" : "days"} ago at ${
      postDate.getHours() % 12 || 12
    }:${postDate.getMinutes().toString().padStart(2, "0")} ${
      postDate.getHours() >= 12 ? "pm" : "am"
    }`;
  } else {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = monthNames[postDate.getMonth()];
    const day = postDate.getDate();
    return `${month} ${day} at ${postDate.getHours() % 12 || 12}:${postDate
      .getMinutes()
      .toString()
      .padStart(2, "0")} ${postDate.getHours() >= 12 ? "pm" : "am"}`;
  }
};

export default formatTimestamp;
