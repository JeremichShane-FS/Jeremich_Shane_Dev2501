//  Images are stored in the public/img folder since they are static assets and I'm using a relative path to access them.  Normally I would get this data from an API, but for this project I'm using a mock data file to simulate that.
export const mockAds = [
  {
    id: 1,
    title: "ZipRecruiter",
    description: "Post Jobs for Free.  Find Great Talent Today.",
    url: {
      href: "https://www.ziprecruiter.com/post-a-job",
      text: "ziprecruiter.com",
    },
    image: "/img/ziprecruiter.jpeg",
  },
  {
    id: 2,
    title: "Flodesk",
    description: "Design emails people love to get.",
    url: {
      href: "https://flodesk.com/",
      text: "flodesk.com",
    },
    image: "/img/flodesk.jpg",
  },
];
