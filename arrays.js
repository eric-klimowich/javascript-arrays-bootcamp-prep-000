var chocolateBars = 
[
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

function addElementToBeginningOfArray(array, element)
{
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element)
{
  array.unshift(element)
<<<<<<< HEAD
  return array
=======
>>>>>>> 9a23d0fbb58d165d6ad48e6d9b45e0f37034064c
}

function addElementToEndOfArray(array, element)
{
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element)
{
  array.push(element)
<<<<<<< HEAD
  return array 
=======
>>>>>>> 9a23d0fbb58d165d6ad48e6d9b45e0f37034064c
}

function accessElementInArray(array, index)
{
  return (array[index])
<<<<<<< HEAD
}

function destructivelyRemoveElementFromBeginningOfArray(array)
{
  array.shift()
  return array 
}

function removeElementFromBeginningOfArray(array)
{
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array)
{
  array.pop()
  return array 
}

function removeElementFromEndOfArray(array)
{
  return array.slice(0, array.length - 1)
=======
>>>>>>> 9a23d0fbb58d165d6ad48e6d9b45e0f37034064c
}