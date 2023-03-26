const socket = io("http://localhost:9000");

// const userName = prompt("What is your username?");
// const password = prompt("What is your Password?");

socket.on("connect", () => {
  console.log("connected");
  socket.emit("clientConnected");
});

socket.on("welcome", (data) => {
  console.log(data);
});

socket.on("nslist", (nsData) => {
  console.log(nsData);
  nsData.forEach((ns) => {
    const nameSpacesDiv = document.querySelector(".namespaces");
    nameSpacesDiv.innerHTML += `<div class="namespace" ns="${ns.nsTitle}"><img src=${ns.img}></div>`;
  });
});
