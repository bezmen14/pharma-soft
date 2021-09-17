function RecipeItem({ series, number, patient, preparation }) {

  return (
    <a href="#" className="list-group-item list-group-item-action" aria-current="true">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">Пациент: {patient}</h5>
        <small>Препарат: {preparation}</small>
      </div>
      <p className="mb-1">Серия: {series}</p>
      <small>Номер: {number}</small>
    </a>
  )
}

export default RecipeItem;
