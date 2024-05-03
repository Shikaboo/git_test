$(document).ready(function(){
    let append = '<p>append</p>';

    let test = $('<h1></h1>').text('test')

    // let test2 = document.createElement('h1')
    // let test3 = test2.innerText = "text" 
    // 위의 test 변수와 동일한 구문이나 이건 js에서 쓰는 방식


    $('.append').click(function(){
        $('#box').append(append)
    })
    let youtube = '<a href="https://www.youtube.com/">youtube</a>'
    $('.prepend').click(function(){
        $('#box').prepend(youtube)
    })
    $('.before').click(function(){
        $('#box').before(test)
    })
    $('.after').click(function(){
        $('#box').after('<p>after</p>')
    })
    $('.empty').click(function(){
        $('#box').empty()
    })
    // 선택 개체 안의 내용을 비워줌, 그렇기에 누르면 id가 box인 태그만 남고 그 안의 태그와 내용이 사라짐.
    $('.remove').click(function(){
        $('.box1').remove()
    })
    // 선택 개체까지 포함해서 그 안의 내용까지 다 지워버림. 
    $('.select').click(function(){
        $('p').remove('.box1, .box3')
    })
})