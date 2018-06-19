sap.ui.jsview("training.Main", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf training.Main
	*/ 
	getControllerName : function() {
		return "training.Main";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf training.Main
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page({
			title: "Title",
			content: [
			          new sap.m.Input({
			        	  value: "{mMyFirstModel>/UserName}",
			        	  placeholder: "{mMyFirstModel>/UserNamePlaceHolder}",
			        	  change: function(oEvent){
			        		  oController.fnOnChangeUName(oEvent);
			        	  }
			          }),
			          new sap.m.Input({
			        	  value: "{mMyFirstModel>/Password}",
			        	  type: "Password",
			        	  change: function(oEvent){
			        		  oController.fnOnChangePassword(oEvent);
			        	  }
			          }),
			          new sap.m.Button({
			        	  text: "Login",
			        	  enabled: "{mMyFirstModel>/LoginBtnEnabled}",
//			        	  press: oController.fnOnLogin
			        	  press: function(oEvent){
			        		  oController.fnOnLogin(oEvent);
			        	  }
			          })
			          
			]
		});
	}

});