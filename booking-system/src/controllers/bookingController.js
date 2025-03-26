const Booking = require("../models/Booking");

// Lấy danh sách tất cả đặt chỗ
exports.getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Tạo mới một đặt chỗ
exports.createBooking = async (req, res) => {
    try {
        const { name, phone, date } = req.body;
        const newBooking = new Booking({ name, phone, date });
        await newBooking.save();
        res.status(201).json(newBooking);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
