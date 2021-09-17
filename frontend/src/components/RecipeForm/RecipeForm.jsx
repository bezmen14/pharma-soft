import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addOneRecipe } from '../../redux/actionCreators/recipeAC';
import React from 'react';

function RecipeForm() {
  const dispatch = useDispatch()

  const [inputSeries, setInputSeries] = useState('')
  const [inputNumber, setInputNumber] = useState('')
  const [inputPatient, setInputPatient] = useState('')
  const [inputPreparation, setInputPreparation] = useState('')

  const inputHandlerSeries = (event) => {
    setInputSeries(event.target.value)
  }
  const inputHandlerNumber = (event) => {
    setInputNumber(event.target.value)
  }
  const inputHandlerPatient = (event) => {
    setInputPatient(event.target.value)
  }

  const inputHandlerPreparation = (event) => {
    setInputPreparation(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    dispatch(addOneRecipe(inputSeries, inputNumber, inputPatient, inputPreparation))
    setInputSeries('')
    setInputNumber('')
    setInputPatient('')
    setInputPreparation('')
  }

  return (
    <div className='d-flex justify-content-center'>
      <form className='w-50 mt-3' onSubmit={submitHandler}>
        <div className="mb-3">
          <input type="text" value={inputPatient} onChange={inputHandlerPatient} className="form-control" name="patient" placeholder="ФИО пациента" />
        </div>
        <div className="mb-3 mt-3">
          <input type="text" value={inputSeries} onChange={inputHandlerSeries} className="form-control" name="series" id="exampleInputEmail1" placeholder='Серия' />
        </div>
        <div className="mb-3">
          <input type="text" value={inputNumber} onChange={inputHandlerNumber} className="form-control" name="number"  placeholder='Номер' />
        </div>
        <div className="mb-3">
          <input type="text" value={inputPreparation} onChange={inputHandlerPreparation} className="form-control" name="preparation" placeholder="Препарат" />
        </div>
        <button type="submit" className="btn btn-secondary">Создать рецепт</button>
      </form>
    </div>
  )
}

export default RecipeForm;
