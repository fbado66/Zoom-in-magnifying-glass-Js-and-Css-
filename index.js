let productZoomIn = document.querySelector('#product-zoom-in')
let imgGlass = document.querySelector('#image_in_glass')

productZoomIn.addEventListener("mousemove", function(evt){
    evt.target.style.cursor = 'cell'

    let clientX = evt.clientX - productZoomIn.offsetLeft
    let clientY = evt.clientY - productZoomIn.offsetTop
    let positionWidth = productZoomIn.offsetWidth 
    let positionHeight = productZoomIn.offsetHeight

    clientX = clientX / positionWidth * 100
    clientY = clientY / positionHeight * 100
     
    // console.log(positionHeight)
    // console.log(positionWidth)
    // console.log(clientX, clientY)
    imgGlass.style.transform = `translate(-${clientX}%, -${clientY}%) scale(2)`
    
    // imgGlass.style.transform = 'translate(-50%,-50%) scale(2)'

})

productZoomIn.addEventListener("mouseleave", function(){
    imgGlass.style.transform = 'translate(-50%,-50%) scale(1)'
})




