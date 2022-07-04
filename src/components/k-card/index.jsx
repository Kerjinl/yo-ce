import './index.less';

export default function KCard (props) {
  return (
    <>
      <div className={`k-card ${props.hoverable ? 'hover' : ''}`}>
        <span className='close-icon-btn'>x</span>
        {props.children}
      </div>
    </>
  )
}