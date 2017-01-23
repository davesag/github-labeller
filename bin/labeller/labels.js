"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const LABELS = exports.LABELS = [{ name: "bug", color: "ee0701" }, { name: "documentation", color: "1d76db" }, { name: "feature", color: "0052cc" }, { name: "help wanted", color: "b60205" }, { name: "please close", color: "076616" }, { name: "question", color: "cc317c" }, { name: "ready to merge", color: "0e8a10" }, { name: "work in progress", color: "fbca04" }];

const LABEL_NAMES = exports.LABEL_NAMES = LABELS.map(label => label.name);