import './index.less';

import { cloneElement, Component } from 'react';
import { FormContext } from '@/libs/FormStore';

export default class KField extends Component {

  static contextType = FormContext;

  onFieldChange = () => {
    this.forceUpdate()
  }

  componentDidMount () {
    const { registerField } = this.context;
    registerField(this)
  }

  componentWillUnmount () {
    const { cancelRegisterField } = this.context;
    cancelRegisterField(this)
  }

  getControled = () => {
    const { getFieldValue, fieldChange } = this.context;
    const { name, ...restProps } = this.props
    return {
      ...restProps,
      value: getFieldValue(name),
      onChange: (e) => {
        const newValue = e
        fieldChange({ [name]: newValue })

      }
    }
  }

  render () {
    const { children } = this.props;
    const ReturnNode = <div className='field-wrapper'>{cloneElement(children, this.getControled())}</div>

    return ReturnNode
  }

}
