import { CLING, NONE, TICKING } from "../../const.js";
import ticking from "../../assets/ticking.wav";
import cling from "../../assets/cling.wav";

export const TickingSound = {
  [TICKING]: new Audio(ticking),
  [CLING]: new Audio(cling),
  [NONE]: new Audio(),
};
