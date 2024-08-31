export const VolunteerService = {
    getVolunteers() {
        return [
            {
                id: 1,
                name: 'Alice Johnson',
                location: 'Bishan',
                applicationDate: '2024-07-15',
                specialities: ['Admin', 'Education'],
                contact: 'alice.johnson@example.com',
                phone: '123-456-7890',
                dayAvailability: 'Weekends',
                timeAvailability: 'Flexible',
            },
            {
                id: 2,
                name: 'Bob Smith',
                location: 'Tiong Bahru',
                applicationDate: '2024-07-18',
                specialities: ['Healthcare', 'Education'],
                contact: 'bob.smith@example.com',
                phone: '987-654-3210',
                dayAvailability: 'Weekdays',
                timeAvailability: 'Morning',
            },
            {
                id: 3,
                name: 'Carol White',
                location: 'City Hall',
                applicationDate: '2024-08-01',
                specialities: ['Admin', 'Fundraising'],
                contact: 'carol.white@example.com',
                phone: '555-123-4567',
                dayAvailability: 'Flexible',
                timeAvailability: 'Afternoon',

            },
            {
                id: 4,
                name: 'David Brown',
                location: 'Woodlands',
                applicationDate: '2024-08-10',
                specialities: ['Education', 'Healthcare'],
                contact: 'david.brown@example.com',
                phone: '555-987-6543',
                dayAvailability: 'Weekends',
                timeAvailability: 'Evening',

            },
            {
                id: 5,
                name: 'Eva Green',
                location: 'Marine Parade',
                applicationDate: '2024-08-12',
                specialities: ['Fundraising', 'Admin'],
                contact: 'eva.green@example.com',
                phone: '555-678-1234',
                dayAvailability: 'Weekdays',
                timeAvailability: 'Flexible',
                tasks: [2]  
            }
        ];
    },

    getVolunteers() {
        return Promise.resolve(this.getVolunteerData());
    },
};
