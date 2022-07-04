import './index.less';
import ShopCard from '@/pages/shop-card';
import UserCard from '@/pages/user-card';

import { useState } from 'react';

export default function Home () {
  const [lists, useLists] = useState([
    {
      img: '/static/imgs/SAKURA.jpg',
      imgDesc: 'SAKURA',
      title: 'SAKURA',
      tags: ['SAKURA', 'CARD']
    }
  ])

  const Lists = lists.map(item => {
    return <ShopCard key={item.title} img={item.img} imgDesc={item.imgDesc} title={item.title} tags={item.tags}>
      <div className='detail'>
        <p>在我面前显现你真正的力量吧，以吾樱之名命令你！</p>
      </div>
    </ShopCard>
  })
  return (
    <div id='Home'>
      <nav className='user-left'>
        {/* <UserCard></UserCard> */}

      </nav>
      <main className="home-page">
        <p className='title'>home</p>
        {Lists}
      </main>
      <nav className='nav-card'></nav>
    </div>
  )
}