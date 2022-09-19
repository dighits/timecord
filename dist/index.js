"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  DiscordTimestamp: () => DiscordTimestamp,
  default: () => src_default
});
module.exports = __toCommonJS(src_exports);

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
  format(timestamp, style) {
    timestamp = Math.floor((timestamp ? this.parseTimestamp(timestamp) : this.timestamp) / 1e3);
    return this.convertToDiscordTimestamp(timestamp, style ? this.resolveStyle(style) : this.style);
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
    console.log(style, typeof style);
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
    return `<t:${timestamp}:${style}>`;
  }
};
var src_default = DiscordTimestamp;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DiscordTimestamp
});
