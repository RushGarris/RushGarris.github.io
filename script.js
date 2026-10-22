const $ = (id) => document.getElementById(id);

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

function chips(items) {
  const wrap = el("div", "chips");
  items.forEach((t) => wrap.append(el("span", "chip", t)));
  return wrap;
}

function linkButton(label, href, solid) {
  const a = el("a", `btn btn--small ${solid ? "btn--solid" : "btn--ghost"}`, label);
  a.href = href;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  return a;
}

// Hero
$("name").textContent = PROFILE.name;
$("role").textContent = PROFILE.role;
$("blurb").textContent = PROFILE.blurb;
$("location").textContent = PROFILE.location;
$("availability").textContent = PROFILE.availability;

// Skills
SKILLS.forEach((s) => {
  const row = el("div", "skill-group reveal");
  row.append(el("h3", "", s.group), chips(s.items));
  $("skills-list").append(row);
});

// Projects
PROJECTS.forEach((p, i) => {
  const card = el("article", "card reveal");
  card.style.setProperty("--d", `${(i % 2) * 0.12}s`);

  const top = el("div", "card__top");
  top.append(el("span", "card__kind", p.kind));
  if (p.status) top.append(el("span", "card__status", p.status));

  const links = el("div", "card__links");
  if (p.demo) links.append(linkButton("Live demo", p.demo, true));
  if (p.repo) links.append(linkButton("Code", p.repo, !p.demo));
  if (!p.demo && !p.repo) links.append(el("span", "card__note", "No public repo yet"));

  card.append(top, el("h3", "", p.title), el("p", "", p.description), chips(p.tags), links);
  $("projects-list").append(card);
});

// Experience
EXPERIENCE.forEach((j) => {
  const row = el("div", "job reveal");
  const body = el("div");
  const list = el("ul");
  j.points.forEach((pt) => list.append(el("li", "", pt)));
  body.append(el("h3", "", j.title), el("div", "job__org", j.org), list);
  row.append(el("div", "job__when", j.when), body);
  $("experience-list").append(row);
});

// Contact
const contact = $("contact-links");
const emailBtn = el("a", "btn btn--solid", "Email me");
emailBtn.href = `mailto:${PROFILE.email}`;
contact.append(emailBtn);
[["GitHub", PROFILE.github], ["LinkedIn", PROFILE.linkedin]].forEach(([label, href]) => {
  const a = el("a", "btn btn--ghost", label);
  a.href = href;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  contact.append(a);
});

$("footer-text").textContent = `© ${new Date().getFullYear()} ${PROFILE.name}`;

// Theme toggle: follows the system setting until the visitor picks one
const root = document.documentElement;
const toggle = $("theme-toggle");
const systemDark = window.matchMedia("(prefers-color-scheme: dark)");
const isDark = () => (root.dataset.theme ? root.dataset.theme === "dark" : systemDark.matches);

function syncToggle() {
  toggle.setAttribute("aria-label", isDark() ? "Switch to light theme" : "Switch to dark theme");
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.content = isDark() ? "#14241b" : "#f4eee0";
}

toggle.addEventListener("click", () => {
  const next = isDark() ? "light" : "dark";
  root.dataset.theme = next;
  try { localStorage.setItem("theme", next); } catch (e) {}
  syncToggle();
});
systemDark.addEventListener("change", syncToggle);
syncToggle();

// Staggered reveal on load / scroll
const items = document.querySelectorAll(".reveal");
document.querySelectorAll(".hero .reveal").forEach((n, i) => n.style.setProperty("--d", `${i * 0.09}s`));

if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
    }),
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  items.forEach((n) => io.observe(n));
} else {
  items.forEach((n) => n.classList.add("is-in"));
}
