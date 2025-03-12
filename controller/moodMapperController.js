const MoodMapper = require('../model/mood_mapper');

let moodMapperController = {
    getMoodForApp: async (req, res) => {
        try {
            const getData = await MoodMapper.findAll({
                raw: true
            });

            res.send({
                status: true,
                data: getData
            });
        } catch (error) {
            res.json({status: false, message: error.message});
        }
    }
};

module.exports = moodMapperController; 
