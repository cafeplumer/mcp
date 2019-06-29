var ga = [44.558611, 6.076561];

//creation de la map
var mymap = L.map('map').setView(ga, 15);

// creation du calque images
L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	maxZoom: 48
}).addTo(mymap);

var marker = L.marker(ga).addTo(mymap);

// ajout d'un popup
marker.bindPopup('<h3>Galerie et Atelier Monsieur Café Plumer</h3>');