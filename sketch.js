navigator.geolocation.getCurrentPosition(getposition);// on récupère la position gps de l'utilisateur 

let myMap; // on déclare une variable pour notre carte
const mappa = new Mappa('Leaflet'); // on fait appel à la librairie js Leaflet

// variables pour récupérer la position gps de l'utilisateur
var position;
let userLat = 47.2040006;
let userLon = -1.5630606;

let mousePos;

// coordonnées de l'edna
let edna_lat = -16.480138239320294; 
let edna_lng = -151.7480737397331;

// coordonnées de notre 1e zone

let initial_lat = edna_lat;// latitude de départ
let initial_lng = edna_lng;// longitude de départ

let zone1_lat = -16.542319786329628;
let zone1_lng = -151.79047420228852;
let img1;
let sound1;//vague

let zone2_lat = -16.441699804365136;
let zone2_lng = -151.75117452014786; 
let img2; 
let sound2;//avion

let zone3_lat = -16.572875;
let zone3_lng = -151.777868;
let img3;
let sound3; //whale

let zone4_lat = -16.537498
let zone4_lng = -151.759843
let img4;
let sound4; //plongeur

let zone5_lat = -16.498068;
let zone5_lng =-151.702641;
let img5;
let sound5; //exclosion tortue

let zone6_lat = -16.508473;
let zone6_lng =-151.731319;
let img6;
let sound6; //jungle

let zone7_lat = -16.499204;
let zone7_lng =-151.741104;
let img7;
let sound7; //Rando

let zone8_lat = -16.533085;
let zone8_lng =-151.709132;
let img8;
let sound8; //Bateau

let zone9_lat = -16.528779;
let zone9_lng =-151.740674;
let img9;
let sound9; //coconut


let img10;


// variables pour notre avatar
let avatarLat;
let avatarLng;
let avatarPos;
let avatarPosX;
let avatarPosY;

// Calcul des distances
let distance_edna_avatar;
let distance_zone1_avatar;
let distance_zone2_avatar;
let distance_zone3_avatar;
let distance_zone4_avatar;
let distance_zone5_avatar;
let distance_zone6_avatar;
let distance_zone7_avatar;
let distance_zone8_avatar;
let distance_zone9_avatar;

// variables qui vont nous permettre de dessiner les zones
let diametreSource1_lat = 47.199044159443524; 
let diametreSource1_lng = -1.561260223388672; 



function preload(){
  sound1 = loadSound('assets/VAGUE.mp3');
  img1 = loadImage('picture/surf.jpg'); 
  sound2 = loadSound('assets/AVION.mp3');
   img2 = loadImage('picture/avion.jpg');
  sound3= loadSound('assets/BALEINE.mp3');
   img3 = loadImage('picture/whale.jpg');
  sound4= loadSound('assets/PLONGEE.mp3');
   img4 = loadImage('picture/plongee.jpg');
  sound5= loadSound('assets/EGG.mp3');
   img5 = loadImage('picture/tortue.jpg');
  sound6= loadSound('assets/OISEAU.mp3');
   img6 = loadImage('picture/oiseau.jpg');
  sound7= loadSound('assets/RANDO.mp3');
   img7 = loadImage('picture/rando.jpg');
  sound8= loadSound('assets/BATEAU.mp3');
   img8 = loadImage('picture/boat.jpg');
  sound9= loadSound('assets/COCONUT.mp3');
   img9 = loadImage('picture/coconut.jpg');
  img10 = loadImage('chicken.png');
}


// Lets put all our map options in a single object
// lat and lng are the starting point for the map.
const options = {
  lat: initial_lat,
  lng: initial_lng,
  zoom: 13,// zoom de départ
  style: "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
}

function setup(){
  canvas = createCanvas(windowWidth, windowHeight); 

  // Create a tile map with the options declared
  myMap = mappa.tileMap(options); 
  myMap.overlay(canvas);
  
   textAlign(CENTER);// on justifie au centre notre texte
} // fin de la fonction setup



function getposition(position) {
  userLat = position.coords.latitude
  userLon = position.coords.longitude
}

