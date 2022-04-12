const { Router } = require('express');
const { ArtistController } = require('../controllers/ArtistController');

const artistCTRL = new ArtistController();
const router= Router();

// 1 - Get Artists
router.get( '', artistCTRL.getArtists );

// 2 - Get Albumes and Songs 
router.get( '/:artistId/albumes', artistCTRL.getAlbumesAndSongs );

module.exports = router;