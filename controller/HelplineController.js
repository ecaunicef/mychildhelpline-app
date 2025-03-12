const Area = require('../model/area.js');
const Classification = require('../model/classification.js');
const Helpline = require('../model/helpline.js');

let helplineController = {
    getHelplineByClassification: async (req, res) => {
        try {
            const category = req.body.category;
            const area_level1 = req.body.country_id
            const allHelpline = await Helpline.findAll({
                where:{
                    classification_id: category,
                    area_level1: area_level1
                },
                include: [
                    {
                        model: Classification,
                        as: 'classification',
                        foreignKey: 'classification_id', 
                        attributes: ['classification_name', 'classification_name_fr', 'classification_name_es', 'classification_name_nl', 'classification_type'], 
                        required: false, 
                    },
                ]
            });

            if (allHelpline.length === 0) {
                return res.status(200).json({ message: 'No helpline found' });
            }
            res.send(allHelpline);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Internal Server Error', error: err.message });
        }
    }
};

module.exports = helplineController; 
