const news = [

  {
    year: 2026,
    text: 'Congratulations to Yuxuan Zhang! Our paper "Hierarchical Superpixel Segmentation by Searching Seeds" has been accepted by IEEE Transactions on Image Processing (TIP).'
  }

];


const newsContainer = document.getElementById("news-list");

news.forEach(item => {

  newsContainer.innerHTML += `
    <div class="news-item">

      <span class="news-year">
        ${item.year}
      </span>

      ${item.text}

    </div>
  `;

});
