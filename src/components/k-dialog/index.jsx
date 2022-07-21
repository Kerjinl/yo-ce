import './index.less';

import KButton from '@/components/k-button';

export default function KDialog (props) {

  const handleDialogCancel = function (e) {
    if (e.target.className.indexOf('k-dialog-wrapper') !== -1) {
      props.onCancel()
    }
  }

  return (
    <>
      <div className={`k-dialog-wrapper ${props.visible ? 'show' : 'hide'}`} onClick={!props.disableWrapperClick && handleDialogCancel}>
        <div className='k-dialog'>
          <header>
            <span>添加奇点</span>
            <KButton noBorder={true} onClick={props.onCancel}>x</KButton>
          </header>
          <div className='k-dialog__body'>
            {props.children}

          </div>
          <footer>
            {props.footer}
          </footer>
        </div>
      </div>

    </>
  )
}