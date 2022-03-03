export const getStaticPageData = () => ({
  common: {
    name: {
      first: "Ming-Chun",
      last: "Hung",
    },
    contact: {
      location:
        "No. 46, Dongcheng 1st St., North Dist., Taichung City 404, Taiwan (R.O.C.)",
      phone: "(04) 2231-6495",
      mobile: "(09) 52669-909",
      email: "tomneo2004@gmail.com",
    },
    socialLinks: {
      github: "https://github.com/tomneo2004/",
      linkedIn: "https://www.linkedin.com/in/ming-chung-hung-38125a117/",
      medium: "https://tomneo2004.medium.com/",
      facebook: "https://www.facebook.com/punch.nelson",
    },
    cvURL: "https://www.dropbox.com/s/k5ui6ovd4xku905/Resume.pdf?dl=0",
  },
  menu: {
    links: [
      { title: "Home", id: "home" },
      { title: "About Me", id: "about-me" },
      { title: "Skills", id: "skills" },
      { title: "Portfolios", id: "portfolios" },
      { title: "Blogs", id: "blog" },
      { title: "Contact", id: "contact" },
    ],
  },
  home: {
    greeting: "Welcome",
    country: "Taiwan",
    city: "Taichung",
  },
  hero: {
    heroBgImageURL:
      "https://images.unsplash.com/photo-1617264262155-235ae4cb078d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=966&q=80",
  },
  about: {
    personName: "Ming-Chun Hung",
    occupation: "a Developer",
    age: "33",
    location: "Taiwan",
    email: "tomneo2004@gmail.com",
    brief: `
      I help you build brand for your business at an affordable price. Thousands of clients have procured exceptional results while working with our dedicated team. when an unknown printer took a galley of type and scrambled it to make a type specimen book.

      Delivering work within time and budget which meets client’s requirements is our moto. Lorem Ipsum has been the industry's standard dummy text ever when an unknown printer took a galley.
      `,
    experiences: [
      {
        number: 10,
        suffix: "+",
        title: "Years Coding",
      },
      {
        number: 6,
        suffix: "+",
        title: "Years IOS",
      },
      {
        number: 1,
        suffix: "+",
        title: "Year React.JS",
      },
      {
        number: 7,
        suffix: "",
        title: "Years Workout",
      },
    ],
  },
  skill: {
    group: [
      {
        title: "Web Development",
        skills: [
          {
            title: "HTML/CSS",
            value: 78,
          },
          {
            title: "JavaScript",
            value: 78,
          },
          {
            title: "React.JS",
            value: 83,
          },
          {
            title: "Next.JS",
            value: 88,
          },
        ],
      },
      {
        title: "IOS Development",
        skills: [
          {
            title: "Objective-C",
            value: 80,
          },
          {
            title: "Swift",
            value: 77,
          },
          {
            title: "IOS Framework",
            value: 86,
          },
        ],
      },
      {
        title: "Machine Learning",
        skills: [
          {
            title: "Python",
            value: 55,
          },
          {
            title: "Scikit-Learn",
            value: 50,
          },
          {
            title: "Tensorflow",
            value: 80,
          },
        ],
      },
      {
        title: "DevOps",
        skills: [
          {
            title: "Git",
            value: 89,
          },
          {
            title: "Travis-CI",
            value: 50,
          },
          {
            title: "Circle.CI",
            value: 38,
          },
          {
            title: "CocoaPods",
            value: 79,
          },
          {
            title: "NPM",
            value: 79,
          },
          {
            title: "Miniconda",
            value: 62,
          },
        ],
      },
    ],
    certificates: [
      {
        title: "Tensorflow",
        url: "https://i.imgur.com/eztGRGe.png",
      },
    ],
  },
  portfolios: [
    {
      title: "Mobile Disk",
      image: "https://i.imgur.com/ssc7ZAo.png",
      categories: ["IOS"],
      imageSlides: [
        "https://i.imgur.com/ssc7ZAo.png",
        "https://i.imgur.com/o0vHxBz.png",
        "https://i.imgur.com/O4LNgvw.png",
        "https://i.imgur.com/U8ZmTS6.png",
        "https://i.imgur.com/PqOj7hn.png",
      ],
      platform: "IOS",
      technologies: "IOS SDK, GIMP",
      links: {},
      description: `Turn your mobile device into a storage disk. Store any kind of files and carry them to anywhere with you.

        Preview supported fils such as video, image and document. Transfer files between your mobile device and personal computer with cable or local wifi.`,
    },
    {
      title: "Finder e-Book",
      image: "https://i.imgur.com/1osInWc.png",
      categories: ["IOS"],
      imageSlides: [
        "https://i.imgur.com/1osInWc.png",
        "https://i.imgur.com/I1r4muo.png",
        "https://i.imgur.com/P80qM4t.png",
      ],
      platform: "IOS",
      technologies: "IOS SDK",
      url: "https://www.gogofinder.com.tw/",
      links: {
        AppStore:
          "https://apps.apple.com/tw/app/finder-ebook-for-iphone/id1081726714",
      },
      description: `An IOS app that is designed for registered member to find and read
        electronic book or catalog. Book and catalog that can be created by member.

        The app is able to read any kind of media that are embeded in book or catalog such as link,
        image, video, music, map and shoping cart.`,
    },
    {
      title: "Explore Movies",
      image: "https://i.imgur.com/zwrDW50.png",
      categories: ["Web"],
      imageSlides: [
        "https://i.imgur.com/zwrDW50.png",
        "https://i.imgur.com/Yqc5Cip.png",
        "https://i.imgur.com/6XVXUQg.png",
        "https://i.imgur.com/AS7Dzj5.png",
        "https://i.imgur.com/gaDQJoI.png",
      ],
      platform: "Web",
      technologies: "Next.JS, Material-UI, JSS",
      url: "https://explore-movies.netlify.app/",
      links: {
        Github: "https://github.com/tomneo2004/MovieReviews",
      },
      description: `Explore all kind of movies and see movie information. Find out what
        movies are popular, trending playing in cinema or search movie you already know by
        title. 
        
        In addition, you can find all reviews, media or trailers for the movie. Explore
        Movies also find available streaming service for you at your location.`,
    },
    {
      title: "Shop demo",
      image: "https://i.imgur.com/mD2vMoi.png",
      categories: ["Web"],
      imageSlides: [
        "https://i.imgur.com/mD2vMoi.png",
        "https://i.imgur.com/pxmoW4P.png",
        "https://i.imgur.com/ATQoMx8.png",
        "https://i.imgur.com/SBgmd07.png",
      ],
      platform: "Web",
      technologies: "React.JS, Express.JS, Firebase, Styled-Components, SASS",
      url: "https://tomneo2004.github.io/E-Clothing/",
      links: {},
      description: `A website that was made while learning React.JS and it is to mimic
        an online shop. 
        
        An online shop where you can purchase hats, jackets, sneakers and clothes. Add your favourite items to your shopping cart and purchase online.`,
    },
    {
      title: "Visual Music",
      image: "https://i.imgur.com/8u6Yjc0.png",
      categories: ["Web"],
      imageSlides: [
        "https://i.imgur.com/8u6Yjc0.png",
        "https://i.imgur.com/kXPzB1s.png",
        "https://i.imgur.com/SZ7Uk7L.png",
      ],
      platform: "Web",
      technologies: "React.JS, Firebase, SASS",
      links: {
        Github: "https://github.com/zero-to-mastery/visual-music",
      },
      description: `An open-source that I participated and workd with other students from
        worldwide. 
        
        Visual Music is a collaboration project managed by a group of dedicated students. 
        Aimed at all music and arts lovers, it provides the users with a real time visual transcription of a streamed music piece`,
    },
  ],
});
