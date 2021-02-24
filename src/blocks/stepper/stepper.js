if (document.querySelector("#stepper")){
  const windowWidth = document.documentElement.clientWidth
const stepper = document.querySelector("#stepper")
const wrapper = document.querySelector("#stepper-wrapper")
const maxOffset = stepper.offsetWidth - wrapper.offsetWidth
const items = document.querySelectorAll(".stepper__link")
const coeff = wrapper.getBoundingClientRect().x
let swipeMode = false
let initialPosition

for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function () {
        console.log(windowWidth)
      setActiveClass(i)
    })
  }
  
  wrapper.addEventListener("click", function (event) {
    event.stopPropagation()
    if (
      event.target.classList.contains("stepper__text") ||
      event.target.classList.contains("stepper__number")
    ) {
    } else {
      for (let item of items) {
        item.classList.remove("stepper__link_active")
      }
    }
  })
  
  function setActiveClass(index) {
    for (let item of items) {
      item.classList.remove("stepper__link_active")
    }
    if (items[index] !== void 0) {
      items[index].classList.add("stepper__link_active")
      setCenteredItem(index)
    }
  }

// if (windowWidth < 1024){
//     stepper.addEventListener("mousedown", function (event) {
//         initialPosition = event.clientX - wrapper.getBoundingClientRect().x + coeff
//         swipeMode = true
//       })
//       stepper.addEventListener("mouseup", function () {
//         swipeMode = false
//       })
//       stepper.addEventListener("mousemove", function (event) {
//         if (swipeMode) {
//           let offset = -(initialPosition - event.clientX)
//           console.log(offset)
//           if (offset > 0 || offset < maxOffset) {
//             return
//           }
//           wrapper.style.marginLeft = offset + "px"
//         }
//     })
// }

for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("click", function () {
    setActiveClass(i)
  })
}

wrapper.addEventListener("click", function (event) {
  event.stopPropagation()
  if (
    event.target.classList.contains("stepper__text") ||
    event.target.classList.contains("stepper__number")
  ) {
  } else {
    for (let item of items) {
      item.classList.remove("stepper__link_active")
    }
  }
})

function setActiveClass(index) {
  for (let item of items) {
    item.classList.remove("stepper__link_active")
  }
  if (items[index] !== void 0) {
    items[index].classList.add("stepper__link_active")
    if (windowWidth <= 1024){
        setCenteredItem(index)
    }
  }
}

function setCenteredItem(index){
    const item = items[index]
    const itemPosition = item.parentElement.offsetLeft + item.parentElement.offsetWidth / 2
    const currentOffset = Math.abs(wrapper.offsetLeft - 30)
    let newOffset = Math.abs(itemPosition - (stepper.offsetWidth / 2))
    if (itemPosition < (stepper.offsetWidth / 2)){
        newOffset = 0
    }
    const moveRange = Math.abs(currentOffset - newOffset)
    let direction
    let step = moveRange / 100
    if (currentOffset < newOffset && itemPosition > (stepper.offsetWidth / 2)){
        direction = 'left'
    } else {
        direction = 'right'
    }
    moveStepper(direction)

    function moveStepper(direction){
        if (direction === 'left'){
            step = -step
        }
        let margin = -currentOffset
        
        const interval = setInterval(() => {

            if (direction === 'left' && Math.abs(margin) > newOffset){
                clearInterval(interval)
            } else if (direction === 'left' && margin < maxOffset){
                clearInterval(interval) 
            }
            else if (direction === 'right' && Math.abs(margin) < newOffset){
                clearInterval(interval)
            } else if (margin > 0){
                clearInterval(interval)
            }
            
            margin += step
            wrapper.style.marginLeft = margin + 'px'
        }, 4);
    }
  }
}
