const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    event.preventDefault();

    const product = button.parentNode;
    const productDetails = product.querySelector('.product-details');

    const screenWidth = window.screen.availWidth;
    const screenHeight = window.screen.availHeight;
    const windowWidth = Math.min(screenWidth, 800);
    const windowHeight = Math.min(screenHeight, 600);
    const windowLeft = (screenWidth - windowWidth) / 2;
    const windowTop = (screenHeight - windowHeight) / 2;

    const detailsWindow = window.open('', 'Product Details', `width=${windowWidth},height=${windowHeight},left=${windowLeft},top=${windowTop}`);
    detailsWindow.document.write(`
      <html>
        <head>
          <title>Product Details</title>
          <style>
            /* CSS 스타일 작성 */
            body { font-family: Arial, sans-serif; margin: 0; padding: 0; }
            .header { position: fixed; top: 0; left: 0; width: 100%; background-color: #f8f8f8; padding: 20px; }
            .product-details { display: flex; flex-wrap: wrap; padding: 20px; }
            .product-details > div { flex: 1 0 300px; padding: 10px; }
            .product-details img { max-width: 100%; max-height: 100%; }
            .review-form { padding: 20px; }
            .review-form label { display: block; margin-bottom: 10px; }
            .review-form textarea { width: 100%; height: 100px; }
            .review-form button { margin-top: 10px; }
          </style>
          <script>
            function addReview(reviewData) {
              const reviewsContainer = document.getElementById("reviews-container");

              const reviewElement = document.createElement("div");
              reviewElement.classList.add("review");
              
              const nameElement = document.createElement("p");
              nameElement.innerText = reviewData.name;
              reviewElement.appendChild(nameElement);
              
              const commentElement = document.createElement("p");
              commentElement.innerText = reviewData.comment;
              reviewElement.appendChild(commentElement);
              
              reviewsContainer.appendChild(reviewElement);
            }
          </script>
        </head>
        <body>
          <div class="header">내 향</div>
          <div class="product-details">
            <div>
              <img src="${product.querySelector('img').src}" alt="Product Image">
            </div>
            <div>
              <h3>${product.querySelector('h3').innerText}</h3>
              <p>${product.querySelector('p:nth-of-type(1)').innerText}</p>
              <p>${product.querySelector('p:nth-of-type(2)').innerText}</p>
              <button id="review-button">리뷰 작성</button>
            </div>
          </div>
          <div id="reviews-container"></div>
          <script>
            document.getElementById("review-button").addEventListener("click", () => {
              const reviewWindow = window.open('', 'Write Review', 'width=500,height=500');
              reviewWindow.document.write(\`
                <!DOCTYPE html>
                <html>
                <head>
                  <title>Write Review</title>
                  <style>
                    /* CSS 스타일 작성 */
                    body { font-family: Arial, sans-serif; margin: 0; padding: 20px; }
                    .review-form { max-width: 300px; margin: 0 auto; }
                    .review-form label { display: block; margin-bottom: 10px; }
                    .review-form textarea { width: 100%; height: 100px; }
                    .review-form button { margin-top: 10px; }
                  </style>
                </head>
                <body>
                  <h2>리뷰 작성</h2>
                  <form id="review-form" class="review-form">
                    <label for="name">이름:</label>
                    <input type="text" id="name" required>
                    <br>
                    <label for="comment">리뷰 내용:</label>
                    <textarea id="comment" rows="4" cols="50" required></textarea>
                    <br>
                    <button type="submit">리뷰 작성 완료</button>
                  </form>
                  <script>
                    document.getElementById("review-form").addEventListener("submit", (event) => {
                      event.preventDefault();
                      const name = document.getElementById("name").value;
                      const comment = document.getElementById("comment").value;
                      const reviewData = { name, comment };
                      window.opener.addReview(reviewData);
                      window.close();
                    });
                  </script>
                </body>
                </html>\`);
              reviewWindow.document.close();
            });
          </script>
        </body>
      </html>
    `);
    detailsWindow.document.close();
  });
});

    
    //     const addToCartButtons = document.querySelectorAll('.add-to-cart');
        
    //     addToCartButtons.forEach(button => {
    //     button.addEventListener('click', () => {
    //         const product = button.parentNode;
    //         const productDetails = product.querySelector('.product-details');
            
    //         const screenWidth = window.screen.availWidth;
    //         const screenHeight = window.screen.availHeight;
    //         const windowWidth = Math.min(screenWidth, 800);
    //         const windowHeight = Math.min(screenHeight, 600);
    //         const windowLeft = (screenWidth - windowWidth) / 2;
    //         const windowTop = (screenHeight - windowHeight) / 2;
            
    //         const detailsWindow = window.open('', 'Product Details', 'width=' + windowWidth + ',height=' + windowHeight + ',left=' + windowLeft + ',top=' + windowTop);
    //             detailsWindow.document.write('<html><head><title>Product Details</title>');
    //             detailsWindow.document.write('<style>');
    //             detailsWindow.document.write('body { font-family: Arial, sans-serif; margin: 0; padding: 0; }');
    //             detailsWindow.document.write('.product-details { display: flex; height: 100%; }');
    //             detailsWindow.document.write('.product-details > div { flex: 1; padding: 20px; }');
    //             detailsWindow.document.write('.product-details img { max-width: 100%; max-height: 100%; }');
    //             detailsWindow.document.write('.header { position: fixed; top: 0; left: 0; width: 100%; background-color: #f8f8f8; padding: 20px; }');
    //             detailsWindow.document.write('</style>');
    //             detailsWindow.document.write('</head><body>');
    //             detailsWindow.document.write('<div class="header"> 내 향 </div>');
    //             detailsWindow.document.write('<div class="product-details">');
    //             detailsWindow.document.write('<div><img src="' + product.querySelector('img').src + '"></div>');
    //             detailsWindow.document.write('<div>');
    //             detailsWindow.document.write('<h3>' + product.querySelector('h3').innerText + '</h3>');
    //             detailsWindow.document.write('<p>' + product.querySelector('p:nth-of-type(1)').innerText + '</p>');
    //             detailsWindow.document.write('<p>' + product.querySelector('p:nth-of-type(2)').innerText + '</p>');
    //             detailsWindow.document.write('</div>');
    //             detailsWindow.document.write('</div>');
    //             detailsWindow.document.write('</body></html>');
    //             //사진, 상품명, 설명과 함께 헤더창이 띄어짐


    //             //아래부터는 같은 창에서 리뷰 작성 가능
    //             detailsWindow.document.write('document.getElementById("review-button").addEventListener("click", () => {');
    //             detailsWindow.document.write('const reviewWindow = window.open("", "Write Review", "width=500,height=500");');
    //             detailsWindow.document.write('reviewWindow.document.write(\'<!DOCTYPE html><html><head><title>Write Review</title><style>body { font-family: Arial, sans-serif; margin: 0; padding: 20px; }</style></head><body>\');');
    //             detailsWindow.document.write('reviewWindow.document.write(\'<h2>리뷰 작성</h2>\');');
    //             detailsWindow.document.write('reviewWindow.document.write(\'<form id="review-form">\');');
    //             detailsWindow.document.write('reviewWindow.document.write(\'<label for="name">이름:</label>\');');
    //             detailsWindow.document.write('reviewWindow.document.write(\'<input type="text" id="name" required>\');');
    //             detailsWindow.document.write('reviewWindow.document.write(\'<br>\');');
    //             detailsWindow.document.write('reviewWindow.document.write(\'<label for="comment">리뷰 내용:</label>\');');
    //             detailsWindow.document.write('reviewWindow.document.write(\'<textarea id="comment" rows="4" cols="50" required></textarea>\');');
    //             detailsWindow.document.write('reviewWindow.document.write(\'<br>\');');
    //             detailsWindow.document.write('reviewWindow.document.write(\'<button type="submit">리뷰 작성 완료</button>\');');
    //             detailsWindow.document.write('reviewWindow.document.write(\'</form>\');');
    //             detailsWindow.document.write('reviewWindow.document.write(\'<script>\');');
    //             detailsWindow.document.write('reviewWindow.document.write(\'document.getElementById("review-form").addEventListener("submit", (event) => {\');');
    //             detailsWindow.document.write('reviewWindow.document.write(\'event.preventDefault();\');');
    //             detailsWindow.document.write('reviewWindow.document.write(\'const name = document.getElementById("name").value;\');');
    //             detailsWindow.document.write('reviewWindow.document.write(\'const comment = document.getElementById("comment").value;\');');
    //             detailsWindow.document.write('reviewWindow.document.write(\'const reviewData = { name, comment };\');');
    //             detailsWindow.document.write('reviewWindow.document.write(\'window.opener.addReview(reviewData);\');');
    //             detailsWindow.document.write('reviewWindow.document.write(\'window.close();\');');
    //             etailsWindow.document.write('reviewWindow.document.write(\'})\');');
    //             detailsWindow.document.write('reviewWindow.document.write(\'</script>\');');
    //             detailsWindow.document.write('</script>');
    //             detailsWindow.document.write('</body></html>');
    //             detailsWindow.document.close();

    //         const addToCartButtons = document.querySelectorAll('.add-to-cart');

    //     addToCartButtons.forEach(button => {
    //     button.addEventListener('click', () => {
    //     const product = button.parentNode;
    //     const productDetails = product.querySelector('.product-details');

    //     const detailsWindow = window.open('', 'Product Details', 'width=100%,height=100%');
    //     detailsWindow.document.write(`
    //         <html>
    //         <head>
    //             <title>Product Details</title>
    //             <style>
    //             /* 상품 상세정보 윈도우의 CSS 스타일 작성 */
    //             ${window.document.head.innerHTML}
    //             </style>
    //         </head>
    //         <body>
    //             <header class="header">
    //             <h1>내 향</h1>
    //             </header>
    //             <div class="product-details">
    //             <img src="${product.querySelector('img').src}" alt="상품 이미지">
    //             <div>
    //                 <h3>${product.querySelector('h3').innerText}</h3>
    //                 <p>${product.querySelector('p:nth-of-type(1)').innerText}</p>
    //                 <p>${product.querySelector('p:nth-of-type(2)').innerText}</p>
    //             </div>
    //             </div>
    //         </body>
    //         </html>
    //     `);
    //     detailsWindow.document.close();
    //     });
    // });
    //     });
    // });

