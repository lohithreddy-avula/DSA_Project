export interface Task {
  id: string;
  title: string;
  startTime: string;
  endTime: string;
}

export interface ScheduledTask extends Task {
  isScheduled: boolean;
}