export const CustomerService = {
    getData() {
        return [
            {
                id: 1000,
                name: 'James Butt',
                Neighbourhood: {
                    name: 'Hougang',
                },
                company: 'Benton, John B Jr',
                date: '2015-09-13',
                status: 'unqualified',
                verified: true,
                activity: 17,
                representative: {
                    name: 'Ioni Bowcher',
                    image: 'ionibowcher.png'
                },
                balance: 70663,
                task: 'Volunteer Companion for Elderly',
                points: 100
            },
            {
                id: 1001,
                name: 'Josephine Darakjy',
                Neighbourhood: {
                    name: 'Yishun',
                },
                company: 'Chanay, Jeffrey A Esq',
                date: '2019-02-09',
                status: 'negotiation',
                verified: true,
                activity: 0,
                representative: {
                    name: 'Amy Elsner',
                    image: 'amyelsner.png'
                },
                balance: 82429,
                task: 'Organize Senior Activity Events',
                points: 100
            },
            {
                id: 1002,
                name: 'Art Venere',
                Neighbourhood: {
                    name: 'Fengshan',
                },
                company: 'Chemel, James L Cpa',
                date: '2017-05-13',
                status: 'qualified',
                verified: false,
                activity: 63,
                representative: {
                    name: 'Asiya Javayant',
                    image: 'asiyajavayant.png'
                },
                balance: 28334,
                task: 'Senior Care Assistance Program',
                points: 100
            },
            // Add more customers as needed
        ];
    },
            

    getCustomersSmall() {
        return Promise.resolve(this.getData().slice(0, 10));
    },

    getCustomers(params) {
        const queryParams = params
            ? Object.keys(params)
                  .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
                  .join('&')
            : '';

        return fetch('https://www.primefaces.org/data/customers?' + queryParams).then((res) => res.json());
    }
};
