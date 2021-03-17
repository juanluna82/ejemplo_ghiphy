let noticia = document.getElementById("noticias");



function githubUser(userName) {
    fetch('https://api.giphy.com/v1/gifs/random?api_key=wBmQSDXkME1hKn80LC75kd2OSaeifuM4&tag=burrito')
        .then(response => response.json())
        .then( json => {



           let title = document.createElement("img");
          
            title.setAttribute("src", json.data.images.fixed_height.url);

            noticia.appendChild(title);


            console.log(json);// la informacion del usuario
            console.log(json.data.images.fixed_height.url);
        
        })
        .catch(err => console.error(err));
};

githubUser('diegomaranges');


            /*for (let index = 0; index < 5; index++) {
                //const element = array[index]
            let title = document.createElement("h2");
            let content = document.createElement("div");
            title.innerHTML = json[index].title.rendered;
            content.innerHTML = json[index].content.rendered;
            noticia.appendChild(title);
            noticia.appendChild(content);

            }*/