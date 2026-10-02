const news = [

  {
    year: 2026,

    icon: "🎉",

    text:
      'Our paper "Hierarchical Superpixel Segmentation by Searching Seeds" has been accepted by IEEE Transactions on Image Processing (TIP).',

    authors:
      'Yuxuan Zhang, <strong>Junyi Guan*</strong>, Xiuli Ji, Yangyang Zhao, Xiongxiong He, and Sheng Li',

    paper:
      "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=Hexu0igAAAAJ&citation_for_view=Hexu0igAAAAJ:cFHS6HbyZ2cC",

    code:
      "https://github.com/Guanjunyi/HSSS"
  },


  {
    year: 2026,

    icon: "🎉",

    text:
      'Our paper "Peak-Padding: Clustering by Padding Density Peaks With the Minimum Padding Cost" has been published in IEEE Transactions on Neural Networks and Learning Systems (TNNLS).',

    authors:
      '<strong>Junyi Guan</strong>, Bingbing Jiang, Weiguo Sheng*, Yangyang Zhao, Sheng Li, and Xiongxiong He',

    paper:
      "https://doi.org/10.1109/TNNLS.2025.3606527",

    code:
      "https://github.com/Guanjunyi/PeakPading"
  },


  {
    year: 2026,

    icon: "🎉",

    text:
      'Our paper "Multi-view Feature Selection Method with Adaptive Projection Subspace Fusion" has been accepted by Pattern Recognition.',

    authors:
      'J. Liu, C. Zhang, T. Zhou, Y. Liu, R. Sheikhpour, Y. Wang, <strong>J. Guan</strong>, J. Chen, et al.',

    paper:
      "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=Hexu0igAAAAJ&citation_for_view=Hexu0igAAAAJ:u_35RYKgDlwC",

    code:
      ""
  }

];


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

      <div>

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

      <div class="news-authors">
        ${item.authors}
      </div>

    </div>

  `;

});
