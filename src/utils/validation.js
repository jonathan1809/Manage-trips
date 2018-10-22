import validator from 'validator'
class FormValidator {
  constructor(validations) {
    // validations is an array of rules specific to a form
    this.validations = validations
  }
  validate(state) {
    let validation = this.valid()
    this.validations.forEach(rule => {
        if (!validation[rule.field].isInvalid) {
        const fieldValue = state[rule.field].toString()
        const args = rule.args || []
        const validationMethod = typeof rule.method === 'string' ? validator[rule.method] : rule.method

        if (validationMethod(fieldValue, ...args, state) !== rule.validWhen) {
            validation[rule.field] = { isInvalid: true, message: rule.message }
            validation.isValid = false
        }
      }
    })
    return validation
  }
  // create a validation object for a valid form
  valid() {
    const validation = {}
    
    this.validations.map(rule => (
        validation[rule.field] = { isInvalid: false, message: '' }
    ))
    return { isValid: true, ...validation }
  }
}
export default FormValidator