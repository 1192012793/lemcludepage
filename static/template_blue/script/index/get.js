(function($){
	$(function(){
					var arr = [
						"public/common/icheck/skins/all.css",
						"public/common/icheck/icheck.js",
						"static/template_blue/script/index/getDom.js",
						"css/editModal/editModal.css",
						"public/common/vakata-jstree/dist/themes/default/style.min.css",
						"public/common/vakata-jstree/dist/jstree.min.js",
						"public/common/pagination/simplePagination.css",
						"public/common/pagination/jquery.simplePagination.js",
						"static/template_blue/style/role/listREM.css",
						"static/template_blue/style/role/authmodal.css",
						"css/user/auth.css",
						"static/template_blue/style/role/addsREM.css",
						"static/template_blue/style/role/role.css",
						"https://cdn.bootcss.com/jqueryui/1.12.1/jquery-ui.min.css",
						"css/user/edit.css",
						"css/resources/add.css",
						"public/common/icheck/custom.min.js",
						"static/template_blue/style/role/view.css",
						"css/database/progress.css",
						"js/database/progress.js",
						"css/database/backup.css",
						"static/template_blue/style/role/editnew.css",
						"public/common/bootstrapvalidator/js/bootstrapValidator.js",
						"public/common/bootstrapvalidator/css/bootstrapValidator.css",
				
						]
		$.each(arr,function(i,v){
			if(v.substring(v.length-3) == "css"){
				$("<link>").attr({rel:"stylesheet",href:v}).appendTo("head")
			}else{
				$("<script>").attr({src:v}).appendTo("head")
			}
		})
	})
})(jQuery)
