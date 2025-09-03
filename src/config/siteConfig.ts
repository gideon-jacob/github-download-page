import type { ExtendedSiteConfiguration } from '../types';

// Configuration for PEC Events App
export const siteConfiguration: ExtendedSiteConfiguration = {
  application: {
    name: "PEC Events",
    tagName: "v1.0.0",
    description: "The official event notification system for Prathyusha Engineering College. Stay updated with all college events, workshops, seminars, and important announcements. Never miss an event with real-time notifications and a comprehensive event calendar.",
    logo: "/logo.png",
    screenshots: [
      "/screenshots/01.webp",
      "/screenshots/02.webp", 
      "/screenshots/03.webp",
      "/screenshots/04.webp",
      "/screenshots/05.webp",
      "/screenshots/06.webp",
      "/screenshots/07.webp",
      "/screenshots/08.webp",
      "/screenshots/09.webp",
      "/screenshots/10.webp",
      "/screenshots/11.webp",
      "/screenshots/12.webp",
      "/screenshots/13.webp",
      "/screenshots/14.webp"
    ],
    downloadLink: "https://github.com/gideon-jacob/pec-events-app/releases/latest",
    website: "https://pecevents.gideonjacob.in",
    github: "gideon-jacob/pec-events-app",
    bugs: "https://github.com/gideon-jacob/pec-events-app/issues",
    downloads: 150,
    size: 1.3,
    info: {
      minimumRequirement: "Android 6.0+",
      releasedOn: new Date(2025, 7, 24),
      releasedOnString: "Aug 24, 2025",
      updatedOnString: "Aug 30, 2025"
    },
    aboutJson: {
      "Version": "1.0.0",
      "Size": "1.3 MB",
      "Downloads": "150+",
      "License": "MIT",
      "Language": "TypeScript",
      "Platform": "Android",
      "Category": "Education"
    }
  },
  developer: {
    name: "PEC Developer Circle",
    logo: "/developer-icon.png",
    website: "https://pecdevcircle.org"
  },
  site: {
    primaryColor: "#01875f",
    statusCode: 200,
    basePath: "/",
    links: [
      {
        name: "GitHub", 
        href: "https://github.com/gideon-jacob/pec-events-app"
      }
    ]
  },
  privacyPolicy: {
    lastUpdated: new Date(2025, 7, 28),
    lastUpdatedString: "August 28, 2025",
    body: [
      {
        heading: "Introduction",
        content: [
          "Welcome to the Prathyusha Events App (\"we,\" \"us,\" or \"our\"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application (the \"App\"). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the application."
        ]
      },
      {
        heading: "Information We Collect",
        content: [
          "We may collect information about you in a variety of ways. The information we may collect via the App depends on the content and materials you use, and includes:",
          "",
          "**Personal Data**",
          "- **Student Information**: To create an account, we require your full name, college registration number, department, and a valid college email address.",
          "- **Publisher Information**: For faculty and club coordinators, we collect your name and department to create a publisher account.",
          "",
          "**Usage Data**",
          "- **App Activity**: We may collect information about your interactions with the App, such as which events you view and your responses to interest polls (\"Yes/No\"). This data is used to provide analytics to event organizers.",
          "- **Device Information**: We automatically collect certain information about your mobile device, including your device's unique ID and operating system, to send push notifications."
        ]
      },
      {
        heading: "How We Use Your Information",
        content: [
          "Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the App to:",
          "",
          "- Create and manage your account",
          "- Deliver push notifications about new events to your device",
          "- Provide event organizers with anonymized interest analytics to help them plan better",
          "- Monitor and analyze usage and trends to improve your experience with the App",
          "- Ensure the security and operational functionality of our services"
        ]
      },
      {
        heading: "Disclosure of Your Information",
        content: [
          "We do not sell, trade, or rent your personal identification information to others. We may share information we have collected about you in certain situations. Your information may be disclosed as follows:",
          "",
          "**By Law or to Protect Rights**",
          "If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.",
          "",
          "**Third-Party Service Providers**",
          "We may share your information with third parties that perform services for us or on our behalf, including data storage, hosting services, and push notification delivery. Our main service providers are:",
          "- **Supabase**: For database management and user authentication",
          "- **Amazon Web Services (AWS)**: For backend hosting (Lambda), file storage (S3), and content delivery (CloudFront)",
          "- **Native Notify**: For sending push notifications",
          "",
          "These third-party vendors have access to your personal information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose."
        ]
      },
      {
        heading: "Security of Your Information",
        content: [
          "We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse."
        ]
      },
      {
        heading: "Your Rights and Choices",
        content: [
          "You may at any time review or change the information in your account or terminate your account by:",
          "",
          "- Logging into your account settings and updating your account",
          "- Contacting us using the contact information provided below to request deletion of your account",
          "",
          "Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases."
        ]
      },
      {
        heading: "Changes to This Privacy Policy",
        content: [
          "We may update this Privacy Policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by posting the new Privacy Policy on this page."
        ]
      },
      {
        heading: "Contact Us",
        content: [
          "If you have questions or comments about this Privacy Policy, please contact us at:",
          "",
          "**Email**: [developerspec25@gmail.com](mailto:developerspec25@gmail.com)",
          "",
          "**GitHub**: [https://github.com/gideon-jacob/pec-events-app](https://github.com/gideon-jacob/pec-events-app)",
          "",
          "**Website**: [https://pecevents.gideonjacob.in](https://pecevents.gideonjacob.in)"
        ]
      }
    ]
  }
};