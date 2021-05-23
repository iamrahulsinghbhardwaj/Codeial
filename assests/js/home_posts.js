{
    //methord to submit the form data for new post using AJAX
    let creatPost=function(){
        let  newPostform=$('#new-post-form');

        newPostform.submit(function(e){
            e.preventDefault();

            $.ajax({
                type:'post',
                url:'/posts/create',
                data:newPostform.seriliaze(),
                success:function(data){
                    console.log(data);
                },error:function(error){
                    console.log(error.responseText);
                }
            })

        });
    }
}