
const MoodTracker = require('../model/mood_tracker.js');

let MoodTrackerController = {

    createMoodTracker: async function (req, res) {
        try {
            const { description, name, uid } = req.body;

            const tracker = await MoodTracker.create({
                description: description,
                name: name,
                id_mobileappuser: uid
            });

            res.send({ status: true, message:"MoodTracker created successfully"});
            
        } catch (error) {
            console.log(error, "error")
            res.send({status: false, message: error.message})
        }

    }
};

module.exports = MoodTrackerController; 
