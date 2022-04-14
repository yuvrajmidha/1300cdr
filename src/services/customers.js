import cdr from '../assets/data/cdr.json';
import axios from "axios";

export const getCustomers = (page) => {

    var numbers = {};
    var query = "?";

    cdr.map(record => {
        if(numbers[record.Origin]){
            numbers[record.Origin].total_calls += 1
        }
        else{
            numbers[record.Origin] = {
                total_calls : 1,
                "id": "",
                "name": "",
                "email": "",
                "charges": {}
            }
        }
    })

    Object.entries(numbers).map((number, index) => {
        if(index < (page * 50) && index >= ((page - 1) * 50)){
            if(number[0] !== '' && number[0] !== 'Anonymous' && number[0] !== 'undefined' && number[0] !== 'No Answer'){
                query += `number[$in]=${number[0]}&`
            }
        }
    })


    return new Promise(resolve => {
        axios.post('http://localhost:4000/collections/customers/get_all' + query, {}, {
        headers: {
            "x-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjMzMGU2MDZjMWI4YzZkNzIyNTI5NGEiLCJlbWFpbCI6Im1lLnl1dnJham1pZGhhQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsInZlcmlmaWVkIjpmYWxzZSwiaWF0IjoxNjQ5MjQ4OTM0fQ.gUQ8sgXnPcCNbFqp7_IAHWlsn5EMt8qldzX_9BVSEv0"
        }
        }).then(res => {
            res.data.data.customers.map(customer => {
                numbers[customer.data.number].id = customer.data.id
                numbers[customer.data.number].name = customer.data.name
                numbers[customer.data.number].email = customer.data.email
                numbers[customer.data.number].charges = customer.data.charges
            })

            resolve(numbers)

        })
    }) 
    
}

export const getCustomer = (number) => {

    return new Promise(resolve => {
        axios.post('http://localhost:4000/collections/customers/get_all?number[$in]=0&number[$in]=' + number, {}, {
        headers: {
            "x-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjMzMGU2MDZjMWI4YzZkNzIyNTI5NGEiLCJlbWFpbCI6Im1lLnl1dnJham1pZGhhQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsInZlcmlmaWVkIjpmYWxzZSwiaWF0IjoxNjQ5MjQ4OTM0fQ.gUQ8sgXnPcCNbFqp7_IAHWlsn5EMt8qldzX_9BVSEv0"
        }
        }).then(res => {
            resolve(res?.data?.data?.customers[0]?.data)
        })
    }) 

}


export const upsertCustomers = (type, query, data) => {

    return new Promise(resolve => {
        axios.post('http://localhost:4000/collections/customers/' + type, data, {
            params: query,
            headers: {
                "x-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjMzMGU2MDZjMWI4YzZkNzIyNTI5NGEiLCJlbWFpbCI6Im1lLnl1dnJham1pZGhhQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsInZlcmlmaWVkIjpmYWxzZSwiaWF0IjoxNjQ5MjQ4OTM0fQ.gUQ8sgXnPcCNbFqp7_IAHWlsn5EMt8qldzX_9BVSEv0"
            }
        }).then(res => {
            resolve(res)
        }).catch(err => {
            resolve(err)
        })
    }) 

}