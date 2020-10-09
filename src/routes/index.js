const express = require('express');

const router = express.Router();

const search = require('integrations/spotify');

router.get('/search/:text', async (req, res) => {
  const finded = await search(req.params.text);
  res.send(JSON.stringify(finded));
});

module.exports = router;
