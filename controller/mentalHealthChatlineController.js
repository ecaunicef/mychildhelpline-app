const Chatline = require('../model/mental_health_chatline');
const sequelize = require('../model/db');

const mentalHealthController = {
    getChatLinkByCountry: async (req, res) => {
        try {
            const area_code = req.body.country_code
            const getChatline = await Chatline.findOne({
                where: { area_level1: area_code, status: 1 }
                
            });
            return res.send({ status: true, data: getChatline });
        } catch (error) {
            return res.send({
                status: false,
                message: error.message
            })
        }
    }
}


module.exports = mentalHealthController;