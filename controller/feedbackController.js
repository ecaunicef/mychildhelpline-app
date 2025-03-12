const Feedback = require("../model/feedback");

const feedbackController = {
  add: async (req, res) => {
    try {
      console.log(req.body)
      const { message, id_mobileappuser, name, contact_number, email, flag } = req.body;

      const payload = { message, id_mobileappuser, name, contact_number, email, flag };
      const feedback = await Feedback.create(payload);

      return res.status(201).json({
        message: "Feedback added successfully",
        data: feedback,
        success: true,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Something went wrong",
        error: error.message,
        success: false,
      });
    }
  }
};

module.exports = feedbackController;
