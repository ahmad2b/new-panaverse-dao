import { NavItems } from "@/types/NavItems";
import { SocialLinks } from "@/types/SocialLinks";
import {
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaYoutube,
  FaDiscord,
} from "react-icons/fa";

export const NAV_ITEMS: NavItems[] = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Curriculm",
    path: "/curriculm",
  },
  {
    label: "Community",
    path: "/community",
  },
];

export const SOCIAL_LINKS: SocialLinks[] = [
  {
    name: "Twitter",
    path: "https://twitter.com/Panaverse_edu",
    icon: FaTwitter,
  },
  {
    name: "Facebook",
    path: "https://www.facebook.com/groups/panaverse/",
    icon: FaFacebook,
  },
  {
    name: "Youtube",
    path: "https://www.youtube.com/@panaverse",
    icon: FaYoutube,
  },
  {
    name: "Discord",
    path: "https://discord.com/invite/f8dSmueC",
    icon: FaDiscord,
  },
  {
    name: "Github",
    path: "https://github.com/panaverse",
    icon: FaGithub,
  },
];
