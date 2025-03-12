const Classification = require('../model/classification')
const fs = require("fs");
const env = require("../config/env");
const sequelize = require('../model/db');
const path = env.constantFilePath + "classification.json";


const getListByType = async (req, res) => {
    try {
        const condition = { classification_type: req.body.classificationType ?? null };

        let data = await Classification.findAll({
            where: condition
        });

        if (data?.length == 0) {
            return res.status(200).json({ status: false, message: "No Data Found" });
        };

        const updatedData = data.map(classification => {
            const { classification_name,classification_name_nl, classification_name_fr, classification_name_es } = classification.dataValues;

            return {
                ...classification.dataValues,
                classification_name_nl: classification_name_nl === null ? '#' +classification_name : classification_name_nl,
                classification_name_fr: classification_name_fr === null ? '#' +classification_name : classification_name_fr,
                classification_name_es: classification_name_es === null ? '#' +classification_name : classification_name_es
            };
        });

        return res.status(200).json({ status: true, data: updatedData })

    } catch (err) {
        return res.status(500).json({ status: false, message: "Something went wrong"})
}

};

module.exports = {getListByType };
