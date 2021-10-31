export function checkIfProductAlreadyAddedInCart(pArray: any, pId: any, uniqueIdentifier: string = "pId") {
    let productAlreadyAdded = pArray.findIndex(function (pData: any) {
        return pData[uniqueIdentifier] === pId
    })
    return productAlreadyAdded;
}

export const monthDropdown = [
    {
        value: "January",
        label: "January",
        key: "January"
    },
    {
        value: "February",
        label: "February",
        key: "February"
    },
    {
        value: "March",
        label: "March",
        key: "March"
    },
    {
        value: "April",
        label: "April",
        key: "April"
    },
    {
        value: "May",
        label: "May",
        key: "May"
    },
    {
        value: "June",
        label: "June",
        key: "June"
    },
    {
        value: "July",
        label: "July",
        key: "July"
    },
    {
        value: "August",
        label: "August",
        key: "August"
    },
    {
        value: "September",
        label: "September",
        key: "September"
    },
    {
        value: "October",
        label: "October",
        key: "October"
    },
    {
        value: "November",
        label: "November",
        key: "November"
    },
    {
        value: "December",
        label: "December",
        key: "December"
    }
];

export const yearDropdown = [
    {
        value: "2021",
        label: "2021",
        key: "2021"
    },
    {
        value: "2022",
        label: "2022",
        key: "2022"
    },
    {
        value: "2023",
        label: "2023",
        key: "2023"
    },
    {
        value: "2024",
        label: "2024",
        key: "2024"
    },
    {
        value: "2025",
        label: "2025",
        key: "2025"
    },
    {
        value: "2026",
        label: "2026",
        key: "2026"
    },
    {
        value: "2027",
        label: "2027",
        key: "2027"
    },
]