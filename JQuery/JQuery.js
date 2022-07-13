//Q.1.Create a button , on click of which you should be able to hide a paragraph text,
// create another button onclick of which this paragraph should be visible.

//for hide btn-
$('#hide').on('click',() =>{
    $('#head').css('display','none');
});
//for show btn-
$('#shw').on('click',() => {
    $('#head').css('display','flex');
});

//Q.2 Create an ajax call, by using this api "https://jsonplaceholder.typicode.com/todos/12" and print
// the title as the heading of the page.

function getData(){

    $.ajax({
        url:'https://jsonplaceholder.typicode.com/todos/12',
        type: 'GET',
        success: function(data){
        $('#heading').html(data.title);
        console.log('Success - ',data);
        },
        
        error: function(error){
            console.log('Error - ',error);
        }
    });
}

$('#get').on('click',()=>{
    getData();
    console.log('clicked')
});