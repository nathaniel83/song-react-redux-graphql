import changeColor from 'theme/utils/colorChanger'

const h = `hsla(0, 0%, 0%, 1)`
const p = `hsla(212, 30%, 11%, .95)`
const border = `hsla(212, 30%, 11%, 0.23)`
const background = `hsla(0, 0%, 100%, 1)`
const linkHover = `hsla(192, 100%, 50%, 1)`

export const Colors = {
  h,
  p: changeColor(h, 0.8),
  border: changeColor(h, 0.15),
  code: changeColor(h, 0.1),
  background,
  linkHover,
  link: changeColor(h, 0.25)
}
