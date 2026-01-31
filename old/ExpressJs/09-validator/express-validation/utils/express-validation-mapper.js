const validationMapper = (error) => {
  const {details} = error
  const invalidParams = {}
  if (details?.body?.length > 0) {
    for (const item of details.body) {
      invalidParams[item.context.key] = item.message?.replace(/[\/\"\'\\]/g, "").replace(": [a-zA-Z0-9]{7,50}", "")
    }
    return invalidParams
  }
  return invalidParams
}

module.exports = {
  validationMapper,
}