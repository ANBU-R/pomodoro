import { NONE, ALARM_BELL } from "../../const";
import alarmBell from "../../assets/alarmBell.mp3";

export const AlarmSound = {
  [NONE]: new Audio(),
  [ALARM_BELL]: new Audio(alarmBell),
};
