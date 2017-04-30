var wikipediaHTML =
    '<div class="wikipedia-container">' +
    '<ul id="wikipedia-links"></ul>' +
    '</div>';

var flickrHTML =
    '<div class="flickr-container">' +
    '<ul id="flickr-links"></ul>' +
    '</div>';

var oldFlag = "oldfrance.png";
var newFlag = "france1.png";
var imperialFlag = "bonaparte.png";
var royalFlag = "bourbon.png";

/* Era

Some locations have particular connection with a certain historical age of France. 

- normal: Republic of France, Frankish, or pre-France.
- bourbon: The Bourbon-legacy (the most famous Louis XIV).
- bonaparte: Napoleon.

*/

var listLocations = [{
    name: "Arc de Triomphe",
    wikipedia: wikipediaHTML,
    flickr: flickrHTML,
    banner: imperialFlag,
    era: "bonaparte",
    lat: "48.8737917",
    lng: "2.2950275"
}, {
    name: "Chateau de Malmaison",
    wikipedia: wikipediaHTML,
    flickr: flickrHTML,
    banner: imperialFlag,
    era: "bonaparte",
    lat: "48.8708001",
    lng: "2.166848"
}, {
    name: "Palais des Tuileries",
    wikipedia: wikipediaHTML,
    flickr: flickrHTML,
    banner: royalFlag,
    era: "bourbon",
    lat: "48.8619033",
    lng: "2.3186484"
}, {
    name: "Palais Versailles",
    wikipedia: wikipediaHTML,
    flickr: flickrHTML,
    banner: royalFlag,
    era: "bourbon",
    lat: "48.8048649",
    lng: "2.1203554"
}, {
    name: "La tour Eiffel",
    wikipedia: wikipediaHTML,
    flickr: flickrHTML,
    banner: newFlag,
    era: "normal",
    lat: "48.8583701",
    lng: "2.2944813"
}, {
    name: "Louvre Museum",
    wikipedia: wikipediaHTML,
    flickr: flickrHTML,
    banner: newFlag,
    era: "normal",
    lat: "48.8606111",
    lng: "2.337644"
}, {
    name: "Sacre-Coeur, Paris",
    wikipedia: wikipediaHTML,
    flickr: flickrHTML,
    banner: imperialFlag,
    era: "normal",
    lat: "48.8867046",
    lng: "2.3431043"
}, {
    name: "Mont Saint-Michel Abbey",
    wikipedia: wikipediaHTML,
    flickr: flickrHTML,
    banner: oldFlag,
    era: "normal",
    lat: "48.6360166",
    lng: "-1.5111145"
}, {
    name: "Arena of Nimes",
    wikipedia: wikipediaHTML,
    flickr: flickrHTML,
    photo: "images/sacre.jpg",
    banner: oldFlag,
    era: "normal",
    lat: "43.8355426",
    lng: "4.3590779"
}, {
    name: "Château-Thierry",
    wikipedia: wikipediaHTML,
    flickr: flickrHTML,
    banner: royalFlag,
    era: "bourbon",
    lat: "49.0470491",
    lng: "3.4021843"
}, {
    name: "Cite de Carcassonne",
    wikipedia: wikipediaHTML,
    flickr: flickrHTML,
    banner: oldFlag,
    era: "normal",
    lat: "43.212161",
    lng: "2.353663"
}, {
    name: "Pont du Gard",
    wikipedia: wikipediaHTML,
    flickr: flickrHTML,
    banner: oldFlag,
    era: "normal",
    lat: "43.947566",
    lng: "4.53496"
}, {
    name: "Colleville-sur-Mer",
    wikipedia: wikipediaHTML,
    flickr: flickrHTML,
    banner: newFlag,
    era: "normal",
    lat: "49.348608",
    lng: "-0.844039"
}, {
    name: "Font-de-Gaume",
    wikipedia: wikipediaHTML,
    flickr: flickrHTML,
    banner: newFlag,
    era: "normal",
    lat: "44.936957",
    lng: "1.026971"
}, {
    name: "Place de la Concorde",
    wikipedia: wikipediaHTML,
    flickr: flickrHTML,
    banner: royalFlag,
    era: "normal",
    lat: "48.8659862",
    lng: "2.3219661"
}, {
    name: "Moustiers-Sainte-Marie",
    wikipedia: wikipediaHTML,
    flickr: flickrHTML,
    banner: oldFlag,
    era: "normal",
    lat: "43.8456819",
    lng: "6.221481"
}, {
    name: "Senanque Abbey",
    wikipedia: wikipediaHTML,
    flickr: flickrHTML,
    banner: oldFlag,
    era: "normal",
    lat: "48.41461862",
    lng: "1.4878371"
}, {
    name: "Bourbon-l'Archambault",
    wikipedia: wikipediaHTML,
    flickr: flickrHTML,
    banner: royalFlag,
    era: "bourbon",
    lat: "46.5836127",
    lng: "3.0616206"
}, {
    name: "Vaux-le-Vicomte",
    wikipedia: wikipediaHTML,
    flickr: flickrHTML,
    banner: royalFlag,
    era: "bourbon",
    lat: "48.565812",
    lng: "2.714135"
}, {
    name: "Albi Cathedral",
    wikipedia: wikipediaHTML,
    flickr: flickrHTML,
    banner: oldFlag,
    era: "normal",
    lat: "43.9283405",
    lng: "2.1426106"
}, {
    name: "Notre-Dame de Fourviere",
    wikipedia: wikipediaHTML,
    flickr: flickrHTML,
    banner: oldFlag,
    era: "normal",
    lat: "45.7622928",
    lng: "4.822626"
}, {
    name: "Chateau de Chinon",
    wikipedia: wikipediaHTML,
    flickr: flickrHTML,
    banner: oldFlag,
    era: "normal",
    lat: "47.1681",
    lng: "0.235615"
}, {
    name: "Chateau de Beynac",
    wikipedia: wikipediaHTML,
    flickr: flickrHTML,
    banner: oldFlag,
    era: "normal",
    lat: "44.8402933",
    lng: "1.1453479"
}, {
    name: "Chateau des ducs de Bretagne",
    wikipedia: wikipediaHTML,
    flickr: flickrHTML,
    banner: oldFlag,
    era: "normal",
    lat: "47.2161724",
    lng: "-1.5499355"
}, {
    name: "Chartres Cathedral",
    wikipedia: wikipediaHTML,
    flickr: flickrHTML,
    banner: oldFlag,
    era: "normal",
    lat: "48.41461862",
    lng: "1.4878371"
}, {
    name: "Cathedrale Notre Dame de Paris",
    wikipedia: wikipediaHTML,
    flickr: flickrHTML,
    banner: oldFlag,
    era: "normal",
    lat: "48.8529682",
    lng: "2.3499021"
}];