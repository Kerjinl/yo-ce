import { createContext, useState, useRef } from "react";

const FormContext = createContext({
  onFinish: () => { },
  onFieldChange: (e) => {
    console.log('onFieldChange', e)
  }
})
const FormProvide = (props) => {

  return (
    <>
      <FormContext.Provider value={props.value} >
        {props.children}
      </FormContext.Provider >
    </>
  )
}

export class FormStore {
  constructor () {
    this.store = {}
    this.fieldList = new Map()
  }



  getForm = () => {
    return {
      getFieldValue: this.getFieldValue,
      getFieldsValue: this.getFieldsValue,
      fieldChange: this.fieldChange,
      onFinish: this.onFinish,
      registerField: this.registerField,
      cancelRegisterField: this.cancelRegisterField
    }
  }

  registerField = (field) => {
    this.fieldList.set(field.props.name, field)
  }

  cancelRegisterField = (name = '') => {
    this.fieldList.delete(name)
  }

  getFieldValue = (key) => {
    return this.store[key]
  }
  getFieldsValue = (keys = []) => {
    if (keys.length) {
      const o = {};
      keys.forEach(item => {
        o[item] = this.store[item]
      })
      return o;
    } else {
      return this.store;
    }
  }

  fieldChange = (v = {}) => {
    this.store = {
      ...this.store,
      ...v,
    }
    Object.keys(v).forEach(field => {
      this.fieldList.get(field)?.forceUpdate()
    })
  }

  onFinish = () => {
    return this.store
  }
}

const useForm = (form) => {

  const formRef = useRef();
  const [, forceUpdate] = useState({});

  if (!formRef.current) {
    if (form) {
      formRef.current = form;
    } else {
      // Create a new FormStore if not provided
      const forceReRender = () => {
        forceUpdate({});
      };

      const formStore = new FormStore(forceReRender);

      formRef.current = formStore.getForm();
    }
  }

  return [formRef.current];
}

export { useForm, FormProvide, FormContext };
