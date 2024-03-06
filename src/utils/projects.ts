interface Project {
  name: string;
  link: string;
  description: string;
  technologies: string;
  contributor?: boolean;
}

export const projects = [
  {
    name: "Arch Install Guide",
    link: "https://github.com/quiet69/Arch-Linux-install-guide",
    description: "A simple to follow Arch Linux install guide.",
    technologies: "Linux, Shell",
  },
  {
    name: "Discord-Dominatrix",
    link: "https://github.com/quiet69/Discord-Dominatrix",
    description: "Disables discord account temporarily until the owner changes password.",
    technologies: "JavaScript",
    contributor: true,
  },
  {
    name: "Face Anonymizer using Neural Networks",
    link: "https://github.com/quiet69/face_anonymizer",
    description: "Make sure your cute face is anonymous online!",
    technologies: "Python",
  },
  {
    name: "BCI Wheelchair",
    link: "https://github.com/quiet69/BCI-Controlled-wheelchair-with-text-to-speech",
    description: "A text to speech python GUI keyboard desgned for a project based on Brain Computing Interfaces on the raspberry pi.",
    technologies: "Python",
    contributor: true,
  },
  {
    name: "Discord Puppeteer",
    link: "https://github.com/quiet69/Discord-Puppet",
    description: "Automate discord logins!",
    technologies: "JavaScript",
  },
  {
    name: "Empress Discord Self-Bot",
    link: "https://github.com/quiet69/Empress-Discord-Self-Bot",
    description: "Automate your discord account with token!",
    technologies: "JavaScript",
  },
] satisfies Project[];
