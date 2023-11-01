// team.data.ts
// consumes the team data and adds the extra fields

import { team } from "../team";
import { externalSvg } from "./externalSvg";

export interface TeamMember {
  avatar: string;
  name: string;
  github: string;
  description?: string;
  link?: string;
}

function getAvatarUrl(name: string) {
  return `https://github.com/${name}.png`;
}

const teamMembers: TeamMember[] = team.map((el) => {
  return {
    name: el.name,
    github: el.github,
    title: el.description,
    links: [
      { icon: "github", link: `https://github.com/${el.github}` },
      { icon: { svg: externalSvg }, link: el.link },
    ],
    avatar: getAvatarUrl(el.github),
  };
});

export default {
  load() {
    return { team: teamMembers };
  },
};
