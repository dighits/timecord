"use strict";

// src/types.ts
var TimeUnits = /* @__PURE__ */ ((TimeUnits2) => {
  TimeUnits2[TimeUnits2["Miliseconds"] = 1] = "Miliseconds";
  TimeUnits2[TimeUnits2["Seconds"] = 1e3] = "Seconds";
  TimeUnits2[TimeUnits2["Minutes"] = 6e4] = "Minutes";
  TimeUnits2[TimeUnits2["Hours"] = 36e5] = "Hours";
  TimeUnits2[TimeUnits2["Days"] = 864e5] = "Days";
  return TimeUnits2;
})(TimeUnits || {});
var StyleType = /* @__PURE__ */ ((StyleType2) => {
  StyleType2["ShortTime"] = "t";
  StyleType2["LongTime"] = "T";
  StyleType2["ShortDate"] = "d";
  StyleType2["LongDate"] = "D";
  StyleType2["ShortDateAndTime"] = "f";
  StyleType2["LongDateAndTime"] = "F";
  StyleType2["RelativeTime"] = "R";
  return StyleType2;
})(StyleType || {});

// src/index.ts
var DiscordTimestamp = class {
  style;
  timestamp;
  initialTimestamp;
  constructor(timestamp2, style) {
    this.timestamp = this.parseTimestamp(timestamp2 ?? new Date());
    this.initialTimestamp = this.timestamp;
    this.style = style ? this.resolveStyle(style) : "f" /* ShortDateAndTime */;
  }
  addTime(amount, time) {
    this.timestamp += this.resolveTime(amount, time);
    return this;
  }
  subtractTime(amount, time) {
    this.timestamp -= this.resolveTime(amount, time);
    return this;
  }
  resetTimestamp() {
    this.timestamp = this.initialTimestamp;
    return this;
  }
  setTimestamp(timestamp2, style) {
    this.timestamp = this.parseTimestamp(timestamp2);
    if (style)
      this.style = this.resolveStyle(style);
    return this;
  }
  setStyle(style) {
    this.style = this.resolveStyle(style);
    return this;
  }
  format(timestamp2, style) {
    timestamp2 = Math.floor((timestamp2 ? this.parseTimestamp(timestamp2) : this.timestamp) / 1e3);
    return this.convertToDiscordTimestamp(timestamp2, style ? this.resolveStyle(style) : this.style);
  }
  parseTimestamp(timestamp2) {
    const resolved = this.resolveTimestamp(timestamp2);
    if (isNaN(resolved))
      throw new Error("Resolved timestamp is not a number (NaN).");
    if (resolved < 1e3)
      throw new Error("Resolved timestamp must be greater than 1000");
    return resolved;
  }
  resolveStyle(style) {
    console.log(style, typeof style);
    return StyleType[style] ?? style;
  }
  resolveTimestamp(timestamp2) {
    return timestamp2 instanceof Date ? timestamp2.getTime() : typeof timestamp2 === "number" ? timestamp2 : parseInt(timestamp2);
  }
  resolveTime(amount, time) {
    const multiple = typeof time === "string" ? TimeUnits[time] : time ?? 1 /* Miliseconds */;
    return amount * multiple;
  }
  convertToDiscordTimestamp(timestamp2, style) {
    return `<t:${timestamp2}:${style}>`;
  }
};

// src/testing.ts
var timestamp = new DiscordTimestamp().addTime(5e3).setStyle("F" /* LongDateAndTime */);
console.log(timestamp.format());
console.log(timestamp.setTimestamp(new Date()).setStyle("ShortDate").format());
