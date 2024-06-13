const categories = document.querySelector("ul#categories");
const items = categories.querySelectorAll(".item");
console.log(`Number of categories: ${items.length}`);
Array.from(items).forEach(item => {
    const category = item.querySelector("h2").textContent;
    const liElement = item.querySelectorAll(".item li").length;

    console.log(`Category: ${category}`);
    console.log(`Elements: ${liElement}`);
});