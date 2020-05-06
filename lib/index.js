(() => {

	const STORAGE_ID = "THE_STORAGE_FOR_YOUR_LANGUAGE";

	// Register pegeditor grammars:
	const registerGrammars = () => {
		jQuery.registerPegeditorGrammar("yourlanguage", Contratos.parse.bind(Contratos));
	}

	let editor1, editor2;

	const capitalize = (text) => {
		const index = text.search("[A-Za-z]");
		if(index !== -1) {
			return text.substr(0,index+1).toUpperCase() + text.substr(index+1);
		} else {
			return text;
		}
	}

	const getStringOutput = function(output) {
		return JSON.stringify(output, null, 2);
	};

	const createEditors = () => {
		jQuery("#e1").pegeditor({
			options: {
				showLineNumbers: true,
				mode: "contratos"
			},
			onSuccess: (output) => {
				if(editor2) {
					const out = getStringOutput(output);
					localStorage[STORAGE_ID] = editor1.instance.getValue();
					editor2.instance.setValue(out);
				}
			},
			onInitialized: (editor) => {
				editor1 = editor;
			}
		});
		jQuery("#e2").pegeditor({
			onInitialized: (editor) => {
				editor2 = editor;
				if(localStorage[STORAGE_ID]) {
					const input = localStorage[STORAGE_ID];
					editor1.instance.setValue(input);
				}
				initializeStateFromUrlParameters();
			},
			grammar: () => true
		});
	};

	const addEvents = () => {
		jQuery(".change-download-button").on("click", function() {
			var searchParams = new URLSearchParams(window.location.search);
			searchParams.set("code", editor1.instance.getValue());
			editor2.instance.setValue(window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.hash + "?" + searchParams.toString());
		});
		jQuery(".change-view-button").on("click", function() {
			const jWrapper = jQuery("body > .wrapper");
			const isHorizontal = jWrapper.hasClass("horizontal-rows");
			if(isHorizontal) {
				jWrapper.removeClass("horizontal-rows");
				jWrapper.addClass("vertical-rows");
			} else {
				jWrapper.removeClass("vertical-rows");
				jWrapper.addClass("horizontal-rows");
			}
		});
	}

	const initializeIndexPage = () => {
		registerGrammars();
		try {
			createEditors();
		} catch (e) {}
		addEvents();
	}

	const initializeStateFromUrlParameters = () => {
		const urlParams = new URLSearchParams(window.location.search);
		const code = urlParams.get("code");
		if(code) {
			editor1.instance.setValue(code);
		}
	};

	window.addEventListener("load", initializeIndexPage);

})();
