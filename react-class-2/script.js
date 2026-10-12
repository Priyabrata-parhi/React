import box from "./box"
import circle from "./circle"

const h1 = React.createElement('h1',null,'Hello I am Rahul')

const parent = React.createElement('div',null,[box(),circle()])

const root = ReactDom.createRoot(document.querySelector('#container'))

root.render(parent)