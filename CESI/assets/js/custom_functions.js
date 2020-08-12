function imstat(obj, classid, url) {
  var mail = '';
  if ($(obj).prop('title') == '') {
    mail = $(obj).text();
  } else {
    mail = $(obj).prop('title');
  }
  var data = {imstat: 'ok', pid: '0', content: mail, classid: classid, fromurl: location.href};
  $.ajax({
    url: url, type: 'POST', cache: false, data: data, success: function (msg) {
    }
  });
}

function showTipModal(data) {
  var tipModal = $('#tip-modal');
  tipModal.find('#tip-content').html(data);
  tipModal.modal('show')
}

function showInquiryModal() {
  var inquiryModal = $('#inquiry-modal');
  inquiryModal.modal('show')
}

$().ready(function () {
  // $("#t1").click(function () {
  //   popWin("detail");
  // });

  // 提交时验证表单
  var validator = $(".form_check").validate({
    rules:
        {
          subject:
              {
                required: true
              },
          email:
              {
                required: true,
                email: true
              }
          // message:
          //   {
          //     required: true,
          //     minlength: 10
          //   }
          // debug:true
        },
    errorElement: "span",
    errorPlacement: function (error, element) {
      // Append error within linked label
      $(element)
          .closest("form")
          .find("label[for='" + element.attr("id") + "']")
          .append(error);
      // error.insertBefore(element)
    },

    submitHandler: function (form) {
      ajaxBodyFormSubmit(form);
    },
  });

  var validator = $(".form_che").validate({
    rules:
    {
      subject:
      {
        required: true
      },
      email:
      {
        required: true,
        email: true
      }
      // message:
      //   {
      //     required: true,
      //     minlength: 10
      //   }
      // debug:true
    },
    errorElement: "span",
    errorPlacement: function (error, element) {
      // Append error within linked label
      $(element)
          .closest("form")
          .find("label[for='" + element.attr("id") + "']")
          .append(error);
      // error.insertBefore(element)
    },

    submitHandler: function (form) {
      ajaxBodyFormSubmit3(form);
      //gtag_report_conversion();
    },
  });



  var validator = $(".left_form_check").validate({
    rules:
    {
      subject:
      {
        required: true
      },
      email:
      {
        required: true,
        email: true
      }
      // message:
      //   {
      //     required: true,
      //     minlength: 10
      //   }
      // debug:true
    },
    errorElement: "span",
    errorPlacement: function (error, element) {
      // Append error within linked label
      $(element)
          .closest("form")
          .find("label[for='" + element.attr("id") + "']")
          .append(error);
      // error.insertBefore(element)
    },

    submitHandler: function (form) {
      ajaxBodyFormSubmit(form);
    },
  });







  var validator_side = $('#modal_form_check').validate({
    rules:
        {
          subject:
              {
                required: true
              },
          email:
              {
                required: true,
                email: true
              }
          // message:
          //   {
          //     required: true,
          //     minlength: 10
          //   }
          // debug:true
        },
    errorElement: "span",
    errorPlacement: function (error, element) {
      // Append error within linked label
      $(element)
          .closest("form")
          .find("label[for='" + element.attr("id") + "']")
          .append(error);
      // error.insertBefore(element)
    },
    submitHandler: function (form) {
      ajaxSubmit(form);
    },
  });
  function ajaxSubmit(form) {
    var thatForm = $(form)
    if (thatForm.valid()) {
      $.ajax({
        url: '/inquiry_submit',
        data: thatForm.serialize(),
        type: "POST",
        beforeSend: function () {
          thatForm.find('button').attr('disabled', true)
          thatForm.find('.modal_submit_area').slideUp()
          thatForm.find('.modal_tip_area .tip_text').text('Wait a moment')
          thatForm.find('.modal_tip_area').slideDown()
        },
        success: function (data) {
          thatForm.find('button').attr('disabled', false)
          thatForm[0].reset();
          thatForm.find('.modal_tip_area .tip_text').text(data)
          thatForm.find('.modal_submit_area').delay(2000).slideDown()
          thatForm.find('.modal_tip_area').delay(2000).fadeOut()
        },
        error:function(data){
        }
      });
    }
  }


  function ajaxBodyFormSubmit(form) {
    var thatForm = $(form)
    if (thatForm.valid()) {
      $.ajax({
        url: '/inquiry_submit',
        data: decodeURIComponent(thatForm.serialize(),true),
        type: "POST",
        dataType: 'text',
        beforeSend: function () {
          //alert(thatForm.find('button').text());
          /*2019-11-15提交中的弹窗*/
          //$.fancybox.open('<div style="text-align: center;"><span style="font-size: 20px;color: #222">' + 'In the process of submission !' + '</span></div>');
          thatForm.find('button').attr('disabled', true).text('In submission').addClass("submitting")
          thatForm.find('input.t_submit').attr('disabled', true).text('In submission').addClass("submitting")
        },
        success: function (data) {
          thatForm.find('button').attr('disabled', false).text('submit').removeClass("submitting")
          thatForm.find('input.t_submit').attr('disabled', false).text('submit').removeClass("submitting")
          thatForm[0].reset();
          //window.location.href="/inq_success.asp";
          //以下为弹窗方式
          $.fancybox.close();
          $.fancybox.open('<div style="text-align: center;"><span style="font-size: 20px;color: #222">' + data + '</span></div>');
        },
      });
    }
  }


  function ajaxBodyFormSubmit3(form) {
    var thatForm = $(form)
    if (thatForm.valid()) {
      $.ajax({
        url: '/inquiry_submit',
        data: decodeURIComponent(thatForm.serialize(),true),
        type: "POST",
        dataType: 'text',
        beforeSend: function () {
          //alert(thatForm.find('button').text());
          /*2019-11-15提交中的弹窗*/
          //$.fancybox.open('<div style="text-align: center;"><span style="font-size: 20px;color: #222">' + 'In the process of submission !' + '</span></div>');
          thatForm.find('button').attr('disabled', true).text('In submission').addClass("submitting")
          thatForm.find('input.t_submit').attr('disabled', true).text('In submission').addClass("submitting")
        },
        success: function (data) {
          thatForm.find('button').attr('disabled', false).text('submit').removeClass("submitting")
          thatForm.find('input.t_submit').attr('disabled', false).text('submit').removeClass("submitting")
          thatForm[0].reset();
          window.location.href="/inq_success.php";
          //以下为弹窗方式
          //$.fancybox.close();
          //$.fancybox.open('<div style="text-align: center;"><span style="font-size: 20px;color: #222">' + data + '</span></div>');
        },
      });
    }
  }



  $(".cancel").click(function () {
    validator.resetForm();
  });
});