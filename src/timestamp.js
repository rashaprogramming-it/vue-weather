function unix(dt, type) {
    const milliseconds = dt * 1000
    const data = new Date(milliseconds)

    if (type == 'day') {
        return data.toLocaleString("ru-RU", { day: "numeric" })
    } else if (type == 'month') {
        return data.toLocaleString("ru-RU", { month: "long" })
    } else if (type == '_day') {
        if (data.getDay() == 0) {
            return 'Понедельник'
        } else if (data.getDay() == 1) {
            return 'Вторник'
        } else if (data.getDay() == 2) {
            return 'Среда'
        } else if (data.getDay() == 3) {
            return 'Четверг'
        } else if (data.getDay() == 4) {
            return 'Пятница'
        } else if (data.getDay() == 5) {
            return 'Суббота'
        } else {
            return 'Воскресенье'
        }
        
    }
}
export default unix