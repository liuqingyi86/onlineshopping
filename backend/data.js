import bcrypt from 'bcryptjs';

const data={
    users:[
        {
            name:'Mike',
            email:'mike@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true
        },
        {
            name:'Emily',
            email:'emily@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false
        }
    ],
    products:[
        {
            name:'Nike Shirt',
            category:'Shirts',
            image:'/images/product-1.jpg',
            price:120,
            countInStock:9,
            brand:'Nike',
            rating:5,
            numReviews:10,
            description:'High quality product'
        },
        {
            name:'Adidas Fit Shirt',
            category:'Shirts',
            image:'/images/product-2.jpg',
            price:100,
            countInStock:6,
            brand:'Adidas',
            rating:4.5,
            numReviews:8,
            description:'High quality product'
        },
        {
            name:'Puma Shirt',
            category:'Shirts',
            image:'/images/product-3.jpg',
            price:105,
            countInStock:8,
            brand:'Puma',
            rating:4,
            numReviews:6,
            description:'High quality product'
        },
        {
            name:'Zara Shirt',
            category:'Shirts',
            image:'/images/product-4.jpg',
            price:80,
            countInStock:7,
            brand:'Zara',
            rating:4,
            numReviews:7,
            description:'High quality product'
        },
        {
            name:'Witchery Shirt',
            category:'Shirts',
            image:'/images/product-5.jpg',
            price:90,
            countInStock:5,
            brand:'Witchery',
            rating:3.5,
            numReviews:5,
            description:'High quality product'
        },
        {
            name:'AIYIPIN Fit Shirt',
            category:'Shirts',
            image:'/images/product-6.jpg',
            price:150,
            countInStock:0,
            brand:'AIYIPIN',
            rating:4.5,
            numReviews:15,
            description:'High quality product'
        }
    ]
};

export default data;