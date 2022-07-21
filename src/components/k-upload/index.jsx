import './index.less';

import KButton from '@/components/k-button';

import { createRef, useState } from 'react';

export default function KUpload (props) {

  const inputRef = createRef();

  const [fileList, setFileList] = useState([])

  const accepts = props.accepts || 'image/png, image/jpeg'

  function selectFile () {
    inputRef.current.click();
  }

  function fileChange () {
    setFileList(inputRef.current.files)
    console.log('files', inputRef.current.files[0])
  }

  const FileInput = function (props) {
    return (
      <>
        <input ref={inputRef} accept={props.accepts} multiple={props.multiple} className='k-upload-input' type="file" onChange={props.onChange} />
      </>
    )
  }

  return (
    <>
      <div className='k-upload'>
        <div className='k-upload-btn' onClick={selectFile}>
          {fileList.length ? <img className='preview-img' src={URL.createObjectURL(fileList[0])} alt="img" /> : <>
            <KButton noBorder={true}>
              +
            </KButton>
            <span>upload</span>
          </>}
        </div>
        <FileInput accepts={accepts} multiple={props.multiple} onChange={fileChange}></FileInput>
        <ul className='k-upload-list'>

        </ul>
      </div>
    </>
  )
}