import express from "express";

export default express.Router().use(express.static("dist/browser"));
