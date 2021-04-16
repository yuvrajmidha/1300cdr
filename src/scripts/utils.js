export const formatDate = (date, splitter = "T") => {
    date = date.split(splitter)[0].split('-')
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    return date[2] + " " + months[Number(date[1])] + " " + date[0]
}

export const cart = {

    getItems: (type) => {
        var cart = window.localStorage.getItem('cart-' + type)
        return JSON.parse(cart)
    },    
    push: (cartType, {id, name, price}) => {
        var cart = this.getItems(cartType)
        cart.forEach((item, index) => {
            if(item.id === id) cart[index].quantity += 1
            else cart.push({id, name, price})
        })
    }

}