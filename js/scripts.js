$(function(){
  $('#abrir').on("click", () => {
    $('.box').css("right", "0")
    $('.box').css("transition", "1s")
  })

  $('#fechar').on("click", () => {
    $('.box').css("right", "-300px")
    $('.box').css("transition", "1s")
  })
})