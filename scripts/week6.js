// Recipe data stored in an array of objects
const recipes = [
    {
        name: 'Jollof Rice',
        category: 'Lunch',
        ingredients: ['Rice', 'Tomato', 'Onion', 'Spices'],
        instructions: 'Cook rice with tomato sauce and spices.'
    },
    {
        name: 'Egusi Soup',
        category: 'Dinner',
        ingredients: ['Melon Seeds', 'Spinach', 'Meat'],
        instructions: 'Cook melon seeds with spinach and meat.'
    },
    {
        name: 'Akara',
        category: 'Breakfast',
        ingredients: ['Black-eyed Beans', 'Onion', 'Salt', 'Oil'],
        instructions: 'Blend beans with onion, fry in oil until golden.'
    },
    {
        name: 'Suya',
        category: 'Dinner',
        ingredients: ['Beef', 'Spices', 'Oil'],
        instructions: 'Skewer and grill beef with spice mix.'
    }
];

// Load recipes on page load
document.addEventListener('DOMContentLoaded', () => {
    displayRecipes('All');
});

// Function to display recipes based on category
function displayRecipes(category) {
    const container = document.getElementById('recipeList');
    if (!container) return; // only on recipes.html
    container.innerHTML = '';

    const filtered = category === 'All' ? recipes : recipes.filter(r => r.category === category);

    filtered.forEach(recipe => {
        container.innerHTML += `
        <div class="card">
            <h3>${recipe.name}</h3>
            <p><strong>Category:</strong> ${recipe.category}</p>
            <p><strong>Ingredients:</strong> ${recipe.ingredients.join(', ')}</p>
            <p><strong>Instructions:</strong> ${recipe.instructions}</p>
            <button onclick="addFavorite('${recipe.name}')">Add to Favorites</button>
        </div>`;
    });
}

// Function to filter recipes
function filterRecipes(category) {
    displayRecipes(category);
}

// Function to save favorites in localStorage
function addFavorite(recipeName) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.includes(recipeName)) {
        favorites.push(recipeName);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        alert(`${recipeName} added to favorites!`);
    } else {
        alert(`${recipeName} is already in favorites.`);
    }
}

// Handle recipe submission from form
const form = document.getElementById('recipeForm');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const recipeName = document.getElementById('recipe').value;
        const category = document.getElementById('category').value;
        const instructions = document.getElementById('instructions').value;

        recipes.push({
            name: recipeName,
            category: category,
            ingredients: [],
            instructions: instructions
        });

        localStorage.setItem('recipes', JSON.stringify(recipes));
        alert(`${recipeName} submitted by ${name}!`);
        form.reset();
    });
}