function draw(){
  
    
   // Clear the previous canvas on every frame
  clear();
  
mousePos = myMap.fromPointToLatLng(mouseX,mouseY);// on convertit la position de la souris en coordonnées gps      
  let edna = myMap.latLngToPixel(47.2040006, -1.5630606); // on convertit la position gps en position XY
  let userPos = myMap.latLngToPixel(userLat, userLon); // idem
  
  let zone1Pos = myMap.latLngToPixel(zone1_lat, zone1_lng);
  let zone2Pos = myMap.latLngToPixel(zone2_lat, zone2_lng);
  let zone3Pos = myMap.latLngToPixel(zone3_lat, zone3_lng);
  let zone4Pos = myMap.latLngToPixel(zone4_lat, zone4_lng);
  let zone5Pos = myMap.latLngToPixel(zone5_lat, zone5_lng);
  let zone6Pos = myMap.latLngToPixel(zone6_lat, zone6_lng);
  let zone7Pos = myMap.latLngToPixel(zone7_lat, zone7_lng);
  let zone8Pos = myMap.latLngToPixel(zone8_lat, zone8_lng);
  let zone9Pos = myMap.latLngToPixel(zone9_lat, zone9_lng);

textAlign(CENTER);
  fill("green");
  image(img10,avatarPosX,avatarPosY,88,98);// on dessine l'avatar
  circle(zone1Pos.x,zone1Pos.y,15);
  circle(zone2Pos.x,zone2Pos.y,15);
  circle(zone3Pos.x,zone3Pos.y,15);
  circle(zone4Pos.x,zone4Pos.y,15);
  circle(zone5Pos.x,zone5Pos.y,15);
  circle(zone6Pos.x,zone6Pos.y,15);
  circle(zone7Pos.x,zone7Pos.y,15);
  circle(zone8Pos.x,zone8Pos.y,15);
  circle(zone9Pos.x,zone9Pos.y,15);
  
  if(mouseIsPressed){
  userX = mouseX;
  userY = mouseY;
avatarPos = myMap.latLngToPixel(mousePos.lat, mousePos.lng); // on récupère la position en pixels de la position gps de l'avatar
    avatarPosX = avatarPos.x;  // on met à jour avatarPosX
    avatarPosY = avatarPos.y; // on met à jour avatarPosY
    avatarLat = mousePos.lat; // on met à jour avatarLat
    avatarLng = mousePos.lng; // on met à jour avatarLng  
    //print("mousePos.lat = " + mousePos.lat);    
    //print("mousePos.lng = " + mousePos.lng);
   distance_edna_avatar = abs(edna_lat-avatarLat)+abs(edna_lng-avatarLng);
    print("distance_edna_avatar = " + distance_edna_avatar);

    distance_zone1_avatar = abs(zone1_lat-avatarLat)+abs(zone1_lng-avatarLng);
    print("distance_zone1_avatar = " + distance_zone1_avatar);
    
    distance_zone2_avatar = abs(zone2_lat-avatarLat)+abs(zone2_lng-avatarLng);
    print("distance_zone2_avatar = " + distance_zone2_avatar);
    
    distance_zone3_avatar = abs(zone3_lat-avatarLat)+abs(zone3_lng-avatarLng);
    print("distance_zone3_avatar = " + distance_zone3_avatar);
    
    distance_zone4_avatar = abs(zone4_lat-avatarLat)+abs(zone4_lng-avatarLng);
    print("distance_zone4_avatar = " + distance_zone4_avatar);
    
    distance_zone5_avatar = abs(zone5_lat-avatarLat)+abs(zone5_lng-avatarLng);
    print("distance_zone5_avatar = " + distance_zone5_avatar);
    
    distance_zone6_avatar = abs(zone6_lat-avatarLat)+abs(zone6_lng-avatarLng);
    print("distance_zone6_avatar = " + distance_zone6_avatar);
    
    distance_zone7_avatar = abs(zone7_lat-avatarLat)+abs(zone7_lng-avatarLng);
    print("distance_zone7_avatar = " + distance_zone7_avatar);
    
    distance_zone8_avatar = abs(zone8_lat-avatarLat)+abs(zone8_lng-avatarLng);
    print("distance_zone8_avatar = " + distance_zone8_avatar);
    
    distance_zone9_avatar = abs(zone9_lat-avatarLat)+abs(zone9_lng-avatarLng);
    print("distance_zone9_avatar = " + distance_zone9_avatar);
    
} // fin de mousePressed
  

  /////////////////////////////
  // EDNA /////////////////////
  /////////////////////////////

  // abs permet de calculer une valeur qui sera toujours positive pour obtenir la distance entre le centre de la zone 1 et la souris 
  if(distance_edna_avatar<0.005){
    print("l'avatar est entré dans la zone de l'EDNA")
  }
  // si on sort de la zone
  if(distance_edna_avatar>0.005){
    print("l'avatar est sorti de la zone de l'EDNA")
  }
  
  /////////////////////////////
  // ZONE 1 - Surf ///////////////////
  /////////////////////////////
  if(distance_zone1_avatar<0.001 && !sound1.isPlaying()){
    print("l'avatar est entré dans la zone de l'EDNA")
    sound1.play();
  }
  // si on sort de la zone
  if(distance_zone1_avatar>0.001){
    print("l'avatar est sorti de la zone de l'EDNA")
    sound1.stop();
  }
  
  if(sound1.isPlaying()){
    image(img1,zone1_lat+50,zone1_lng+300,500,250);
  }
  
  /////////////////////////////
  // ZONE 2 - Avion ///////////////////
  /////////////////////////////
  if(distance_zone2_avatar<0.001 && !sound2.isPlaying()){
    print("l'avatar est entré dans la zone de l'EDNA")
    sound2.play();
  }
  // si on sort de la zone
  if(distance_zone2_avatar>0.001){
    print("l'avatar est sorti de la zone de l'EDNA")
    sound2.stop();
  }
  
  if(sound2.isPlaying()){
    image(img2,zone1_lat+50,zone1_lng+300,500,300);
  }
  
  /////////////////////////////
  // ZONE 3 - Baleine///////////////////
  /////////////////////////////
  if(distance_zone3_avatar<0.001 && !sound3.isPlaying()){
    print("l'avatar est entré dans la zone de l'EDNA")
    sound3.play();
  }
  // si on sort de la zone
  if(distance_zone3_avatar>0.001){
    print("l'avatar est sorti de la zone de l'EDNA")
    sound3.stop();
  }
  
  if(sound3.isPlaying()){
    image(img3,zone1_lat+50,zone1_lng+300,500,250);
  }
  
  /////////////////////////////
  // ZONE 4 - plongeur///////////////////
  /////////////////////////////
  if(distance_zone4_avatar<0.001 && !sound4.isPlaying()){
    print("l'avatar est entré dans la zone de l'EDNA")
    sound4.play();
  }
  // si on sort de la zone
  if(distance_zone4_avatar>0.001){
    print("l'avatar est sorti de la zone de l'EDNA")
    sound4.stop();
  }
  
  if(sound4.isPlaying()){
    image(img4,zone1_lat+50,zone1_lng+300,500,250);
  }
  
  /////////////////////////////
  // ZONE 5 - tortue///////////////////
  /////////////////////////////
  if(distance_zone5_avatar<0.001 && !sound5.isPlaying()){
    print("l'avatar est entré dans la zone de l'EDNA")
    sound5.play();
  }
  // si on sort de la zone
  if(distance_zone5_avatar>0.001){
    print("l'avatar est sorti de la zone de l'EDNA")
    sound5.stop();
  }
  
  if(sound5.isPlaying()){
    image(img5,zone1_lat+50,zone1_lng+300,500,250);
  }
  
  /////////////////////////////
  // ZONE 6 - jungle ///////////////////
  /////////////////////////////
  if(distance_zone6_avatar<0.001 && !sound6.isPlaying()){
    print("l'avatar est entré dans la zone de l'EDNA")
    sound6.play();
  }
  // si on sort de la zone
  if(distance_zone6_avatar>0.001){
    print("l'avatar est sorti de la zone de l'EDNA")
    sound6.stop();
  }
  
  if(sound6.isPlaying()){
    image(img6,zone1_lat+50,zone1_lng+300,500,300);
  }
  
  /////////////////////////////
  // ZONE 7 - rando///////////////////
  /////////////////////////////
  if(distance_zone7_avatar<0.001 && !sound7.isPlaying()){
    print("l'avatar est entré dans la zone de l'EDNA")
    sound7.play();
  }
  // si on sort de la zone
  if(distance_zone7_avatar>0.001){
    print("l'avatar est sorti de la zone de l'EDNA")
    sound7.stop();
  }
  
  if(sound7.isPlaying()){
    image(img7,zone1_lat+50,zone1_lng+300,500,250);
  }
  
  /////////////////////////////
  // ZONE 8 - bateau ///////////////////
  /////////////////////////////
  if(distance_zone8_avatar<0.001 && !sound8.isPlaying()){
    print("l'avatar est entré dans la zone de l'EDNA")
    sound8.play();
  }
  // si on sort de la zone
  if(distance_zone8_avatar>0.001){
    print("l'avatar est sorti de la zone de l'EDNA")
    sound8.stop();
  }
  
  if(sound8.isPlaying()){
    image(img8,zone1_lat+50,zone1_lng+300,500,250);
  }
  
  /////////////////////////////
  // ZONE 9 - coconut///////////////////
  /////////////////////////////
  if(distance_zone9_avatar<0.001 && !sound9.isPlaying()){
    print("l'avatar est entré dans la zone de l'EDNA")
    sound9.play();
  }
  // si on sort de la zone
  if(distance_zone9_avatar>0.001){
    print("l'avatar est sorti de la zone de l'EDNA")
    sound9.stop();
  }
  
  if(sound9.isPlaying()){
    image(img9,zone1_lat+50,zone1_lng+300,400,300);
  }


  
}// fin de la fonction draw
