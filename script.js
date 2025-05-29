function initMap() {
    const local = { lat: -23.55052, lng: -46.633308 }; // São Paulo como exemplo
    const mapa = new google.maps.Map(document.getElementById("mapa"), {
      zoom: 12,
      center: local
    });
    new google.maps.Marker({
      position: local,
      map: mapa,
      title: "Delivery Flash"
    });
  }
  