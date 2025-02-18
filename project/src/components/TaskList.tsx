import React from 'react';
import { Check, X } from 'lucide-react';
import { ScheduledTask } from '../types';

interface TaskListProps {
  tasks: ScheduledTask[];
  onRemoveTask: (id: string) => void;
}

export function TaskList({ tasks, onRemoveTask }: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No tasks added yet. Add some tasks to get started!
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <div
          key={task.id}
          className={`p-4 rounded-lg shadow-md ${
            task.isScheduled ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {task.isScheduled ? (
                <Check className="w-5 h-5 text-green-600" />
              ) : (
                <X className="w-5 h-5 text-red-600" />
              )}
              <div>
                <h3 className="font-medium text-gray-900">{task.title}</h3>
                <p className="text-sm text-gray-600">
                  {new Date(task.startTime).toLocaleString()} -{' '}
                  {new Date(task.endTime).toLocaleString()}
                </p>
              </div>
            </div>
            <button
              onClick={() => onRemoveTask(task.id)}
              className="text-gray-400 hover:text-gray-600"
              aria-label="Remove task"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}