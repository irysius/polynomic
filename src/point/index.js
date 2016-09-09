import Point, * as points from "./points"
import is, * as asserts from "./is"
import isInside from "./is-inside"
import isRelative from "./is-relative"
import distance from "./distance"
import { min, max } from "./min-max"
import toCubic from "./to-cubic"

export default {
  Point,
  is,
  isInside,
  isRelative,
  distance,
  min,
  max,
  toCubic,
  ...asserts,
  ...points,
}
