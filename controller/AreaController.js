const Area = require('../model/area');
const sequelize = require('../model/db');
const { Sequelize } = require('sequelize');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const fs = require('fs');
const env = require("../config/env");


const areaController = {
  getAllAreaData: async (req, res) => {
    try {
      // let userDetails = req.user;
      // let countryList = JSON.parse(userDetails.area_level1);
      // let countryIdList = countryList.map((country) => country?.country_id);
      let level = 1; // Example dynamic value
      let areaList = await sequelize.query(
                `SELECT 
              country.id AS country_id, 
              country.name AS country_name,
              country.name_nl AS country_name_nl, 
              country.name_fr AS country_name_fr,
              country.name_es AS country_name_es,
              district.id AS district_id, 
              country.status AS country_status,
              district.name AS district_name,
              district.name_nl AS district_name_nl,
              district.name_fr AS district_name_fr,
              district.name_es AS district_name_es,
              country.area_code AS country_area_code,
              district.area_code AS district_area_code
            FROM area AS country 
            LEFT JOIN area AS district 
            ON district.parent_area_code = country.area_code 
              AND district.status = 1
            WHERE country.level = :level 
              AND country.status = 1`,
              {
                type: sequelize.QueryTypes.SELECT,
                  replacements: { level }
              }
        );

      let data = areaList.reduce((result, row) => {
        let country = result.find(c => c.country_id === row.country_id);
        if (!country) {
          country = {
            country_name: row.country_name ,
            country_name_nl: row.country_nl ?? '#' + row.country_name,
            country_name_fr: row.country_fr ?? '#' + row.country_name,
            country_name_es: row.country_es ?? '#' + row.country_name,
            country_id: row.country_id,
            country_area_code: row.country_area_code,
            districts: []
          };
          result.push(country);
        }

        if (row.district_id) {
          country.districts.push({
            district_id: row.district_id,
            district_name: row.district_name,
            district_name_nl: row.district_name_nl ?? "#" + row.district_name,
            district_name_fr: row.district_name_fr ?? "#" + row.district_name,
            district_name_es: row.district_name_fr ?? "#" + row.district_name,
            district_area_code: row.district_area_code,
          });
        }

        return result;
      }, []);

      return res.send({
        status: true,
        data: data
      });

    } catch (error) {
      console.log(error);
      return res.send({
        status: false,
        message: "Something went wrong"
      })
    }
  }

}


module.exports = areaController;