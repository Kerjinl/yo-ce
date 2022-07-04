import KCard from '@/components/k-card';
import KTag from '@/components/k-tag';
// import SAKURA from '../../assets/imgs/SAKURA.jpg'

import './index.less'

export default function ShopCard (props) {
  const Tags = props.tags.map(item => {
    return <KTag key={item}>{item}</KTag>
  })
  return (
    <>
      <KCard hoverable>
        <div className='shop-card'>
          <div className='img-set'>
            <img src={props.img} alt={props.imgDesc} />
          </div>
          <div className='desc-content'>
            <h1>{props.title}</h1>
            <div className='tag-group'>
              {Tags}
            </div>
            {props.children}
          </div>
        </div>
      </KCard>
    </>
  )
}