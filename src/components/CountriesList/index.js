const CountriesList = props => {
  const {visitedCountryDetails, onClickRemoveButton} = props
  const {id, name, imageUrl} = visitedCountryDetails

  const onClickButton = () => {
    onClickRemoveButton(id)
  }

  return (
    <li>
      <img src={imageUrl} alt="thumbnail" />
      <p>{name}</p>
      <button type="button" onClick={onClickButton}>
        Remove
      </button>
    </li>
  )
}
export default CountriesList
