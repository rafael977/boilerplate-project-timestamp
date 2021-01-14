const timestampHandler = (req, res) =>  {
    let {time} = req.params
    let d = new Date()
    if (time) {
        if (time.match(/\d+/)) {
            d = new Date(parseInt(time))
        } else {
            d = new Date(time)
        }
    }
    if (isNaN(d)) {
        res.json({
            error:  "Invalid Date"
        })
        return
    }
    res.json({
        unix: d,
        utc: new Date(d).toUTCString()
    })
}

module.exports = timestampHandler