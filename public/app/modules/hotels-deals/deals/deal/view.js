define([
	'App',
	'text!modules/hotels-deals/deals/deal/template.html'
],
function(
	App,
	template
){
	return Backbone.Marionette.ItemView.extend({

		template: _.template(template),

		initialize : function (options) {
			
		},
		
		onRender: function(){
			
		},
	});
});
