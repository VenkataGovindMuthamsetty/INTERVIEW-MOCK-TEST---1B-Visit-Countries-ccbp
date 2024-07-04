const ListContainer = props => {
  const {countryDetails, onClickVisitButton} = props
  const {id, name, isVisited} = countryDetails

  const onClickButton = () => {
    onClickVisitButton(id)
  }

  return (
    <li>
      <p>{name}</p>
      
        {isVisited ? <p>Visited</p> : <button type="button" onClick={onClickButton}>visit</button>}
      
    </li>
  )
}
export default ListContainer
