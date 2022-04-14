import axios from "axios"

export const createInvoice = (data, number) => {

    const invoice = {
        start_date: new Date(data.start_date).getTime(),
        end_date: new Date(data.end_date).getTime(),
        date_range: new Date(data.start_date).toLocaleDateString() + ' - ' + new Date(data.end_date).toLocaleDateString(),
        customer: number,
        free_minutes: data.free_minutes,
        total_cost: 200,
        original_cost: 130,
        cdr: {},
        created_on: Date.now()

    }

    return axios.post('http://localhost:4000/collections/invoices/create', invoice, {
        headers: {
            "x-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjMzMGU2MDZjMWI4YzZkNzIyNTI5NGEiLCJlbWFpbCI6Im1lLnl1dnJham1pZGhhQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsInZlcmlmaWVkIjpmYWxzZSwiaWF0IjoxNjQ5MjQ4OTM0fQ.gUQ8sgXnPcCNbFqp7_IAHWlsn5EMt8qldzX_9BVSEv0"
        }
    })
}

export const viewInvoices = (number) => {
    return axios.post(`http://localhost:4000/collections/invoices/get_all?customer=${number}`, {} , {
        headers: {
            "x-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjMzMGU2MDZjMWI4YzZkNzIyNTI5NGEiLCJlbWFpbCI6Im1lLnl1dnJham1pZGhhQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsInZlcmlmaWVkIjpmYWxzZSwiaWF0IjoxNjQ5MjQ4OTM0fQ.gUQ8sgXnPcCNbFqp7_IAHWlsn5EMt8qldzX_9BVSEv0"
        }
    })
}

export const filerInvoicesByDate = ({number, start, end}) => {
    return axios.post(`http://localhost:4000/collections/invoices/get_all?created_on[$gt]=${start}&created_on[$lt]=${end}&${number && ('customer=' + number)}`,{}, {
        headers: {
            "x-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjMzMGU2MDZjMWI4YzZkNzIyNTI5NGEiLCJlbWFpbCI6Im1lLnl1dnJham1pZGhhQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsInZlcmlmaWVkIjpmYWxzZSwiaWF0IjoxNjQ5MjQ4OTM0fQ.gUQ8sgXnPcCNbFqp7_IAHWlsn5EMt8qldzX_9BVSEv0"
        }
    })
}