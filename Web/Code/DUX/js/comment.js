tbfine(function(){return{init:function(){!function(e){function t(t,o){e(".comt-loading").slideDown(300),$submit.attr("disabled",!0).fadeTo("slow",.5),a&&e("#comment").after('<input type="text" name="edit_id" id="edit_id" value="'+a+'" style="display:none;" />'),e.ajax({url:TBUI.uri+"/action/comment.php",data:t.serialize(),type:t.attr("method"),error:function(t){e(".comt-loading").slideUp(300),e(".comt-error").slideDown(300).html(t.responseText),setTimeout(function(){$submit.attr("disabled",!1).fadeTo("slow",1),e(".comt-error").slideUp(300)},3e3)},success:function(t){e(".comt-loading").slideUp(300),r.push(e("#comment").val()),e("textarea").each(function(){this.value=""});var o=addComment,s=o.I("cancel-comment-reply-link"),d=o.I("wp-temp-form-div"),l=o.I(o.respondId),p=(o.I("comment_post_ID").value,o.I("comment_parent").value);!a&&$comments.length&&(n=parseInt($comments.text().match(/\d+/)),$comments.text($comments.text().replace(n,n+1))),new_htm='" id="new_comm_'+i+'"></',new_htm="0"==p?'\n<ol style="clear:both;" class="commentlist commentnew'+new_htm+"ol>":'\n<ul class="children'+new_htm+"ul>",ok_htm='\n<span id="success_'+i+c,ok_htm+="</span><span></span>\n","0"==p&&e("#postcomments .commentlist").length?e("#postcomments .commentlist").before(new_htm):e("#respond").after(new_htm),e(".comment-user-change").show(),e("#comment-author-info").slideUp(),e(".comment-user-avatar-name").length||e(".comt-title img").after('<p class="comment-user-avatar-name"></p>'),e(".comment-user-avatar-name").text(e("#commentform #author").val()),e("#new_comm_"+i).hide().append(t),e("#new_comm_"+i+" li").append(ok_htm),e("#new_comm_"+i).fadeIn(1e3),e("#new_comm_"+i).find(".comt-avatar .avatar").attr("src",e(".commentnew .avatar:last").attr("src")),m(),i++,a="",e("*").remove("#edit_id"),s.style.display="none",s.onclick=null,o.I("comment_parent").value="0",d&&l&&(d.parentNode.insertBefore(l,d),d.parentNode.removeChild(d))}})}function o(){$new_comm.show(),$new_sucs.show(),e("textarea").each(function(){this.value=""}),a=""}function m(){s>0?($submit.val(s),s--,setTimeout(m,1e3)):($submit.val(d).attr("disabled",!1).fadeTo("slow",1),s=15)}e(".commentlist .url").attr("target","_blank"),e(".comment-user-change").on("click",function(){e(this).hide(),e("#comment-author-info").slideDown(300)});var a,c='">',i=1,r=[];r.push(""),$comments=e("#comments-title"),$cancel=e("#cancel-comment-reply-link"),cancel_text=$cancel.text(),$submit=e("#commentform #submit"),$submit.attr("disabled",!1),e(".comt-tips").append('<div class="comt-tip comt-loading">评论提交中...</div><div class="comt-tip comt-error">#</div>'),e(".comt-loading").hide(),e(".comt-error").hide(),$body=e(window.opera?"CSS1Compat"==document.compatMode?"html":"body":"html,body"),e("#commentform").submit(function(){var n=e(this);return TBUI.captcha&&TBUI.captcha_comment&&TBUI.captcha_appid?tbquire(["qcaptcha"],function(){TBUI.cpt=new TencentCaptcha(document.getElementById("submit"),TBUI.captcha_appid,function(e){if(0===e.ret){var o={};o.ticket=e.ticket,o.randstr=e.randstr,t(n)}}),TBUI.cpt.show()}):t(n),!1}),addComment={moveForm:function(t,n,m,c,i){var s,d=this,l=d.I(t),p=d.I(m),u=d.I("cancel-comment-reply-link"),h=d.I("comment_parent"),f=d.I("comment_post_ID");a&&o(),i?(d.I("comment").value=r[i],a=d.I("new_comm_"+i).innerHTML.match(/(comment-)(\d+)/)[2],$new_sucs=e("#success_"+i),$new_sucs.hide(),$new_comm=e("#new_comm_"+i),$new_comm.hide(),$cancel.text("取消编辑")):$cancel.text(cancel_text),d.respondId=m,c=c||!1,d.I("wp-temp-form-div")||((s=document.createElement("div")).id="wp-temp-form-div",s.style.display="none",p.parentNode.insertBefore(s,p)),l?l.parentNode.insertBefore(p,l.nextSibling):(temp=d.I("wp-temp-form-div"),d.I("comment_parent").value="0",temp.parentNode.insertBefore(p,temp),temp.parentNode.removeChild(temp)),$body.animate({scrollTop:e("#respond").offset().top-180},400),f&&c&&(f.value=c),h.value=n,u.style.display="",u.onclick=function(){a&&o();var e=addComment,t=e.I("wp-temp-form-div"),n=e.I(e.respondId);return e.I("comment_parent").value="0",t&&n&&(t.parentNode.insertBefore(n,t),t.parentNode.removeChild(t)),this.style.display="none",this.onclick=null,!1};try{d.I("comment").focus()}catch(e){}return!1},I:function(e){return document.getElementById(e)}},e(".comment-reply-link").on("click",function(){var t=e(this);if(!t.attr("onclick")&&t.data("belowelement")&&t.data("commentid")&&t.data("respondelement")&&t.data("postid"))return addComment.moveForm(t.data("belowelement"),t.data("commentid"),t.data("respondelement"),t.data("postid"))});var s=15,d=$submit.val()}(jQuery)}}});