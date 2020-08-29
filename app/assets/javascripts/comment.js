$(function() {
  $('#new_comment').on('submit', function(e){
    function buildHTML(comment){
      let html = `<p>
                    <strong>
                      <a href=/users/${comment.user_id}>${comment.user_name}</a>:
                    </strong>
                    ${comment.text}
                  </p>`
      return html;
    }
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.comments').append(html);
      $('.textbox').val('');
      $('.form__submit').prop('disabled', false);
    })
    .fail(function(){
      alert('error');
    })
  })
})