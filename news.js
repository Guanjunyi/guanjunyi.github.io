/* =========================================================
   Automatically generate News from publications.js
   ========================================================= */

const newsContainer =
  document.getElementById("news-list");


const newsPublications = publications
  .filter(pub => pub.news === true)
  .sort((a, b) => b.year - a.year);


newsPublications.forEach(pub => {

  let actionText = "";

  if (pub.status === "accepted") {

    actionText =
      `has been accepted by ${pub.journal}.`;

  } else if (pub.status === "published") {

    actionText =
      `has been published in ${pub.journal}.`;

  } else {

    actionText =
      `has been published in ${pub.journal}.`;

  }


  let linksHTML = "";


  if (pub.paper) {

    linksHTML += `
      <a
        href="${pub.paper}"
        target="_blank"
        rel="noopener noreferrer"
      >
        [Paper]
      </a>
    `;

  }


  if (pub.code) {

    linksHTML += `
      <a
        href="${pub.code}"
        target="_blank"
        rel="noopener noreferrer"
      >
        [Code]
      </a>
    `;

  }


  newsContainer.innerHTML += `

    <div class="news-item">

      <div>

        <span class="news-year">
          ${pub.year}
        </span>

        <span class="news-icon">
          🎉
        </span>

        <span class="news-text">
          Our paper "${pub.title}" ${actionText}
        </span>

        <span class="news-links">
          ${linksHTML}
        </span>

      </div>

      <div class="news-authors">
        ${pub.authors}
      </div>

    </div>

  `;

});
