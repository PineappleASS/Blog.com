import moment from "moment";

const vi = {
  locale: "vi",
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
    about_me: "اهلاً انا وليد الغامدي",
    links: [
      // // Format link in Footer
      // {
      //   title: "Example #1",
      //   link: "#",
      // },
    ],
    social_networks: [
      {
        icon: "SiGmail",
        link: "mailto:waok@outlook.sa",
      },
      {
        icon: "SiLinkedin",
        link: "https://www.linkedin.com/in/waleedalghamdi/",
      },
      {
        icon: "SiGithub",
        link: "https://github.com/waleedhamed",
      },
      // {
      //   icon: "SiGitlab",
      //   link: "https://gitlab.com/howznguyen",
      // },
      // {
      //   icon: "SiFacebook",
      //   link: "https://www.facebook.com/howznguyen",
      // },
      
    ],
    develop_by: "وليد الغامدي ",
    build_with: "Notion ",
    with: "  ",
  },
  home: {
    intro: {
      header: "اهلاً انا وليد الغامدي",
      description:
        "❤️مهندس ميكانيكي, مستشار, صاحب احلام واهداف عالية. قمت بعمل هذا الموقع كمدونة شخصية اعبث فيها واشارك معلومات تعلمتها وتجارب شخصية قد تهمك وقد لا",
      image: "/assets/images/hwz.ngn.jpg",
      links: [
        {
          icon: "HiOutlineNewspaper",
          title: "Resume",
          link: "https://www.notion.so/signed/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F56a823ad-c36a-4a73-8857-b6e908259d81%2Faf5a1430-e5d8-4d08-bfa4-4361f6ac802e%2FWaleed_H_Alghamdi_-_CV.pdf?id=4fb5e0f9-f932-44cf-af2a-1cbdb167c9b3&table=block",
        },
        // {
        //   icon: "FaFacebook",
        //   title: "howznguyen",
        //   link: "https://facebook.com/howznguyen/",
        // },
        {
          icon: "FaGithub",
          title: "Waleed",
          link: "https://github.com/waleedhamed",
        },
      ],
    },
    featured_posts: "مقالات مميزة",
    read_more: "شاهد المزيد",
    categories: [
      {
        name: "معرفة",
        description:
          "مقالات ذات صلة حول المعرفة.",
        value: ["code", "algorithm"],
      },
      {
        name: "Tutorial & Tips",
        description:
          "مقالات إرشادية أو نصائح .",
        value: ["tutorial", "tip"],
      },
      {
        name: "Notion",
        description:
          "مقالات ذات محتوى حول Notion والمرافق المحيطة بـ Notion.",
        value: ["notion"],
      },
      {
        name: "آخر",
        description: "مقالات اخرى.",
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
      return `Được đăng vào ${_datetime} bởi ${author}.`;
    },
    reading_time: (min: any) => {
      return `${min} phút đọc`;
    },
    views: (views: any) => {
      return `${views} lượt xem`;
    },
    tags: "Tags",
    relate_post: "مقالات ذات صلة:",
    table_of_contents: "جدول المحتويات",
  },
  blog: {
    blog: "Blog",
    intro: "هنا يمكنك أن تجد جميع مقالاتي",
    find_posts: "بحث في المقالات...",
    not_found_post: "لا توجد مشاركات",
  },
  tag: {
    tag: "Tag",
    tags: "Tags",
    intro: "يمكنك العثور على المقالات حسب العلامات أدناه:",
    not_found_post: "لا توجد مشاركات",
    post_by_tag: "المشاركات حسب العلامة:",
  },
  error_page: {
    404 : {
      title: "الصفحة غير موجودة",
      head: "آسف، لا أستطيع العثور على هذه الصفحة.",
      desc: "ولكن لا تقلق، يمكنك العثور على المزيد على صفحتي الرئيسية.",
      home_button: "Trang Chủ"
    }
  },
  common: {
    error: "خطأ",
    is_loading: "تحميل...",
    process_take_few_second: "قد تستغرق هذه العملية بضع ثوان، يرجى عدم إغلاق هذه الصفحة.",
  }
};

export default vi;
