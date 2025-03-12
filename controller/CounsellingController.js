const Counselling = require('../model/counselling');

let counsellingController = {
    saveCounselling: async function(req, res) {
        try {
            const {
                age,
                appointment_date,
                appointment_reason,
                appointment_time,
                country,
                email,
                area_level2,
                id_mobileappuser,
                first_name,
                gender,
                language,
                message,
                mobile_number,
                parent_address,
                parent_email,
                parent_first_name,
                parent_second_name,
                parent_tele_phone,
                second_name
            } = req.body;
    
            if (!appointment_date) {
                return res.status(400).json({ status: false, message: 'Appointment date is required.' });
            }
            if (!first_name) {
                return res.status(400).json({ status: false, message: 'First name is required.' });
            }
            if (!id_mobileappuser) {
                return res.status(400).json({ status: false, message: 'User ID (id_mobileappuser) is required.' });
            }
    
            // let processedAppointmentReason;
            // try {
            //     processedAppointmentReason = JSON.parse(appointment_reason);
            //     if (!Array.isArray(processedAppointmentReason)) {
            //         processedAppointmentReason = [processedAppointmentReason];
            //     }
            // } catch (e) {
            //     processedAppointmentReason = appointment_reason.split(',').map(reason => reason.trim());
            // }
    
            const counsellingData = {
                age: age || null,
                appointment_date,
                area_level2: area_level2,
                id_mobileappuser: id_mobileappuser,
                appointment_reason: appointment_reason,
                appointment_time: appointment_time || null,
                country: country || null,
                email: email || null,
                first_name,
                gender: gender || null,
                language: language || null,
                message: message || null,
                mobile_number: mobile_number || null,
                parent_address: parent_address || null,
                parent_email: parent_email || null,
                parent_first_name: parent_first_name || null,
                parent_second_name: parent_second_name || null,
                parent_tele_phone: parent_tele_phone || null,
                second_name: second_name || null
            };
    
            await Counselling.create(counsellingData);
    

            return res.status(201).json({
                "code": "EAUTH",
                "command": "API"
            });
    
        } catch (error) {
            console.error('Error saving counselling:', error);
            return res.status(500).json({ status: false, message: error.message});
        }
    }  
};


module.exports = counsellingController; 
