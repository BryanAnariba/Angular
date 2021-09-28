const { ArtistModel } = require("../models/Artist");
const { Types } = require('mongoose');
class ArtistController {

    async getArtists ( req, res ) {
        try {
            const artists = await ArtistModel.find({}, { albumes: false });
            return res.status( 200 ).send({ status: 200, data: artists });
        } catch ( error ) {
            return res.status( 400 ).send({ status: 400, data: error });
        }
    }

    async getAlbumesAndSongs ( req, res ) {
        const { artistId } = req.params;
        try {
            const albumes = await ArtistModel.find({ _id: Types.ObjectId( artistId ) });
            return res.status( 200 ).send({ status: 200, data: albumes })
        } catch ( error ) {
            return res.status( 400 ).send({ status: 400, data: error });
        }
    }
}

module.exports = { ArtistController, };