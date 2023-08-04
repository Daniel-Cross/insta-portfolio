import { FaNode } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import {
  BiLogoTypescript,
  BiLogoReact,
  BiLogoFirebase,
  BiLogoPostgresql,
} from "react-icons/bi";
import { LiaCrownSolid } from "react-icons/lia";
import { SiExpo, SiMicrosoftazure } from "react-icons/si";
import { BsCommand } from "react-icons/bs";

export const JobData = [
  {
    name: "Ahlsell",
    storyImage: require("../assets/ahlsell.jpeg"),
  },
  {
    name: "Yomento",
    storyImage: require("../assets/yomento.svg").default,
  },
  {
    name: "Skiddle",
    storyImage: require("../assets/skiddle.png"),
  },
  {
    name: "Booking",
    storyImage: require("../assets/booking.svg").default,
  },
];

const styles = {
  backgroundColor: "#f7df1e",
  width: 390 / 3,
  height: 160,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 40,
  cursor: "pointer",
};

const imageStyles = {
  height: 350,
  width: "100%",
};

export const Technologies = [
  {
    name: "JavaScript",
    icon: <RiJavascriptFill size={100} color="white" />,
    styles,
    experience: "5+ years",
  },
  {
    name: "TypeScript",
    icon: <BiLogoTypescript size={100} color="white" />,
    styles: { ...styles, backgroundColor: "#007acc", color: "#fff" },
    experience: "5+ years",
  },
  {
    name: "Node",
    icon: <FaNode size={100} />,
    styles: { ...styles, backgroundColor: "#6cc24a", color: "#fff" },
    experience: "3+ years",
  },
  {
    name: "React Native",
    icon: <BiLogoReact size={100} />,
    styles: { ...styles, backgroundColor: "#1c2c4c", color: "#fff" },
    experience: "3+ years",
  },
  {
    name: "React",
    icon: <BiLogoReact size={100} />,
    styles: { ...styles, backgroundColor: "#61dbfb", color: "#fff" },
    experience: "5+ years",
  },
  {
    name: "Azure",
    icon: <SiMicrosoftazure size={100} />,
    styles: { ...styles, backgroundColor: "#007FFF", color: "#fff" },
    experience: "1+ years",
  },
  {
    name: "Firebase",
    icon: <BiLogoFirebase size={100} />,
    styles: { ...styles, backgroundColor: "#FFA611", color: "#fff" },
    experience: "2+ years",
  },
  {
    name: "PostGreSQL",
    icon: <BiLogoPostgresql size={100} />,
    styles: { ...styles, backgroundColor: "#0064a5", color: "#fff" },
    experience: "2+ years",
  },
  {
    name: "Expo",
    icon: <SiExpo size={100} />,
    styles: { ...styles, backgroundColor: "#fff", color: "black" },
    experience: "3+ years",
  },
];

