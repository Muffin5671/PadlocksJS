class Padlock extends Sprite {
  constructor(score) {
    super();

    this.clicksLeft = 4;
  }

  click() {
    this.clicksLeft -= 1;
    score.amount += 5;
  }
}

class Time {
  constructor() {
    this.seconds = 0;
  }

  start() {
    this.intID = setInterval(() => {
      this.seconds += 1;
    }, 1000);
  }

  stop() {
    clearInterval(this.intID);
  }
}

class Score {
  constructor() {
    this.amount = 0;
    this.above200 = this.amount > 200;
  }
}

export { Padlock, Time, Score };
