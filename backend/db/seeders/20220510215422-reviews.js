'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Reviews',
    [
      {
        userId: 14,
        productId: 1,
        score: 3,
        title: "Small",
        description: 'I really like the design of this tent, but not only is its base small, but the entrance is small. We bought it to give our smaller cat a place to hide from our larger cat, but our smaller 8.5 lb cat won\'t go into it. I think it is too tight. Perhaps a kitten would use it.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat4.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 9,
        productId: 1,
        score: 5,
        title: "IT\'S SO FLUFFYYYYYY",
        description: 'The kittens love them. They haven\'t quite figured that they are for sleeping. They often look like there\'s been an earthquake or a hurricane. In time th warm cozy they offer will be appreciated.',
        imgUrl: '',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 7,
        productId: 1,
        score: 4,
        title:"Cute but Small",
        description: 'The opening of this is rather small, too small for my cats. This might be good for a kitten or small dog, but a dog or cat that weighs more than 12 pounds would have trouble getting in. I will be donating this to a rescue group for their kittens.',
        imgUrl: '',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 6,
        productId: 1,
        score: 5,
        title:"Best bed ever",
        description: 'My chi loves this thing. She’s about 11 lbs and it fits her perfectly snug. I threw an extra blankie in there for extra snuggles. Would recommend!',
        imgUrl: '',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 12,
        productId: 1,
        score: 3,
        title:"Slow delivery",
        description: 'Good product but the delivery its very very so long',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat2.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 11,
        productId: 1,
        score: 5,
        title:"Soft and Warm",
        description: 'He loves it! Might get another one for Christmas to put in bedroom.',
        imgUrl: '',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 13,
        productId: 1,
        score: 5,
        title:"Perfect",
        description: 'My cats absolutely love these and I had to buy an extra large one for my bigger than the others cat as he wanted in one too! They LOVE them!!!',
        imgUrl: '',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 10,
        productId: 1,
        score: 4,
        title:"Kitten bed",
        description: 'Just got two 3 month old kittens, and the small bed barely fits them. They are spending more time sleeping on top of it when flattened.',
        imgUrl: '',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 8,
        productId: 1,
        score: 4,
        title:"Kitties love it",
        description: 'I was disappointed when I saw the quality but my cats LOVE it! All 5 of them from kitten to senior attempt to pile in at the same time. Go figure.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat1.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 1,
        productId: 1,
        score: 5,
        title:"simple and comfy",
        description: 'My cat immediately got in and hasn’t left. It’s her new favorite spot!',
        imgUrl: '',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 12,
        productId: 2,
        score: 3,
        title:"Too small between wires",
        description: 'If I put them into it myself, 1 of the 2 will stay but she struggled to find a way to jump down. I thought there would be enough room for my cats but to easily move between the top wires and the window but they\'re a little too big.',
        imgUrl: '',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 3,
        productId: 2,
        score: 5,
        title:"A hit with the cats!",
        description: 'Suction cups arrived in good shape, just had to give the window a good clean and they\'ve stuck on really solid! Both my cats are pretty small but every so often I\'ll do a little test push to make sure it\'s not coming loose and about two weeks later it\'s holding strong.',
        imgUrl: '',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 5,
        productId: 2,
        score: 4,
        title:"PERFECT!",
        description: 'PERFECT!',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat2.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 7,
        productId: 2,
        score: 4,
        title:"Mostly great, a few caveats",
        description: 'I bought one hoping it would fit my window. It did and was immediately used by Missy, so I got a second one. Holds a medium size cat and they love rubbing their cheeks on the wires and scratching/chewing on the cardboard.',
        imgUrl: '',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 6,
        productId: 2,
        score: 5,
        title:"This has become my cat’s favorite perch.",
        description: 'Just make sure the window is freshly cleaned so the cups attach firmly.',
        imgUrl: '',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 15,
        productId: 2,
        score: 5,
        title:"My cat is obsessed!",
        description: 'I’ve never seen my cat attach herself so quickly to anything I’ve bought her. It’s super sturdy, she is on the larger side, just be sure to adhere to the instructions. It’s her new favorite spot',
        imgUrl: '',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 5,
        productId: 3,
        score: 5,
        title:"Great purchase!",
        description: 'These were for our cats, aged 1 yr to 12 yrs. They absolutely love the balls! They carry them around, toss them in the air and play keep away with each other to try and keep control of ALL the balls! The balls are perfect size for adult cats. Great toys, well built for our group!',
        imgUrl: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 6,
        productId: 3,
        score: 5,
        title:"Fun new toy",
        description: 'Cats all had fun sniffing the toy first, then it was game on as someone batted it! Kept them occupied for quite some time. I store it in a plastic bin filled with catnip to refresh the fun!',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat4.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 10,
        productId: 4,
        score: 4,
        title:"Nice",
        description: 'Good product but the delivery its very very so long',
        imgUrl: '',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 2,
        productId: 4,
        score: 5,
        title:"LOVE IT",
        description: 'These were for our cats, aged 1 yr to 12 yrs. They absolutely love the balls! They carry them around, toss them in the air and play keep away with each other to try and keep control of ALL the balls! The balls are perfect size for adult cats. Great toys, well built for our group!',
        imgUrl: '',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 8,
        productId: 4,
        score: 5,
        title:"Winner Winner!",
        description: 'I loved receiving this as gift! It can be applied to the regular thing we got for our pets and extra toys and treats too! It was easy to apply in the payment section too!',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat1.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 7,
        productId: 4,
        score: 2,
        title:"Doesn’t really work",
        description: 'It’s supposed to bubble and have movement but it really doesn’t. it barely cause any surface disturbance and you can’t really see the movement. it kinda defeats the whole purpose of it doesn’t move.',
        imgUrl: '',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 2,
        productId: 4,
        score: 5,
        title:"Cats vote best fountain",
        description: 'Replaced the eight year old Catit fountain with this one. Cats immediately liked it, and it\'s easy to clean. Cats like the stainless steel drinking bowl cleaned regularly and it\'s easy to take off and put back on. No leaking, and quiet. Instructions are easy to follow.',
        imgUrl: '',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 13,
        productId: 4,
        score: 5,
        title:"worth buying",
        description: 'If I could give these 10 stars, I would. I decided to give these a try, based on Jackson\'s (Galaxy) recommendation, and, OMG!!, my Gracie went CRAZY for them! She probably would have eaten the whole package in one sitting if I\'d let her. HUGE hit! HIGHLY recommend!! Thank you, Jackson!',
        imgUrl: '',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 13,
        productId: 6,
        score: 4,
        title:"food tray for thought",
        description: 'this food tray is perfect for my cat, he eats slower and the indentations aren\'t so deep tat he can\'t get the food',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat3.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 2,
        productId: 6,
        score: 3,
        title:"Works somewhat",
        description: 'Pay attention on expiration date',
        imgUrl: '',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 1,
        productId: 7,
        score: 4,
        title:"Good concept, better for larger cats",
        description: 'I purchased this several months ago and I use it for daily feedings. It\'s a great concept for a slow feeder, but it is much bigger than I\'d expected it to be when I first ordered it. I have an 8lb cat, and the spaces in this are so big that it\'s a bit too easy for her to inhale her food. Would probably work great for larger cats.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat1.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 9,
        productId: 7,
        score: 5,
        title:"Game changer!!",
        description: 'My cat absolutely LOVES these!',
        imgUrl: '',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 2,
        productId: 7,
        score: 5,
        title:"perfect",
        description: 'Our cats love it and I feel so good feeding this healthy treat to them.',
        imgUrl: '',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 5,
        productId: 7,
        score: 5,
        title:"So far so good",
        description: 'I received product reimbursement in exchange for my honest review. I am hoping this works to stop my puppy from chewing... well... everything. It doesn\'t have a foul odor and seems easy to use. I would buy again.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat2.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 4,
        productId: 8,
        score: 4,
        title:"Saved my life",
        description: 'This is a fantastic idea! Don\'t have to go out in a pandemic with crowds to shop. In 1 hour recipient receives his/her gift! Fantastic. They actually choose what THEY KNOW what their finicky cats and dogs enjoy! Great idea Chewy! LOVE it!!!',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat2.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 14,
        productId: 8,
        score: 2,
        title:"Very small",
        description: 'I was very disappointed on how small this back pack was. It could only fit one of my 4 cats who is 8 lbs. way too small for my 12 lb cats let alone my 18 or 21 lb cats. Very disappointed.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat4.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 15,
        productId: 8,
        score: 3,
        title:"Great cat backpack",
        description: 'I have two cats. One is in a carrying cat case and the other one in the cat backpack as I take them to the vets. Perfect!!!',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat1.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 5,
        productId: 8,
        score: 4,
        title:"Perfect Companion Carrier",
        description: 'Both pets loved it, cat and my very picky SHih-TZU who loves liver and gizzards. I was looking mainly for a treat for my dog with those ingredients. The bonus is my dog and my cat both love it. However, with both of them liking it, the small bad didn\'t last. I would say there is not a lot in the bag, and would Love a larger sized bag with possibly a break on pricing for the volume that would be increased. But, all in all I will re-purchase this.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat1.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 4,
        productId: 8,
        score: 5,
        title:"Worked perfectly",
        description: 'I have five very picky felines and somehow I managed to get them to love all 3 flavors I bought in these treats! They were a little iffy about the texture at first but mannn do they love them now.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat4.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 12,
        productId: 9,
        score: 3,
        title:"Excellent experience",
        description: 'These are cute and well made, but too big for cats to pick up and really play with.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat3.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 11,
        productId: 10,
        score: 4,
        title:"Great",
        description: 'Love this backpack to my cat Kameko on a hike and she loves it! Put bottles of water, cat treats and my power bar in the side pockets. Study backpack NOT uncomfortable for me or her.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat4.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 4,
        productId: 10,
        score: 3,
        title:"good size but…",
        description: 'Color and everything is nice. But i used it twice maybe a total of 30 minutes and the fabric attached to the zipper released and ripped a big hole in it. My puppy is 3lbs. And was handled carefully. Not so well made.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat3.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 5,
        productId: 10,
        score: 5,
        title:"Good For Kittens",
        description: 'Both of my cats have had fun with these! My female cat hardly ever plays with store bought toys. She likes string & wadded up pieces of paper, but she loved these! Kicking them, rolling around & biting them. My male cat seems to be impervious to cat nip, but he likes to chase these. Only reason I didn\'t give them a 5 is because my female car tired of them quickly. Cats get bored so easily!',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat1.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 7,
        productId: 10,
        score: 5,
        title:"Extraordinary",
        description: 'This backpack style kitty carrier is very well built and beautiful. It will make trips to the vet much easier and hands free.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat2.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 2,
        productId: 12,
        score: 4,
        title:"OK",
        description: 'My cat ate the first couple of sticks, but now she has no interest in them. She turns her nose up. One has been sitting in her food bowl for two days. I threw it out today.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat4.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 3,
        productId: 12,
        score: 5,
        title:"Delish!",
        description: 'My cat absolutely LOVES these!',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat1.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 7,
        productId: 13,
        score: 5,
        title:"Cats loved thes",
        description: 'Both cats love the chicken medley, will definitely have to order more!',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat2.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 12,
        productId: 13,
        score: 4,
        title:"Picky cats",
        description: 'My two cats are so picky about what they will eat! BUT they LOVE these. I love them because there’s no mess and no dish is needed. So glad I tried these!',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat4.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 2,
        productId: 13,
        score: 5,
        title:"Sheba meaty sticks",
        description: 'All 5 of our cats love these. My 15year old Maine Coon says he needs one by climbing in my lap and shaking hands.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat2.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 14,
        productId: 13,
        score: 4,
        title:"Good Product Despite Shrinkflation",
        description: 'Cats love these still. I loved them better before Sheba pulled a Shrinkflation by shortening the Length - not the price.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat2.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 6,
        productId: 13,
        score: 5,
        title:"He loves them!",
        description: 'My cat loves these treats. Getting ready to order more.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat3.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 7,
        productId: 14,
        score: 4,
        title:"Hartz Delectable Stew Tuna and Salmon",
        description: 'Wow! My Humans must really love me I can eat this and only this all day long. Very tasty. Would recommend this to all my fur friends. YUMMY!',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat2.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 11,
        productId: 14,
        score: 5,
        title:"Yummy!",
        description: 'Both cats LOVE this new treat! They calmly wait for me to empty pckage then they ‘suck it up’ & look for more.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat2.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 1,
        productId: 14,
        score: 4,
        title:"One cat likes it",
        description: 'I have two kitten kittens. Ones a fatty fat girl and she loves this type of a treat. My other is watching her girlish figure, so she’ll lick it once or twice and leaves the rest to her sister. She’s more of a hard treat and cat food type of gal. So I guess it just depends on the kitten kitten. Nothing wrong with it. I got them for free with my purchase so I can’t complain one bit.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat3.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 7,
        productId: 16,
        score: 5,
        title:"My cats love this food!",
        description: 'I have an orange tabby who will eat anything and a domestic long-hair who won\'t. Luckily they both love this food and I love that they are getting extra water in their diets.',
        imgUrl: '',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 4,
        productId: 16,
        score: 3,
        title:"My cats would not eat it.",
        description: 'My cats would not eat it. One eventually started to eat it but I will probably donate the rest of the pack.',
        imgUrl: '',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 15,
        productId: 16,
        score: 5,
        title:"Meow",
        description: 'My boy can’t stop raving about this food guess he’s hooked licks the bowl and meows for more',
        imgUrl: '',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 3,
        productId: 16,
        score: 5,
        title:"Weruva canned food is awesome!",
        description: 'I ordered this food as it is full of good ingredients. My cat Jagger loves all the flavors. She gets so excited when I open a can she jumps on me like a dog until I can get it in her bowl. Comes out of the can super easy as well. I highly recommend this food for all those picky cats out there!',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat1.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 8,
        productId: 16,
        score: 4,
        title:"So far, so good",
        description: 'These were new Weruva Cats in the Kitchen flavors for us except for the plain chicken. Luckily the cats liked it as much as they do that flavor, so with the sale I got this on I was very happy with the purchase because these are rated highly for its quality.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat4.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 12,
        productId: 17,
        score: 4,
        title:"Good bowl",
        description: 'My cat loves this bowl but it is a little misleading when it says "2 cups" and shows what appears to be 2 of the item. To be clear this is 1 bowl that holds 2 cups. Great and sturdy product and perfect for my senior man so he doesn\'t have to crouch to eat but not pleased with the advertisement.',
        imgUrl: '',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 5,
        productId: 17,
        score: 4,
        title:"Pricey but helpful",
        description: 'My cats were vomiting too much after eating so many solutions online suggested a raised or better yet raised and tilted bowl for them. Since purchasing it couple of weeks ago, we’ve had one incident so far: down from around 3-4 a week. they are also cute & sturdy.',
        imgUrl: '',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 7,
        productId: 17,
        score: 5,
        title:"The best bowls ever!",
        description: 'These bowls are fantastic! So worth the $$. They are the perfect height for my cats to eat comfortably and prevent food from falling out. I always thought my cats were messy eaters but it was the bowls! Now the feeding area is clean! Would highly recommend these bowls!!!',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat1.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      
      {
        userId: 1,
        productId: 17,
        score: 5,
        title:"🖤🐾😻",
        description: 'Absolutely love these. My cats looks so much more comfortable eating. I love the way everything came together. 🐾😻',
        imgUrl: '',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,

      {
        userId: 1,
        productId: 17,
        score: 5,
        title:"Necoichi Tilted raised bowl",
        description: 'I’m not sure the tilt made any difference in Charlie’s eating habits but it is well made, and actually heavier than the regular Necoichi raised (wide-mouthed) bowl. Happy I bought it.',
        imgUrl: '',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,

      {
        userId: 6,
        productId: 17,
        score: 4,
        title:"Raised Cat Dishes",
        description: 'This has reduced the amount of times my cats have thrown up their food. Totally amazing how this has worked. Love the bowls.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat3.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 5,
        productId: 17,
        score: 3,
        title:"Disappointed",
        description: 'Buy the wording and pictures on this I thought it was a set 2!!. NEVER WOULD HAVE ORDERED IT IF I HAD KNOW THAT IT WAS ONE!! WAY TO MUCH MONEY FOR 1 BOWL!!',
        imgUrl: '',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 5,
        productId: 18,
        score: 3,
        title:"Still deciding",
        description: 'I want to like this product more than I do. Once this little gets wet it really doesn\'t clump but becomes very heavy. I didn\'t want one that clumps bit didn\'t expect it to harden up. Every day you have to sift through it and pull out the heavy parts.But there is the plus, it doesn\'t make a mess all over the place, it stays in the litter box.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat3.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 2,
        productId: 18,
        score: 5,
        title:"The Perfect Litter",
        description: 'I\'ve been using this litter for years now and it never disappoints. It doesn\'t smell, clumps well, and there isn\'t a ton of dust. As long as they don\'t change the formula, I will be a loyal customer.',
        imgUrl: '',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 9,
        productId: 18,
        score: 5,
        title:"BEST NEW LITTER INVENTION EVER!",
        description: 'LITTLE IF NO ODOR LIGHT WEIGHT USE LESS SO DOES NOT COAST AS MUCH IN THE LONG RUN GRRRRRREEEAAT',
        imgUrl: '',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 4,
        productId: 19,
        score: 5,
        title:"Better than brush",
        description: 'This takes away more loose fur from my dog than just brushing. When this is used before AND after bath, it seems much less fur on floors. However, sometimes it takes more effort to take fur from the gloves. If you rince in water after using, they come off easily.',
        imgUrl: '',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 6,
        productId: 19,
        score: 4,
        title:"Great gloves but ripping after one use",
        description: 'I love these gloves for dog grooming! They lather nicely and also remove hair for dry brushing. The only downside is the quality. They are started to tear after one use. Let’s hope they stay intact',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat4.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 6,
        productId: 19,
        score: 5,
        title:"BUY THESE - THE OTHERS SUCK!!!",
        description: 'SUPER HAPPY WITH THESE, THEY ARE GOOD WELL MADE, GOOD QUALITY AND WORK VERY WELL. SO WELL, I AM BUYING MORE FOR CHRISTMAS PRESENTS!!!',
        imgUrl: '',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 12,
        productId: 20,
        score: 5,
        title:"Gets rid of all the mess",
        description: 'I love this litter container. My old male cat seemed to never be able to hit the box with his urine, so everyday I had to clean and sterilize the area where the box was. This cat liter box contains it all, happy days!!!! Works better than I thought it would.',
        imgUrl: 'https://project-catniip.s3.us-west-1.amazonaws.com/cat2.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 5,
        productId: 20,
        score: 3,
        title:"Boda box",
        description: 'I purchased it for someone else , can’t find the email or how to even use it honestly',
        imgUrl: '',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 11,
        productId: 20,
        score: 5,
        title:"Fantastic!",
        description: 'Wonderful! I’m using it for my kittens and they love it! They aren’t tracking any of the litter anymore!',
        imgUrl: '',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 5,
        productId: 21,
        score: 5,
        title:"",
        description: 'I loved receiving this as gift! It can be applied to the regular thing we got for our pets and extra toys and treats too! It was easy to apply in the payment section too!',
        imgUrl: '',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 5,
        productId: 21,
        score: 5,
        title:"Really nice",
        description: 'Both cats love the chicken medley, will definitely have to order more!',
        imgUrl: '',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 5,
        productId: 21,
        score: 4,
        title:"Great self groomer",
        description: 'My kitties love it. I purchased one as a test to see if my cats liked it. They were slowly getting comfortable and grooming themselves enjoying the brush. The downside is that it doesn\'t come with screws or nails to attach to corners so it can remain sturdy. The silly small pieces of adhesive are useless and won\'t hold this brush in place.',
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
