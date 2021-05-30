import React from 'react'

const PersonForm = ({ submit, getName, newName, getNumber, newNumber }) => {
    return (
        <>
            <h2>add a new</h2>
            <form>
                <div>
                    name: <input onChange={getName} value={newName} />
                </div>
                <div>
                    number: <input onChange={getNumber} value={newNumber} />
                </div>
                <div>
                    <button type="submit" onClick={submit}>add</button>
                </div>
            </form>
        </>
    )
}

export default PersonForm