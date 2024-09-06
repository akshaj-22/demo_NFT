const MetaData = require("../Metadata.json");

module.exports = (req, res) => {
    const { id } = req.params;
    res.json(JSON.parse(JSON.stringify(MetaData[id])))
}