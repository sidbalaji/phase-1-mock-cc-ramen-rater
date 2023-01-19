//attempt at having some changes persist but this doesnt seem to be going anywhere
let copy_of_ramen;
// write your code here
fetch('http://localhost:3000/ramens')
    .then(resp => resp.json()) //getting data as JSON
    .then(ramens => {ramens.forEach(renderNavBar)
                     // below line handles extra deliverable 1
                     // renders the first ramen item in the main div by default
                     copy_of_ramen = ramens
                     renderRamen(ramens[0])
                     })
    .then(ramens =>{
        const newRamenForm = document.querySelector("#new-ramen")
        newRamenForm.addEventListener('submit',(e)=>{
            e.preventDefault()
            // core deliverable 3 taking in form values and add ramen to menu on subit event
            const newMenuItem = {}
            const newName = document.querySelector("#new-name")
            const newRestaurant = document.querySelector("#new-restaurant")
            const newImage = document.querySelector("#new-image")
            const newRating = document.querySelector("#new-rating")
            const newComment = document.querySelector("#new-comment")
            newMenuItem.name = newName.value
            newMenuItem.restaurant = newRestaurant.value
            newMenuItem.image = newImage.value
            newMenuItem.rating = newRating.value
            newMenuItem.comment = newComment.value
            renderNavBar(newMenuItem)
            
            //clearing the input fields after we have submitted and rendered newMenuItem
            newName.value = ''
            newRestaurant.value = ''
            newImage.value = ''
            newRating.value = ''
            newComment.value = ''    
        })
    }
    )

function renderNavBar(menuItem){
    ////////////////////////
    // This function takes care of core deliverable 1
    ////////////////////////
    
    const imageDiv = document.querySelector('#ramen-menu')
    const img = document.createElement('img')
    
    // EXTRA DELIVERABLE 3 Creating and adding delete button 
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = "Delete"
    
    // adding image url to img element
    img.src = menuItem.image
    
    img.addEventListener('click',(e) => {renderRamen(menuItem)
    })
    // EXTRA DELIVERABLE 3 Removing img element and delete button when clicked
    deleteBtn.addEventListener('click',(e)=> {img.remove()
                                              deleteBtn.remove()})
    imageDiv.append(deleteBtn)
    imageDiv.append(img)
}

function renderRamen(menuItem){
    ////////////////////////
    // This function takes care of core deliverable 2
    ////////////////////////
    
    const mainImage = document.querySelector("#ramen-detail > img")
    const name = document.querySelector("#ramen-detail > h2")
    const restaurant = document.querySelector("#ramen-detail > h3")
    const rating = document.querySelector("#rating-display")
    const comment = document.querySelector("#comment-display")
    
    name.textContent = menuItem.name
    restaurant.textContent = menuItem.restaurant
    mainImage.src = menuItem.image
    rating.textContent = menuItem.rating
    comment.textContent = menuItem.comment
    
    // EXTRA DELIVERABLE 2
    // grabbing edit ramen form and changing DOM based on input values
    // TODO logic to not edit rating and comment if input values are blank
    const editRamenForm = document.querySelector("#edit-ramen")
    editRamenForm.addEventListener('submit',(e)=>{e.preventDefault()
                                                  const newRating = document.querySelector("#update-rating")
                                                  const newComment = document.querySelector("#update-comment")
                                                  
                                                  comment.textContent = newComment.value
                                                  rating.textContent = newRating.value
                                                  newComment.value = ''
                                                  newRating.value = ''
                                                  })
}