import './index.less'

export default function KTag (props) {
  return (
    <>
      <span className={`k-tag`}>
        {props.children}
      </span>
    </>
  )
}