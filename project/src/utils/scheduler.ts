import { Task, ScheduledTask } from '../types';

export function scheduleActivities(tasks: Task[]): ScheduledTask[] {
  // Sort tasks by end time
  const sortedTasks = [...tasks].sort((a, b) => {
    return new Date(a.endTime).getTime() - new Date(b.endTime).getTime();
  });

  const scheduledTasks: ScheduledTask[] = [];
  let lastEndTime: Date | null = null;

  sortedTasks.forEach((task) => {
    const startTime = new Date(task.startTime);
    const endTime = new Date(task.endTime);

    const isScheduled = !lastEndTime || startTime >= lastEndTime;

    if (isScheduled) {
      lastEndTime = endTime;
    }

    scheduledTasks.push({
      ...task,
      isScheduled,
    });
  });

  return scheduledTasks;
}