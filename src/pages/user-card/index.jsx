import KAvatar from "@/components/k-avatar"
import KCard from "@/components/k-card"

import './index.less'

export default function UserCard (props) {
  return (
    <>
      <div className="user-card">
        <div className="avatar-div">
          <KAvatar name="Kerjinl"></KAvatar>
        </div>
        <div className="user-card-btn-group">
          <KCard>
            1
          </KCard>
          <KCard>2</KCard>
          <KCard>3</KCard>
          <KCard>4</KCard>
        </div>
      </div>
    </>
  )
}