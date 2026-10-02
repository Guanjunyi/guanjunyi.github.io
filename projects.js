
const projects = [

  {
    title: "National Natural Science Foundation of China (NSFC), General Program",
    role: "Principal Investigator",
    period: "2027.01 – 2029.12"
  },

  {
    title: "National Natural Science Foundation of China (NSFC), Young Scientists Fund",
    role: "Principal Investigator",
    period: "2024.01 – 2026.12"
  },

  {
    title: "National Natural Science Foundation of China (NSFC), Key Program",
    role: "Participant",
    period: "2023 – 2027"
  }

];


/* =========================================================
   Automatically render projects
   ========================================================= */

const projectContainer = document.getElementById("project-list");

projects.forEach(project => {

  projectContainer.innerHTML += `

    <div class="project-item">

      <div class="project-title">
        ${project.title}
      </div>

      <div class="project-info">
        ${project.role} · ${project.period}
      </div>

    </div>

  `;

});
