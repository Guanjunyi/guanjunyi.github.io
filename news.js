/* =========================================================
   Junyi Guan - News
   ========================================================= */

const news = [

  {
    year: 2026,

    icon: "🎉",

    text:
      'Our paper "Hierarchical Superpixel Segmentation by Searching Seeds", led by Yuxuan Zhang, has been accepted by IEEE Transactions on Image Processing (TIP).',

    paper:
      "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=Hexu0igAAAAJ&citation_for_view=Hexu0igAAAAJ:cFHS6HbyZ2cC",

    code:
      "https://github.com/Guanjunyi/HSSS"
  }

];


/* =========================================================
   Automatically render news
   ========================================================= */

const newsContainer =
  document.getElementById("news-list");


news.forEach(item => {

  let linksHTML = "";


  if (item.paper) {

    linksHTML += `

      <a
        href="${item.paper}"
        target="_blank"
        rel="noopener noreferrer"
      >
        [Paper]
      </a>

    `;

  }


  if (item.code) {

    linksHTML += `

      <a
        href="${item.code}"
        target="_blank"
        rel="noopener noreferrer"
      >
        [Code]
      </a>

    `;

  }


  newsContainer.innerHTML += `

    <div class="news-item">

      <span class="news-year">
        ${item.year}
      </span>

      <span class="news-icon">
        ${item.icon}
      </span>

      <span class="news-text">
        ${item.text}
      </span>

      <span class="news-links">
        ${linksHTML}
      </span>

    </div>

  `;

});
