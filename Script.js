let first = document.getElementById("first");
let second = document.getElementById("second");
let third = document.getElementById("third");
let fourth = document.getElementById("fourth");
let fifth = document.getElementById("fifth");

let sixth = document.getElementById("sixth");
let seventh = document.getElementById("seventh");
let eighth = document.getElementById("eight");
let ninth = document.getElementById("ninenth");
let tenth = document.getElementById("tenth");
let eleventh = document.getElementById("eleventh");
let twelvth = document.getElementById("twelvth");

let img1 = `img/0124_Forspoken.png`;
let img2 = `img/1207_RL_Season_9.png`;
let img3 = `img/0130_Dead_Space.png`;
let img4 = `img/1118_EGS_TST_Marvel_Spider_Man.png"`;
let img5 = `img/1112_EGS_TST_EVE_Online_Game_Update.png`;
let img6 = `img/1221_Gotham_Knights.png`;
let img7 = `img/Fortnite.png`
let img8 = `img/1229_The_Last_Of_Us.png`;
let img9 = `img/extinction.png`;
let img10 = `img/Fortnite.png`;
let img11= `img/1010_Fortnitemares.png`;
let img12 = `img/0516_UE_MKP_Sale.png`;

first.innerHTML = `    <img src="${img1}" alt="">
    <h3 id="title">Forspoken</h3>
    <p id="comments">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat pariatur eius iste maiores voluptas quos magni, asperiores tempore ad hic dolor similique. Error eaque libero iusto aspernatur architecto, officia nam.
    </p>
    `

    second.innerHTML = `    <img src="${img2}" alt="">
    <h3 id="title">Car race</h3>
    <p id="comments">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat pariatur eius iste maiores voluptas quos magni, asperiores tempore ad hic dolor similique. Error eaque libero iusto aspernatur architecto, officia nam.
    </p>
    `
    third.innerHTML = `    <img src="${img3}" alt="">
    <h3 id="title">Dead space</h3>
    <p id="comments">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat pariatur eius iste maiores voluptas quos magni, asperiores tempore ad hic dolor similique. Error eaque libero iusto aspernatur architecto, officia nam.
    </p>
    `
    fourth.innerHTML = `    <img src="${img4}" alt="">
    <h3 id="title">Spider-man</h3>
    <p id="comments">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat pariatur eius iste maiores voluptas quos magni, asperiores tempore ad hic dolor similique. Error eaque libero iusto aspernatur architecto, officia nam.
    </p>
    `
    
    fifth.innerHTML = `    <img src="${img5}" alt="">
    <h3 id="title">Uprising</h3>
    <p id="comments">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat pariatur eius iste maiores voluptas quos magni, asperiores tempore ad hic dolor similique. Error eaque libero iusto aspernatur architecto, officia nam.
    </p>
    `
    sixth.innerHTML = `    <img src="${img6}" alt="">
    <h3 id="title">Bat man</h3>
    <p id="comments">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat pariatur eius iste maiores voluptas quos magni, asperiores tempore ad hic dolor similique. Error eaque libero iusto aspernatur architecto, officia nam.
    </p>
    `
    seventh.innerHTML = `    <img src="${img4}" alt="">
    <h3 id="title">Idk</h3>
    <p id="comments">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat pariatur eius iste maiores voluptas quos magni, asperiores tempore ad hic dolor similique. Error eaque libero iusto aspernatur architecto, officia nam.
    </p>
    `

    eighth.innerHTML = `    <img src="${img8}" alt="">
    <h3 id="title">Fortnite</h3>
    <p id="comments">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat pariatur eius iste maiores voluptas quos magni, asperiores tempore ad hic dolor similique. Error eaque libero iusto aspernatur architecto, officia nam.
    </p>
    `
    ninth.innerHTML = `    <img src="${img9}" alt="">
    <h3 id="title">Fortnite</h3>
    <p id="comments">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat pariatur eius iste maiores voluptas quos magni, asperiores tempore ad hic dolor similique. Error eaque libero iusto aspernatur architecto, officia nam.
    </p>
    `
    tenth.innerHTML = `    <img src="${img10}" alt="">
    <h3 id="title">Fortnite</h3>
    <p id="comments">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat pariatur eius iste maiores voluptas quos magni, asperiores tempore ad hic dolor similique. Error eaque libero iusto aspernatur architecto, officia nam.
    </p>
    `
    eleventh.innerHTML = `    <img src="${img11}" alt="">
    <h3 id="title">Fortnite</h3>
    <p id="comments">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat pariatur eius iste maiores voluptas quos magni, asperiores tempore ad hic dolor similique. Error eaque libero iusto aspernatur architecto, officia nam.
    </p>
    `
    twelvth.innerHTML = `    <img src="${img12}" alt="">
    <h3 id="title">Fortnite</h3>
    <p id="comments">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat pariatur eius iste maiores voluptas quos magni, asperiores tempore ad hic dolor similique. Error eaque libero iusto aspernatur architecto, officia nam.
    </p>
    `
    document.addEventListener('scroll',() => {

        if(window.scrollY >     80 ){
            second.classList.add('fade');
        }


        if(window.scrollY > 300 ){
            third.classList.add('fade');
        }



        if(window.scrollY > 900 ){
            eighth.classList.add('fade');
        }


        if(window.scrollY > 1300 ){
            ninth.classList.add('fade');
        }

        if(window.scrollY > 1500 ){
            tenth.classList.add('fade');
        }

        if(window.scrollY > 1800 ){
            eleventh.classList.add('fade');
        }

        if(window.scrollY > 2200 ){
            twelvth.classList.add('fade');
        }
    });

    let popup = document.getElementById('popup');

    function forFirst(){
        popup.style.display = 'block';
        popup.classList.add('pop');
        popup.innerHTML = `<img src="${img1}" alt="">
<p>
    Forspoken
<form action="www.youtube.com" method="get">
   <button>Download Game</button>
</form>
</p> <button id="close" onclick="hidePopup()">❌</button> </div>`
    }
    
    function forSecond(){
        popup.style.display = 'block';
        popup.classList.add('pop');
        popup.innerHTML = `<img src="${img2}" alt="">
<p>
    Car race
<form action="https://www.google.com/search?q=Carrace&oq=Carrace&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiPAjIHCAIQABiPAjIHCAMQABiPAtIBCTI5NzNqMGoxNagCCLACAQ&sourceid=chrome&ie=UTF-8" method="get">
   <button>Download Game</button>
</form>
</p> <button id="close" onclick="hidePopup()">❌</button> </div>`
    }

    
    function forThird(){
        popup.style.display = 'block';
        popup.classList.add('pop');
        popup.innerHTML = `<img src="${img3}" alt="">
<p>
    Dead space
<form action="https://www.google.com/search?q=Deadspace&oq=Deadspace&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiPAjIHCAIQABiPAjIHCAMQABiPAtIBCTI5NzNqMGoxNagCCLACAQ&sourceid=chrome&ie=UTF-8" method="get">
   <button>Download Game</button>
</form>
</p> <button id="close" onclick="hidePopup()">❌</button> </div>`
    }

    
    function forFourth(){
        popup.style.display = 'block';
        popup.classList.add('pop');
        popup.innerHTML = `<img src="${img4}" alt="">
<p>
    Spiderman
<form action="https://www.google.com/search?q=Spidermangame&oq=Spidermangame&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiPAjIHCAIQABiPAjIHCAMQABiPAtIBCTI5NzNqMGoxNagCCLACAQ&sourceid=chrome&ie=UTF-8" method="get">
   <button>Download Game</button>
</form>
</p> <button id="close" onclick="hidePopup()">❌</button> </div>`
    }

    
    function forFifth(){
        popup.style.display = 'block';
        popup.classList.add('pop');
        popup.innerHTML = `<img src="${img5}" alt="">
<p>
    Uprising
<form action="https://www.google.com/search/Uprisinggame" method="get">
   <button>Download Game</button>
</form>
</p> <button id="close" onclick="hidePopup()">❌</button> </div>`
    }

    
    function forSixth(){
        popup.style.display = 'block';
        popup.classList.add('pop');
        popup.innerHTML = `<img src="${img6}" alt="">
<p>
    Gotham-Knights
<form action="https://www.google.com/Gotham-Knights-game" method="get">
   <button>Download Game</button>
</form>
</p> <button id="close" onclick="hidePopup()">❌</button> </div>`
    }

    
    function forSeventh(){
        popup.style.display = 'block';
        popup.classList.add('pop');
        popup.innerHTML = `<img src="${img7}" alt="">
<p>
    Spidey
<form action="https://www.google.com/Spidey" method="get">
   <button>Download Game</button>
</form>
</p> <button id="close" onclick="hidePopup()">❌</button> </div>`
    }

    
    function forEight(){
        popup.style.display = 'block';
        popup.classList.add('pop');
        popup.innerHTML = `<img src="${img8}" alt="">
<p>
    The last of us part 1
<form action="https://www.google.com/The last of us part 1" method="get">
   <button>Download Game</button>
</form>
</p> <button id="close" onclick="hidePopup()">❌</button> </div>`
    }

    
    function forNinth(){
        popup.style.display = 'block';
        popup.classList.add('pop');
        popup.innerHTML = `<img src="${img9}" alt="">
<p>
    Hulk
<form action="https://www.google.com/Hulk" method="get">
   <button>Download Game</button>
</form>
</p> <button id="close" onclick="hidePopup()">❌</button> </div>`
    }

    
    function forTenth(){
        popup.style.display = 'block';
        popup.classList.add('pop');
        popup.innerHTML = `<img src="${img10}" alt="">
<p>
    Fortnite
<form action="https://www.google.com/Fortnite" method="get">
   <button>Download Game</button>
</form>
</p> <button id="close" onclick="hidePopup()">❌</button> </div>`
    }

    
    function forEleventh(){
        popup.style.display = 'block';
        popup.classList.add('pop');
        popup.innerHTML = `<img src="${img11}" alt="">
<p>
    Wolf pack
<form action="https://www.google.com/Wolfpack" method="get">
   <button>Download Game</button>
</form>
</p> <button id="close" onclick="hidePopup()">❌</button> </div>`
    }

    
    function forTwelvth(){
        popup.style.display = 'block';
        popup.classList.add('pop');
        popup.innerHTML = `<img src="${img12}" alt="">
<p>
    Gladiator
<form action="https://www.google.com/Gladiator" method="get">
   <button>Download Game</button>
</form>
</p> <button id="close" onclick="hidePopup()">❌</button> </div>`
    }
    function hidePopup(){
        popup.style.display = 'none';
    }


   