import moment from "moment";

const en = {
  locale: "en",
  lang:[
    { value: "en", label: "Eng" },
    { value: "vi", label: "Ar" },
  ],
  header: {
    open_navigation : "Open Navigation",
    close_navigation : "Close Navigation",
    theme_switcher: "Theme Switcher",
  },
  footer: {
    about_me: "About me",
    links: [
      // // Format link in Footer
      // {
      //   title: "Example #1",
      //   link: "#",
      // },
    ],
    social_networks: [
      {
        title: "Mail",
        icon: "SiGmail",
        link: "mailto:waok@outlook.sa",
      },
      {
        title: "Linkedin",
        icon: "SiLinkedin",
        link: "https://www.linkedin.com/in/waleedalghamdi/",
      },
      {
        title: "Github",
        icon: "SiGithub",
        link: "https://github.com/waleedhamed",
      },
      // {
      //   title: "Gitlab",
      //   icon: "SiGitlab",
      //   link: "https://gitlab.com/howznguyen",
      // },
      // {
      //   title: "Facebook",
      //   icon: "SiFacebook",
      //   link: "https://www.facebook.com/howznguyen",
      // },
      
    ],
    develop_by: "Developed by Waleed ",
    build_with: "Built with Notion ",
    with: " with ",
  },
  home: {
    intro: {
      header: "Hi, Waleed Alghamdi",
      description: ` I am a Mechanical Engineer, Consultant, Dreamer! This is a website I created with the desire to share my knowledge with everyone. Thank you to everyone who visited. ❤️`,
    },
    story: {
      header: "Who I Am Today, And How I Got Here",
      intro: {
        header: "| Curiosity was always my playground.",
        description: `Here's the story:`,
      },
      description: `Ever since I was a kid, I've been known as "Waleed the Breaker" Why? Because I couldn't resist taking apart every toy to see what was inside. I was always curious about how things worked, and that curiosity hasn't gone away.
      
      In school, physics was my thing. I loved it because it was all about understanding concepts, not just memorizing stuff. Biology? Not so much – too much memorization without really getting why things are the way they are. Tech has always been a big part of my life. From a young age, I was all about learning programming, editing – anything tech-related. When it was time for college, I had a tough choice: Mechanical Engineering, Physics, or Computer Engineering. I went with Mechanical Engineering because I've always been fascinated by how machines work, from cars to planes. But as I got further into my studies at the University of Jeddah, I realized engineering wasn't just about gears and engines. It taught me how to think, how to solve problems, and how to look at things in new ways. That’s why I shifted gears into management consulting, focusing on helping people and companies get better at what they do. 
      
      I am a catalyst for change. I’ve worked on over 25 big projects for top-tier clients in the Middle East and It's not just about the projects; it's about the impact, the transformation, and the evolution they bring.
      
      Outside of work, I’m all about learning new things – whether it’s from podcasts, the latest tech news, or just talking to interesting people. I’m not much for dreaming – I prefer setting solid goals. Someday, I want to be a CEO, start my own business, and keep growing. When I’m not working, I love to travel, meet new people, and face new challenges – especially the kind that make me think. I’m into everything from strategy and tech to marketing and finance. And yeah, I’m pretty ambitious!
      `,
    },
    outro: {
      description: `So, that's a bit about me. I'm Waleed Alghamdi, and I'm more than just an engineer or a consultant. I'm a guy who loves to learn, help others, and take on whatever challenges come my way.`,
    },
      image: "/assets/images/hwz.ngn.jpg",
      links: [
        {
          icon: "HiOutlineNewspaper",
          title: "Resume",
          link: "https://www.notion.so/signed/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F56a823ad-c36a-4a73-8857-b6e908259d81%2Faf5a1430-e5d8-4d08-bfa4-4361f6ac802e%2FWaleed_H_Alghamdi_-_CV.pdf?id=4fb5e0f9-f932-44cf-af2a-1cbdb167c9b3&table=block",
        },
        {
          title: "Linkedin",
          icon: "SiLinkedin",
          link: "https://www.linkedin.com/in/waleedalghamdi/",
        },
        {
          icon: "FaGithub",
          title: "Waleed",
          link: "https://github.com/waleedHamed",
        },
      ],
    },
    featured_posts: "Featured Posts",
    read_more: "Read more",
    categories: [
      {
        name: "Knowledge",
        description:
          "Related posts.",
        value: ["code", "algorithm", "Knowledge"],
      },
      {
        name: "Tutorial & Tips",
        description: "Tutorials or tips.",
        value: ["tutorial", "tip"],
      },
      {
        name: "Notion",
        description:
          "Articles with content about Notion and utilities around Notion.",
        value: ["notion"],
      },
      {
        name: "Other",
        description: "The posts are not related.",
        value: ["other"],
      },
    ],
  },
  post: {
    published_at_by: (datetime: any, author: any, locale: string) => {
      moment.locale(locale);
      const days = 5;
      let raw = moment(datetime);
      let duration = moment.duration(moment().diff(datetime));
      const _datetime = (duration.asHours() > 24 * days) ? raw.format('DD/MM/YYYY HH:mm') : raw.fromNow();
      return `Published at ${_datetime} by ${author}.`;
    },
    reading_time: (min: any) => {
      return `${min} min read`;
    },
    views: (views: any) => {
      return `${views} views`;
    },
    tags: "Tags",
    relate_post: "Realted Posts:",
    table_of_contents: "Table of Contents"
  },
  blog: {
    blog: "Blog",
    description: "Here you can find all my posts",
    intro: "Here you can find all my posts",
    find_posts: "Posts search...",
    not_found_post: "There are no posts yet",
  },
  tag: {
    tag: "Tag",
    tags: "Tags",
    intro: "You can find articles under the tags below:",
    not_found_post: "There are no posts yet",
    post_by_tag: "Posts by tag:",
  },
  error_page: {
    404 : {
      title: "Page Not Found",
      head: "Sorry, I can't find this page.",
      desc: "But don't worry, you can find many more on your homepage.",
      home_button: "Home"
    }
  },
  common: {
    error: "Error",
    is_loading: "Loading...",
    process_take_few_second: "This process may take a few seconds, please do not close this page.",
  }
};

export default en;
