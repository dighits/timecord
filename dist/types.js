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

// src/types.ts
var types_exports = {};
__export(types_exports, {
  StyleType: () => StyleType,
  TimeUnits: () => TimeUnits
});
module.exports = __toCommonJS(types_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  StyleType,
  TimeUnits
});
