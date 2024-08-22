let h;
let b;
let r;

const circle = (r) => {
    return 3.14*r*r;
}

const square = (b) => {
    return b*b;
}

const rectangle = (h, b) => {
    return h*b;
}

const triangle = (h, b) => {
    return (h*b)/2;
}

const perimetercircle = (r) => {
    return 3.14 * 2 * r;
}

export {circle, square, rectangle, triangle, perimetercircle};