
var slideSpeed = 600;
var slideSpeed2x = 1000;

function displayToggle(whichAsset){
	//alert(whichAsset);
	if (whichAsset == "#list_item_expanded"){
		$("#orchestrations_action_menu_edit").hide();
	} else if (whichAsset == "#analytic_properties"){
		$("#analytics_palette").hide();
	} else if (whichAsset == "#analytics_palette"){
		$("#analytic_properties").hide();
	} else if (whichAsset == "#io_editor_iterations_collapsed"){
		$("#io_editor").hide();
	} else if (whichAsset == "#io_editor"){
		$("#io_editor_iterations_collapsed").hide();
	} else if (whichAsset == "#analytic_results_outputs"){
		$("#line_chart").hide();
		$("#analytic_results").hide();
	} else if (whichAsset == "#analytic_results"){
		//$("#guage").hide();
		$("#analytic_results_outputs").hide();
	}
	$(whichAsset).toggle();
}

function changeView(whichView){
	if (whichView == "orchestration_editor"){									// ORCHESTRATION EDITOR
		$("#orchestrations_action_menu").hide();
		$("#orchestrations").animate({left: -1400}, slideSpeed);
		$("#orchestration_editor").animate({left: -2}, slideSpeed);
	} else if (whichView == "io_editor"){										// I/O EDITOR
		$("#analytic_properties").hide();
		$("#io_editor").offset({ left: 1400 });
		$("#orchestration_editor").animate({left: -1400}, slideSpeed);
		$("#io_editor").animate({left: -2}, slideSpeed);
	} else if (whichView == "analytic_results"){								// ANALYTIC RESULTS
		$("#analytic_properties").hide();
		$("#analytic_results").offset({ left: 1400 });
		$("#orchestration_editor").animate({left: -1400}, slideSpeed);
		$("#analytic_results").animate({left: -2}, slideSpeed);
	} else if (whichView == "dashboard_designer"){								// DASHBOARD DESIGNER
		$("#analytics_palette").hide();
		$("#dashboard_designer").offset({ left: 1400 });
		$("#orchestration_editor").animate({left: -1400}, slideSpeed);
		$("#dashboard_designer").animate({left: -2}, slideSpeed);
	} else if (whichView == "back_from_orchestration_editor"){					// BACK FROM ORCHESTRATION EDITOR
		$("#analytic_properties").hide();
		$("#analytics_palette").hide();
		$("#orchestrations").animate({left: -2}, slideSpeed);
		$("#orchestration_editor").animate({left: 1400}, slideSpeed);
	} else if (whichView == "back_from_analytic_results"){						// BACK FROM ANALYTIC RESULTS
		$("#line_chart").hide();
		$("#guage").hide();
		$("#analytic_results_outputs").hide();
		$("#orchestration_editor").animate({left: -2}, slideSpeed);
		$("#analytic_results").animate({left: 1400}, slideSpeed);
	} else if (whichView == "breadcrumb_from_analytic_results"){				// BREADCRUMB FROM ANALYTIC RESULTS
		$("#line_chart").hide();
		$("#guage").hide();
		$("#analytic_results_outputs").hide();
		$("#orchestrations").offset({ left: -2798 });
		$("#orchestrations").animate({left: -2}, slideSpeed2x);
		$("#orchestration_editor").animate({left: 1400}, slideSpeed2x);
	} else if (whichView == "back_from_analytic_results_outputs"){				// BACK FROM ANALYTIC RESULTS OUTPUTS
		$("#guage").hide();
		$("#analytic_results").show();
		$("#analytic_results_outputs").hide();
		$("#orchestration_editor").animate({left: -2}, slideSpeed);
		$("#analytic_results").animate({left: 1400}, slideSpeed);
	} else if (whichView == "breadcrumb_from_analytic_results_outputs"){		// BREADCRUMB FROM ANALYTIC RESULTS OUTPUTS
		$("#guage").hide();
		$("#analytic_results").show();
		$("#analytic_results_outputs").hide();
		$("#orchestrations").offset({ left: -2798 });
		$("#orchestrations").animate({left: -2}, slideSpeed2x);
		$("#orchestration_editor").animate({left: 1400}, slideSpeed2x);
		$("#analytic_results").animate({left: 2798}, slideSpeed2x);
	} else if (whichView == "back_from_io_editor"){								// BACK FROM I/O EDITOR
		$("#orchestration_editor").animate({left: -2}, slideSpeed);
		$("#io_editor").animate({left: 1400}, slideSpeed);
	} else if (whichView == "breadcrumb_from_io_editor"){						// BREADCRUMB FROM I/O EDITOR 
		$("#orchestrations").offset({ left: -2798 });
		$("#orchestrations").animate({left: -2}, slideSpeed2x);
		$("#orchestration_editor").animate({left: 1400}, slideSpeed2x);
		$("#io_editor").animate({left: 2798}, slideSpeed2x);
	} else if (whichView == "back_from_dashboard_designer"){					// BACK FROM DASHBOARD DESIGNER
		$("#orchestration_editor").animate({left: -2}, slideSpeed);
		$("#dashboard_designer").animate({left: 1400}, slideSpeed);
	} else if (whichView == "breadcrumb_from_dashboard_designer"){				// BREADCRUMB FROM DASHBOARD DESIGNER
		$("#orchestrations").offset({ left: -2798 });
		$("#orchestrations").animate({left: -2}, slideSpeed2x);
		$("#orchestration_editor").animate({left: 1400}, slideSpeed2x);
		$("#dashboard_designer").animate({left: 2798}, slideSpeed2x);
	}
}


