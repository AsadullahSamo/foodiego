import type { NextApiRequest, NextApiResponse } from "next";

const items = [
    {
        "name": "Yamato Sushi",
        "image": "https://i.imgur.com/1sCkLlb.jpg",
        "cuisine": "Sushi, Asian",
        "rating": 4.7,
        "userRatingCount": 120,
        "deliveryTime": "40 - 50 min",
        "deliveryFee": "Free"
    },
    {
        "name": "Sushi Hero",
        "image": "https://i.imgur.com/kkKvN0C.jpg",
        "cuisine": "Sushi",
        "rating": 4.6,
        "userRatingCount": 104,
        "deliveryTime": "60 - 80 min",
        "deliveryFee": "Free"
    },
    {
        "name": "Katsu Sushi",
        "image": "https://i.imgur.com/IvxsWtF.jpg",
        "cuisine": "Sushi, Asian",
        "rating": 4.6,
        "userRatingCount": 102,
        "deliveryTime": "60 - 75 min",
        "deliveryFee": 1.50
    },
    {
        "name": "Sushi Dream",
        "image": "https://i.imgur.com/RTCqpmN.jpg",
        "cuisine": "Sushi",
        "rating": 4.4,
        "userRatingCount": 80,
        "deliveryTime": "50 - 80 min",
        "deliveryFee": 2.00
    },
    {
        "name": "Sushi Craft",
        "image": "https://i.imgur.com/unEJWXj.jpg",
        "cuisine": "Sushi",
        "rating": 4.6,
        "userRatingCount": 74,
        "deliveryTime": "50 - 80 min",
        "deliveryFee": "Free"
    },
    {
        "name": "Salmon Futomaki",
        "image": "https://i.imgur.com/Rm7t6OM.jpg",
        "cuisine": "Sushi",
        "rating": 4.5,
        "userRatingCount": 45,
        "deliveryTime": "40 - 60 min",
        "deliveryFee": 1.00
    },
    {
        "name": "Rainbow Set",
        "image": "https://i.imgur.com/67kyY0M.jpg",
        "cuisine": "Sushi",
        "rating": 4.7,
        "userRatingCount": 60,
        "deliveryTime": "30 - 50 min",
        "deliveryFee": "Free"
    },
    {
        "name": "Point Sushi",
        "image": "https://i.imgur.com/Hi2exjV.jpg",
        "cuisine": "Sushi",
        "rating": 4.3,
        "userRatingCount": 32,
        "deliveryTime": "45 - 65 min",
        "deliveryFee": 1.50
    },
    {
        "name": "Koneko Sushi",
        "image": "https://i.imgur.com/rzYHePh.jpg",
        "cuisine": "Sushi, Asian",
        "rating": 4.2,
        "userRatingCount": 28,
        "deliveryTime": "55 - 75 min",
        "deliveryFee": 2.00
    },
    {
        "name": "Hosmomak 1",
        "image": "https://i.imgur.com/JqGfGxy.jpg",
        "cuisine": "Asian",
        "rating": 4.1,
        "userRatingCount": 50,
        "deliveryTime": "50 - 70 min",
        "deliveryFee": 1.00
    },
    {
        "name": "Hosmomak 2",
        "image": "https://i.imgur.com/Vn1YPcA.jpg",
        "cuisine": "Asian",
        "rating": 4.3,
        "userRatingCount": 55,
        "deliveryTime": "45 - 65 min",
        "deliveryFee": "Free"
    },
    {
        "name": "Bento 1",
        "image": "https://i.imgur.com/jZyCwLL.jpg",
        "cuisine": "Asian",
        "rating": 4.0,
        "userRatingCount": 35,
        "deliveryTime": "60 - 80 min",
        "deliveryFee": 1.50
    },
    {
        "name": "Bento 2",
        "image": "https://i.imgur.com/U54espM.jpg",
        "cuisine": "Asian",
        "rating": 4.2,
        "userRatingCount": 40,
        "deliveryTime": "55 - 75 min",
        "deliveryFee": 2.00
    },
    {
        "name": "Bento 3",
        "image": "https://i.imgur.com/koFk3eW.jpg",
        "cuisine": "Asian",
        "rating": 4.1,
        "userRatingCount": 38,
        "deliveryTime": "50 - 70 min",
        "deliveryFee": "Free"
    },
    {
        "name": "Baked Salmon Futomaki",
        "image": "https://i.imgur.com/ER3bbbA.jpg",
        "cuisine": "Sushi",
        "rating": 4.6,
        "userRatingCount": 25,
        "deliveryTime": "35 - 55 min",
        "deliveryFee": 1.00
    },
    {
        "name": "Futomaki Sake Roll",
        "image": "https://i.imgur.com/67QQsxR.jpg",
        "cuisine": "Sushi",
        "rating": 4.4,
        "userRatingCount": 30,
        "deliveryTime": "40 - 60 min",
        "deliveryFee": 1.50
    },
    {
        "name": "Futomaki Ebi Tempura",
        "image": "https://i.imgur.com/CjTeCvl.jpg",
        "cuisine": "Sushi",
        "rating": 4.5,
        "userRatingCount": 28,
        "deliveryTime": "45 - 65 min",
        "deliveryFee": 2.00
    },
    {
        "name": "Dragon Uramaki",
        "image": "https://i.imgur.com/RhMqXbo.jpg",
        "cuisine": "Sushi",
        "rating": 4.7,
        "userRatingCount": 33,
        "deliveryTime": "30 - 50 min",
        "deliveryFee": "Free"
    }
]

export default (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json(items);
  };