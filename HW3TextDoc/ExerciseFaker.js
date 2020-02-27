var randomName = faker.name.findName(); // Caitlyn Kerluke
var randomPic = faker.image.avatar();
var randomEmail = faker.internet.email(); // Rusty@arne.info
var randomCard = faker.helpers.createCard(); // random contact card containing many properties

document.getElementById("image").src = randomPic;
document.getElementById("name").innerHTML = randomName;
document.getElementById("email").innerHTML = randomEmail;