/////////////////
// DISPATCH RULES

function displayToggleRules(whichAsset){
	//alert(whichAsset);
	if (whichAsset == "#data_trigger"){
		$("#rule_editor").hide();
	} else if (whichAsset == "#rule_editor"){
		$("#data_trigger").hide();
	} else if (whichAsset == "#rules_action_menu"){
		$("#rules_enabled").hide();
	} else if (whichAsset == "#rules_enabled"){
		$("#rules_enabled").offset({ top: -148 });
	}
	$(whichAsset).toggle();
}

function changeViewRules(whichView){
	if (whichView == "rule_editor"){											// RULES EDITOR
		$("#rules_action_menu").hide();
		$("#rules").animate({left: -1400}, slideSpeed);
		$("#rule_editor").animate({left: -2}, slideSpeed);
	} else if (whichView == "back_from_rules_editor"){							// BACK FROM RULES EDITOR
		$("#rules").animate({left: -2}, slideSpeed);
		$("#rule_editor").animate({left: 1400}, slideSpeed);
	}
}


//////////
// EVENTS

function changeViewEvents(whichView){
	if (whichView == "events_results"){											// ORCHESTRATION RESULTS
		//$("#rules_action_menu").hide();
		$("#events").animate({left: -1400}, slideSpeed);
		$("#events_results").animate({left: -1}, slideSpeed);
	} else if (whichView == "back_from_orchestration_results"){					// BACK FROM RESULTS
		$("#events").animate({left: -2}, slideSpeed);
		$("#events_results").animate({left: 1400}, slideSpeed);
	}
}


///////////
// I/O MAPS

function ioMaps(whichView){
	if (whichView == "io_maps_from_list"){										// I/O MAPS FROM LIST
		$("#orchestrations_action_menu").hide();
		
		document.getElementById("io_maps_container").innerHTML="<img src='comps/io_maps_from_list.png' alt='I/O Maps: Orchestration four' id='io_maps' width='1164' style='position:relative;left:1400px;top:-4277px;' usemap='#io_maps_from_list_map'><map name='io_maps_from_list_map' id='io_maps_from_list_map'><area shape='rect' coords='0,0,88,18' href='#' onclick=changeViewIOmaps('back_to_list_from_io_maps') alt='Breadcrumb - Orchestrations' /><area shape='rect' coords='3,26,31,53' href='#' onclick=changeViewIOmaps('back_to_list_from_io_maps') alt='Back button' /><area shape='rect' coords='1111,262,1138,289' href='#' onclick=displayToggle('#io_maps_action_menu') alt='Actions menu' /></map>";
		
		
		$("#orchestrations").animate({left: -1400}, slideSpeed);
		$("#io_maps").animate({left: -4}, slideSpeed);
	} else if (whichView == "io_maps_from_editor"){								// I/O MAPS FROM EDITOR
		$("#analytics_palette").hide();
		
		document.getElementById("io_maps_container").innerHTML="<img src='comps/io_maps_from_editor.png' alt='I/O Maps: Orchestration four' id='io_maps' width='1164' style='position:relative;left:1400px;top:-4277px;' usemap='#io_maps_from_editor_map'><map name='io_maps_from_editor_map' id='io_maps_from_editor_map'><area shape='rect' coords='0,0,88,18' href='#' onclick=changeViewIOmaps('breadcrumb_from_io_maps') alt='Breadcrumb - Orchestrations' /><area shape='rect' coords='98,0,220,18' href='#' onclick=changeViewIOmaps('back_to_editor_from_io_maps') alt='Breadcrumb - Orchestration Editor' /><area shape='rect' coords='3,26,31,53' href='#' onclick=changeViewIOmaps('back_to_editor_from_io_maps') alt='Back button' /></map>";
		
		$("#orchestration_editor").animate({left: -1400}, slideSpeed);
		$("#io_maps").animate({left: -4}, slideSpeed);
	}
}
function changeViewIOmaps(whichView){
	if (whichView == "back_to_list_from_io_maps"){								// BACK TO LIST FROM I/O MAPS
		$("#io_maps_action_menu").hide();
		$("#orchestrations").animate({left: -2}, slideSpeed);
		$("#io_maps").animate({left: 1400}, slideSpeed);
	} else if (whichView == "back_to_editor_from_io_maps"){						// BACK TO EDITOR FROM I/O MAPS
		$("#orchestration_editor").animate({left: -2}, slideSpeed);
		$("#io_maps").animate({left: 1400}, slideSpeed);
	} else if (whichView == "breadcrumb_from_io_maps"){							// BREADCRUMB FROM I/O MAPS
		$("#orchestrations").offset({ left: -2798 });
		$("#orchestrations").animate({left: -2}, slideSpeed2x);
		$("#orchestration_editor").animate({left: 1400}, slideSpeed2x);
		$("#io_maps").animate({left: 2798}, slideSpeed2x);
	}
}