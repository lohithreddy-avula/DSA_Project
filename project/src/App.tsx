import React, { useState } from 'react';
import { CalendarClock } from 'lucide-react';
import { Task, ScheduledTask } from './types';
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';
import { scheduleActivities } from './utils/scheduler';

function App() {
  const [tasks, setTasks] = useState<ScheduledTask[]>([]);

  const handleAddTask = (newTask: Task) => {
    setTasks((currentTasks) => {
      const updatedTasks = [...currentTasks, { ...newTask, isScheduled: false }];
      return scheduleActivities(updatedTasks);
    });
  };

  const handleRemoveTask = (id: string) => {
    setTasks((currentTasks) => {
      const remainingTasks = currentTasks.filter((task) => task.id !== id);
      return scheduleActivities(remainingTasks);
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto py-12 px-4">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <CalendarClock className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Task Scheduler</h1>
          </div>
          <p className="text-gray-600">
            Schedule your tasks efficiently using the Activity Selection Algorithm
          </p>
        </div>

        <div className="space-y-8">
          <TaskForm onAddTask={handleAddTask} />
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Scheduled Tasks</h2>
            <TaskList tasks={tasks} onRemoveTask={handleRemoveTask} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;