import express from "express";
import logger from "morgan";

export default [
  logger("dev"),
  express.json(),
  express.urlencoded({ extended: false }),
];
