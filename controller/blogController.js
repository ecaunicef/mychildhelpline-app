const Blog = require('../model/blog');
const Classification = require('../model/classification')

const { Op, Sequelize } = require('sequelize');
const Area = require('../model/area')
const env = require('../config/env');
var fs = require('fs'),
  es = require('event-stream');
const { fork } = require('child_process');


// Dynamically associate Blog and Area at runtime
Blog.hasMany(Area, {
  as: 'areas',
  foreignKey: 'area_code',
  sourceKey: 'area_level1',
  constraints: false, // Ignore foreign key constraint
});

const getAllBlogsForMobile = async (req, res) => {
  try {
    const id = req.body.id;
    let data=[];
    if(id!=undefined && id!=''){
      data = await Blog.findAll({
        where: {
          id:{
            [Op.gt]:id
          },
          sent: {
            [Op.not]: null  // This checks that 'myField' is not NULL
          }
        }
      });
    }else{
      return res.send({ status: 0, message: "Invalid id", data:[]});
    }


    if (data.length === 0) {
      return res.send({ status: 0, data:[], message: "No Data Found" });
    }

    return res.send({
      status:1,
      data:data
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error', error: err.message });

  }
};


module.exports = {getAllBlogsForMobile};
