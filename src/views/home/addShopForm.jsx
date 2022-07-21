import './index.less';

import KInput from '@/components/k-input';
import KForm from '@/components/k-form';
import KField from '@/components/k-field';

const AddShopForm = (props) => {
  const { form } = props;

  return (
    <>

      <KForm form={form}>
        <KField name={'title'} placeholder="标题">
          <KInput></KInput>
        </KField>
        <KField name={'content'} placeholder="说些什么吧">
          <KInput type="textarea"></KInput>
        </KField>
      </KForm>
    </>
  )
}

export default AddShopForm;
