const { faker } = require('@faker-js/faker');


function getRandomInt(min, max) {
  let difference = max - min
  let rand = Math.random();
  rand = Math.floor(rand * difference) + min
  return rand;
}

const seedReviews = num => {
  let i = 0;
  while (i < num) {
    let catnum = getRandomInt(1, 5)
    const review = {
      userId: getRandomInt(1, 8),
      productId: getRandomInt(1, 22),
      score: getRandomInt(3, 6),
      description: faker.lorem.sentence(),
      imgUrl: `https://project-catniip.s3.us-west-1.amazonaws.com/cat${catnum}.jpeg`,
      createdAt:"new Date()",
      updatedAt:"new Date()"
    }
    console.log(review, ',')
    i++
  }
}

const printCat = () => {
  let cat = faker.image.cats()
  console.log(cat)
}

// printCat()
seedReviews(60)
