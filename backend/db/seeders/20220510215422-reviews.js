'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Reviews',
    [
      {
        userId: 4,
        productId: 8,
        score: 4,
        description: 'Animi et ad id sequi voluptates dolorem.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat2.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 6,
        productId: 4,
        score: 5,
        description: 'Asperiores vel quia sit beatae est perferendis.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat3.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 7,
        productId: 16,
        score: 5,
        description: 'Voluptatem nesciunt consequatur ducimus asperiores.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat2.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 2,
        productId: 6,
        score: 3,
        description: 'Tempore corporis cum debitis.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat3.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 7,
        productId: 9,
        score: 3,
        description: 'Qui aut repellat consequatur aliquid et perferendis ut deleniti quam.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat3.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 1,
        productId: 7,
        score: 4,
        description: 'Nesciunt voluptatem molestiae natus ab et qui.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat1.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 3,
        productId: 17,
        score: 4,
        description: 'Tempora quisquam aut voluptate ut perferendis nemo.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat4.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 5,
        productId: 8,
        score: 3,
        description: 'Quia consequatur qui omnis necessitatibus impedit hic.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat1.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 5,
        productId: 8,
        score: 4,
        description: 'Veniam sunt aut incidunt maxime.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat1.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 5,
        productId: 21,
        score: 5,
        description: 'Consequatur error sunt eos non sit ea.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat2.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 5,
        productId: 21,
        score: 5,
        description: 'Et qui deleniti fugiat.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat3.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 2,
        productId: 4,
        score: 4,
        description: 'Fuga est repellat ea nemo adipisci quisquam explicabo debitis et.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat2.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 4,
        productId: 16,
        score: 4,
        description: 'Voluptatem deleniti quasi rem hic ut aliquam sunt repellendus.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat2.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 7,
        productId: 13,
        score: 5,
        description: 'Pariatur hic ea aut enim id nobis sit.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat2.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 6,
        productId: 1,
        score: 3,
        description: 'Hic maiores odit.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat4.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 1,
        productId: 15,
        score: 3,
        description: 'Exercitationem sed ut totam animi.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat3.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 3,
        productId: 4,
        score: 5,
        description: 'Eum similique magnam deserunt possimus rerum rerum doloremque.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat1.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 3,
        productId: 8,
        score: 3,
        description: 'Mollitia voluptatem alias eos veniam consequatur labore natus veritatis.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat4.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 7,
        productId: 4,
        score: 3,
        description: 'Molestiae sed unde accusantium est iusto est dolor praesentium iusto.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat1.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 2,
        productId: 4,
        score: 4,
        description: 'Quia ducimus rerum.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat1.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 2,
        productId: 18,
        score: 5,
        description: 'Autem itaque et rem eum.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat3.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 3,
        productId: 12,
        score: 5,
        description: 'Molestiae excepturi nemo neque necessitatibus natus amet harum quia exercitationem.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat1.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 4,
        productId: 8,
        score: 5,
        description: 'Earum facere beatae non perferendis aliquid totam.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat4.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 3,
        productId: 16,
        score: 5,
        description: 'Vel sint cupiditate dolor.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat2.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 5,
        productId: 21,
        score: 3,
        description: 'Excepturi iste quia officia.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat1.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 5,
        productId: 17,
        score: 4,
        description: 'Velit neque cupiditate quisquam facere consequatur.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat4.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 5,
        productId: 18,
        score: 3,
        description: 'Repellendus nihil officia dolorem dolores dicta impedit beatae molestiae tempore.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat3.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 7,
        productId: 17,
        score: 5,
        description: 'Ratione quod dolorem veniam sed eligendi autem.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat1.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 5,
        productId: 3,
        score: 5,
        description: 'Tempora quia dignissimos nam enim repellendus laboriosam.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat4.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 4,
        productId: 10,
        score: 4,
        description: 'Assumenda dolorem rem adipisci.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat4.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 2,
        productId: 6,
        score: 4,
        description: 'Quia nobis temporibus qui hic suscipit.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat3.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 1,
        productId: 17,
        score: 5,
        description: 'Occaecati consequatur veritatis et ullam iusto quam omnis voluptatem.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat4.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 2,
        productId: 12,
        score: 4,
        description: 'Enim laboriosam neque et.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat4.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 1,
        productId: 17,
        score: 5,
        description: 'Unde distinctio atque.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat1.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 2,
        productId: 1,
        score: 3,
        description: 'Et rerum nulla unde.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat2.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 4,
        productId: 10,
        score: 3,
        description: 'Quaerat voluptatem hic reprehenderit est quaerat.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat3.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 3,
        productId: 16,
        score: 5,
        description: 'Architecto consectetur rerum nam.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat1.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 4,
        productId: 7,
        score: 5,
        description: 'A sed tempora a aut.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat3.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 5,
        productId: 10,
        score: 5,
        description: 'Aut in assumenda repellat inventore modi qui voluptatem ut.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat1.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 6,
        productId: 13,
        score: 4,
        description: 'Earum sed dolores sint corporis ullam.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat4.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 2,
        productId: 2,
        score: 3,
        description: 'Saepe eum voluptatum.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat2.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 6,
        productId: 3,
        score: 5,
        description: 'Rerum reprehenderit ducimus atque vel omnis.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat4.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 7,
        productId: 14,
        score: 4,
        description: 'Laudantium placeat dolorem aut nam odit in excepturi.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat2.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 6,
        productId: 17,
        score: 4,
        description: 'Maiores similique ex debitis.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat3.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 7,
        productId: 10,
        score: 4,
        description: 'Perferendis est eligendi quo.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat2.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 4,
        productId: 19,
        score: 5,
        description: 'Ut iure quis reiciendis laudantium tempora pariatur architecto qui.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat4.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 3,
        productId: 20,
        score: 3,
        description: 'Rem eos nobis illum maiores quibusdam.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat2.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 7,
        productId: 1,
        score: 4,
        description: 'Eos exercitationem quisquam nobis et sint.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat3.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 2,
        productId: 7,
        score: 5,
        description: 'Rerum autem ab ullam rem ipsam vel accusantium.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat2.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 5,
        productId: 20,
        score: 3,
        description: 'Et quas molestias quidem.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat4.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 1,
        productId: 4,
        score: 5,
        description: 'Voluptatibus perferendis et debitis culpa nisi nihil et sit.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat1.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 6,
        productId: 2,
        score: 5,
        description: 'Alias reprehenderit consectetur quia ipsam et cumque commodi non.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat1.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 6,
        productId: 1,
        score: 5,
        description: 'Sunt quis est quia et in impedit eius.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat1.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 5,
        productId: 17,
        score: 4,
        description: 'Consequatur laudantium blanditiis eius.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat1.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 5,
        productId: 7,
        score: 5,
        description: 'Et quo deserunt ut molestias quia et ratione aut.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat2.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 2,
        productId: 13,
        score: 5,
        description: 'Vel ex quia nemo omnis veniam.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat2.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 6,
        productId: 13,
        score: 4,
        description: 'Ad ea qui sit dicta tempora.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat3.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 1,
        productId: 16,
        score: 4,
        description: 'Excepturi assumenda occaecati in veniam amet nostrum.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat4.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 6,
        productId: 19,
        score: 4,
        description: 'Adipisci sit possimus nam repellendus sit eum.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat4.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 2,
        productId: 1,
        score: 3,
        description: 'Nulla minus qui et fuga nulla.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat2.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Reviews', null, {});

  }
};
