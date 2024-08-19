/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1500 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Charlie Humbert",
  title: "Hello, I'm Charlie!",
  subTitle: emoji(
    "A writer and director with interest in animation, comedy, and archival work."
  ),
  resumeLink:
    "https://drive.google.com/uc?export=download&id=1eA2JMOzz8qPbSvfVBWk3V5uYdADtS38N", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  // github: "https://github.com/chumbert",
  linkedin: "https://www.linkedin.com/in/charliehumbert/",
  gmail: "charlie_humbert@icloud.com",
  instagram: "https://instagram.com/chumbert_",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Writer and media archivist",
  skills: [
    emoji(
      "📝 Interested in animated comedy for both kids and adults"
    ),
    emoji("🎞️ Former archives intern at Nickelodeon dealing with both physical and digital assets"),
    emoji(
      "💻 Proficient with Premiere Pro, FileMaker Pro, Airtable, Google Suite, Microsoft Office, and Adobe CC on both macOS and Windows"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */
  display: false // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Ohio University",
      logo: require("./assets/images/OU.png"),
      subHeader: "Bachelor of Science in Communications - Media Arts & Studies",
      duration: "August 2020 - April 2024",
      desc: "3.7 GPA, Cum Laude",
      descBullets: [
        "Placed 1st in 2024 OU 48-Hour Film Shootout",
        "Vice President of Rough Cut Collective (student-run film organizaiton)"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Archives Intern",
      company: "Nickelodeon Animation Studio",
      companylogo: require("./assets/images/Nickelodeon.png"),
      date: "June 2024 – August 2024",
      descBullets: [
        "Maintain physical assets for art galleries and offsite storage",
        "Assess, reorganize, and rehouse collected materials from vendor studio dating back to 1991",
        "Add to and maintain digital database using FileMaker Pro",
        "Coordinated with production staff to complete asset requests using VMS web",
        "Developed a streaming platform concept for Nickelodeon as part of a group project"
      ]
    },
    {
      role: "Intern",
      company: "Black Valley Films",
      companylogo: require("./assets/images/BVF.png"),
      date: "August 2023 – December 2023",
      descBullets: [
        "Reorganize hard drive file system dating back to 2002",
        "Create and maintain inventory sheet of office supplies",
        "Make sales calls, migrate sales CRM from Google Sheets to Airtable",
        "Purchase and manage Synology NAS for office"
        ]
    },
    {
      role: "Pizza Cook and Delivery Driver",
      company: "LaRosa's Pizza",
      companylogo: require("./assets/images/larosas.png"),
      date: "Jul 2018 – Aug 2021",
      desc: "Work as a team to make and deliver quality food on-time and as-expected"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Short Films",
  subtitle: "SOME PROJECTS I HAVE WORKED ON",
  projects: [
    {
      image: require("./assets/images/oil2000.jpg"),
      projectName: "Oil 2000",
      projectDesc: "A comedy short I wrote and directed in Fall 2022",
      footerLink: [
        {
          name: "Watch it here",
          url: "https://youtube.com/watch?v=Sb4DrsD5hEc"
        }
        // Ensure there's a comma after the last object if more items are added
      ]
    },
    {
      image: require("./assets/images/MyMainSqueeze.jpg"),
      projectName: "My Main Squeeze",
      projectDesc: "Winner of Ohio University's 2024 48-hour Film Shootout. I co-wrote, DP'ed, and edited",
      footerLink: [
        {
          name: "Watch it here",
          url: "https://youtube.com/watch?v=ir-1YJ0kQxA"
        }
        // Ensure there's a comma after the last object if more items are added
      ]
    },
    {
      image: require("./assets/images/overdue.jpg"),
      projectName: "Overdue",
      projectDesc: "Short film made with Rough Cut Collective. Credit: Director of Photography",
      footerLink: [
        {
          name: "Watch it here",
          url: "https://youtube.com/watch?v=KzjpZy3RlMM"
        }
        // Ensure there's a comma after the last object if more items are added
      ]
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Script Samples 📝"),
  subtitle: "Various projects I've written",
  achievementsCards: [
    {
      title: "Go Fish",
      subtitle: "A sci-fi horror/western script inspired by The Twilight Zone",
      image: require("./assets/images/blank.png"),
      imageAlt: "",
      footerLink: [
        {
          name: "Email me for a sample",
          url: "mailto:charlie_humbert@icloud.com"
        }
      ]
    },
    {
      title: "Bob's Burgers Spec",
      subtitle: "Currently work-in-progress",
      image: require("./assets/images/blank.png"),
      imageAlt: "",
      footerLink: [
        {
          name: "Email me for a sample",
          url: "mailto:charlie_humbert@icloud.com"
        }
      ]
    },
    {
      title: "Oil 2000",
      subtitle: "The story of two kids and their magic oil well.",
      image: require("./assets/images/blank.png"),
      imageAlt: "",
      footerLink: [
        {
          name: "Download link",
          url: "https://drive.google.com/uc?export=download&id=1pVG2zsV-WHVDXPQwYvxhxhbZvdNXUlD0"
        }
        // Ensure there's a comma if more items are added
      ]
    }
  ],
  display: true //set to show or hide
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};


// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Resume embedded Link
  Resume:[
    "https://drive.google.com/uc?export=download&id=1eA2JMOzz8qPbSvfVBWk3V5uYdADtS38N"
    ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "For inquiries, Resume and Cover Letter copies, or script samples:",
  email_address: "charlie_humbert@icloud.com",
  number: "",
};

// Twitter Section

const twitterDetails = {
  userName: "chumbert_", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