export const Projects = [
  {
    name: "Haven",
    image: require("../assets/haven.png"),
    description:
      "Haven is a React Native app for tracking behavioural patterns in schools. The app allows teachers to track the behaviour of students in their class and then analyse the data to see how the students are performing. Coming to the App Store and Google Play store soon.",
    technologies: [
      "React Native",
      "TypeScript",
      "PostgreSQL",
      "Supabase",
      "Expo",
    ],
    styles: { ...styles, backgroundColor: "#fff", color: "black" },
    posts: [
      {
        image: require("../assets/haven1.png"),
        styles: imageStyles,
        description:
          "The form screen for adding a new incident report and adding school related data",
      },
      {
        image: require("../assets/haven2.png"),
        styles: imageStyles,
        description: "The add student screen in on the incident report flow",
      },

      {
        image: require("../assets/haven4.png"),
        styles: imageStyles,
        description:
          "The what happened screen in on the negative incident report flow",
      },
      {
        image: require("../assets/haven5.png"),
        styles: imageStyles,
        description:
          "The what happened screen in on the positive incident report flow",
      },
    ],
  },
  {
    name: "King Kev Quote Generator",
    logo: <LiaCrownSolid size={100} color="white" />,
    technologies: ["React", "React Native", "TypeScript", "Firebase", "Expo"],
    description:
      "The King Kev Quote Generator is a React Native app that generates quotes from the legend that is King Kev. The web version of the app was previously mentioned on a top 3 ranked football podcast, and since then has been developed into a mobile app. The app is available on the App Store and Google Play store.",
    styles: {
      ...styles,
      backgroundImage:
        "linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)",
      color: "black",
    },
    posts: [
      {
        styles: {
          ...imageStyles,
          backgroundImage:
            "linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)",
          color: "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        description: "A quote from Kevin Keegan himself.",
        logo: `"They're the second best team in the world, and there's no higher praise than that."`,
      },
      {
        styles: {
          ...imageStyles,
          backgroundImage:
            "linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)",
          color: "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        description: "Another quote from Kevin Keegan.",
        logo: `"Despite his white boots, he has real pace..."`,
      },
    ],
  },
  {
    name: "Command Shift",
    logo: <BsCommand size={100} color="white" />,
    technologies: [
      "React",
      "TypeScript",
      "Node",
      "PostgreSQL",
      "Jest",
      "Enzyme",
      "React Testing Library",
      "Express",
    ],
    link: "https://www.commandshift.co/",
    description:
      "Command Shift is a coding Bootcamp based in Manchester. I was hired to teach full-stack Javascript to learners of all ages who were looking to retrain and change careers. Myself and a colleague taught the learners the fundamentals of programming, and how to build full-stack applications. The course was 12 weeks long, and the learners built a number of projects including a full-stack e-commerce site, a full-stack social media site, and a full-stack mobile app. The course was a huge success, and the learners are now working as developers in the industry.",
    styles: {
      ...styles,
      backgroundImage:
        "linear-gradient(to right, #aff514, #00ed88, #00dacb, #00bfe4, #61a1cf)",
      color: "black",
    },
  },
];

export const Posts = [
  {
    userImage: require("../assets/daniel.jpg"),
    post: require("../assets/daniel.jpg"),
    styles: imageStyles,
    user: "Daniel",
    description:
      "Welcome to my Apple Vision Pro/Instagram inspired portfolio! I'm a freelance Senior React/React Native software engineer who is open to new opportunities if the project and people are exciting to work with. If this sounds like you and you think we could work on something together, please get in touch! Below you will find some projects I have spent the last few years working on.",
    technologies: [],
  },

  {
    userImage: require("../assets/ahlsell.jpeg"),
    post: require("../assets/ahlsell1.png"),
    styles: imageStyles,
    user: "Ahlsell",
    description:
      "The Ahlsell mobile store is a React Native app that allows customers to browse and purchase products from Ahlsell. During my time as a React Native consultant at Ahlsell we managed to increase the revenue from 1 million sek per year to 1 million sek per month. The app is available on the App Store and Google Play store.",
    technologies: ["React Native", "TypeScript", "Azure", "Cosmos DB"],
  },
  {
    userImage: require("../assets/yomento.svg").default,
    post: require("../assets/yomento1.png"),
    styles: imageStyles,
    user: "Yomento",
    description:
      "Yomento is a B2B and B2C React Native app that helps users with their professional development. The app is used by various enterprise companies in Sweden such as Volvo, ICA and Ahlsell. The app is available on the App Store and Google Play store.",
    technologies: ["React Native", "TypeScript", "PHP", "Laravel", "MySQL"],
  },
  {
    userImage: require("../assets/skiddle.png"),
    post: require("../assets/skiddle1.png"),
    styles: imageStyles,
    user: "Skiddle",
    description:
      "Skiddle is a React app that allows users to search for events, purchase tickets, and create and manage their own events. The app is used by millions of users, predominantly in the UK but overseas also. The app is available in Beta on the Skiddle website.",
    technologies: ["React", "TypeScript", "PHP", "Laravel", "MySQL", "AWS"],
  },
  {
    userImage: require("../assets/booking.svg").default,
    post: require("../assets/booking1.png"),
    styles: imageStyles,
    user: "Booking",
    description:
      "Booking.com hired me to help work on their re-platforming of their old website to a new React app. The process involved rewriting existing code and working on the expansion of the rental car market in North America. The app is used by millions of users daily, and can be found on the Booking.com website.",
    technologies: [
      "React",
      "TypeScript",
      "Node",
      "AWS",
      "Docker",
      "Kubernetes",
    ],
  },
];
