import EventEmitter from "eventemitter3";
import Beat from "./Beat";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this._beat = new Beat();

    this.lyrics = ["Ah", "ha", "ha", "ha", "stayin' alive", "stayin' alive"];
    this.count = 0;

    this._create();
    this.emit(Application.events.READY);
  }

  _create() {
    const lyrics = this.lyrics;
    let count = this.count;
    this._beat.on("bit", function () {
      if (count <= lyrics.length - 1) {
        const message = document.createElement("div");
        message.classList.add("message");
        message.innerText = lyrics[count];
        document.querySelector(".main").appendChild(message);
        count++;
      }
    });
  }
}
