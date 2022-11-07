const data = {
    "2022-09-16": 5,
    "2022-09-17": 6,
    "2022-09-18": 7,
    "2022-09-19": 8,
    "2022-09-20": 9,
    "2022-08-16": 5,
    "2022-08-17": 6,
    "2022-08-18": 7,
    "2022-08-19": 8,
    "2022-06-19": 8,
    "2022-06-17": 8,
    "2022-02-17": 8,
}

const contactsByMonths = {
    "total":0,
    "labels":[
        
    ],
    "points": [
        
    ]
}
const keys = Object.keys(data);
const values = Object.values(data)
const formatData = keys.map((x) => new Date(x.replace(/-/g,", ")))
const convertToMonthName = formatData.map((x)=> x.toLocaleString('default', { month: 'long' }))
contactsByMonths.labels.push(convertToMonthName[0])
let sum = values[0];

contactsByMonths.labels.map((x) => {
    convertToMonthName.map((y, index) => {
        if(index > 0 && contactsByMonths.labels.includes(y)){
        sum = values[index] + sum 
        }
        if(!contactsByMonths.labels.includes(y)){
            contactsByMonths.labels.push👍
            contactsByMonths.points.push(sum)
            sum = values[index]
        }
    })
    contactsByMonths.points.push(sum)
})




console.log(contactsByMonths.labels, contactsByMonths.points)
