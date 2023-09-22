---
layout: page
---

<script setup lang='ts'>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

interface TeamMember {
  avatar: string;
  name: string;
  github: string;
  description: string;
  link: string;
}

function getAvatarUrl(name: string) {
  return `https://github.com/${name}.png`;
}

const externalSvg = '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Personal site</title><path d="M14 5C13.4477 5 13 4.55228 13 4C13 3.44772 13.4477 3 14 3H20C20.5523 3 21 3.44772 21 4V10C21 10.5523 20.5523 11 20 11C19.4477 11 19 10.5523 19 10V6.41421L11.7071 13.7071C11.3166 14.0976 10.6834 14.0976 10.2929 13.7071C9.90237 13.3166 9.90237 12.6834 10.2929 12.2929L17.5858 5H14ZM5 7C4.44772 7 4 7.44772 4 8V19C4 19.5523 4.44772 20 5 20H16C16.5523 20 17 19.5523 17 19V14.4375C17 13.8852 17.4477 13.4375 18 13.4375C18.5523 13.4375 19 13.8852 19 14.4375V19C19 20.6569 17.6569 22 16 22H5C3.34315 22 2 20.6569 2 19V8C2 6.34315 3.34315 5 5 5H9.5625C10.1148 5 10.5625 5.44772 10.5625 6C10.5625 6.55228 10.1148 7 9.5625 7H5Z"/></svg>'

const teamMembers: TeamMember[] = [
  {
    name: "Riccardo Brasca",
    github: "riccardobrasca",
    description: "Speaker",
    link: "https://webusers.imj-prg.fr/~riccardo.brasca/"
  },
  {
    name: "Oliver Butterley",
    github: "oliver-butterley",
    description: "Local organizer - contact for practical stuff",
    link: "https://www.mat.uniroma2.it/butterley/"
  },
  {
    name: "Kevin Buzzard",
    github: "kbuzzard",
    description: "Speaker",
    link: "http://wwwf.imperial.ac.uk/~buzzard/"
  },
  {
    name: "Floris van Doorn",
    github: "fpvandoorn",
    description: "Speaker and scientific organizer",
    link: "https://github.com/fpvandoorn"
  },
  {
    name: "Rafael Greenblatt",
    github: "RafaelGreenblatt",
    description: "Local organizer",
    link: "https://www.mat.uniroma2.it/~greenblatt/"
  },
  {
    name: "Marco Lenci",
    github: "marcolenci",
    description: "Local organizer",
    link: "https://www.unibo.it/sitoweb/marco.lenci/"
  },
  {
    name: "Filippo A. E. Nuccio Mortarino Majno di Capriglio",
    github: "faenuccio",
    description: "Speaker",
    link: "https://perso.univ-st-etienne.fr/nf51454h/"
  },
  {
    name: "Gihan Marasingha",
    github: "gihanmarasingha",
    description: "Speaker and scientific organizer",
    link: "https://mathematics.exeter.ac.uk/staff/gm299?sm=gm299"
  },
  {
    name: "Yoh Tanimoto",
    github: "yoh-tanimoto",
    description: "Local organizer",
    link: "https://www.mat.uniroma2.it/~tanimoto/"
  },
].map((element) => {
  return {
    name: element.name,
    github: element.github,
    title: element.description,
    links: [
        { icon: 'github', link: 'https://github.com/' + element.github },
        { icon: {svg: externalSvg}, link: element.link }
        ],
    avatar: getAvatarUrl(element.github),
  };
}).map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value);

</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>Event Team</template>
  </VPTeamPageTitle>
  <VPTeamMembers size="small" :members="teamMembers" />
</VPTeamPage>
