import React from 'react'
import Form from 'react-bootstrap/Form';
import '../styles/FormSelects.css'

const FormSelects = (props) => {
  return (
      <div className='options'>
        <Form.Select aria-label="Default select example">
          <option selected disabled>{props.title}</option>
          <option value='1 MKT A'>1º MKT A</option>
          <option value='1 MKT B'>1º MKT B</option>
          <option value='1 TDS A'>1º TDS A</option>
          <option value='1 TDS B'>1º TDS B</option>
          <option value='2 MKT A'>2º MKT A</option>
          <option value='2 MKT B'>2º MKT B</option>
          <option value='2 TDS A'>2º TDS A</option>
          <option value='2 TDS B'>2º TDS B</option>
          <option value='3 MKT A'>3º MKT A</option>
          <option value='3 MKT B'>3º MKT B</option>
          <option value='3 TDS A'>3º TDS A</option>
          <option value='3 TDS B'>3º TDS B</option>
        </Form.Select>
      </div>
  )
}

export default FormSelects