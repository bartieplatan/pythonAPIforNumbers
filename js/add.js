function sendPost(){
    const data = JSON.stringify({
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        address:document.getElementById("address").value,
        nickname:document.getElementById("nickname").value,
        //image:document.getElementById("image").src
      });
      console.log(data.image);
      sendImage(image);
      navigator.sendBeacon('http://127.0.0.1:5000/savedetails/', data);
      console.log(data);

    }
function sendImage(name){
    console.log(name);
    navigator.sendBeacon('http://127.0.0.1:5000/images/');

}