export const uid = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

export const circleArea = (r) => {
    return Math.PI * (r ** 2)
}

export const circleCircumference = (r) => {
    return 2 * Math.PI * r
}

export default {
    uid,
    circleArea,
    circleCircumference
}