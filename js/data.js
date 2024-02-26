const fs = require("fs")
const allData = require("./AllData")

const loadData = () => {
    try {
        const DataJson = fs.readFileSync("data.json").toString()
        return JSON.parse(DataJson)
    }
    catch {
        return []
    }
}

const savaAllData = (allData) => {
    const AllDataJosn = JSON.stringify(allData)
    fs.writeFileSync("data.json", AllDataJosn)
}

const addData = (id, fname, lname, age, city) => {
    const allData = loadData()

    const duplicatedData = allData.filter((obj) => {
        return obj.id === id
    })

    if (duplicatedData.length == 0) {
        allData.push({
            id: id,
            fname: fname,
            lname: lname,
            age: age,
            city: city
        })
        savaAllData(allData)
        console.log("Add Item")
    } else {
        console.log("Error Dublicated Id")
    }
}

const deleteData = (id) => {
    const allData = loadData()
    const dataToKeep = allData.filter((obj) => {
        return obj.id !== id
    })
    savaAllData(dataToKeep)
    console.log("you have already deleted an Item")
}

const readData = (id) => {
    const allData = loadData()
    const itemNeeded = allData.find((obj) => {
        return obj.id == id
    })
    if (itemNeeded) {
        console.log(itemNeeded.fname + " " + itemNeeded.lname)
    } else {
        console.log("id needed not found")
    }
}

const listData = () => {
    const allData = loadData()
    allData.forEach((obj) => {
        console.log(obj.fname, obj.age ,obj.city)
    })
}

module.exports = {
    addData,
    deleteData,
    readData,
    listData
}