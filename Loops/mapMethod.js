const reservationList = [

    {
        id: 1,
        customerName: "ABC",
        reservationDate: "27 Aug 2022",
    },
    {
        id: 2,
        customerName: "Rupesh",
        reservationDate: "28 sept 2022",
    },
    {
        id: 2,
        customerName: "John",
        reservationDate: "27 oct 2022",
    },
];

function reservationItem(reservationList) {

    document.body.innerHTML = reservationList.map(item =>
        `<div>
            <ul>
                <li> ${item.customerName}</li>
                <li> ${item.id}</li>
                <li> ${item.reservationDate}</li>
            </ul>
        </div>`
    )

}

reservationItem(reservationList);