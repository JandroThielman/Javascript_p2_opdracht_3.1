const winkelmandje = ["Bananen", "Whiskey", "Chips", "Bonen", "Aardappelen"];

let text = "";
for (let i = 1; i < winkelmandje.length; i++) {
  text += winkelmandje[i];
}

document.getElementById("j").innerHTML = "Er zitten " + winkelmandje.length + " producten in uw winkelmand.";

document.getElementById("a").innerHTML = "Uw producten zijn: " + text + ".";