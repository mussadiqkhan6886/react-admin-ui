export const menu = [
    {
        id: 1,
        title: "Main",
        listItems: [
            {
                id: 1,
                title: "Homepage",
                url: "/",
                icon: "/home.svg"
            },
            {
                id: 2,
                title: "Profile",
                url: "/profile",
                icon: "/user.svg"
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
                icon: "/user.svg"
            },
            {
                id: 2,
                title: "Products",
                url: "/products",
                icon: "/product.svg"
            },            
            {
                id: 3,
                title: "Orders",
                url: "/orders",
                icon: "/order.svg"
            },            
            {
                id: 4,
                title: "Posts",
                url: "/posts",
                icon: "/post2.svg"
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
                icon: "/element.svg"
            },
            {
                id: 2,
                title: "Notes",
                url: "/",
                icon: "/note.svg"
            },            
            {
                id: 3,
                title: "Forms",
                url: "/",
                icon: "/form.svg"
            },            
            {
                id: 4,
                title: "Calendar",
                url: "/",
                icon: "/calendar.svg"
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
                icon: "/setting.svg"
            },
            {
                id: 2,
                title: "Backups",
                url: "/",
                icon: "/backup.svg"
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
                icon: "/chart.svg"
            },
            {
                id: 2,
                title: "Logs",
                url: "/",
                icon: "/log.svg"
            },                        
        ]
    },
]

