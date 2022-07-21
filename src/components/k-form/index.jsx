import { FormProvide } from "../../libs/FormStore";

export default function KForm (props) {

  const {
    form,
    children
  } = { ...props }

  return (
    <>
      <form onSubmit={(e) => { e.preventDefault(); e.stopPropagation() }}>
        <FormProvide value={form}>
          {children}
        </FormProvide>
      </form>
    </>
  )
}