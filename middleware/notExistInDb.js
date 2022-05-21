const notExistInDb = (req, res) => {
    res.status(404).json({
        success: false,
        data: "Data does not exist in our database",
    });
};

module.exports = { notExistInDb };
