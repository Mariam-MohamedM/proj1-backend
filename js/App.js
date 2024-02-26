const yargs = require("yargs")
const data = require("./data")

yargs.command({
    command: "add",
    describe: "to add an item",
    builder: {
        fname: {
            describe: "this is the first name description in add command",
            demandOption: true,
            type: "string"
        },
        lname: {
            describe: "this is the last name description in add command",
            demandOption: true,
            type: "string"
        }
    },
    handler: (x) => {
        data.addData(x.id, x.fname, x.lname, x.age, x.city)
    }
})

yargs.command({
    command: "delete",
    describe: "to delete an item",
    handler: (x) => {
        data.deleteData(x.id)
    }

})

yargs.command({
    command: "read",
    describe: "to read data",
    builder: {
        id: {
            describe: "this is id desc in read command",
            demandOption: true,
            type: "string"
        }
    },
    handler: (x) => {
        data.readData(x.id)
    }
})

yargs.command({
    command: "list",
    describe: "to list data",
    handler: () => {
        data.listData()
    }
})

yargs.parse()