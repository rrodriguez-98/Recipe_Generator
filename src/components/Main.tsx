
import { useState, type FormEvent } from 'react'

export default function Main() {

    const [ingredients, setIngredients] = useState<string[]>([]) //Declare state type

    const ingredientsList = ingredients.map(ingredient =>
        <li key={ingredient}>{ingredient}</li>
    )

    function handleSubmit(e: FormEvent<HTMLFormElement>) { //Set event type
        e.preventDefault() //prevent refresh after submit
        const formData = new FormData(e.currentTarget)
        const newIngredient = formData.get("ingredient") as string //Name id is the same as form input; Set type assertion on formData
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
        e.currentTarget.reset() //Reset form contents
    }

    return (
        <main>
            <form action="" className="add-ingredient-form" onSubmit={handleSubmit}>
                <input type="text" placeholder="e.g. tomatoes" aria-label="Add ingredient" name="ingredient"/>
                <button type="submit">Add ingredient</button>
            </form>
            <ul>
                {ingredientsList}
            </ul>
        </main>
    )
}