import './index.less'

export default function KAvatar (props) {
  if (props.img) {
    return (
      <>
        <img src={props.img} alt="avatar" />
      </>
    )
  } else {
    return (
      <>
        <span className="avatar-span">
          {props.userName ? props.userName[0] : 'K'}
        </span>
      </>
    )
  }

}