const news = [

  {
    year: 2026,
    icon: "🎉",
    text: 'Congratulations to Yuxuan Zhang! Our paper "Hierarchical Superpixel Segmentation by Searching Seeds" has been accepted by IEEE Transactions on Image Processing (TIP).',

    paper:
      "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=Hexu0igAAAAJ&citation_for_view=Hexu0igAAAAJ:cFHS6HbyZ2cC",

    code:
      "https://github.com/Guanjunyi/HSSS"
  }

];


const newsContainer = document.getElementById("news-list");


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

      <span>
        ${item.text}
      </span>

      <span class="news-links">
        ${linksHTML}
      </span>

    </div>
  `;

});
