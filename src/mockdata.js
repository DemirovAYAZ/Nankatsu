export const incomesData = [{
    labels: [
        "January", 
        "February", 
        "March", 
        "April", 
        "May", 
        "June", 
        "July", 
        "August", 
        "September", 
        "October", 
        "November", 
        "December"],
    datasets: [
        {
            id: 1,
            label: 'Sales',
            data: [5, 7, 2, 4, 5, 8,5,7,3,6,2,4],
            borderColor: "rgba(0,0,0)",
            backgroundColor: '#F14A55',
        },

    ],
}];
export const afterAIData = [
    {
        labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"],
        datasets: [
            {
                id: 1,
                label: 'Revenue',
                data: [5, 7, 2, 4, 5, 8, 5, 7, 3, 6, 2, 4],
                borderColor: "rgba(0,0,0)",
                backgroundColor: 'rgba(0,0,0)',
            },
            {
                id: 2,
                label: 'Revenue after AI',
                data: [1, 4, 7, 6, 7, 3, 7, 4, 3, 8, 2, 5],
                borderColor: "rgba(0,0,0)",
                backgroundColor: '#F14A55',
                
            },
    
        ],
    },
];

export const customerCount = {
    labels: ["Members", "Non-members"],
    datasets: [
        {
            id: 1,
            label: "Customer Types",
            data: [7500, 25428],
            backgroundColor: [
                "#F14A55", 
                "#4CAF50", 
            ],
        },
    ],
};

