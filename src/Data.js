 const categories1 = [{
    id : '1', 
    image : "https://websitedemos.net/baby-store-04/wp-content/uploads/sites/750/2020/12/baby-store-product-img-11.jpg",
    title:"Twin Cute Bunny Set Combo",
    price : 46,
    type : 'dress',
    description:'Pellentesque nisl ac dictum tincidunt ut viverra non, sem in sed fringilla a quis eu in et, aliquet convallis ornare pellentesque nibh phasellus tempor.'
},
{
    id : '2',
    image : "https://websitedemos.net/baby-store-04/wp-content/uploads/sites/750/2020/12/baby-store-product-img-10.jpg",
    title:"Colorful Birdies on Orange Bandana",
    price : 46,
    type : 'dress',
    description : 'Pellentesque nisl ac dictum tincidunt ut viverra non, sem in sed fringilla a quis eu in et, aliquet convallis ornare pellentesque nibh phasellus tempor.'
},
{
    id : '3',
    image : "https://websitedemos.net/baby-store-04/wp-content/uploads/sites/750/2020/12/baby-store-product-img-8.jpg",
    title:"Sunny Outdoor Picnic Set Yellow",
    price : 46,
    type : 'dress',
    description : 'Pellentesque nisl ac dictum tincidunt ut viverra non, sem in sed fringilla a quis eu in et, aliquet convallis ornare pellentesque nibh phasellus tempor.'
},
{
    id : '4',
    image : "https://websitedemos.net/baby-store-04/wp-content/uploads/sites/750/2020/12/baby-store-product-img-3.jpg",
    title:"Cute Brown Sheep Sleeveless",
    price : 46,
    type : 'dress',
    description : 'Pellentesque nisl ac dictum tincidunt ut viverra non, sem in sed fringilla a quis eu in et, aliquet convallis ornare pellentesque nibh phasellus tempor.'
},
{
    id : '5',
    image : "https://websitedemos.net/baby-store-04/wp-content/uploads/sites/750/2020/12/baby-store-product-img-2.jpg",
    title:"Long Sleeve Sweater Navy Blue",
    price : 46,
    type : 'dress',
    description: 'Pellentesque nisl ac dictum tincidunt ut viverra non, sem in sed fringilla a quis eu in et, aliquet convallis ornare pellentesque nibh phasellus tempor.'
},
{
    id : '6',
    image : "https://websitedemos.net/baby-store-04/wp-content/uploads/sites/750/2020/12/baby-store-product-img-1.jpg",
    title:"White Comfort Maxx",
    price : 46,
    type : 'dress',
    description : 'Pellentesque nisl ac dictum tincidunt ut viverra non, sem in sed fringilla a quis eu in et, aliquet convallis ornare pellentesque nibh phasellus tempor.'
},
{
    id : '7',
    image : "https://websitedemos.net/baby-store-04/wp-content/uploads/sites/750/2020/12/baby-store-product-img-12.jpg",
    title:"Extra Soft Touch Lamb Doll",
    price : 46,
    type : 'toys',
    description : 'Pellentesque nisl ac dictum tincidunt ut viverra non, sem in sed fringilla a quis eu in et, aliquet convallis ornare pellentesque nibh phasellus tempor.'
},
{
    id : '8',
    image : "https://websitedemos.net/baby-store-04/wp-content/uploads/sites/750/2020/12/baby-store-product-img-7.jpg",
    title:"Teddy Bear Ready To Flight Doll",
    price : 46,
    type : 'toys',
    description : 'Pellentesque nisl ac dictum tincidunt ut viverra non, sem in sed fringilla a quis eu in et, aliquet convallis ornare pellentesque nibh phasellus tempor.'
},
{
    id : '9',
    image : "https://websitedemos.net/baby-store-04/wp-content/uploads/sites/750/2020/12/baby-store-product-img-4.jpg",
    title:"ZooMate 3 Animal Set Toys",
    price : 46,
    type : 'toys',
    description : 'Pellentesque nisl ac dictum tincidunt ut viverra non, sem in sed fringilla a quis eu in et, aliquet convallis ornare pellentesque nibh phasellus tempor.'
},
{
    id : '10',
    image : "https://cdn.shopify.com/s/files/1/0428/4973/files/OrappleCountNStackStacking_1_800x.jpg?v=1688119324?v=43901991157977",
    title:"Orapple Count N Stack Stacking Toy",
    price : 46,
    type : 'toys',
    description : 'Pellentesque nisl ac dictum tincidunt ut viverra non, sem in sed fringilla a quis eu in et, aliquet convallis ornare pellentesque nibh phasellus tempor.'
},
{
    id : '11',
    image : "https://cdn.shopify.com/s/files/1/0428/4973/products/r_for_rabbit_first_play_safari_play_gym_orange_1__1_fce3c310-b01a-4725-aac0-ee3a16cfb1f5_800x.jpg?v=1686564494?v=43902034084057",
    title:"First Play Safari Play Gym For Kids",
    price : 46,
    type : 'toys',
    description : 'Pellentesque nisl ac dictum tincidunt ut viverra non, sem in sed fringilla a quis eu in et, aliquet convallis ornare pellentesque nibh phasellus tempor.'
},
{
    id : '12',
    image : "https://cdn.shopify.com/s/files/1/0428/4973/files/OrappleSmartLearningClockActivity_1_800x.jpg?v=1688119003?v=43901990863065",
    title:"Smart Learning Clock Activity Toy",
    price : 46,
    type : 'toys',
    description : 'Pellentesque nisl ac dictum tincidunt ut viverra non, sem in sed fringilla a quis eu in et, aliquet convallis ornare pellentesque nibh phasellus tempor.'
},
{
    id : '13',
    image : "https://cdn.shopify.com/s/files/1/0217/3275/3508/products/MBAHTLKOALAGREY_1_1080x.jpg?v=1632824152",
    title:"Colorful Birdies on Orange Bandana",
    price : 1950,
    type : 'babycare',
    description : 'Pellentesque nisl ac dictum tincidunt ut viverra non, sem in sed fringilla a quis eu in et, aliquet convallis ornare pellentesque nibh phasellus tempor.'
},
{
    id : '14',
    image : "https://cdn.shopify.com/s/files/1/0217/3275/3508/products/BabyinGreyBath-HighRes_1_1080x.jpg?v=1677501441",
    title:"Baby Bath with Plug ",
    price :  2990,
    type : 'babycare',
    description : 'Pellentesque nisl ac dictum tincidunt ut viverra non, sem in sed fringilla a quis eu in et, aliquet convallis ornare pellentesque nibh phasellus tempor.'
},
{
    id : '15',
    image : "https://cdn.shopify.com/s/files/1/0217/3275/3508/products/920366_product_face_2_1080x.jpg?v=1612177994",
    title:"Baby Brush and Comb",
    price : 749,
    type : 'babycare',
    description : 'Pellentesque nisl ac dictum tincidunt ut viverra non, sem in sed fringilla a quis eu in et, aliquet convallis ornare pellentesque nibh phasellus tempor.'
},
{
    id : '16',
    image : "https://cdn.shopify.com/s/files/1/0217/3275/3508/products/920382_product_face_1_1_553201bd-19d5-44e5-bd11-92387ab0ab0f_1080x.jpg?v=1669182557",
    title:"Toiletry Pouch with 9 Accessories",
    price : 6999,
    type : 'babycare',
    description : 'Pellentesque nisl ac dictum tincidunt ut viverra non, sem in sed fringilla a quis eu in et, aliquet convallis ornare pellentesque nibh phasellus tempor.'
},
{
    id : '17',
    image : "https://cdn.shopify.com/s/files/1/0428/4973/products/r_for_rabbit_diaper_pail-_hygo_bin_2_.jpg.mst_800x.webp?v=1687513806?v=43902017863897",
    title :"Hygo Bin- Portable Diaper Bin",
    price : 1960,
    type : 'babycare',
    description : 'Pellentesque nisl ac dictum tincidunt ut viverra non, sem in sed fringilla a quis eu in et, aliquet convallis ornare pellentesque nibh phasellus tempor.'
},
{
    id : '18',
    image : "https://cdn.shopify.com/s/files/1/0428/4973/files/shampoo_lotion-1_800x.jpg?v=1687265923?v=43902033854681",
    title:"Pure & Beyond Baby Shampoo",
    price : 318,
    type : 'babycare',
    description : 'Pellentesque nisl ac dictum tincidunt ut viverra non, sem in sed fringilla a quis eu in et, aliquet convallis ornare pellentesque nibh phasellus tempor.'
}]

