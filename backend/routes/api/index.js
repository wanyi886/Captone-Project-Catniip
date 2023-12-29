const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { setTokenCookie } = require('../../utils/auth');
const { restoreUser, requireAuth } = require( '../../utils/auth');
const { User} = require('../../db/models');
const path = require('path');

const sessionRouter = require('./session');
const usersRouter = require('./users');
const productsRouter = require('./products');
const ordersRouter = require('./orders');
const reviewsRouter = require('./reviews');
const awsRouter = require('./aws')


router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/products', productsRouter);
router.use('/orders', ordersRouter);
router.use('/reviews', reviewsRouter);
router.use('/file', awsRouter);

router.post('/test', function(req, res) {
  res.json({ requestBody: req.body });
})

router.get('/testtest', function(req, res) {
  res.send("**********************")
})

router.get('/resume', function (req, res) {
  // const pdfFilePath = path.join(__dirname, '..','..','..', 'frontend', 'public', 'pdf', 'Wan_Yi_Lee_Resume_2024.pdf');
  // res.download(pdfFilePath, 'Wan_Yi_Lee_Resume_2024.pdf', (err) => {
  //   if (err) {
  //     res.status(404).send('File not found');
  //   }
  // })
  
  
  res.sendFile(path.resolve("../frontend/public/pdf/Wan_Yi_Lee_Resume_2024.pdf"), (err) => {
     if (err) {
      res.status(404).send('Error: File not found.');
    }
  });
 

})

// test route 1
router.get('/set-token-cookie', asyncHandler(async(req, res) => {
  const user = await User.findOne({
    where: {
      username: 'Demo-WanYi'
    }
  })
  setTokenCookie(res, user);
  return res.json({ user })
}));

// test route 2
router.get('/restore-user', restoreUser, asyncHandler(async(req, res) => {
  return res.json(req.user)
}))

// test route 3
router.get('/require-auth', requireAuth, asyncHandler(async(req, res) => {
  return res.json(req.user);
}))



module.exports = router;
