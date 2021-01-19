import { DayHours, NextOpen, Announcement } from ".";

export type OperationalHours = {
  open24Hours?: boolean | null;
  monToFriHrs?: DayHours | null;
  mondayHrs?: DayHours | null;
  tuesdayHrs?: DayHours | null;
  wednesdayHrs?: DayHours | null;
  thursdayHrs?: DayHours | null;
  fridayHrs?: DayHours | null;
  sundayHrs?: DayHours | null;
  saturdayHrs?: DayHours | null;
  todayHrs: DayHours | null;
  tomorrowHrs?: DayHours | null;
  nextOpenHrs?: NextOpen | null;
  announcement?: Announcement | null;
};
