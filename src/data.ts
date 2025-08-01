export const menu = [
    {
        id: 1,
        title: "Main",
        listItems: [
            {
                id: 1,
                title: "Homepage",
                url: "/",
                icon: "home.svg"
            },
            {
                id: 2,
                title: "Profile",
                url: "/users/1",
                icon: "user.svg"
            },            
        ]
    },
    {
        id: 2,
        title: "Lists",
        listItems: [
            {
                id: 1,
                title: "Users",
                url: "/users",
                icon: "user.svg"
            },
            {
                id: 2,
                title: "Products",
                url: "/products",
                icon: "product.svg"
            },            
            {
                id: 3,
                title: "Orders",
                url: "/orders",
                icon: "order.svg"
            },            
            {
                id: 4,
                title: "Posts",
                url: "/posts",
                icon: "post2.svg"
            },            
        ]
    },
    {
        id: 3,
        title: "General",
        listItems: [
            {
                id: 1,
                title: "ELements",
                url: "/",
                icon: "element.svg"
            },
            {
                id: 2,
                title: "Notes",
                url: "/",
                icon: "note.svg"
            },            
            {
                id: 3,
                title: "Forms",
                url: "/",
                icon: "form.svg"
            },            
            {
                id: 4,
                title: "Calendar",
                url: "/",
                icon: "calendar.svg"
            },            
        ]
    },
    {
        id: 4,
        title: "Maintenance",
        listItems: [
            {
                id: 1,
                title: "Settings",
                url: "/",
                icon: "setting.svg"
            },
            {
                id: 2,
                title: "Backups",
                url: "/",
                icon: "backup.svg"
            },                       
        ]
    },
    {
        id: 5,
        title: "analytics",
        listItems: [
            {
                id: 1,
                title: "Charts",
                url: "/",
                icon: "chart.svg"
            },
            {
                id: 2,
                title: "Logs",
                url: "/",
                icon: "log.svg"
            },                        
        ]
    },
]

export const topDealUsers = [
    {
        id: 1,
        img: "noavatar.png",
        username: "ELva McDonald",
        email: "elva@gmail.com",
        account: "3.668"
    },
    {
        id: 2,
        img: "noavatar.png",
        username: "Linnie Nelson",
        email: "linnie@gmail.com",
        account: "3.258"
    },
    {
        id: 3,
        img: "noavatar.png",
        username: "Brent Reeves",
        email: "brent@gmail.com",
        account: "2.999"
    },
    {
        id: 4,
        img: "noavatar.png",
        username: "Juan Harington",
        email: "juan@gmail.com",
        account: "2.134"
    },
    {
        id: 5,
        img: "noavatar.png",
        username: "Adeline Watson",
        email: "adeline@gmail.com",
        account: "2.512"
    },
    {
        id: 6,
        img: "noavatar.png",
        username: "Mussadiq Khan",
        email: "mk@gmail.com",
        account: "1.668"
    },
    {
        id: 7,
        img: "noavatar.png",
        username: "Heaven",
        email: "heaven@gmail.com",
        account: "3.998"
    },
]

export const chartBoxUser = {
    color: "#8884d8",
    icon: "/userIcon.svg",
    title: "Total Users",
    number: "11.238",
    dataKey: "users",
    percentage: 35,
    chartData : [
        {name: "Sun", users: 400},
        {name: "Mon", users: 300},
        {name: "Tue", users: 500},
        {name: "Wed", users: 500},
        {name: "Thu", users: 400},
        {name: "Fri", users: 500},
        {name: "Sat", users: 650},
    ]
}
export const chartBoxProduct = {
    color: "skyblue",
    icon: "/productIcon.svg",
    title: "Total Products",
    number: "238",
    dataKey: "products",
    percentage: 21,
    chartData : [
        {name: "Sun", products: 100},
        {name: "Mon", products: 500},
        {name: "Tue", products: 500},
        {name: "Wed", products: 300},
        {name: "Thu", products: 400},
        {name: "Fri", products: 450},
        {name: "Sat", products: 650},
    ]
}
export const chartBoxRevenue = {
    color: "teal",
    icon: "/revenueIcon.svg",
    title: "Total Revenue",
    number: "$56.432",
    dataKey: "revenue",
    percentage: -12,
    chartData : [
        {name: "Sun", revenue: 400},
        {name: "Mon", revenue: 600},
        {name: "Tue", revenue: 500},
        {name: "Wed", revenue: 700},
        {name: "Thu", revenue: 400},
        {name: "Fri", revenue: 300},
        {name: "Sat", revenue: 250},
    ]
}
export const chartBoxConversion = {
    color: "gold",
    icon: "/conversionIcon.svg",
    title: "Total Ratio",
    number: "2.6",
    dataKey: "ration",
    percentage: 12,
    chartData : [
        {name: "Sun", ration: 400},
        {name: "Mon", ration: 600},
        {name: "Tue", ration: 500},
        {name: "Wed", ration: 400},
        {name: "Thu", ration: 600},
        {name: "Fri", ration: 500},
        {name: "Sat", ration: 750},
    ]
}

export const barChartBoxVisit = {
    title: "Total Visit",
    color: "#FF8042",
    dataKey: "visit",
    chartData: [
        {
            name: "Sun",
            visit: 4000
        },
        {
            name: "Mon",
            visit: 3000
        },
        {
            name: "Tue",
            visit: 2000
        },
        {
            name: "Wed",
            visit: 1000
        },
        {
            name: "Thu",
            visit: 3000
        },
        {
            name: "Fri",
            visit: 5000
        },
        {
            name: "Sat",
            visit: 4000
        },
    ]
}
export const barChartBoxRevenue = {
    title: "Profit Earned",
    color: "#8884d8",
    dataKey: "profit",
    chartData: [
        {
            name: "Sun",
            profit: 2300
        },
        {
            name: "Mon",
            profit: 3000
        },
        {
            name: "Tue",
            profit: 1800
        },
        {
            name: "Wed",
            profit: 2200
        },
        {
            name: "Thu",
            profit: 3000
        },
        {
            name: "Fri",
            profit: 1000
        },
        {
            name: "Sat",
            profit: 4000
        },
    ]
}