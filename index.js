import { Padlock, Time, Score } from "./game/main.js";

const app = new PIXI.Application();

const options = {
  width: 480,
  height: 360,
  backgroundColor: 0xffffff,
  antialias: false,
  preference: "webgl"
};

await app.init(options);
console.log("App running");
