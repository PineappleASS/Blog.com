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
        link: "mailto:nawaf.naif1980@Gmail.com",
      },
      {
        title: "Linkedin",
        icon: "SiLinkedin",
        link: "https://www.linkedin.com",
      },
      {
        title: "Github",
        icon: "SiGithub",
        link: "https://github.com",
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
    develop_by: "Developed by Nawaf Naif Bahlas ",
    build_with: "Built with Notion ",
    with: " with ",
  },
  home: {
    intro: {
      header: "Hi, Nawaf Bahlas",
      description: ` I am an IT Student, Dreamer! This is a website I created with the desire to share my knowledge with everyone. Thank you to everyone who visited. ❤️`,

      image: "/assets/images/hwz.ngn.jpg",
      links: [
        // {
        //   icon: "HiOutlineNewspaper",
        //   title: "About me",
        //   link: "https://waleed-resume.vercel.app/",
        // },
        {
          title: "Linkedin",
          icon: "SiLinkedin",
          link: "https://www.linkedin.com",
        },
        {
          icon: "FaGithub",
          title: "Nawaf",
          link: "https://github.com",
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