export const notifications = [
  {img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load", msg: "Congratulate him", header: "Roman Joined the Team"},
  {img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600", msg: "Salma sent you message", header: "New Message Received"},
  {img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600", msg: "Check your message", header: "New Payment received"},
  {img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600", msg: "Assign her new task", header: "Jolly completed task"},
]

export const topDealUsers = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    username: "Elva McDonald",
    email: "elva@gmail.com",
    amount: "3.668",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Linnie Nelson",
    email: "linnie@gmail.com",
    amount: "3.256",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Brent Reeves",
    email: "brent@gmail.com",
    amount: "2.998",
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Adeline Watson",
    email: "adeline@gmail.com",
    amount: "2.512",
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Juan Harrington",
    email: "juan@gmail.com",
    amount: "2.134",
  },
  {
    id: 6,
    img: "/user.jpg",
    username: "Mussadiq",
    email: "mussadiq@gmail.com",
    amount: "1.932",
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Angel Thomas",
    email: "angel@gmail.com",
    amount: "1.560",
  },
];

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

export const products = [
  {
    id: 1,
    img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
    title: "Playstation 5 Digital Edition",
    color: "white",
    producer: "Sony",
    price: "$250.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 2,
    img: "https://www.pngmart.com/files/6/Dell-Laptop-PNG-Image.png",
    title: "Dell Laptop KR211822",
    color: "black",
    producer: "Dell",
    price: "$499.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 3,
    img: "http://images.samsung.com/is/image/samsung/uk-led-tv-hg40ed670ck-hg40ed670ckxxu-001-front",
    title: "Samsung TV 4K SmartTV",
    color: "gray",
    producer: "Samsung",
    price: "$999.49",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 4,
    img: "https://raylo.imgix.net/iphone-14-blue.png",
    title: "Apple Iphone 14 Pro Max",
    color: "white",
    producer: "Apple",
    price: "$799.49",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 5,
    img: "https://www.signify.com/b-dam/signify/en-aa/about/news/2020/20200903-movie-night-essentials-popcorn-ice-cream-and-the-new-philips-hue-play-gradient-lightstrip/packaging-lighstrip.png",
    title: "Philips Hue Play Gradient",
    color: "rainbow",
    producer: "Philips",
    price: "$39.99",
    createdAt: "01.02.2023",
  },
  {
    id: 6,
    img: "https://www.smartworld.it/wp-content/uploads/2019/09/High_Resolution_PNG-MX-Master-3-LEFT-GRAPHITE.png",
    title: "Logitech MX Master 3",
    color: "black",
    producer: "Logitech",
    price: "$59.49",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 7,
    img: "https://www.pngarts.com/files/7/Podcast-Mic-PNG-Picture.png",
    title: "Rode Podcast Microphone",
    color: "gray",
    producer: "Rode",
    price: "$119.49",
    createdAt: "01.02.2023",
  },
  {
    id: 8,
    img: "https://5.imimg.com/data5/SW/VM/MY-5774620/toshiba-split-ac-2-ton-3-star-rated-ras-24s3ks-500x500.png",
    title: "Toshiba Split AC 2",
    color: "white",
    producer: "Toshiba",
    price: "$899.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 9,
    img: "https://img.productz.com/review_image/102489/preview_sony-kdl-50w800b-50-inch-hdtv-review-superb-picture-102489.png",
    title: "Sony Bravia KDL-47W805A",
    color: "black",
    producer: "Sony",
    price: "$970.49",
    createdAt: "01.02.2023",
  },
  {
    id: 10,
    img: "https://venturebeat.com/wp-content/uploads/2015/07/As_AO1-131_gray_nonglare_win10_03.png?fit=1338%2C1055&strip=all",
    title: "Acer Laptop 16 KL-4804",
    color: "black",
    producer: "Acer",
    price: "$599.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
];

export const singleUser = {
  id: 1,
  title: "Mussadiq Khan",
  img: "/user.jpg",
  info: {
    username: "mussadiq68",
    fullname: "Mussadiq Khan",
    email: "mussadiqkhan6886@gmail.com",
    phone: "123 456 789",
    status: "verified",
  },
  chart: {
    dataKeys: [
      { name: "visits", color: "#82ca9d" },
      { name: "clicks", color: "#8884d8" },
    ],
    data: [
      {
        name: "Sun",
        visits: 4000,
        clicks: 2400,
      },
      {
        name: "Mon",
        visits: 3000,
        clicks: 1398,
      },
      {
        name: "Tue",
        visits: 2000,
        clicks: 3800,
      },
      {
        name: "Wed",
        visits: 2780,
        clicks: 3908,
      },
      {
        name: "Thu",
        visits: 1890,
        clicks: 4800,
      },
      {
        name: "Fri",
        visits: 2390,
        clicks: 3800,
      },
      {
        name: "Sat",
        visits: 3490,
        clicks: 4300,
      },
    ],
  },
  activities: [
    {
      text: "Mussadiq khan purchased Playstation 5 Digital Edition",
      time: "3 day ago",
    },
    {
      text: "Mussadiq khan added 3 items into their wishlist",
      time: "1 week ago",
    },
    {
      text: "Mussadiq khan purchased Sony Bravia KD-32w800",
      time: "2 weeks ago",
    },
    {
      text: "Mussadiq khan reviewed a product",
      time: "1 month ago",
    },
    {
      text: "Mussadiq khan added 1 items into their wishlist",
      time: "1 month ago",
    },
    {
      text: "Mussadiq khan reviewed a product",
      time: "2 months ago",
    },
  ],
};
// export const singleProduct = {
//   id: 1,
//   title: "Playstation 5 Digital Edition",
//   img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
//   info: {
//     productId: "Ps5SDF1156d",
//     color: "white",
//     price: "$250.99",
//     producer: "Sony",
//     export: "Japan",
//   },
//   chart: {
//     dataKeys: [
//       { name: "visits", color: "#82ca9d" },
//       { name: "orders", color: "#8884d8" },
//     ],
//     data: [
//       {
//         name: "Sun",
//         visits: 4000,
//         orders: 2400,
//       },
//       {
//         name: "Mon",
//         visits: 3000,
//         orders: 1398,
//       },
//       {
//         name: "Tue",
//         visits: 2000,
//         orders: 3800,
//       },
//       {
//         name: "Wed",
//         visits: 2780,
//         orders: 3908,
//       },
//       {
//         name: "Thu",
//         visits: 1890,
//         orders: 4800,
//       },
//       {
//         name: "Fri",
//         visits: 2390,
//         orders: 3800,
//       },
//       {
//         name: "Sat",
//         visits: 3490,
//         orders: 4300,
//       },
//     ],
//   },
//   activities: [
//     {
//       text: "Mussadiq khan purchased Playstation 5 Digital Edition",
//       time: "3 day ago",
//     },
//     {
//       text: "Jane Doe added Playstation 5 Digital Edition into their wishlist",
//       time: "1 week ago",
//     },
//     {
//       text: "Mike Doe purchased Playstation 5 Digital Edition",
//       time: "2 weeks ago",
//     },
//     {
//       text: "Anna Doe reviewed the product",
//       time: "1 month ago",
//     },
//     {
//       text: "Michael Doe added Playstation 5 Digital Edition into their wishlist",
//       time: "1 month ago",
//     },
//     {
//       text: "Helen Doe reviewed the product",
//       time: "2 months ago",
//     },
//   ],
// };



export const allUsers = [
  {
    "id": 1,
    "img": "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    "lastName": "Hubbard",
    "firstName": "Eula",
    "email": "kewez@@gmail.com",
    "phone": "123 456 789",
    "createdAt": "01.02.2023",
    "verified": true,
    "title": "Eula Hubbard",
    "info": {
      "username": "eula.hubbard",
      "fullname": "Eula Hubbard",
      "email": "kewez@@gmail.com",
      "phone": "123 456 789",
      "status": "verified"
    },
    "chart": {
      "dataKeys": [
        {
          "name": "visits",
          "color": "#82ca9d"
        },
        {
          "name": "clicks",
          "color": "#8884d8"
        }
      ],
      "data": [
        {
          "name": "Sun",
          "visits": 1000,
          "clicks": 400
        },
        {
          "name": "Mon",
          "visits": 1200,
          "clicks": 600
        },
        {
          "name": "Tue",
          "visits": 1500,
          "clicks": 800
        },
        {
          "name": "Wed",
          "visits": 1800,
          "clicks": 900
        },
        {
          "name": "Thu",
          "visits": 2000,
          "clicks": 1100
        },
        {
          "name": "Fri",
          "visits": 2500,
          "clicks": 1400
        },
        {
          "name": "Sat",
          "visits": 3000,
          "clicks": 1700
        }
      ]
    },
    "activities": [
      {
        "text": "Eula Hubbard updated their profile",
        "time": "2 week(s) ago"
      },
      {
        "text": "Eula Hubbard purchased Dell Laptop KR211822",
        "time": "3 week(s) ago"
      },
      {
        "text": "Eula Hubbard removed an item from their wishlist",
        "time": "2 week(s) ago"
      },
      {
        "text": "Eula Hubbard purchased Samsung TV 4K SmartTV",
        "time": "4 week(s) ago"
      },
      {
        "text": "Eula Hubbard purchased Samsung TV 4K SmartTV",
        "time": "2 week(s) ago"
      }
    ]
  },
  {
    "id": 2,
    "img": "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "lastName": "Manning",
    "firstName": "Stella",
    "email": "comhuhmit@gmail.com",
    "phone": "123 456 789",
    "createdAt": "01.02.2023",
    "verified": true,
    "title": "Stella Manning",
    "info": {
      "username": "stella.manning",
      "fullname": "Stella Manning",
      "email": "comhuhmit@gmail.com",
      "phone": "123 456 789",
      "status": "verified"
    },
    "chart": {
      "dataKeys": [
        {
          "name": "visits",
          "color": "#82ca9d"
        },
        {
          "name": "clicks",
          "color": "#8884d8"
        }
      ],
      "data": [
        {
          "name": "Sun",
          "visits": 1000,
          "clicks": 400
        },
        {
          "name": "Mon",
          "visits": 1200,
          "clicks": 600
        },
        {
          "name": "Tue",
          "visits": 1500,
          "clicks": 800
        },
        {
          "name": "Wed",
          "visits": 1800,
          "clicks": 900
        },
        {
          "name": "Thu",
          "visits": 2000,
          "clicks": 1100
        },
        {
          "name": "Fri",
          "visits": 2500,
          "clicks": 1400
        },
        {
          "name": "Sat",
          "visits": 3000,
          "clicks": 1700
        }
      ]
    },
    "activities": [
      {
        "text": "Stella Manning reviewed a product",
        "time": "4 week(s) ago"
      },
      {
        "text": "Stella Manning purchased Playstation 5 Digital Edition",
        "time": "1 week(s) ago"
      },
      {
        "text": "Stella Manning reviewed a product",
        "time": "3 week(s) ago"
      },
      {
        "text": "Stella Manning removed an item from their wishlist",
        "time": "2 week(s) ago"
      },
      {
        "text": "Stella Manning purchased Dell Laptop KR211822",
        "time": "3 week(s) ago"
      }
    ]
  },
  {
    "id": 3,
    "img": "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "lastName": "Greer",
    "firstName": "Mary",
    "email": "ujudokon@hottmail.com",
    "phone": "123 456 789",
    "createdAt": "01.02.2023",
    "verified": true,
    "title": "Mary Greer",
    "info": {
      "username": "mary.greer",
      "fullname": "Mary Greer",
      "email": "ujudokon@hottmail.com",
      "phone": "123 456 789",
      "status": "verified"
    },
    "chart": {
      "dataKeys": [
        {
          "name": "visits",
          "color": "#82ca9d"
        },
        {
          "name": "clicks",
          "color": "#8884d8"
        }
      ],
      "data": [
        {
          "name": "Sun",
          "visits": 1000,
          "clicks": 400
        },
        {
          "name": "Mon",
          "visits": 1200,
          "clicks": 600
        },
        {
          "name": "Tue",
          "visits": 1500,
          "clicks": 800
        },
        {
          "name": "Wed",
          "visits": 1800,
          "clicks": 900
        },
        {
          "name": "Thu",
          "visits": 2000,
          "clicks": 1100
        },
        {
          "name": "Fri",
          "visits": 2500,
          "clicks": 1400
        },
        {
          "name": "Sat",
          "visits": 3000,
          "clicks": 1700
        }
      ]
    },
    "activities": [
      {
        "text": "Mary Greer updated their profile",
        "time": "3 week(s) ago"
      },
      {
        "text": "Mary Greer added 3 items into their wishlist",
        "time": "4 week(s) ago"
      },
      {
        "text": "Mary Greer updated their profile",
        "time": "1 week(s) ago"
      },
      {
        "text": "Mary Greer removed an item from their wishlist",
        "time": "2 week(s) ago"
      },
      {
        "text": "Mary Greer reviewed a product",
        "time": "3 week(s) ago"
      }
    ]
  },
  {
    "id": 4,
    "img": "https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "lastName": "Williamson",
    "firstName": "Mildred",
    "email": "tinhavabe@gmail.com",
    "phone": "123 456 789",
    "createdAt": "01.02.2023",
    "verified": true,
    "title": "Mildred Williamson",
    "info": {
      "username": "mildred.williamson",
      "fullname": "Mildred Williamson",
      "email": "tinhavabe@gmail.com",
      "phone": "123 456 789",
      "status": "verified"
    },
    "chart": {
      "dataKeys": [
        {
          "name": "visits",
          "color": "#82ca9d"
        },
        {
          "name": "clicks",
          "color": "#8884d8"
        }
      ],
      "data": [
        {
          "name": "Sun",
          "visits": 1000,
          "clicks": 400
        },
        {
          "name": "Mon",
          "visits": 1200,
          "clicks": 600
        },
        {
          "name": "Tue",
          "visits": 1500,
          "clicks": 800
        },
        {
          "name": "Wed",
          "visits": 1800,
          "clicks": 900
        },
        {
          "name": "Thu",
          "visits": 2000,
          "clicks": 1100
        },
        {
          "name": "Fri",
          "visits": 2500,
          "clicks": 1400
        },
        {
          "name": "Sat",
          "visits": 3000,
          "clicks": 1700
        }
      ]
    },
    "activities": [
      {
        "text": "Mildred Williamson updated their profile",
        "time": "1 week(s) ago"
      },
      {
        "text": "Mildred Williamson updated their profile",
        "time": "4 week(s) ago"
      },
      {
        "text": "Mildred Williamson purchased Samsung TV 4K SmartTV",
        "time": "1 week(s) ago"
      },
      {
        "text": "Mildred Williamson added 3 items into their wishlist",
        "time": "2 week(s) ago"
      },
      {
        "text": "Mildred Williamson removed an item from their wishlist",
        "time": "1 week(s) ago"
      }
    ]
  },
  {
    "id": 5,
    "img": "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "lastName": "Gross",
    "firstName": "Jose",
    "email": "gobtagbes@yahoo.com",
    "phone": "123 456 789",
    "createdAt": "01.02.2023",
    "title": "Jose Gross",
    "info": {
      "username": "jose.gross",
      "fullname": "Jose Gross",
      "email": "gobtagbes@yahoo.com",
      "phone": "123 456 789",
      "status": "unverified"
    },
    "chart": {
      "dataKeys": [
        {
          "name": "visits",
          "color": "#82ca9d"
        },
        {
          "name": "clicks",
          "color": "#8884d8"
        }
      ],
      "data": [
        {
          "name": "Sun",
          "visits": 1000,
          "clicks": 400
        },
        {
          "name": "Mon",
          "visits": 1200,
          "clicks": 600
        },
        {
          "name": "Tue",
          "visits": 1500,
          "clicks": 800
        },
        {
          "name": "Wed",
          "visits": 1800,
          "clicks": 900
        },
        {
          "name": "Thu",
          "visits": 2000,
          "clicks": 1100
        },
        {
          "name": "Fri",
          "visits": 2500,
          "clicks": 1400
        },
        {
          "name": "Sat",
          "visits": 3000,
          "clicks": 1700
        }
      ]
    },
    "activities": [
      {
        "text": "Jose Gross updated their profile",
        "time": "2 week(s) ago"
      },
      {
        "text": "Jose Gross added 3 items into their wishlist",
        "time": "3 week(s) ago"
      },
      {
        "text": "Jose Gross removed an item from their wishlist",
        "time": "4 week(s) ago"
      },
      {
        "text": "Jose Gross updated their profile",
        "time": "2 week(s) ago"
      },
      {
        "text": "Jose Gross removed an item from their wishlist",
        "time": "1 week(s) ago"
      }
    ]
  },
  {
    "id": 6,
    "img": "https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "lastName": "Sharp",
    "firstName": "Jeremy",
    "email": "vulca.eder@mail.com",
    "phone": "123 456 789",
    "createdAt": "01.02.2023",
    "verified": true,
    "title": "Jeremy Sharp",
    "info": {
      "username": "jeremy.sharp",
      "fullname": "Jeremy Sharp",
      "email": "vulca.eder@mail.com",
      "phone": "123 456 789",
      "status": "verified"
    },
    "chart": {
      "dataKeys": [
        {
          "name": "visits",
          "color": "#82ca9d"
        },
        {
          "name": "clicks",
          "color": "#8884d8"
        }
      ],
      "data": [
        {
          "name": "Sun",
          "visits": 1000,
          "clicks": 400
        },
        {
          "name": "Mon",
          "visits": 1200,
          "clicks": 600
        },
        {
          "name": "Tue",
          "visits": 1500,
          "clicks": 800
        },
        {
          "name": "Wed",
          "visits": 1800,
          "clicks": 900
        },
        {
          "name": "Thu",
          "visits": 2000,
          "clicks": 1100
        },
        {
          "name": "Fri",
          "visits": 2500,
          "clicks": 1400
        },
        {
          "name": "Sat",
          "visits": 3000,
          "clicks": 1700
        }
      ]
    },
    "activities": [
      {
        "text": "Jeremy Sharp updated their profile",
        "time": "3 week(s) ago"
      },
      {
        "text": "Jeremy Sharp removed an item from their wishlist",
        "time": "4 week(s) ago"
      },
      {
        "text": "Jeremy Sharp purchased Dell Laptop KR211822",
        "time": "2 week(s) ago"
      },
      {
        "text": "Jeremy Sharp reviewed a product",
        "time": "2 week(s) ago"
      },
      {
        "text": "Jeremy Sharp removed an item from their wishlist",
        "time": "1 week(s) ago"
      }
    ]
  },
  {
    "id": 7,
    "img": "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "lastName": "Lowe",
    "firstName": "Christina",
    "email": "reso.bilic@gmail.com",
    "phone": "123 456 789",
    "createdAt": "01.02.2023",
    "title": "Christina Lowe",
    "info": {
      "username": "christina.lowe",
      "fullname": "Christina Lowe",
      "email": "reso.bilic@gmail.com",
      "phone": "123 456 789",
      "status": "unverified"
    },
    "chart": {
      "dataKeys": [
        {
          "name": "visits",
          "color": "#82ca9d"
        },
        {
          "name": "clicks",
          "color": "#8884d8"
        }
      ],
      "data": [
        {
          "name": "Sun",
          "visits": 1000,
          "clicks": 400
        },
        {
          "name": "Mon",
          "visits": 1200,
          "clicks": 600
        },
        {
          "name": "Tue",
          "visits": 1500,
          "clicks": 800
        },
        {
          "name": "Wed",
          "visits": 1800,
          "clicks": 900
        },
        {
          "name": "Thu",
          "visits": 2000,
          "clicks": 1100
        },
        {
          "name": "Fri",
          "visits": 2500,
          "clicks": 1400
        },
        {
          "name": "Sat",
          "visits": 3000,
          "clicks": 1700
        }
      ]
    },
    "activities": [
      {
        "text": "Christina Lowe added 3 items into their wishlist",
        "time": "3 week(s) ago"
      },
      {
        "text": "Christina Lowe updated their profile",
        "time": "3 week(s) ago"
      },
      {
        "text": "Christina Lowe reviewed a product",
        "time": "2 week(s) ago"
      },
      {
        "text": "Christina Lowe added 3 items into their wishlist",
        "time": "2 week(s) ago"
      },
      {
        "text": "Christina Lowe purchased Dell Laptop KR211822",
        "time": "2 week(s) ago"
      }
    ]
  },
  {
    "id": 8,
    "img": "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "lastName": "Dean",
    "firstName": "Garrett",
    "email": "codaic@mail.com",
    "phone": "123 456 789",
    "createdAt": "01.02.2023",
    "verified": true,
    "title": "Garrett Dean",
    "info": {
      "username": "garrett.dean",
      "fullname": "Garrett Dean",
      "email": "codaic@mail.com",
      "phone": "123 456 789",
      "status": "verified"
    },
    "chart": {
      "dataKeys": [
        {
          "name": "visits",
          "color": "#82ca9d"
        },
        {
          "name": "clicks",
          "color": "#8884d8"
        }
      ],
      "data": [
        {
          "name": "Sun",
          "visits": 1000,
          "clicks": 400
        },
        {
          "name": "Mon",
          "visits": 1200,
          "clicks": 600
        },
        {
          "name": "Tue",
          "visits": 1500,
          "clicks": 800
        },
        {
          "name": "Wed",
          "visits": 1800,
          "clicks": 900
        },
        {
          "name": "Thu",
          "visits": 2000,
          "clicks": 1100
        },
        {
          "name": "Fri",
          "visits": 2500,
          "clicks": 1400
        },
        {
          "name": "Sat",
          "visits": 3000,
          "clicks": 1700
        }
      ]
    },
    "activities": [
      {
        "text": "Garrett Dean added 3 items into their wishlist",
        "time": "4 week(s) ago"
      },
      {
        "text": "Garrett Dean reviewed a product",
        "time": "4 week(s) ago"
      },
      {
        "text": "Garrett Dean reviewed a product",
        "time": "2 week(s) ago"
      },
      {
        "text": "Garrett Dean updated their profile",
        "time": "4 week(s) ago"
      },
      {
        "text": "Garrett Dean purchased Dell Laptop KR211822",
        "time": "2 week(s) ago"
      }
    ]
  },
  {
    "id": 9,
    "img": "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "lastName": "Parsons",
    "firstName": "Leah",
    "email": "uzozor@gmail.com",
    "phone": "123 456 789",
    "createdAt": "01.02.2023",
    "title": "Leah Parsons",
    "info": {
      "username": "leah.parsons",
      "fullname": "Leah Parsons",
      "email": "uzozor@gmail.com",
      "phone": "123 456 789",
      "status": "unverified"
    },
    "chart": {
      "dataKeys": [
        {
          "name": "visits",
          "color": "#82ca9d"
        },
        {
          "name": "clicks",
          "color": "#8884d8"
        }
      ],
      "data": [
        {
          "name": "Sun",
          "visits": 1000,
          "clicks": 400
        },
        {
          "name": "Mon",
          "visits": 1200,
          "clicks": 600
        },
        {
          "name": "Tue",
          "visits": 1500,
          "clicks": 800
        },
        {
          "name": "Wed",
          "visits": 1800,
          "clicks": 900
        },
        {
          "name": "Thu",
          "visits": 2000,
          "clicks": 1100
        },
        {
          "name": "Fri",
          "visits": 2500,
          "clicks": 1400
        },
        {
          "name": "Sat",
          "visits": 3000,
          "clicks": 1700
        }
      ]
    },
    "activities": [
      {
        "text": "Leah Parsons updated their profile",
        "time": "2 week(s) ago"
      },
      {
        "text": "Leah Parsons added 3 items into their wishlist",
        "time": "3 week(s) ago"
      },
      {
        "text": "Leah Parsons purchased Playstation 5 Digital Edition",
        "time": "2 week(s) ago"
      },
      {
        "text": "Leah Parsons added 3 items into their wishlist",
        "time": "1 week(s) ago"
      },
      {
        "text": "Leah Parsons reviewed a product",
        "time": "3 week(s) ago"
      }
    ]
  },
  {
    "id": 10,
    "img": "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "lastName": "Reid",
    "firstName": "Elnora",
    "email": "tuhkabapu@gmail.com",
    "phone": "123 456 789",
    "createdAt": "01.02.2023",
    "verified": true,
    "title": "Elnora Reid",
    "info": {
      "username": "elnora.reid",
      "fullname": "Elnora Reid",
      "email": "tuhkabapu@gmail.com",
      "phone": "123 456 789",
      "status": "verified"
    },
    "chart": {
      "dataKeys": [
        {
          "name": "visits",
          "color": "#82ca9d"
        },
        {
          "name": "clicks",
          "color": "#8884d8"
        }
      ],
      "data": [
        {
          "name": "Sun",
          "visits": 1000,
          "clicks": 400
        },
        {
          "name": "Mon",
          "visits": 1200,
          "clicks": 600
        },
        {
          "name": "Tue",
          "visits": 1500,
          "clicks": 800
        },
        {
          "name": "Wed",
          "visits": 1800,
          "clicks": 900
        },
        {
          "name": "Thu",
          "visits": 2000,
          "clicks": 1100
        },
        {
          "name": "Fri",
          "visits": 2500,
          "clicks": 1400
        },
        {
          "name": "Sat",
          "visits": 3000,
          "clicks": 1700
        }
      ]
    },
    "activities": [
      {
        "text": "Elnora Reid removed an item from their wishlist",
        "time": "3 week(s) ago"
      },
      {
        "text": "Elnora Reid reviewed a product",
        "time": "4 week(s) ago"
      },
      {
        "text": "Elnora Reid removed an item from their wishlist",
        "time": "2 week(s) ago"
      },
      {
        "text": "Elnora Reid removed an item from their wishlist",
        "time": "3 week(s) ago"
      },
      {
        "text": "Elnora Reid purchased Samsung TV 4K SmartTV",
        "time": "1 week(s) ago"
      }
    ]
  },
  {
    "id": 11,
    "img": "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "lastName": "Dunn",
    "firstName": "Gertrude",
    "email": "gibo@gmail.com",
    "phone": "123 456 789",
    "createdAt": "01.02.2023",
    "verified": true,
    "title": "Gertrude Dunn",
    "info": {
      "username": "gertrude.dunn",
      "fullname": "Gertrude Dunn",
      "email": "gibo@gmail.com",
      "phone": "123 456 789",
      "status": "verified"
    },
    "chart": {
      "dataKeys": [
        {
          "name": "visits",
          "color": "#82ca9d"
        },
        {
          "name": "clicks",
          "color": "#8884d8"
        }
      ],
      "data": [
        {
          "name": "Sun",
          "visits": 1000,
          "clicks": 400
        },
        {
          "name": "Mon",
          "visits": 1200,
          "clicks": 600
        },
        {
          "name": "Tue",
          "visits": 1500,
          "clicks": 800
        },
        {
          "name": "Wed",
          "visits": 1800,
          "clicks": 900
        },
        {
          "name": "Thu",
          "visits": 2000,
          "clicks": 1100
        },
        {
          "name": "Fri",
          "visits": 2500,
          "clicks": 1400
        },
        {
          "name": "Sat",
          "visits": 3000,
          "clicks": 1700
        }
      ]
    },
    "activities": [
      {
        "text": "Gertrude Dunn purchased Samsung TV 4K SmartTV",
        "time": "4 week(s) ago"
      },
      {
        "text": "Gertrude Dunn purchased Samsung TV 4K SmartTV",
        "time": "3 week(s) ago"
      },
      {
        "text": "Gertrude Dunn purchased Samsung TV 4K SmartTV",
        "time": "3 week(s) ago"
      },
      {
        "text": "Gertrude Dunn added 3 items into their wishlist",
        "time": "3 week(s) ago"
      },
      {
        "text": "Gertrude Dunn removed an item from their wishlist",
        "time": "1 week(s) ago"
      }
    ]
  },
  {
    "id": 12,
    "img": "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "lastName": "Williams",
    "firstName": "Mark",
    "email": "tic.harvey@hotmail.com",
    "phone": "123 456 789",
    "createdAt": "01.02.2023",
    "title": "Mark Williams",
    "info": {
      "username": "mark.williams",
      "fullname": "Mark Williams",
      "email": "tic.harvey@hotmail.com",
      "phone": "123 456 789",
      "status": "unverified"
    },
    "chart": {
      "dataKeys": [
        {
          "name": "visits",
          "color": "#82ca9d"
        },
        {
          "name": "clicks",
          "color": "#8884d8"
        }
      ],
      "data": [
        {
          "name": "Sun",
          "visits": 1000,
          "clicks": 400
        },
        {
          "name": "Mon",
          "visits": 1200,
          "clicks": 600
        },
        {
          "name": "Tue",
          "visits": 1500,
          "clicks": 800
        },
        {
          "name": "Wed",
          "visits": 1800,
          "clicks": 900
        },
        {
          "name": "Thu",
          "visits": 2000,
          "clicks": 1100
        },
        {
          "name": "Fri",
          "visits": 2500,
          "clicks": 1400
        },
        {
          "name": "Sat",
          "visits": 3000,
          "clicks": 1700
        }
      ]
    },
    "activities": [
      {
        "text": "Mark Williams removed an item from their wishlist",
        "time": "3 week(s) ago"
      },
      {
        "text": "Mark Williams added 3 items into their wishlist",
        "time": "4 week(s) ago"
      },
      {
        "text": "Mark Williams purchased Samsung TV 4K SmartTV",
        "time": "3 week(s) ago"
      },
      {
        "text": "Mark Williams removed an item from their wishlist",
        "time": "3 week(s) ago"
      },
      {
        "text": "Mark Williams reviewed a product",
        "time": "4 week(s) ago"
      }
    ]
  },
  {
    "id": 13,
    "img": "https://images.pexels.com/photos/761977/pexels-photo-761977.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "lastName": "Cruz",
    "firstName": "Charlotte",
    "email": "ceuc@gmail.com",
    "phone": "123 456 789",
    "createdAt": "01.02.2023",
    "title": "Charlotte Cruz",
    "info": {
      "username": "charlotte.cruz",
      "fullname": "Charlotte Cruz",
      "email": "ceuc@gmail.com",
      "phone": "123 456 789",
      "status": "unverified"
    },
    "chart": {
      "dataKeys": [
        {
          "name": "visits",
          "color": "#82ca9d"
        },
        {
          "name": "clicks",
          "color": "#8884d8"
        }
      ],
      "data": [
        {
          "name": "Sun",
          "visits": 1000,
          "clicks": 400
        },
        {
          "name": "Mon",
          "visits": 1200,
          "clicks": 600
        },
        {
          "name": "Tue",
          "visits": 1500,
          "clicks": 800
        },
        {
          "name": "Wed",
          "visits": 1800,
          "clicks": 900
        },
        {
          "name": "Thu",
          "visits": 2000,
          "clicks": 1100
        },
        {
          "name": "Fri",
          "visits": 2500,
          "clicks": 1400
        },
        {
          "name": "Sat",
          "visits": 3000,
          "clicks": 1700
        }
      ]
    },
    "activities": [
      {
        "text": "Charlotte Cruz removed an item from their wishlist",
        "time": "2 week(s) ago"
      },
      {
        "text": "Charlotte Cruz added 3 items into their wishlist",
        "time": "3 week(s) ago"
      },
      {
        "text": "Charlotte Cruz removed an item from their wishlist",
        "time": "4 week(s) ago"
      },
      {
        "text": "Charlotte Cruz updated their profile",
        "time": "1 week(s) ago"
      },
      {
        "text": "Charlotte Cruz added 3 items into their wishlist",
        "time": "4 week(s) ago"
      }
    ]
  },
  {
    "id": 14,
    "img": "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "lastName": "Harper",
    "firstName": "Sara",
    "email": "bafuv@hotmail.com",
    "phone": "123 456 789",
    "createdAt": "01.02.2023",
    "title": "Sara Harper",
    "info": {
      "username": "sara.harper",
      "fullname": "Sara Harper",
      "email": "bafuv@hotmail.com",
      "phone": "123 456 789",
      "status": "unverified"
    },
    "chart": {
      "dataKeys": [
        {
          "name": "visits",
          "color": "#82ca9d"
        },
        {
          "name": "clicks",
          "color": "#8884d8"
        }
      ],
      "data": [
        {
          "name": "Sun",
          "visits": 1000,
          "clicks": 400
        },
        {
          "name": "Mon",
          "visits": 1200,
          "clicks": 600
        },
        {
          "name": "Tue",
          "visits": 1500,
          "clicks": 800
        },
        {
          "name": "Wed",
          "visits": 1800,
          "clicks": 900
        },
        {
          "name": "Thu",
          "visits": 2000,
          "clicks": 1100
        },
        {
          "name": "Fri",
          "visits": 2500,
          "clicks": 1400
        },
        {
          "name": "Sat",
          "visits": 3000,
          "clicks": 1700
        }
      ]
    },
    "activities": [
      {
        "text": "Sara Harper purchased Playstation 5 Digital Edition",
        "time": "4 week(s) ago"
      },
      {
        "text": "Sara Harper added 3 items into their wishlist",
        "time": "1 week(s) ago"
      },
      {
        "text": "Sara Harper purchased Playstation 5 Digital Edition",
        "time": "4 week(s) ago"
      },
      {
        "text": "Sara Harper removed an item from their wishlist",
        "time": "2 week(s) ago"
      },
      {
        "text": "Sara Harper updated their profile",
        "time": "2 week(s) ago"
      }
    ]
  },
  {
    "id": 15,
    "img": "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    "lastName": "Griffin",
    "firstName": "Eric",
    "email": "ubi@gmail.com",
    "phone": "123 456 789",
    "createdAt": "01.02.2023",
    "title": "Eric Griffin",
    "info": {
      "username": "eric.griffin",
      "fullname": "Eric Griffin",
      "email": "ubi@gmail.com",
      "phone": "123 456 789",
      "status": "unverified"
    },
    "chart": {
      "dataKeys": [
        {
          "name": "visits",
          "color": "#82ca9d"
        },
        {
          "name": "clicks",
          "color": "#8884d8"
        }
      ],
      "data": [
        {
          "name": "Sun",
          "visits": 1000,
          "clicks": 400
        },
        {
          "name": "Mon",
          "visits": 1200,
          "clicks": 600
        },
        {
          "name": "Tue",
          "visits": 1500,
          "clicks": 800
        },
        {
          "name": "Wed",
          "visits": 1800,
          "clicks": 900
        },
        {
          "name": "Thu",
          "visits": 2000,
          "clicks": 1100
        },
        {
          "name": "Fri",
          "visits": 2500,
          "clicks": 1400
        },
        {
          "name": "Sat",
          "visits": 3000,
          "clicks": 1700
        }
      ]
    },
    "activities": [
      {
        "text": "Eric Griffin removed an item from their wishlist",
        "time": "1 week(s) ago"
      },
      {
        "text": "Eric Griffin reviewed a product",
        "time": "2 week(s) ago"
      },
      {
        "text": "Eric Griffin purchased Playstation 5 Digital Edition",
        "time": "4 week(s) ago"
      },
      {
        "text": "Eric Griffin removed an item from their wishlist",
        "time": "2 week(s) ago"
      },
      {
        "text": "Eric Griffin reviewed a product",
        "time": "3 week(s) ago"
      }
    ]
  }
];

export const allProducts = [
  {
    "id": 1,
    "img": "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
    "title": "Playstation 5 Digital Edition",
    "color": "white",
    "producer": "Sony",
    "price": "$250.99",
    "createdAt": "01.02.2023",
    "inStock": true,
    "info": {
      "color": "white",
      "producer": "Sony",
      "inStock": true
    },
    "chart": {
      "dataKeys": [
        {
          "name": "Visits",
          "color": "#8884d8"
        }
      ],
      "data": [
        {
          "name": "Jan",
          "Visits": 800
        },
        {
          "name": "Feb",
          "Visits": 967
        },
        {
          "name": "Mar",
          "Visits": 1098
        },
        {
          "name": "Apr",
          "Visits": 1200
        },
        {
          "name": "May",
          "Visits": 1108
        },
        {
          "name": "Jun",
          "Visits": 680
        }
      ]
    },
    "activities": [
      {
        "text": "Product restocked",
        "time": "2 days ago"
      },
      {
        "text": "Price updated",
        "time": "1 week ago"
      },
      {
        "text": "Color option added",
        "time": "2 weeks ago"
      },
      {
        "text": "User review posted",
        "time": "1 month ago"
      },
      {
        "text": "Product created",
        "time": "01.02.2023"
      }
    ]
  },
  {
    "id": 2,
    "img": "https://www.pngmart.com/files/6/Dell-Laptop-PNG-Image.png",
    "title": "Dell Laptop KR211822",
    "color": "black",
    "producer": "Dell",
    "price": "$499.99",
    "createdAt": "01.02.2023",
    "inStock": true,
    "info": {
      "color": "black",
      "producer": "Dell",
      "inStock": true
    },
    "chart": {
      "dataKeys": [
        {
          "name": "Visits",
          "color": "#8884d8"
        }
      ],
      "data": [
        {
          "name": "Jan",
          "Visits": 800
        },
        {
          "name": "Feb",
          "Visits": 967
        },
        {
          "name": "Mar",
          "Visits": 1098
        },
        {
          "name": "Apr",
          "Visits": 1200
        },
        {
          "name": "May",
          "Visits": 1108
        },
        {
          "name": "Jun",
          "Visits": 680
        }
      ]
    },
    "activities": [
      {
        "text": "Product restocked",
        "time": "2 days ago"
      },
      {
        "text": "Price updated",
        "time": "1 week ago"
      },
      {
        "text": "Color option added",
        "time": "2 weeks ago"
      },
      {
        "text": "User review posted",
        "time": "1 month ago"
      },
      {
        "text": "Product created",
        "time": "01.02.2023"
      }
    ]
  },
  {
    "id": 3,
    "img": "http://images.samsung.com/is/image/samsung/uk-led-tv-hg40ed670ck-hg40ed670ckxxu-001-front",
    "title": "Samsung TV 4K SmartTV",
    "color": "gray",
    "producer": "Samsung",
    "price": "$999.49",
    "createdAt": "01.02.2023",
    "inStock": true,
    "info": {
      "color": "gray",
      "producer": "Samsung",
      "inStock": true
    },
    "chart": {
      "dataKeys": [
        {
          "name": "Visits",
          "color": "#8884d8"
        }
      ],
      "data": [
        {
          "name": "Jan",
          "Visits": 800
        },
        {
          "name": "Feb",
          "Visits": 967
        },
        {
          "name": "Mar",
          "Visits": 1098
        },
        {
          "name": "Apr",
          "Visits": 1200
        },
        {
          "name": "May",
          "Visits": 1108
        },
        {
          "name": "Jun",
          "Visits": 680
        }
      ]
    },
    "activities": [
      {
        "text": "Product restocked",
        "time": "2 days ago"
      },
      {
        "text": "Price updated",
        "time": "1 week ago"
      },
      {
        "text": "Color option added",
        "time": "2 weeks ago"
      },
      {
        "text": "User review posted",
        "time": "1 month ago"
      },
      {
        "text": "Product created",
        "time": "01.02.2023"
      }
    ]
  },
  {
    "id": 4,
    "img": "https://raylo.imgix.net/iphone-14-blue.png",
    "title": "Apple Iphone 14 Pro Max",
    "color": "white",
    "producer": "Apple",
    "price": "$799.49",
    "createdAt": "01.02.2023",
    "inStock": true,
    "info": {
      "color": "white",
      "producer": "Apple",
      "inStock": true
    },
    "chart": {
      "dataKeys": [
        {
          "name": "Visits",
          "color": "#8884d8"
        }
      ],
      "data": [
        {
          "name": "Jan",
          "Visits": 800
        },
        {
          "name": "Feb",
          "Visits": 967
        },
        {
          "name": "Mar",
          "Visits": 1098
        },
        {
          "name": "Apr",
          "Visits": 1200
        },
        {
          "name": "May",
          "Visits": 1108
        },
        {
          "name": "Jun",
          "Visits": 680
        }
      ]
    },
    "activities": [
      {
        "text": "Product restocked",
        "time": "2 days ago"
      },
      {
        "text": "Price updated",
        "time": "1 week ago"
      },
      {
        "text": "Color option added",
        "time": "2 weeks ago"
      },
      {
        "text": "User review posted",
        "time": "1 month ago"
      },
      {
        "text": "Product created",
        "time": "01.02.2023"
      }
    ]
  },
  {
    "id": 5,
    "img": "https://www.signify.com/b-dam/signify/en-aa/about/news/2020/20200903-movie-night-essentials-popcorn-ice-cream-and-the-new-philips-hue-play-gradient-lightstrip/packaging-lighstrip.png",
    "title": "Philips Hue Play Gradient",
    "color": "rainbow",
    "producer": "Philips",
    "price": "$39.99",
    "createdAt": "01.02.2023",
    "info": {
      "color": "rainbow",
      "producer": "Philips",
      "inStock": false
    },
    "chart": {
      "dataKeys": [
        {
          "name": "Visits",
          "color": "#8884d8"
        }
      ],
      "data": [
        {
          "name": "Jan",
          "Visits": 800
        },
        {
          "name": "Feb",
          "Visits": 967
        },
        {
          "name": "Mar",
          "Visits": 1098
        },
        {
          "name": "Apr",
          "Visits": 1200
        },
        {
          "name": "May",
          "Visits": 1108
        },
        {
          "name": "Jun",
          "Visits": 680
        }
      ]
    },
    "activities": [
      {
        "text": "Product restocked",
        "time": "2 days ago"
      },
      {
        "text": "Price updated",
        "time": "1 week ago"
      },
      {
        "text": "Color option added",
        "time": "2 weeks ago"
      },
      {
        "text": "User review posted",
        "time": "1 month ago"
      },
      {
        "text": "Product created",
        "time": "01.02.2023"
      }
    ]
  },
  {
    "id": 6,
    "img": "https://www.smartworld.it/wp-content/uploads/2019/09/High_Resolution_PNG-MX-Master-3-LEFT-GRAPHITE.png",
    "title": "Logitech MX Master 3",
    "color": "black",
    "producer": "Logitech",
    "price": "$59.49",
    "createdAt": "01.02.2023",
    "inStock": true,
    "info": {
      "color": "black",
      "producer": "Logitech",
      "inStock": true
    },
    "chart": {
      "dataKeys": [
        {
          "name": "Visits",
          "color": "#8884d8"
        }
      ],
      "data": [
        {
          "name": "Jan",
          "Visits": 800
        },
        {
          "name": "Feb",
          "Visits": 967
        },
        {
          "name": "Mar",
          "Visits": 1098
        },
        {
          "name": "Apr",
          "Visits": 1200
        },
        {
          "name": "May",
          "Visits": 1108
        },
        {
          "name": "Jun",
          "Visits": 680
        }
      ]
    },
    "activities": [
      {
        "text": "Product restocked",
        "time": "2 days ago"
      },
      {
        "text": "Price updated",
        "time": "1 week ago"
      },
      {
        "text": "Color option added",
        "time": "2 weeks ago"
      },
      {
        "text": "User review posted",
        "time": "1 month ago"
      },
      {
        "text": "Product created",
        "time": "01.02.2023"
      }
    ]
  },
  {
    "id": 7,
    "img": "https://www.pngarts.com/files/7/Podcast-Mic-PNG-Picture.png",
    "title": "Rode Podcast Microphone",
    "color": "gray",
    "producer": "Rode",
    "price": "$119.49",
    "createdAt": "01.02.2023",
    "info": {
      "color": "gray",
      "producer": "Rode",
      "inStock": false
    },
    "chart": {
      "dataKeys": [
        {
          "name": "Visits",
          "color": "#8884d8"
        }
      ],
      "data": [
        {
          "name": "Jan",
          "Visits": 800
        },
        {
          "name": "Feb",
          "Visits": 967
        },
        {
          "name": "Mar",
          "Visits": 1098
        },
        {
          "name": "Apr",
          "Visits": 1200
        },
        {
          "name": "May",
          "Visits": 1108
        },
        {
          "name": "Jun",
          "Visits": 680
        }
      ]
    },
    "activities": [
      {
        "text": "Product restocked",
        "time": "2 days ago"
      },
      {
        "text": "Price updated",
        "time": "1 week ago"
      },
      {
        "text": "Color option added",
        "time": "2 weeks ago"
      },
      {
        "text": "User review posted",
        "time": "1 month ago"
      },
      {
        "text": "Product created",
        "time": "01.02.2023"
      }
    ]
  },
  {
    "id": 8,
    "img": "https://5.imimg.com/data5/SW/VM/MY-5774620/toshiba-split-ac-2-ton-3-star-rated-ras-24s3ks-500x500.png",
    "title": "Toshiba Split AC 2",
    "color": "white",
    "producer": "Toshiba",
    "price": "$899.99",
    "createdAt": "01.02.2023",
    "inStock": true,
    "info": {
      "color": "white",
      "producer": "Toshiba",
      "inStock": true
    },
    "chart": {
      "dataKeys": [
        {
          "name": "Visits",
          "color": "#8884d8"
        }
      ],
      "data": [
        {
          "name": "Jan",
          "Visits": 800
        },
        {
          "name": "Feb",
          "Visits": 967
        },
        {
          "name": "Mar",
          "Visits": 1098
        },
        {
          "name": "Apr",
          "Visits": 1200
        },
        {
          "name": "May",
          "Visits": 1108
        },
        {
          "name": "Jun",
          "Visits": 680
        }
      ]
    },
    "activities": [
      {
        "text": "Product restocked",
        "time": "2 days ago"
      },
      {
        "text": "Price updated",
        "time": "1 week ago"
      },
      {
        "text": "Color option added",
        "time": "2 weeks ago"
      },
      {
        "text": "User review posted",
        "time": "1 month ago"
      },
      {
        "text": "Product created",
        "time": "01.02.2023"
      }
    ]
  },
  {
    "id": 9,
    "img": "https://img.productz.com/review_image/102489/preview_sony-kdl-50w800b-50-inch-hdtv-review-superb-picture-102489.png",
    "title": "Sony Bravia KDL-47W805A",
    "color": "black",
    "producer": "Sony",
    "price": "$970.49",
    "createdAt": "01.02.2023",
    "info": {
      "color": "black",
      "producer": "Sony",
      "inStock": false
    },
    "chart": {
      "dataKeys": [
        {
          "name": "Visits",
          "color": "#8884d8"
        }
      ],
      "data": [
        {
          "name": "Jan",
          "Visits": 800
        },
        {
          "name": "Feb",
          "Visits": 967
        },
        {
          "name": "Mar",
          "Visits": 1098
        },
        {
          "name": "Apr",
          "Visits": 1200
        },
        {
          "name": "May",
          "Visits": 1108
        },
        {
          "name": "Jun",
          "Visits": 680
        }
      ]
    },
    "activities": [
      {
        "text": "Product restocked",
        "time": "2 days ago"
      },
      {
        "text": "Price updated",
        "time": "1 week ago"
      },
      {
        "text": "Color option added",
        "time": "2 weeks ago"
      },
      {
        "text": "User review posted",
        "time": "1 month ago"
      },
      {
        "text": "Product created",
        "time": "01.02.2023"
      }
    ]
  },
  {
    "id": 10,
    "img": "https://venturebeat.com/wp-content/uploads/2015/07/As_AO1-131_gray_nonglare_win10_03.png?fit=1338%2C1055&strip=all",
    "title": "Acer Laptop 16 KL-4804",
    "color": "black",
    "producer": "Acer",
    "price": "$599.99",
    "createdAt": "01.02.2023",
    "inStock": true,
    "info": {
      "color": "black",
      "producer": "Acer",
      "inStock": true
    },
    "chart": {
      "dataKeys": [
        {
          "name": "Visits",
          "color": "#8884d8"
        }
      ],
      "data": [
        {
          "name": "Jan",
          "Visits": 800
        },
        {
          "name": "Feb",
          "Visits": 967
        },
        {
          "name": "Mar",
          "Visits": 1098
        },
        {
          "name": "Apr",
          "Visits": 1200
        },
        {
          "name": "May",
          "Visits": 1108
        },
        {
          "name": "Jun",
          "Visits": 680
        }
      ]
    },
    "activities": [
      {
        "text": "Product restocked",
        "time": "2 days ago"
      },
      {
        "text": "Price updated",
        "time": "1 week ago"
      },
      {
        "text": "Color option added",
        "time": "2 weeks ago"
      },
      {
        "text": "User review posted",
        "time": "1 month ago"
      },
      {
        "text": "Product created",
        "time": "01.02.2023"
      }
    ]
  }
]