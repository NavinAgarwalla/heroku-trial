sap.ui.controller("training.Main", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf training.Main
*/
	onInit: function() {
		var oThisController = this;
		var oMdl = new sap.ui.model.json.JSONModel();
		var oMyData = {
				UserName: "",
				Password: "",
				UserNamePlaceHolder: "Enter UName",
				LoginBtnEnabled: false,
				Address: {
					addr1:""
				},
				ar:[1,2]
		};
		oMdl.setData(oMyData);
		oThisController.getView().setModel(oMdl,"mMyFirstModel");			//Local
//		sap.ui.getCore().setModel(oMdl,"mMyFirstModel");			//Global, not recommended
		
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf training.Main
*/
	onBeforeRendering: function() {

	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf training.Main
*/
	onAfterRendering: function() {

	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf training.Main
*/
//	onExit: function() {
//
//	}
	
	fnOnLogin: function(){
		var oThisController = this;
		var oMdl = oThisController.getView().getModel("mMyFirstModel");
		
		oMdl.getData();						//To get complete object			sap.ui.getCore().getModel("mMain").getData()
		var UName = oMdl.getProperty("/UserName");		//To get perticular value
		var Pswd = oMdl.getProperty("/Password");
		
		debugger;
		if(UName === '' || Pswd === ""){
			console.log("Invalid credentials");
		}
		
		//Call service
		
		app.to();
	},
	
	fnOnChangeUName: function(oEvent){
		var oThisController = this;
		var oMdl = oThisController.getView().getModel("mMyFirstModel");
		var UName = oMdl.getProperty("/UserName");
		var Pswd = oMdl.getProperty("/Password");
		
		if(UName !== '' && Pswd !== ""){
			oMdl.setProperty("/LoginBtnEnabled",true);
		}
	},
	
	fnOnChangePassword: function(oEvent){
		var oThisController = this;
		var oMdl = oThisController.getView().getModel("mMyFirstModel");
		var UName = oMdl.getProperty("/UserName");
		var Pswd = oMdl.getProperty("/Password");
		
		if(UName !== '' && Pswd !== ""){
			oMdl.setProperty("/LoginBtnEnabled",true);
		}
	}

});