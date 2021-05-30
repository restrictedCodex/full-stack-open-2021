import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [personToShow, setPersonToShow] = useState(persons)

    const getName = (event) => {
        setNewName(event.target.value)
    }

    const getNumber = (event) => {
        setNewNumber(event.target.value)
    }

    const submit = (event) => {
        event.preventDefault();
        const checkIfNameExists = persons.filter(person => person.name === newName)
        if (checkIfNameExists.length !== 0) {
            alert(`${newName} is already added to phonebook`)
            setNewName('')
        } else {
            const newObj = {
                name: newName,
                number: newNumber
            }
            setPersons(persons.concat(newObj))
            setPersonToShow(persons.concat(newObj))
            setNewName('')
            setNewNumber('')
        }
    }

    const filterContent = (event) => {
        const showPerson = persons.filter((person) => person.name.toLowerCase().includes(event.target.value.toLowerCase()) === true)
        setPersonToShow(showPerson)
    }


    return (
        <div>
            <Filter filterContent={filterContent} />
            <PersonForm submit={submit} getNumber={getNumber} getName={getName} newName={newName} newNumber={newNumber} />
            <Persons personToShow={personToShow} />
        </div>
    )
}

export default App