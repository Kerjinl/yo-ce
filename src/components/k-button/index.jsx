import './index.less'

export default function KButton (props) {
  return (
    <>
      <button className={`k-button ${props.noBorder ? 'no-border' : ''}`} onClick={props.onClick}>
        {props.children}
      </button>
    </>
  )
}