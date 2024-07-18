/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json();

        const url = data.message; // URL of new dog image

        /*--------------- Get breed (Hint: Parse from URL) ---------------- */
        // Your code here 
        const breed = url.split('/')[4];

        /*------------ Create new dog card with the url above ------------- */
        /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
        // Your code here 
        const ul = document.querySelector('ul');

        const li = document.createElement('li');
        
        // option 1: with innerHTML
        li.innerHTML = 
            `
            <figure>
                <img src="${url}"/>
                <figcaption>${breed}</figcaption>
            </figure>
            `


        // option 2: with appendChild, longer but safer way to do
        // const fig = document.createElement('figure');

        // const img = document.createElement('img');
        // img.setAttribute('src', url);

        // fig.appendChild(img);

        // const figCap = document.createElement('figCaption');
        // figCap.innerText = breed;

        // fig.appendChild(figCap);


        // /* Add the new dog card as a child to the ul in the .gallery element */
        // // Your code here 
        // li.appendChild(fig);

        // ul.appendChild(li);

    } catch (e) {
        console.log("Couldn't fetch dog :(")
    }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
    /*-------------------- Select the first dog card --------------------- */
    // Your code here 
    const ul = document.querySelector('ul');

    /*-------------------- Remove the first dog card --------------------- */
    // Your code here 
    if (ul.children.length > 0) {
        // ul.firstChild.remove();
        // can also do this:
        ul.children[0].remove();
    }
    
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
    /*-------------------- Select the last dog card ----------------------- */
    // Your code here 
    const ul = document.querySelector('ul');

    /*-------------------- Remove the last dog card ----------------------- */
    // Your code here 
    ul.lastChild.remove();
});
