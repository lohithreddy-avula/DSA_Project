# Task Scheduler with Activity Selection Algorithm

A modern React application that implements the Activity Selection Algorithm to efficiently schedule non-overlapping tasks. Built with React, TypeScript, and Tailwind CSS.

![Task Scheduler Demo](https://images.unsplash.com/photo-1606327054629-64c8b0fd6e4f?auto=format&fit=crop&q=80&w=2000)

## Features

- ⚡ **Efficient Task Scheduling**: Uses the Activity Selection (Greedy) Algorithm to maximize non-overlapping tasks
- 📅 **Interactive Calendar**: Date and time picker for precise task scheduling
- 🎯 **Visual Feedback**: Clear visual indicators for scheduled and conflicting tasks
- 🔄 **Real-time Updates**: Instantly reschedules tasks when adding or removing entries
- 📱 **Responsive Design**: Works seamlessly across desktop and mobile devices

## Technology Stack

- **Frontend Framework**: React with TypeScript
- **Styling**: Tailwind CSS for modern, responsive design
- **Icons**: Lucide React for beautiful, consistent icons
- **Build Tool**: Vite for lightning-fast development
- **Type Safety**: Full TypeScript support

## Algorithm Details

The Task Scheduler implements the Activity Selection Algorithm, a greedy approach that:
1. Sorts tasks by end time
2. Selects non-overlapping tasks
3. Maximizes the number of tasks that can be scheduled

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/task-scheduler.git
cd task-scheduler
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to the local server URL provided by Vite

## Usage

1. **Adding Tasks**
   - Enter a task title
   - Select start date/time
   - Select end date/time
   - Click "Add Task"

2. **Understanding Task Status**
   - 🟢 Green background: Task is scheduled
   - 🔴 Red background: Task conflicts with a scheduled task

3. **Managing Tasks**
   - Remove tasks using the X button
   - Tasks are automatically rescheduled when adding or removing entries
## OUTPUT:-

![Project-Output](https://github.com/lohithreddy-avula/DSA_Project/blob/36a8e9e7aa2003c4cc8141f0792410ef021af92a/2nd%20output.png)

## Applications

This scheduler is perfect for:
- Meeting room scheduling
- Event planning
- Resource allocation
- Time management
- Project timeline organization

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide](https://lucide.dev/)
- Built with [Vite](https://vitejs.dev/)
