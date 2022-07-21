import './index.less';
import ShopCard from '@/pages/shop-card';
// import UserCard from '@/pages/user-card';
import KButton from '@/components/k-button';
import KDialog from '@/components/k-dialog';
import KUpload from '@/components/k-upload';
import AddShopForm from './addShopForm';

import { useState } from 'react';

import { useForm } from '@/libs/FormStore';


export default function Home () {
  const [lists] = useState([
    {
      img: '/static/imgs/SAKURA.jpg',
      imgDesc: 'SAKURA',
      title: 'SAKURA',
      tags: ['SAKURA', 'CARD']
    }
  ]), [visible, setVisible] = useState(false);

  const [form] = useForm();


  function handleDialogOpen () {
    setVisible(true)
  }

  function handleDialogCancel () {
    setVisible(false)
  }

  function dialogConfirm () {
    const v = form.onFinish()
    console.log(v)
    handleDialogCancel()
  }

  const Lists = lists.map(item => {
    return <ShopCard key={item.title} img={item.img} imgDesc={item.imgDesc} title={item.title} tags={item.tags}>
      <div className='detail'>
        <p>在我面前显现你真正的力量吧，以吾樱之名命令你！</p>
      </div>
    </ShopCard>
  })

  const MyDialog = () => {
    return visible ? <KDialog onCancel={handleDialogCancel} visible={visible} footer={footer}>

      <main className='add-item'>
        <KUpload></KUpload>
        <AddShopForm key={'1'} form={form}></AddShopForm>
      </main>
    </KDialog> : null
  }

  const footer = <KButton key="footer" onClick={dialogConfirm}>确认</KButton>

  return (
    <div id='Home'>
      <nav className='user-left'>
        {/* <UserCard></UserCard> */}

      </nav>
      <main className="home-page">
        <p className='title'>
          <span>home</span>
          <KButton onClick={handleDialogOpen}>添加</KButton>
        </p>
        {Lists}
      </main>
      <nav className='nav-card'></nav>
      <MyDialog></MyDialog>
    </div>
  )
}