var  imgArray = new Array();

imgArray[0]=new Image();
imgArray[0].src='https://cinergetica.com.mx/wp-content/uploads/2011/05/the-hunger-games.jpg';

imgArray[1]=new Image();
imgArray[1].src='https://ampiep.org/wp-content/uploads/2018/04/jdh.jpg';

imgArray[2]=new Image();
imgArray[2].src='https://i0.wp.com/www.gamerfocus.co/wp-content/uploads/2015/11/Mockingjay_Portada.jpg?resize=1000%2C600&ssl=1';

imgArray[3]=new Image();
imgArray[3].src='https://media.tenor.com/Bei_f8MUU3UAAAAC/the-hunger-games-the-ballad-of-songbirds-%26-snakes-title-card.gif';

imgArray[4]=new Image();
imgArray[4].src='https://i.blogs.es/74a70a/juegos-del-hambre-poster/1366_2000.jpg';

function cambiar(){
    var img = document.getElementById("img");
    for(var i = 0; i < imgArray.length;i++){
        if(imgArray[i].src == img.src){
            if(i === imgArray.length){
                document.getElementById("img").src = imgArray[0].src;
                break;
            }
            document.getElementById("img").src = imgArray[i+1].src;
            break;
        }
    }
}
function regresar(){
    var img = document.getElementById("img");
    for(var i = imgArray.length-1; i >=0 ;i--){
        if(imgArray[i].src == img.src){
            if(i === imgArray.length){
                document.getElementById("img").src = imgArray[4].src;
                break;
            }
            document.getElementById("img").src = imgArray[i-1].src;
            break;
        }
    }
}