'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Reviews',
    [
      {
        userId: 6,
        productId: 1,
        score: 3,
        title: "Small",
        description: 'I really like the design of this tent, but not only is its base small, but the entrance is small. We bought it to give our smaller cat a place to hide from our larger cat, but our smaller 8.5 lb cat won\'t go into it. I think it is too tight. Perhaps a kitten would use it.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat4.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 2,
        productId: 1,
        score: 5,
        title: "IT\'S SO FLUFFYYYYYY",
        description: 'The kittens love them. They haven\'t quite figured that they are for sleeping. They often look like there\'s been an earthquake or a hurricane. In time th warm cozy they offer will be appreciated.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat2.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 7,
        productId: 1,
        score: 4,
        title:"",
        description: 'Eos exercitationem quisquam nobis et sint.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat3.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 6,
        productId: 1,
        score: 5,
        title:"",
        description: 'Sunt quis est quia et in impedit eius.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat1.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 2,
        productId: 1,
        score: 3,
        title:"",
        description: 'Good product but the delivery its very very so long',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat2.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 2,
        productId: 2,
        score: 3,
        title:"",
        description: 'Saepe eum voluptatum.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat2.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 3,
        productId: 2,
        score: 5,
        title:"",
        description: 'Saepe eum voluptatum. Earum sed dolores sint corporis ullam. Rerum reprehenderit ducimus atque vel omnis!',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat2.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 5,
        productId: 2,
        score: 4,
        title:"",
        description: 'Maiores similique ex debitis. Earum sed dolores sint corporis ullam. Rerum reprehenderit ducimus atque vel omnis! Maiores similique ex debitis.Et quo deserunt ut molestias quia et ratione aut. Sunt quis est quia et in impedit eius.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat2.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 7,
        productId: 2,
        score: 4,
        title:"",
        description: 'Maiores similique ex debitis. Et quo deserunt ut molestias quia et ratione aut. Sunt quis est quia et in impedit eius.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat2.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 6,
        productId: 2,
        score: 5,
        title:"",
        description: 'I have five very picky felines and somehow I managed to get them to love all 3 flavors I bought in these treats! They were a little iffy about the texture at first but mannn do they love them now.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat1.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 13,
        productId: 2,
        score: 5,
        title:"",
        description: 'Alias reprehenderit consectetur quia ipsam et cumque commodi non. Alias reprehenderit consectetur quia ipsam et cumque commodi non.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat1.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 5,
        productId: 3,
        score: 5,
        title:"",
        description: 'Tempora quia dignissimos nam enim repellendus laboriosam.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat4.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 6,
        productId: 3,
        score: 5,
        title:"",
        description: 'Rerum reprehenderit ducimus atque vel omnis.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat4.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 6,
        productId: 4,
        score: 5,
        title:"",
        description: 'Good product but the delivery its very very so long',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat3.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 2,
        productId: 4,
        score: 4,
        title:"",
        description: 'These were for our cats, aged 1 yr to 12 yrs. They absolutely love the balls! They carry them around, toss them in the air and play keep away with each other to try and keep control of ALL the balls! The balls are perfect size for adult cats. Great toys, well built for our group!',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat2.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 3,
        productId: 4,
        score: 5,
        title:"",
        description: 'I loved receiving this as gift! It can be applied to the regular thing we got for our pets and extra toys and treats too! It was easy to apply in the payment section too!',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat1.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 7,
        productId: 4,
        score: 3,
        title:"",
        description: 'Molestiae sed unde accusantium est iusto est dolor praesentium iusto.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat1.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 2,
        productId: 4,
        score: 4,
        title:"",
        description: 'Quia ducimus rerum.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat1.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 1,
        productId: 4,
        score: 5,
        title:"",
        description: 'If I could give these 10 stars, I would. I decided to give these a try, based on Jackson\'s (Galaxy) recommendation, and, OMG!!, my Gracie went CRAZY for them! She probably would have eaten the whole package in one sitting if I\'d let her. HUGE hit! HIGHLY recommend!! Thank you, Jackson!',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat1.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 2,
        productId: 6,
        score: 4,
        title:"",
        description: 'Quia nobis temporibus qui hic suscipit.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat3.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 2,
        productId: 6,
        score: 3,
        title:"",
        description: 'Pay attention on expiration date',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat3.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 1,
        productId: 7,
        score: 4,
        title:"",
        description: 'These are cute and well made, but too big for cats to pick up and really play with.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat1.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 4,
        productId: 7,
        score: 5,
        title:"",
        description: 'My cat absolutely LOVES these!',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat3.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 2,
        productId: 7,
        score: 5,
        title:"",
        description: 'Our cats love it and I feel so good feeding this healthy treat to them.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat2.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 5,
        productId: 7,
        score: 5,
        title:"",
        description: 'Et quo deserunt ut molestias quia et ratione aut.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat2.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 4,
        productId: 8,
        score: 4,
        title:"",
        description: 'This is a fantastic idea! Don\'t have to go out in a pandemic with crowds to shop. In 1 hour recipient receives his/her gift! Fantastic. They actually choose what THEY KNOW what their finicky cats and dogs enjoy! Great idea Chewy! LOVE it!!!',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat2.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 3,
        productId: 8,
        score: 3,
        title:"",
        description: 'Mollitia voluptatem alias eos veniam consequatur labore natus veritatis.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat4.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 5,
        productId: 8,
        score: 3,
        title:"",
        description: 'Quia consequatur qui omnis necessitatibus impedit hic.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat1.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 5,
        productId: 8,
        score: 4,
        title:"",
        description: 'Both pets loved it, cat and my very picky SHih-TZU who loves liver and gizzards. I was looking mainly for a treat for my dog with those ingredients. The bonus is my dog and my cat both love it. However, with both of them liking it, the small bad didn\'t last. I would say there is not a lot in the bag, and would Love a larger sized bag with possibly a break on pricing for the volume that would be increased. But, all in all I will re-purchase this.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat1.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 4,
        productId: 8,
        score: 5,
        title:"",
        description: 'I have five very picky felines and somehow I managed to get them to love all 3 flavors I bought in these treats! They were a little iffy about the texture at first but mannn do they love them now.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat4.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 7,
        productId: 9,
        score: 3,
        title:"",
        description: 'These are cute and well made, but too big for cats to pick up and really play with.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat3.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 4,
        productId: 10,
        score: 4,
        title:"",
        description: 'Assumenda dolorem rem adipisci.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat4.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 4,
        productId: 10,
        score: 3,
        title:"",
        description: 'Quaerat voluptatem hic reprehenderit est quaerat.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat3.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 5,
        productId: 10,
        score: 5,
        title:"",
        description: 'Both of my cats have had fun with these! My female cat hardly ever plays with store bought toys. She likes string & wadded up pieces of paper, but she loved these! Kicking them, rolling around & biting them. My male cat seems to be impervious to cat nip, but he likes to chase these. Only reason I didn\'t give them a 5 is because my female car tired of them quickly. Cats get bored so easily!',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat1.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 7,
        productId: 10,
        score: 4,
        title:"",
        description: 'Perferendis est eligendi quo.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat2.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 2,
        productId: 12,
        score: 4,
        title:"",
        description: 'Enim laboriosam neque et.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat4.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 3,
        productId: 12,
        score: 5,
        title:"",
        description: 'My cat absolutely LOVES these!',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat1.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 7,
        productId: 13,
        score: 5,
        title:"",
        description: 'Both cats love the chicken medley, will definitely have to order more!',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat2.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 6,
        productId: 13,
        score: 4,
        title:"",
        description: 'Earum sed dolores sint corporis ullam.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat4.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 2,
        productId: 13,
        score: 5,
        title:"",
        description: 'I have a 17 yr old cat who over the course of life has deemed most toys not worth his time. Even though he LOVES catnip, he\'s never had much interest in catnip toys. This bag of moppy balls didn\'t last 5 minutes in the box! As per usual, he came to check out the new box in house. He immediately got into the box, found that bag, and dragged the whole thing out into the living room to start ripping it apart to get to the toys. I took one out and he\'s been chasing it and rubbing on it for the last 15 minutes. Will buy again once the dog has inevitably stolen them and lost them all!',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat2.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 14,
        productId: 13,
        score: 5,
        title:"",
        description: 'LOVE IT!!!!!!!!!',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat2.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 6,
        productId: 13,
        score: 4,
        title:"",
        description: 'Ad ea qui sit dicta tempora.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat3.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 7,
        productId: 14,
        score: 4,
        title:"",
        description: 'Laudantium placeat dolorem aut nam odit in excepturi.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat2.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 1,
        productId: 15,
        score: 3,
        title:"",
        description: 'Exercitationem sed ut totam animi.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat3.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 7,
        productId: 16,
        score: 5,
        title:"",
        description: 'My Siberian Kitty Cat loves this Treat. I feel good about giving her this Treat.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat2.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 4,
        productId: 16,
        score: 4,
        title:"",
        description: 'Voluptatem deleniti quasi rem hic ut aliquam sunt repellendus.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat2.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 3,
        productId: 16,
        score: 5,
        title:"",
        description: 'My cat absolutely LOVES these!',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat2.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 3,
        productId: 16,
        score: 5,
        title:"",
        description: 'Architecto consectetur rerum nam.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat1.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 1,
        productId: 16,
        score: 4,
        title:"",
        description: 'Excepturi assumenda occaecati in veniam amet nostrum.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat4.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 3,
        productId: 17,
        score: 4,
        title:"",
        description: 'Both pets loved it, cat and my very picky SHih-TZU who loves liver and gizzards. I was looking mainly for a treat for my dog with those ingredients. The bonus is my dog and my cat both love it. However, with both of them liking it, the small bad didn\'t last. I would say there is not a lot in the bag, and would Love a larger sized bag with possibly a break on pricing for the volume that would be increased. But, all in all I will re-purchase this.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat4.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 5,
        productId: 17,
        score: 4,
        title:"",
        description: 'Velit neque cupiditate quisquam facere consequatur.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat4.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 7,
        productId: 17,
        score: 5,
        title:"",
        description: 'My cat absolutely LOVES these!',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat1.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      
      {
        userId: 1,
        productId: 17,
        score: 5,
        title:"",
        description: 'Occaecati consequatur veritatis et ullam iusto quam omnis voluptatem.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat4.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,

      {
        userId: 1,
        productId: 17,
        score: 5,
        title:"",
        description: 'Unde distinctio atque.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat1.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,

      {
        userId: 6,
        productId: 17,
        score: 4,
        title:"",
        description: 'Maiores similique ex debitis.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat3.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 5,
        productId: 17,
        score: 4,
        title:"",
        description: 'Consequatur laudantium blanditiis eius.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat1.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 5,
        productId: 18,
        score: 3,
        title:"",
        description: 'Repellendus nihil officia dolorem dolores dicta impedit beatae molestiae tempore.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat3.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 2,
        productId: 18,
        score: 5,
        title:"",
        description: 'All 6 of my cats really loved these. The pieces are really tiny, so they went fast, but if you only have one or two cats, or yours aren\'t gluttons like mine, these treats are a great choice.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat3.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 4,
        productId: 19,
        score: 5,
        title:"",
        description: 'I have five very picky felines and somehow I managed to get them to love all 3 flavors I bought in these treats! They were a little iffy about the texture at first but mannn do they love them now.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat4.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 6,
        productId: 19,
        score: 4,
        title:"",
        description: 'Adipisci sit possimus nam repellendus sit eum.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat4.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 3,
        productId: 20,
        score: 3,
        title:"",
        description: 'I had high hopes for these since I loved the regular freeze dried chicken beasts cat treats. But the other organ meat in this product is too hard and cannot be chewed up well. One of my cats started to choke on this. He worked it out by just spitting the piece up. The liver pieces do not break up like the chicken pieces. If you give this to your cat, just be cautious that your pet chews it really really well.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat2.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,

      {
        userId: 5,
        productId: 20,
        score: 3,
        title:"",
        description: 'I purchased it for someone else , can’t find the email or how to even use it honestly',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat4.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 5,
        productId: 21,
        score: 5,
        title:"",
        description: 'I loved receiving this as gift! It can be applied to the regular thing we got for our pets and extra toys and treats too! It was easy to apply in the payment section too!',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat2.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 5,
        productId: 21,
        score: 5,
        title:"",
        description: 'Both cats love the chicken medley, will definitely have to order more!',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat3.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 5,
        productId: 21,
        score: 3,
        title:"",
        description: 'Excepturi iste quia officia.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat1.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,

    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Reviews', null, {});

  }
};
