import FacebookIcon from "./images/facebook_icon";
import InstagramIcon from "./images/instagram_icon";
import LinkedinIcon from "./images/linkedin_icon";
import YoutubeIcon from "./images/youtube_icon";

 export const footerSections: FooterSection[] = [
    {
      title: "ABOUT",
      links: [
        { label: "Contact Us", href: "/contact" },
        { label: "About Us", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Licensing", href: "/licensing" },
        { label: "Corporate Information", href: "/corporate" },
      ],
    },
    {
      title: "HELP",
      links: [
        { label: "Payments", href: "/payments" },
        { label: "Shipping", href: "/shipping" },
        { label: "Cancellation & Returns", href: "/returns" },
        { label: "FAQ", href: "/faq" },
        { label: "Report Infringement", href: "/report" },
      ],
    },
    {
      title: "CONSUMER POLICY",
      links: [
        { label: "Cancellation & Returns", href: "/policy/returns" },
        { label: "Terms Of Use", href: "/terms" },
        { label: "Security", href: "/security" },
        { label: "Privacy", href: "/privacy" },
        { label: "Sitemap", href: "/sitemap" },
      ],
    },
  ];

  export const socialLinks = [
    { icon: <FacebookIcon />, href: "https://facebook.com", label: "Facebook" },
    {
      icon: <InstagramIcon />,
      href: "https://instagram.com",
      label: "Instagram",
    },
    { icon: <LinkedinIcon />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <YoutubeIcon />, href: "https://youtube.com", label: "YouTube" },
  ];

  