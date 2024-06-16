// const images = [
//   {
//     url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat",
//   },
//   {
//     url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//   },
//   {
//     url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running",
//   },
//   {
//     url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
//     alt: "Alpine Spring Meadows",
//   },
//   {
//     url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
//     alt: "Nature Landscape",
//   },
//   {
//     url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
//     alt: "Lighthouse Coast Sea",
//   }
// ];

const images = [
  {
    url: "<https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260>",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "<https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260>",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "<https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260>",
    alt: "Group of Horses Running",
  },
];
// .map(img => ({ ...img, url: img.url.substring(1, img.url.length - 1) }))

// gallery.style.display = "flex";
// gallery.style.justifyContent = "spaceBetween";
// gallery.style.listStyleType = "none";
// gallery.style.padding = 0;

  //     galleryItem.style.flex = "1";
//     galleryItem.style.margin = "5px";
  
  //   img.style.width = "100%";
  //     img.style.height = "auto";
  //     img.style.display = "block";


const gallery = document.querySelector("ul.gallery");
gallery.style.display = "flex";
gallery.style.justifyContent = "spaceBetween";
gallery.style.listStyleType = "none";
gallery.style.padding = 0;

const galleryItems = images.map(img => ({ ...img, url: img.url.substring(1, img.url.length - 1) }))
  .map(image => {
  const li = document.createElement("li");
    // li.classList.add("gallery-item");
     li.style.flex = "1px";
          li.style.margin = "5px";

  const img = document.createElement("img");
  img.src = image.url;
    img.alt = image.alt;
    img.style.width = "100%";
      img.style.height = "auto";
      img.style.display = "block";

  li.appendChild(img);
  return li;
});

gallery.append(...galleryItems);


    // const assignStyles = (element, styleObject) => {
    //     Object.entries(styleObject)
    //         .forEach(([key, value]) => {
    //             element.style[key] = value;
    //         });
    // };

    // const gallery = document.createElement("section");

    // // section.style.display = "flex";
    // // section.style.alignItems = "center";
    // assignStyles(gallery, {
    //     display: "flex",
    //     alignItems: "center",
    //     gap: "1rem",
    // });

    // const createBtn = (text) => {
    //     const btn = document.createElement("button");
    //     btn.textContent = text;
    //     assignStyles(btn, {
    //         border: "none",
    //         width: "30px",
    //         height: "30px",
    //         backgroundColor: "dodgerblue",
    //         color: "white",
    //         cursor: "pointer",
    //     });

    //     return btn;
    // };

    // const previousBtn = createBtn("<=");
    // const nextBtn = createBtn("=>");

    // let picsumId = 200;
    // const img = document.createElement("img");
    // img.alt = "Gallery photo";
    // img.src = `https://picsum.photos/id/${picsumId}/300/300`;
    // img.width = "300",
    // img.height = "300",

    // gallery.append(previousBtn, img, nextBtn);
    // document.body.append(gallery);

    // const photo = {
    //     previous: () => img.src = `https://picsum.photos/id/${--picsumId}/300/300`,
    //     next: () => img.src = `https://picsum.photos/id/${++picsumId}/300/300`,
    // };

    // previousBtn.addEventListener("click", photo.previous);
    // nextBtn.addEventListener("click", photo.next);

    // setInterval(photo.next, 3_000); // autoplay

    // // Gallery.nextPhoto();
    // // Gallery.pause();
