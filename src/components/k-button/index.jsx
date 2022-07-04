import './index.less'

export default function KButton (props) {
  return (
    <>
      <button className={`k-button`}>
        {props.children}
      </button>
    </>
  )
}