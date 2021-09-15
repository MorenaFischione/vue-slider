var app = new Vue(
{
    el: '#app',

    data: {
        image : [
            {
                source : "https://www.cinquecosebelle.it/wp-content/uploads/2018/08/cartoni-animati-anni-80-pollon.jpg",
                alt : "immagine di pollon",
            },
            {
                source : "https://www.puzzletech.it/wp-content/uploads/2020/05/Futurama-arriva-su-Prime-Video-1280x720.png",
                alt : "immagine Futurama",
            },
            {
                source : "https://www.nostrofiglio.it/site_stored/imgs/0005/014/candy.600.jpg",
                alt : "immagine di kendy",
            },
            {
                source : "https://www.chedonna.it/wp-content/uploads/2020/04/bing-e-sula-ok-1-800x451.jpg",
                alt : "immagine di bing",
            },
            {
                source : "https://www.dojofilm.it/wp-content/uploads/2019/05/serie-simpson.jpg",
                alt : "immagine famiglia simpson",
            },
        ],
        imageIndex : 0,
    },

    methods : {
        
        previousImg : function () {
            this.imageIndex--;
            
        },

        nextImg : function () {
            this.imageIndex++;
        },


    }

    
});