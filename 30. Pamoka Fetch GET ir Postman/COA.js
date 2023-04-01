const EXPERIENCES_ENDPOINT = "https://zany-skitter-caper.glitch.me/experiences";
const SKILLS_ENDPOINT = "https://zany-skitter-caper.glitch.me/skills";

const skillsSection = document.querySelector("#skills");
const experienceSection = document.querySelector("#experience");
// {
//     "companyName": "Microsoft",
//     "position": "Developer",
//     "description": "Working on multiple projects including but not limited to Teams, Office 365 and Azure",
//     "startYear": 2013,
//     "finishYear": 2015
// }

async function getData() {
  const skillsRequest = fetch(SKILLS_ENDPOINT);
  const experiencesRequest = fetch(EXPERIENCES_ENDPOINT); //cia tik sukuriam requesta, todel nerasom await. O apacioje saunam juos abu

  const [skillsRes, experiencesRes] = await Promise.all([
    skillsRequest,
    experiencesRequest,
  ]);
  const skills = await skillsRes.json();
  const experiences = await experiencesRes.json();

  experiences.forEach((exp) => generateExperience(exp));
  skills.forEach((sk) => generateSkill(sk));

  console.log(skills, experiences);
}

function generateSkill(skill) {
  const skillInput = document.createElement("input");
  skillInput.type = "range";
  skillInput.min = 1;
  skillInput.max = 100;
  skillInput.disabled = true;
  skillInput.value = skill.level;

  const titlePar = document.createElement("p");
  titlePar.textContent = skill.title;
  skillsSection.append(titlePar, skillInput);
}

function generateExperience(data) {
  const workTimePar = document.createElement("p");
  workTimePar.textContent = `${data.startYear} - ${data.finishYear}`;
  workTimePar.classList.add("green", "font-size");
  const positionPar = document.createElement("p");
  positionPar.textContent = `${data.position}`;

  const companyNamePar = document.createElement("p");
  companyNamePar.textContent = `${data.companyName}`;

  const descriptionPar = document.createElement("p");
  descriptionPar.textContent = `${data.description}`;

  experienceSection.append(
    workTimePar,
    positionPar,
    companyNamePar,
    descriptionPar
  );
}

getData();
