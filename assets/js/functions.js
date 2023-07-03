const propertiesJSON = [
    {
      name: "Flat with pool",
      description: "Check this amazing apartment in Key Biscayne",
      src:"https://cf2.bstatic.com/xdata/images/hotel/max1024x768/462188687.jpg?k=734623418c997887fd4011bb834845ea3e0cdbe5d69a92b2868b3d14efbf7dbf&o=&hp=1",
      rooms: 1,
      m: 80
    },
    {
      name: "Amazon Lodge",
      description: "Take a break in the brazilian jungle",
      src:"https://cf2.bstatic.com/xdata/images/hotel/max1024x768/369650052.jpg?k=2880a3a25262fdd836d6dc2922a166a1f613f24c944bc1461964d830906dd476&o=&hp=1",
      rooms: 2,
      m: 78
    },
    {
      name: "Penthouse in BA",
      description: "Feel the Buenos Aires air in this lux",
      src:"https://cf2.bstatic.com/xdata/images/hotel/max1280x900/188537115.jpg?k=7a5353f6067a475d0e6f8ab8685fcd6a4e2d1104d45d695bedfd31cdfcec4529&o=&hp=1",
      rooms: 3,
      m: 146
    },
    {
      name: "Cuzco Muzgo Rooms",
      description: "Visit Machu Picchu like an Inka",
      src:"https://cf2.bstatic.com/xdata/images/hotel/max1280x900/255442063.jpg?k=4294ed970944c443c5cbb06a5fd06f7f3e04b41dff6bbd063eab512af0a32c75&o=&hp=1",
      rooms: 1,
      m: 22
    },
    {
      name: "Salto Angel Point",
      description: "Take breakfast near the highest waterfall",
      src:"https://cf2.bstatic.com/xdata/images/hotel/max1280x900/322199965.jpg?k=8c62ac20bc4e9739e020c00383b65a16efc45d9301e3447f4c470f81ae23ca25&o=&hp=1",
      rooms: 4,
      m: 203
    },
    {
      name: "Big house Texas",
      description: "Big house in Texas",
      src:"https://lh3.googleusercontent.com/p/AF1QipOENtRnNizq76pTiOv7Xkrbr9LG_nYLpAUMjfyR=s1360-w1360-h1020",
      rooms: 7,
      m: 1230
    }
  ];

  let properties = document.querySelector(".properties");
  let rooms = document.getElementById("rooms");
  let from = document.getElementById("from");
  let fromTo = document.getElementById("to");
  let total = document.getElementById("total");
  let btn = document.getElementById("btn");
  
  template();
  
  btn.addEventListener("click", checkProperty);
  
  function checkProperty() {
    if (rooms.value == "" || from.value == "" || fromTo.value == "") {
      alert("You missed some search parameters");
    } else {
      let amenities = [];
      for (const iterator of propertiesJSON) {
        if (rooms.value == iterator.rooms && from.value <= iterator.m && fromTo.value >= iterator.m) {
          amenities.push(iterator);
        }
      }
      total.innerHTML = amenities.length;
      template(amenities);
    }
  }
  
  
  function template(amenities = propertiesJSON) {
    let html = "";
    for (let iterator of amenities) {
      html += `
        <div class="property">
          <div class="img" style="background-image: url('${iterator.src}');"></div>
          <section>
            <h5>${iterator.name}</h5>
            <div class="d-flex justify-content-between">
              <p><strong>Rooms: </strong>${iterator.rooms}</p>
              <p><strong>Mts2: </strong>${iterator.m}</p>
            </div>
            <p class="my-3">${iterator.description}</p>
            <button class="btn btn-info">Reserve</button>
          </section>
        </div>
        `;
    }
    properties.innerHTML = html;
    total.innerHTML = amenities.length;
  }