// writeReviewButtons.forEach(button => {
//     button.addEventListener('click', () => {
//       const product = button.parentNode;
//       const productDetails = product.querySelector('.product-details');
      
//       const reviewWindow = window.open('', 'Review', 'width=500,height=500');
//       reviewWindow.document.write('<html><head><title>Review</title>');
//       reviewWindow.document.write('<style>');
//       reviewWindow.document.write('body { font-family: Arial, sans-serif; margin: 0; padding: 20px; }');
//       reviewWindow.document.write('h3 { margin-top: 0; }');
//       reviewWindow.document.write('label { display: block; margin-bottom: 10px; }');
//       reviewWindow.document.write('textarea { width: 100%; height: 100px; resize: vertical; }');
//       reviewWindow.document.write('button { margin-top: 10px; }');
//       reviewWindow.document.write('</style>');
//       reviewWindow.document.write('</head><body>');
//       reviewWindow.document.write('<h3>리뷰 작성</h3>');
//       reviewWindow.document.write('<form id="review-form">');
//       reviewWindow.document.write('<label for="name">이름:</label>');
//       reviewWindow.document.write('<input type="text" id="name" name="name">');
//       reviewWindow.document.write('<label for="comment">리뷰:</label>');
//       reviewWindow.document.write('<textarea id="comment" name="comment"></textarea>');
//       reviewWindow.document.write('<button type="submit">작성</button>');
//       reviewWindow.document.write('</form>');
//       reviewWindow.document.write('<div id="review-list"></div>');
//       reviewWindow.document.write('<script>');
//       reviewWindow.document.write('const reviewForm = reviewWindow.document.getElementById("review-form");');
//       reviewWindow.document.write('const reviewList = reviewWindow.document.getElementById("review-list");');
//       reviewWindow.document.write('reviewForm.addEventListener("submit", event => {');
//       reviewWindow.document.write('event.preventDefault();');
//       reviewWindow.document.write('const nameInput = reviewForm.elements["name"];');
//       reviewWindow.document.write('const commentInput = reviewForm.elements["comment"];');
//       reviewWindow.document.write('const name = nameInput.value;');
//       reviewWindow.document.write('const comment = commentInput.value;');
//       reviewWindow.document.write('if (name && comment) {');
//       reviewWindow.document.write('const reviewItem = reviewWindow.document.createElement("div");');
//       reviewWindow.document.write('reviewItem.innerHTML = `<strong>${name}</strong>: ${comment}`;');
//       reviewWindow.document.write('reviewList.appendChild(reviewItem);');
//       reviewWindow.document.write('nameInput.value = "";');
//       reviewWindow.document.write('commentInput.value = "";');
//       reviewWindow.document.write('}');
//       reviewWindow.document.write('});');
//       reviewWindow.document.write('</script>');
//       reviewWindow.document.write('</body></html>');
//       reviewWindow.document.close();
      
//       // 리뷰 저장 기능
//     });
//   });