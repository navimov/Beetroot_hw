"use strict";
let playList = [
  {
    author: "LED ZEPPELIN",
    song: "STAIRWAY TO HEAVEN",
  },
  {
    author: "QUEEN",
    song: "BOHEMIAN RHAPSODY",
  },
  {
    author: "LYNYRD SKYNYRD",
    song: "FREE BIRD",
  },
  {
    author: "DEEP PURPLE",
    song: "SMOKE ON THE WATER",
  },
  {
    author: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER",
  },
  {
    author: "AC/DC",
    song: "BACK IN BLACK",
  },
  {
    author: "QUEEN",
    song: "WE WILL ROCK YOU",
  },
  {
    author: "METALLICA",
    song: "ENTER SANDMAN",
  },
];
let container = document.createElement("div");
let list = document.createElement("ol");
const listItem = playList.map((item) => {
  let li = document.createElement("li");
  li.innerText = `Author: ${item.author}`;
  let ul = document.createElement("ul");
  let liSong = document.createElement("li");
  liSong.style.listStyleType = `none`;
  liSong.innerText = `Song: ${item.song}`;
  ul.appendChild(liSong);
  li.appendChild(ul);
  list.appendChild(li);
  ul.style.marginBottom = "10px";
  li.style.color = "red";
  liSong.style.color = "black";
});
container.append(list);
document.body.append(container);
