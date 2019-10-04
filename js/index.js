new GitHubCalendar(".calendar", "mark-halls", { responsive: true });

const navItems = ["About", "Skills", "Projects", "Contact", "Social"];

const skills = [
  {
    name: "HTML5",
    description:
      "Let me help you update your site with current best practices.",
    logo: "fa-html5"
  },
  {
    name: "CSS3",
    description:
      "I have a responsive first philosophy with a strong emphasis on accessibility.",
    logo: "fa-css3-alt"
  },
  {
    name: "JS",
    description:
      "Extensive experience with JS on both the frontend and backend.",
    logo: "fa-js"
  }
];

const projects = [
  {
    title: "Github User Card",
    description: `A project to practice API calls and web components. It displays the Github profile information for a users followers.`,
    link: "./projects/Github-UserCard/index.html",
    img: "./images/Github-UserCard.png",
    techStack: "Javascript, HTML, CSS",
    github: "https://github.com/mark-halls/github-usercard",
    accomplishments: []
  },
  {
    title: "Lambda Times",
    description:
      "A full featured website featuring a caroasel and article cards.",
    link: "./projects/Lambda-Times/index.html",
    img: "./images/Lambda_Times.png",
    techStack: "Javascript, HTML, CSS",
    github: "https://github.com/mark-halls/Sprint-Challenge-Applied-Javascript",
    accomplishments: []
  },
  {
    title: "Responsive Design",
    description: "A sample website demonstrating responsive design techniques.",
    link: "./projects/Responsive-Design/index.html",
    img: "./images/Responsive.png",
    techStack: "HTML, CSS",
    github: "https://github.com/mark-halls/responsive-web-design-I",
    accomplishments: []
  }
];

const NavItem = nav => {
  const link = document.createElement("a");
  link.href = `#${nav.toLowerCase()}`;
  link.textContent = nav;

  return link;
};

const SkillCard = skill => {
  const card = document.createElement("div");
  card.classList.add("skills-card");

  const icon = document.createElement("i");
  icon.classList.add("fab", skill.logo);
  card.appendChild(icon);

  const title = document.createElement("p");
  title.classList.add("skills-card-title");
  title.textContent = skill.name;
  card.appendChild(title);

  const description = document.createElement("p");
  description.classList.add("skills-card-description");
  description.textContent = skill.description;
  card.appendChild(description);

  return card;
};

const ProjectCard = project => {
  const card = document.createElement("div");
  card.classList.add("projects-card");

  const img = document.createElement("img");
  img.src = project.img;
  card.appendChild(img);

  const link = document.createElement("a");
  link.classList.add("projects-card-title");
  link.href = project.link;
  link.textContent = project.title;
  card.appendChild(link);

  const stack = document.createElement("p");
  stack.textContent = project.techStack;
  card.appendChild(stack);

  const accomplishments = document.createElement("ul");
  card.appendChild(accomplishments);

  for (let item of project.accomplishments) {
    const li = document.createElement("li");
    li.textContent = item;
    accomplishments.appendChild(li);
  }

  const gitLink = document.createElement("a");
  gitLink.href = project.github;
  card.appendChild(gitLink);

  const icon = document.createElement("i");
  icon.classList.add("fab", "fa-github-square");
  gitLink.appendChild(icon);

  return card;
};

navItems.forEach(item => {
  const nav = document.querySelector("nav");
  nav.appendChild(NavItem(item));
});

skills.forEach(skill => {
  const cards = document.querySelector(".skills-cards");
  cards.appendChild(SkillCard(skill));
});

projects.forEach(project => {
  const cards = document.querySelector(".projects");
  cards.appendChild(ProjectCard(project));
});
