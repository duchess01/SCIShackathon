export const TaskService = {
    // Mock method to get task data
    getTaskData() {
        return [
            {
                id: 1,
                name: 'Task One',
                priority: 'High',
                status: 'In Progress',
                date: new Date('2024-08-29'),
                time: '10:00 AM',
                description: 'Description for task one',
                assignedTo: ['John Doe'],
                category: 'Development',
                karmaPoints:'100'
            },
            {
                id: 2,
                name: 'Task Two',
                priority: 'Medium',
                status: 'Completed',
                date: new Date('2024-08-28'),
                time: '02:00 PM',
                description: 'Description for task two',
                assignedTo: ['Jane Smith'],
                category: 'Testing',
                karmaPoints:'200'

            },
            {
                id: 3,
                name: 'Task Three',
                priority: 'Low',
                status: 'Pending',
                date: new Date('2024-08-30'),
                time: '04:00 PM',
                description: 'Description for task three',
                assignedTo: ['Alice Johnson'],
                category: 'Documentation',
                karmaPoints:'300'

            },
        ];
    },

    // Returns a promise with the task data
    getTasks() {
        return Promise.resolve(this.getTaskData());
    },

    // Fetch tasks from an external API
    // fetchTasks(params) {
    //     const queryParams = params
    //         ? Object.keys(params)
    //               .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
    //               .join('&')
    //         : '';

    //     return fetch('https://www.example.com/api/tasks?' + queryParams)
    //         .then((res) => {
    //             if (!res.ok) {
    //                 throw new Error('Network response was not ok');
    //             }
    //             return res.json();
    //         });
    // }
};
