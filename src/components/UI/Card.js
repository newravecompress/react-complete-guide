import './Card.css'

export default function Card (p) {
  const classes = 'card ' + p.className
  return <div className={classes}>{p.children}</div>
}