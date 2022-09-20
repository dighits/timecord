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
  constructor(timestamp, style) {
    this.timestamp = this.parseTimestamp(timestamp ?? new Date());
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
  setTimestamp(timestamp, style) {
    this.timestamp = this.parseTimestamp(timestamp);
    if (style)
      this.style = this.resolveStyle(style);
    return this;
  }
  setStyle(style) {
    this.style = this.resolveStyle(style);
    return this;
  }
  format(style) {
    return this.convertToDiscordTimestamp(this.timestamp, style ? this.resolveStyle(style) : this.style);
  }
  parseTimestamp(timestamp) {
    const resolved = this.resolveTimestamp(timestamp);
    if (isNaN(resolved))
      throw new Error("Resolved timestamp is not a number (NaN).");
    if (resolved < 1e3)
      throw new Error("Resolved timestamp must be greater than 1000");
    return resolved;
  }
  resolveStyle(style) {
    return StyleType[style] ?? style;
  }
  resolveTimestamp(timestamp) {
    return timestamp instanceof Date ? timestamp.getTime() : typeof timestamp === "number" ? timestamp : parseInt(timestamp);
  }
  resolveTime(amount, time) {
    const multiple = typeof time === "string" ? TimeUnits[time] : time ?? 1 /* Miliseconds */;
    return amount * multiple;
  }
  convertToDiscordTimestamp(timestamp, style) {
    return `<t:${Math.floor(timestamp / 1e3)}:${style}>`;
  }
};

// src/testing.ts
console.log(new DiscordTimestamp().addTime(2, "Days").format("RelativeTime"));
