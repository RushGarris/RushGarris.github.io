// Edit this file to update the site. Leave `repo` or `demo` empty ("") to hide that button.

const PROFILE = {
  name: "Rushton Garris",
  role: "Software Engineering student",
  blurb:
    "I'm a Software Engineering student at UNC Wilmington building mobile apps, bots, and small web projects. Right now I'm shipping features in a production Flutter and Firebase codebase.",
  location: "Wilmington, NC",
  availability: "Available May to August 2027",
  email: "rushtong06@gmail.com",
  github: "https://github.com/RushGarris",
  linkedin: "https://www.linkedin.com/in/rushton-garris-7a5a15346",
};

const SKILLS = [
  {
    group: "Languages",
    items: ["Java", "Python", "JavaScript", "TypeScript", "Dart", "SQL", "HTML", "CSS"],
  },
  {
    group: "Frameworks & Tools",
    items: ["Flutter", "Node.js", "discord.js", "Firebase", "SQLite", "Git & GitHub", "VS Code", "Linux"],
  },
  {
    group: "Practices",
    items: ["Object-Oriented Programming", "Data Structures", "Agile / Scrum", "Software Design", "Mobile Development"],
  },
];

const PROJECTS = [
  {
    title: "Kitty",
    kind: "Discord bot",
    status: "In progress",
    description:
      "A custom Discord bot for my 7-person family server. It keeps user profiles, a shared \"treats\" currency, and a family progress tracker in SQLite.",
    tags: ["TypeScript", "Node.js", "discord.js", "SQLite"],
    repo: "",
    demo: "",
  },
  {
    title: "Terraria Progression",
    kind: "Mobile app",
    status: "",
    description:
      "An interactive progression guide for Terraria, with a path for each class in the game. Firebase handles sign-in and stores your progress, or you can try it as a guest with no account.",
    tags: ["Flutter", "Dart", "Firebase"],
    repo: "https://github.com/RushGarris/terraria_progression",
    demo: "https://rushgarris.github.io/terraria_progression/",
  },
  {
    title: "Grandline Tic Tac Toe",
    kind: "Web game",
    status: "",
    description: "A One Piece themed tic tac toe game that runs right in the browser.",
    tags: ["HTML"],
    repo: "https://github.com/RushGarris/grandline-tic-tac-toe",
    demo: "https://rushgarris.github.io/grandline-tic-tac-toe/",
  },
];

const EXPERIENCE = [
  {
    title: "Undergraduate Software Developer",
    org: "University of North Carolina Wilmington",
    when: "Aug 2026 to present",
    points: [
      "Co-developing Coastal Eco Explorer, a production Flutter and Firebase app that helps visitors explore North Carolina coastal parks through maps, trail information, and wildlife identification, working directly with faculty lead Dr. Lucas Layman.",
      "Working through the project's issue backlog, taking issues from requirements to shipped code in an existing codebase.",
      "Designing and building an educational scavenger hunt and quiz feature for elementary school field trips, with question screens, answer tracking, scoring, and results tied into the app's existing park and wildlife data in Firebase.",
      "Using Git branching, code review, and Agile iterations to plan, test, and ship changes as requirements evolve.",
    ],
  },
  {
    title: "Team Leader",
    org: "Chick-fil-A, Wilmington",
    when: "Dec 2021 to present",
    points: [
      "Leading shifts of 8 to 12 team members, delegating tasks and re-prioritizing in real time to keep service running smoothly during high-volume periods.",
      "Trained and onboarded 10+ new hires, and resolve guest and operational issues on the spot through clear communication and problem-solving.",
    ],
  },
];
