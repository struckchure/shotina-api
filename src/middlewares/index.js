import express from "express";
import logger from "morgan";

export default [
  express.json(),
  express.urlencoded({ extended: false }),
  logger("dev"),
];