const users = [{
    id : '1',
    firstname : "Terry",
    lastname : "Medhurst",
    email : "atuny0@sohu.com",
    username : "atuny0",
    mobilenumber : '+63 791 675 8914',
    imgurl : 'https://mdbootstrap.com/img/new/avatars/8.jpg',
    password : "CQutx25i8r",
},{
    id : '2',
    firstname : "Sheldon",
    lastname : "Quigley",
    email : "hbingley1@plala.com",
    username : "hbingley1",
    mobilenumber: '+7 813 117 7139',
    imgurl : 'https://mdbootstrap.com/img/new/avatars/6.jpg',
    password : "9uQFF1Lh"
  },{
    id : '3',
    firstname : "Terrill",
    lastname : "Hills",
    email : "rshawe2@51.com",
    username : "rshawe2",
    mobilenumber: '+63 739 292 7942',
    imgurl : 'https://mdbootstrap.com/img/new/avatars/7.jpg',
    password : "OWsTbMUgFc"
  },{
    id : '4',
    firstname : "Miles",
    lastname : "Cummerata",
    email : "yraigatt3@nature.com",
    username : "yraigatt3",
    mobilenumber: '+86 461 145 4186',
    imgurl : 'https://images.saymedia-content.com/.image/t_share/MTc0NDg3NjA2MDQ0NjY1MTky/top-10-most-successful-beautiful-korean-drama-actresses.jpg',
    password : "sRQxjPfdS"
  },{
    id : '5',
    firstname : "Mavis",
    lastname : "Schultz",
    email : "kmeus4@upenn.com",
    username : 'kmeus4' ,
    mobilenumber: '+372 285 771 1911',
    imgurl : 'https://imgix.ranker.com/user_node_img/65/1292876/original/ji-sung-recording-artists-and-groups-photo-u1',
    password : "aUTdmmmbH"
  },{
    id : 'admin',
    firstname : "Aiden",
    lastname : "Mathews",
    email : "aidenmathews@gmail.com",
    username : 'aiden05' ,
    mobilenumber: '6543216540',
    imgurl : '',
    password : "adminlogin"
  }]

export  {categories1 , users};