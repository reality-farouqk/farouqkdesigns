const currentYear = new Date().getFullYear();
const data = {
    sitename: "Farouqk Designs",
    sitetagline: "Something great is on it's way! ✨ 🔥",
    siteurl: "http://farouqkdesigns.com/",
    sitelogo: "",
    title: "Coming Soon!",
    description: "Currently working 👨‍💻 hard to bring you something awesome, can&apos;t wait to share it with you",
    newsletterheading: "Stay tuned for our live updates!",
    copyrightText: `Copyright © ${currentYear} | Designed By <a target="_blank" class="no-underline md:underline" href="https://www.linkedin.com/in/umarfarouqk/">Umar Farouqk</a>`,
    socialIconsHeading: "Follow me on →",
    hideSubscribeForm: true, // make true to disable subscription form 
    socialIcons: [
        {
            // icon: "facebook",
            // link: "http://farouqkdesigns.com/",
        },
        {
            icon: "twitter",
            link: "https://x.com/umarfarouqks",
        },
        {
            icon: "linkedIn",
            link: "https://www.linkedin.com/in/umarfarouqk/",
        },
    ],
    hide :{
        subscribeForm: true, // make true to disable subscription form         
        header: false,
        content: false,
        footer: false,
    }
}

export default data;
