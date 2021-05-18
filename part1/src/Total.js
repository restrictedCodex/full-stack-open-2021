import React from 'react';

const Total = ({ course }) => {
    let total = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises
    return (
      <>
        <p>Number of exercises {total}</p>
      </>
    )
  }

export default Total;