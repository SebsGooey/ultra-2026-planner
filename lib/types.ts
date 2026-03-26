export type DayId = "friday" | "saturday" | "sunday";

export type StageId =
  | "main-stage"
  | "worldwide-stage"
  | "resistance-megastructure"
  | "resistance-the-cove"
  | "live-stage"
  | "umf-radio"
  | "oasis";

export interface Artist {
  id: string;
  name: string;
  stage: StageId;
  stageLabel: string;
  day: DayId;
  dayLabel: string;
  startTime: string;
  endTime: string;
  startTimeDisplay: string;
  endTimeDisplay: string;
}
