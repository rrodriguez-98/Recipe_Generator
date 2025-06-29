
import { useState } from 'react'

export default function Main() {

    const [ingredients, setIngredients] = useState<string[]>([]) //Declare state type

    const ingredientsList = ingredients.map(ingredient =>
        <li key={ingredient}>{ingredient}</li>
    )

    function handleSubmit(formData: FormData) {
        const newIngredient = formData.get("ingredient") as string //Name id is the same as form input; Set type assertion on formData
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    return (
        <main>
            <form action={handleSubmit} className="add-ingredient-form" >
                <input type="text" placeholder="e.g. tomatoes" aria-label="Add ingredient" name="ingredient"/>
                <button type="submit">Add ingredient</button>
            </form>
            <ul>
                {ingredientsList}
            </ul>
        </main>
    )
}