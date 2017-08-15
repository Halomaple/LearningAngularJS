angular.module('app', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('demo/animations-demo/index.html',
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "	<head>\n" +
    "		<title>Angular Animations Demo</title>\n" +
    "		<link rel=\"stylesheet\" type=\"text/css\" href=\"animations.css\">\n" +
    "		<script type=\"text/javascript\" src=\"../../node_modules/angular/angular.min.js\"></script>\n" +
    "		<script type=\"text/javascript\" src=\"../../node_modules/angular-animate/angular-animate.min.js\"></script>\n" +
    "		<script type=\"text/javascript\" src=\"script.js\"></script>\n" +
    "	</head>\n" +
    "	<body ng-app=\"AnimationsDemo\" ng-controller=\"AnimationsDemoCtrl as vm\">\n" +
    "		<div ng-repeat=\"item in vm.items\" class=\"repeated-item\">\n" +
    "			{{ item }}\n" +
    "		</div>\n" +
    "	</body>\n" +
    "</html>"
  );


  $templateCache.put('demo/animations-ng-class/index.html',
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "	<head>\n" +
    "		<title>Angular Animations ng-class hook</title>\n" +
    "		<link rel=\"stylesheet\" type=\"text/css\" href=\"style.css\">\n" +
    "		<script type=\"text/javascript\" src=\"../../node_modules/angular/angular.min.js\"></script>\n" +
    "		<script type=\"text/javascript\" src=\"../../node_modules/angular-animate/angular-animate.min.js\"></script>\n" +
    "		<script type=\"text/javascript\" src=\"script.js\"></script>\n" +
    "	</head>\n" +
    "	<body ng-app=\"AngularAnimationNgClass\" ng-controller=\"AngularAnimationNgClassCtrl as vm\">\n" +
    "		<p>\n" +
    "			<input type=\"button\" value=\"set\" ng-click=\"myCssVar='css-class'\">\n" +
    "			<input type=\"button\" value=\"clear\" ng-click=\"myCssVar=''\">\n" +
    "			<br>\n" +
    "			<span ng-class=\"myCssVar\">CSS-Animated Text</span>\n" +
    "		</p>\n" +
    "	</body>\n" +
    "</html>"
  );


  $templateCache.put('demo/animations/index.html',
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "	<head>\n" +
    "		<title>Angular Animations</title>\n" +
    "		<script type=\"text/javascript\" src=\"../../node_modules/angular/angular.min.js\"></script>\n" +
    "		<script type=\"text/javascript\" src=\"../../node_modules/angular-animate/angular-animate.min.js\"></script>\n" +
    "		<script type=\"text/javascript\">\n" +
    "			angular.module('Animations', []);\n" +
    "		</script>\n" +
    "	</head>\n" +
    "	<body ng-app=\"Animations\">\n" +
    "		<div ng-init=\"checked=true\">\n" +
    "			<label>\n" +
    "				<input type=\"checkbox\" ng-model=\"checked\" style=\"float:left; margin-right:10px;\"> Is Visible...\n" +
    "			</label>\n" +
    "			<div class=\"check-element sample-show-hide\" ng-show=\"checked\" style=\"clear:both;\">\n" +
    "				Visible...\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</body>\n" +
    "</html>"
  );


  $templateCache.put('demo/component-bindings/index.html',
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "	<head>\n" +
    "		<title>Angular Component bindings</title>\n" +
    "		<script type=\"text/javascript\" src=\"../../node_modules/angular/angular.min.js\"></script>\n" +
    "		<script type=\"text/javascript\" src=\"script.js\"></script>\n" +
    "	</head>\n" +
    "	<body ng-app=\"componentBindingsApp\">\n" +
    "		<div ng-controller=\"Controller as vm\">\n" +
    "			in parent controller:\n" +
    "			<br/>\n" +
    "			'<': <input type=\"text\" ng-model=\"vm.one\"/>\n" +
    "			<br />\n" +
    "			'<': <input type=\"text\" ng-model=\"vm.four.name\"/>\n" +
    "			<br />\n" +
    "			'=': {{vm.two}}\n" +
    "			<input type=\"text\" ng-model=\"vm.two.name\">\n" +
    "			<br />\n" +
    "			<my-component one=\"vm.one\" two=\"vm.two\" three=\"vm.three()\" four=\"vm.four\" five=\"I am a string\"></my-component>\n" +
    "		</div>\n" +
    "	</body>\n" +
    "</html>"
  );


  $templateCache.put('demo/component-bindings/myComponent.html',
    "<hr/>\n" +
    "Inside component\n" +
    "\n" +
    "<p>'<': simple type data<input type=\"text\" name=\"oneInput\" ng-model=\"$ctrl.one\"> One-way binding: this change will not reflect in the parent controler</p>\n" +
    "\n" +
    "<p>'<': obj <input type=\"text\" ng-model=\"$ctrl.four.name\"/> parent controller will reflect the change </p>\n" +
    "\n" +
    "<p>'=': {{$ctrl.two}}\n" +
    "	<input type=\"test\" name=\"twoInput\" ng-model=\"$ctrl.two.name\">\n" +
    "	}\n" +
    "	}\n" +
    "</p>\n" +
    "<p><button ng-click=\"$ctrl.three()\">Three</button></p>\n" +
    "\n" +
    "<p>{{$ctrl.five}}</p>"
  );


  $templateCache.put('demo/component-lifecycle-hooks/index.html',
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "	<head>\n" +
    "		<title>Angular component lifecycle hooks</title>\n" +
    "		<script type=\"text/javascript\" src=\"../../node_modules/angular/angular.min.js\"></script>\n" +
    "		<script type=\"text/javascript\" src=\"script.js\"></script>\n" +
    "	</head>\n" +
    "	<body ng-app=\"componentLifeCycleHooks\">\n" +
    "		<div ng-controller=\"mainCtrl as vm\">\n" +
    "		<button ng-click=\"vm.newTwo()\">make vm.two a new object</button>			\n" +
    "			<my-component one=\"vm.one\" two=\"vm.two\"></my-component>\n" +
    "		</div>\n" +
    "	</body>\n" +
    "</html>"
  );


  $templateCache.put('demo/component-lifecycle-hooks/myComponent.html',
    "<hr/>\n" +
    "<p>{{$ctrl.one}}</p>\n" +
    "<p>{{$ctrl.two}}</p>"
  );


  $templateCache.put('demo/component-modify-data-checking/index.html',
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "	<head>\n" +
    "		<title>Angular Components modification check</title>\n" +
    "		<script type=\"text/javascript\" src=\"../../node_modules/angular/angular.min.js\"></script>\n" +
    "		<script type=\"text/javascript\" src=\"script.js\"></script>\n" +
    "	</head>\n" +
    "	<body ng-app=\"modificationCheckApp\">\n" +
    "		<!-- components match only elements -->\n" +
    "		<div ng-controller=\"Controller as ctrl\">\n" +
    "		In controller\n" +
    "			<p>testData2: '{{ctrl.testData2}}' from modification-check component</p>\n" +
    "			<p>testObj1:{{ctrl.testObj1}}</p>\n" +
    "			<modification-check test-data1=\"ctrl.testData1\" test-obj1=\"ctrl.testObj1\"></modification-check>\n" +
    "		</div>\n" +
    "	</body>\n" +
    "</html>"
  );


  $templateCache.put('demo/component-modify-data-checking/testTemplate.html',
    "<hr/>\n" +
    "Inside component\n" +
    "<br/>\n" +
    "\n" +
    "<p>testData1: {{$ctrl.testData1}}</p>\n" +
    "<p>testData2: {{$ctrl.testData2}}</p>\n" +
    "<p>testObj1: {{$ctrl.testObj1}}</p><button ng-click=\"$ctrl.changeTestObj1()\">change testObj1.name to 'hello',will reflect in the parent controller</button>"
  );


  $templateCache.put('demo/component-require-controller/index.html',
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "	<head>\n" +
    "		<title>Angular Component require controller</title>\n" +
    "		<script type=\"text/javascript\" src=\"../../node_modules/angular/angular.min.js\"></script>\n" +
    "		<script type=\"text/javascript\" src=\"script.js\"></script>\n" +
    "	</head>\n" +
    "	<body ng-app=\"docsTabsExample\">\n" +
    "		<my-tabs>\n" +
    "			<my-pane title=\"Hello\">\n" +
    "				<h4>Hello</h4>\n" +
    "				<p>Lorem ipsum dolor sit amet</p>\n" +
    "			</my-pane>\n" +
    "			<my-pane title=\"World\">\n" +
    "				<h4>World</h4>\n" +
    "				<em>Mauris elementum elementum enim at suscipit.</em>\n" +
    "				<p><a href ng-click=\"i = i + 1\">counter: {{i || 0}}</a></p>\n" +
    "			</my-pane>\n" +
    "		</my-tabs>\n" +
    "	</body>\n" +
    "</html>"
  );


  $templateCache.put('demo/component-require-controller/my-pane.html',
    "<div class=\"tab-pane\" ng-show=\"$ctrl.selected\" ng-transclude></div>"
  );


  $templateCache.put('demo/component-require-controller/my-tabs.html',
    "<div class=\"tabbable\">\n" +
    "	<ul class=\"nav nav-tabs\">\n" +
    "		<li ng-repeat=\"pane in $ctrl.panes\" ng-class=\"{active:pane.selected}\">\n" +
    "			<a href=\"\" ng-click=\"$ctrl.select(pane)\">{{pane.title}}</a>\n" +
    "		</li>\n" +
    "	</ul>\n" +
    "	<div class=\"tab-content\" ng-transclude></div>\n" +
    "</div>"
  );


  $templateCache.put('demo/components/heroDetail.html',
    "<span>Name: {{$ctrl.hero.name}}</span>"
  );


  $templateCache.put('demo/components/index.html',
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "	<head>\n" +
    "		<title>Angular Components</title>\n" +
    "		<script type=\"text/javascript\" src=\"../../node_modules/angular/angular.min.js\"></script>\n" +
    "		<script type=\"text/javascript\" src=\"script.js\"></script>\n" +
    "	</head>\n" +
    "	<body ng-app=\"dataModificationApp\">\n" +
    "		<!-- components match only elements -->\n" +
    "		<div ng-controller=\"mainCtrl as ctrl\">\n" +
    "			<b>Hero</b><br>\n" +
    "			<hero-detail hero=\"ctrl.hero\"></hero-detail>\n" +
    "		</div>\n" +
    "	</body>\n" +
    "</html>"
  );


  $templateCache.put('demo/controller-with-methods/index.html',
    "<!DOCTYPE html>\n" +
    "<html ng-app=\"spicyApp1\">\n" +
    "	<head>\n" +
    "		<title>Controller</title>\n" +
    "		<meta charset=\"utf-8\">\n" +
    "		<link rel=\"stylesheet\" type=\"text/css\" href=\"../style.css\">\n" +
    "		<script type=\"text/javascript\" src=\"../../node_modules/angular/angular.min.js\"></script>\n" +
    "		<script type=\"text/javascript\" src=\"controller.js\"></script>\n" +
    "		<style type=\"text/css\">\n" +
    "			header {\n" +
    "				border-bottom: 1px solid #eee;\n" +
    "				margin-bottom: 20px;\n" +
    "			}\n" +
    "			div.spicy div {\n" +
    "				padding: 10px;\n" +
    "				border: solid 2px blue;\n" +
    "				color: #333;\n" +
    "			}\n" +
    "			.left-side {\n" +
    "				float: left;\n" +
    "			}\n" +
    "			.right-side {\n" +
    "				float: right;\n" +
    "			}\n" +
    "			.left-side, .right-side {\n" +
    "				width: 50%;\n" +
    "			}\n" +
    "			.clear, section {\n" +
    "				clear: both;\n" +
    "			}\n" +
    "		</style>\n" +
    "	</head>\n" +
    "	<body>\n" +
    "		<section>\n" +
    "		<header>1. Controller example</header>\n" +
    "		<div class=\"left-side\">\n" +
    "			<pre>\n" +
    "				js\n" +
    "				------------\n" +
    "				myApp.controller('SpicyController', ['$scope', function($scope) {\n" +
    "				$scope.spice = 'very';\n" +
    "				$scope.chiliSpicy = function() {\n" +
    "				    $scope.spice = 'chili';\n" +
    "				};\n" +
    "				$scope.jalapenoSpicy = function() {\n" +
    "				    $scope.spice = 'jalapeno';\n" +
    "				};\n" +
    "				}]);\n" +
    "			</pre>\n" +
    "		</div>\n" +
    "		<div class=\"right-side\">\n" +
    "			<pre>\n" +
    "				html\n" +
    "				-----------\n" +
    "				&lt;div ng-controller=\"SpicyController\"&gt;\n" +
    "				&lt;button ng-click=\"chiliSpicy()\"&gt;Chili&lt;/button&gt;\n" +
    "				&lt;button ng-click=\"jalapenoSpicy()\"&gt;jalapeno&lt;/button&gt;\n" +
    "				&lt;p&gt;The food is {{spice}} spicy!&lt;/p&gt;\n" +
    "				&lt;/div&gt;\n" +
    "			</pre>\n" +
    "		</div>\n" +
    "		<div class=\"clear\"></div>\n" +
    "		<div ng-controller=\"SpicyController\">\n" +
    "			<button ng-click=\"chiliSpicy()\">Chili</button>\n" +
    "			<button ng-click=\"jalapenoSpicy()\">jalapeno</button>\n" +
    "			<p>The food is {{spice}} spicy!</p>\n" +
    "		</div>\n" +
    "	</section>\n" +
    "	<section>\n" +
    "	<header>2. Methods with arguments</header>\n" +
    "	<div ng-controller=\"SpicyController1\">\n" +
    "		<input ng-model=\"customSpice\">\n" +
    "		<button ng-click=\"spicy('chili')\">Chili</button>\n" +
    "		<button ng-click=\"spicy(customSpice)\">Custom spice</button>\n" +
    "		<p>The food is {{spice1}} spicy!</p>\n" +
    "	</div>\n" +
    "</section>\n" +
    "<section>\n" +
    "<header>3. Scope Inheritance Example</header>\n" +
    "<div class=\"spicy\">\n" +
    "	<div ng-controller=\"MainController\">\n" +
    "		<p>Good {{timeOfDay}}, {{name}}!</p>\n" +
    "		<div ng-controller=\"ChildController\">\n" +
    "			<p>Good {{timeOfDay}}, {{name}}!</p>\n" +
    "			<div ng-controller=\"GrandChildController\">\n" +
    "				<p>Good {{timeOfDay}}, {{name}}!</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "</section>\n" +
    "</body>\n" +
    "</html>"
  );


  $templateCache.put('demo/data-binding-using-Yahoo-Finance-API/index.html',
    "<html>\n" +
    "	<head>\n" +
    "		<title>\n" +
    "		Data Binding In Angular With Controller\n" +
    "		</title>\n" +
    "		<meta charset=\"utf-8\">\n" +
    "		<link rel=\"stylesheet\" type=\"text/css\" href=\"../style.css\">\n" +
    "		<script type=\"text/javascript\" src=\"../../node_modules/angular/angular.min.js\"></script>\n" +
    "		<script type=\"text/javascript\" src=\"finance.js\"></script>\n" +
    "		<script type=\"text/javascript\" src=\"invoice.js\"></script>\n" +
    "		<style type=\"text/css\">\n" +
    "			pre {\n" +
    "				width: 95%;\n" +
    "				overflow: auto;\n" +
    "				margin: 0;\n" +
    "				padding: 0;\n" +
    "			}\n" +
    "			.left-side {\n" +
    "				float: left;\n" +
    "			}\n" +
    "			.right-side {\n" +
    "				float: right;\n" +
    "			}\n" +
    "			.left-side, .right-side {\n" +
    "				width: 50%;\n" +
    "			}\n" +
    "		</style>\n" +
    "	</head>\n" +
    "	<body>\n" +
    "		<div class=\"left-side\">\n" +
    "			  <pre>\n" +
    "				  js:\n" +
    "				  -----------\n" +
    "				  invoice.js\n" +
    "				  angular.module('invoice3', ['finance3'])\n" +
    "				  .controller('InvoiceController', ['currencyConverter', function(currencyConverter) {\n" +
    "				    this.qty = 1;\n" +
    "				    this.cost = 2;\n" +
    "				    this.inCurr = 'EUR';\n" +
    "				    this.currencies = currencyConverter.currencies;\n" +
    "				    this.total = function total(outCurr) {\n" +
    "				      return currencyConverter.convert(this.qty * this.cost, this.inCurr, outCurr);\n" +
    "				    };\n" +
    "				    this.pay = function pay() {\n" +
    "				      window.alert(\"Thanks!\");\n" +
    "				    };\n" +
    "				  }]);\n" +
    "				  finance.js\n" +
    "				  angular.module('finance3', []).factory('currencyConverter', ['$http', function($http) {\n" +
    "				    var YAHOO_FINANCE_URL_PATTERN =\n" +
    "				          '//query.yahooapis.com/v1/public/yql?q=select * from '+\n" +
    "				          'yahoo.finance.xchange where pair in (\"PAIRS\")&format=json&'+\n" +
    "				          'env=store://datatables.org/alltableswithkeys&callback=JSON_CALLBACK';\n" +
    "				    var currencies = ['USD', 'EUR', 'CNY'];\n" +
    "				    var usdToForeignRates = {};\n" +
    "				    var convert = function (amount, inCurr, outCurr) {\n" +
    "				      return amount * usdToForeignRates[outCurr] / usdToForeignRates[inCurr];\n" +
    "				    };\n" +
    "				    var refresh = function() {\n" +
    "				      var url = YAHOO_FINANCE_URL_PATTERN.\n" +
    "				                 replace('PAIRS', 'USD' + currencies.join('\",\"USD'));\n" +
    "				      return $http.jsonp(url).then(function(response) {\n" +
    "				        var newUsdToForeignRates = {};\n" +
    "				        angular.forEach(response.data.query.results.rate, function(rate) {\n" +
    "				          var currency = rate.id.substring(3,6);\n" +
    "				          newUsdToForeignRates[currency] = window.parseFloat(rate.Rate);\n" +
    "				        });\n" +
    "				        usdToForeignRates = newUsdToForeignRates;\n" +
    "				      });\n" +
    "				    };\n" +
    "				    refresh();\n" +
    "				    return {\n" +
    "				      currencies: currencies,\n" +
    "				      convert: convert\n" +
    "				    };\n" +
    "				  }]);\n" +
    "			</pre>\n" +
    "		</div>\n" +
    "		<div class=\"right-side\">\n" +
    "			  <pre>\n" +
    "				  html:\n" +
    "				  --------------\n" +
    "				  &lt;div ng-app=\"invoice3\" ng-controller=\"InvoiceController as invoice\"&gt;\n" +
    "				    &lt;b&gt;Invoice:&lt;/b&gt;\n" +
    "				    &lt;div&gt;\n" +
    "				      Quantity: &lt;input type=\"number\" min=\"0\" ng-model=\"invoice.qty\" required &gt;\n" +
    "				    &lt;/div&gt;\n" +
    "				    &lt;div&gt;\n" +
    "				      Costs: &lt;input type=\"number\" min=\"0\" ng-model=\"invoice.cost\" required &gt;\n" +
    "				      &lt;select ng-model=\"invoice.inCurr\"&gt;\n" +
    "				        &lt;option ng-repeat=\"c in invoice.currencies\"&gt;{{c}}&lt;/option&gt;\n" +
    "				      &lt;/select&gt;\n" +
    "				    &lt;/div&gt;\n" +
    "				    &lt;div&gt;\n" +
    "				      &lt;b&gt;Total:&lt;/b&gt;\n" +
    "				      &lt;span ng-repeat=\"c in invoice.currencies\"&gt;\n" +
    "				        {{invoice.total(c) | currency:c}}\n" +
    "				      &lt;/span&gt;\n" +
    "				      &lt;button class=\"btn\" ng-click=\"invoice.pay()\"&gt;Pay&lt;/button&gt;\n" +
    "				    &lt;/div&gt;\n" +
    "				  &lt;/div&gt;\n" +
    "			</pre>\n" +
    "		</div>\n" +
    "		<div style=\"clear: both;\"></div>\n" +
    "		<hr />\n" +
    "		<div ng-app=\"invoice3\" ng-controller=\"InvoiceController as invoice\">\n" +
    "			<b>Invoice:</b>\n" +
    "			<div>\n" +
    "				Quantity: <input type=\"number\" min=\"0\" ng-model=\"invoice.qty\" required >\n" +
    "			</div>\n" +
    "			<div>\n" +
    "				Costs: <input type=\"number\" min=\"0\" ng-model=\"invoice.cost\" required >\n" +
    "				<select ng-model=\"invoice.inCurr\">\n" +
    "					<option ng-repeat=\"c in invoice.currencies\">{{c}}</option>\n" +
    "				</select>\n" +
    "			</div>\n" +
    "			<div>\n" +
    "				<b>Total:</b>\n" +
    "				<span ng-repeat=\"c in invoice.currencies\">\n" +
    "					{{invoice.total(c) | currency:c}}\n" +
    "				</span>\n" +
    "				<button class=\"btn\" ng-click=\"invoice.pay()\">Pay</button>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<hr />\n" +
    "	</body>\n" +
    "</html>"
  );


  $templateCache.put('demo/data-binding-with-controller-service/index.html',
    "<html>\n" +
    "	<head>\n" +
    "		<title>\n" +
    "			Data Binding In Angular With Controller And Service\n" +
    "		</title>\n" +
    "		<meta charset=\"utf-8\">\n" +
    "		<link rel=\"stylesheet\" type=\"text/css\" href=\"../style.css\">\n" +
    "		<script type=\"text/javascript\" src=\"../../node_modules/angular/angular.min.js\"></script>\n" +
    "		<script type=\"text/javascript\" src=\"finance.js\"></script>\n" +
    "		<script type=\"text/javascript\" src=\"invoice.js\"></script>\n" +
    "		<style type=\"text/css\">\n" +
    "			.left-side {\n" +
    "				float: left;\n" +
    "			}\n" +
    "			.right-side {\n" +
    "				float: right;\n" +
    "			}\n" +
    "			.left-side, .right-side {\n" +
    "				width: 50%;\n" +
    "			}\n" +
    "			.clear {\n" +
    "				clear: both;\n" +
    "			}\n" +
    "		</style>\n" +
    "	</head>\n" +
    "	<body>\n" +
    "		<div class=\"left-side\">\n" +
    "			<pre>\n" +
    "				js\n" +
    "				-----------\n" +
    "				finance.js:\n" +
    "				angular.module('finance2', [])\n" +
    "				.factory('currencyConverter', function() {\n" +
    "				  var currencies = ['USD', 'EUR', 'CNY'];\n" +
    "				  var usdToForeignRates = {\n" +
    "				    USD: 1,\n" +
    "				    EUR: 0.74,\n" +
    "				    CNY: 6.09\n" +
    "				  };\n" +
    "				  var convert = function (amount, inCurr, outCurr) {\n" +
    "				    return amount * usdToForeignRates[outCurr] / usdToForeignRates[inCurr];\n" +
    "				  };\n" +
    "				  return {\n" +
    "				    currencies: currencies,\n" +
    "				    convert: convert\n" +
    "				  };\n" +
    "				});\n" +
    "				invoice.js:\n" +
    "				angular.module('invoice2', ['finance2'])\n" +
    "				.controller('InvoiceController', ['currencyConverter', function(currencyConverter) {\n" +
    "				  this.qty = 1;\n" +
    "				  this.cost = 2;\n" +
    "				  this.inCurr = 'EUR';\n" +
    "				  this.currencies = currencyConverter.currencies;\n" +
    "				  this.total = function total(outCurr) {\n" +
    "				    return currencyConverter.convert(this.qty * this.cost, this.inCurr, outCurr);\n" +
    "				  };\n" +
    "				  this.pay = function pay() {\n" +
    "				    window.alert(\"Thanks!\");\n" +
    "				  };\n" +
    "				}]);\n" +
    "			</pre>\n" +
    "		</div>\n" +
    "		<div class=\"right-side\">\n" +
    "			<pre>\n" +
    "				html\n" +
    "				--------------\n" +
    "				&lt;div ng-app=\"invoice1\" ng-controller=\"InvoiceController as invoice\"&gt;\n" +
    "				  &lt;b&gt;Invoice:&lt;/b&gt;\n" +
    "				  &lt;div&gt;\n" +
    "				    Quantity: &lt;input type=\"number\" min=\"0\" ng-model=\"invoice.qty\" required &gt;\n" +
    "				  &lt;/div&gt;\n" +
    "				  &lt;div&gt;\n" +
    "				    Costs: &lt;input type=\"number\" min=\"0\" ng-model=\"invoice.cost\" required &gt;\n" +
    "				    &lt;select ng-model=\"invoice.inCurr\"&gt;\n" +
    "				      &lt;option ng-repeat=\"c in invoice.currencies\"&gt;{{c}}&lt;/option&gt;\n" +
    "				    &lt;/select&gt;\n" +
    "				  &lt;/div&gt;\n" +
    "				  &lt;div&gt;\n" +
    "				    &lt;b&gt;Total:&lt;/b&gt;\n" +
    "				    &lt;span ng-repeat=\"c in invoice.currencies\"&gt;\n" +
    "				      {{invoice.total(c) | currency:c}}\n" +
    "				    &lt;/span&gt;&lt;br&gt;\n" +
    "				    &lt;button class=\"btn\" ng-click=\"invoice.pay()\"&gt;Pay&lt;/button&gt;\n" +
    "				  &lt;/div&gt;\n" +
    "				&lt;/div&gt;\n" +
    "			</pre>\n" +
    "		</div>\n" +
    "		<div class=\"clear\"></div>\n" +
    "		<hr />\n" +
    "		<div ng-app=\"invoice2\" ng-controller=\"InvoiceController as invoice\">\n" +
    "			<b>Invoice:</b>\n" +
    "			<div>\n" +
    "				Quantity: <input type=\"number\" min=\"0\" ng-model=\"invoice.qty\" required >\n" +
    "			</div>\n" +
    "			<div>\n" +
    "				Costs: <input type=\"number\" min=\"0\" ng-model=\"invoice.cost\" required >\n" +
    "				<select ng-model=\"invoice.inCurr\">\n" +
    "					<option ng-repeat=\"c in invoice.currencies\">{{c}}</option>\n" +
    "				</select>\n" +
    "			</div>\n" +
    "			<div>\n" +
    "				<b>Total:</b>\n" +
    "				<span ng-repeat=\"c in invoice.currencies\">\n" +
    "					{{invoice.total(c) | currency:c}}\n" +
    "				</span>\n" +
    "				<button class=\"btn\" ng-click=\"invoice.pay()\">Pay</button>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<hr />\n" +
    "	</body>\n" +
    "</html>"
  );


  $templateCache.put('demo/data-binding-with-controller/index.html',
    "<html>\n" +
    "	<head>\n" +
    "		<title>\n" +
    "		Data Binding In Angular With Controller\n" +
    "		</title>\n" +
    "		<meta charset=\"utf-8\">\n" +
    "		<link rel=\"stylesheet\" type=\"text/css\" href=\"../style.css\">\n" +
    "		<script type=\"text/javascript\" src=\"../../node_modules/angular/angular.min.js\"></script>\n" +
    "		<script type=\"text/javascript\" src=\"invoice.js\"></script>\n" +
    "		<style type=\"text/css\">\n" +
    "			.left-side {\n" +
    "				float: left;\n" +
    "			}\n" +
    "			.right-side {\n" +
    "				float: right;\n" +
    "			}\n" +
    "			.left-side, .right-side {\n" +
    "				width: 50%;\n" +
    "			}\n" +
    "		</style>\n" +
    "	</head>\n" +
    "	<body>\n" +
    "		<div class=\"left-side\">\n" +
    "			<pre>\n" +
    "				js:\n" +
    "				-----------\n" +
    "				angular.module('invoice1', [])\n" +
    "				      .controller('InvoiceController', function InvoiceController() {\n" +
    "				        this.qty = 1;\n" +
    "				        this.cost = 2;\n" +
    "				        this.inCurr = 'EUR';\n" +
    "				        this.currencies = ['USD', 'EUR', 'CNY'];\n" +
    "				        this.usdToForeignRates = {\n" +
    "				          USD: 1,\n" +
    "				          EUR: 0.74,\n" +
    "				          CNY: 6.09\n" +
    "				        };\n" +
    "				        this.total = function total(outCurr) {\n" +
    "				          return this.convertCurrency(this.qty * this.cost, this.inCurr, outCurr);\n" +
    "				        };\n" +
    "				        this.convertCurrency = function convertCurrency(amount, inCurr, outCurr) {\n" +
    "				          return amount * this.usdToForeignRates[outCurr]\n" +
    "				          / this.usdToForeignRates[inCurr];\n" +
    "				        };\n" +
    "				        this.pay = function pay() {\n" +
    "				          window.alert('Thanks!');\n" +
    "				        };\n" +
    "				      });\n" +
    "			</pre>\n" +
    "		</div>\n" +
    "		<div class=\"right-side\">\n" +
    "			<pre>\n" +
    "				html:\n" +
    "				--------------\n" +
    "				&lt;div ng-app=\"invoice1\" ng-controller=\"InvoiceController as invoice\"&gt;\n" +
    "				  &lt;b&gt;Invoice:&lt;/b&gt;\n" +
    "				  &lt;div&gt;\n" +
    "				    Quantity: &lt;input type=\"number\" min=\"0\" ng-model=\"invoice.qty\" required &gt;\n" +
    "				  &lt;/div&gt;\n" +
    "				  &lt;div&gt;\n" +
    "				    Costs: &lt;input type=\"number\" min=\"0\" ng-model=\"invoice.cost\" required &gt;\n" +
    "				    &lt;select ng-model=\"invoice.inCurr\"&gt;\n" +
    "				      &lt;option ng-repeat=\"c in invoice.currencies\"&gt;{{c}}&lt;/option&gt;\n" +
    "				    &lt;/select&gt;\n" +
    "				  &lt;/div&gt;\n" +
    "				  &lt;div&gt;\n" +
    "				    &lt;b&gt;Total:&lt;/b&gt;\n" +
    "				    &lt;span ng-repeat=\"c in invoice.currencies\"&gt;\n" +
    "				      {{invoice.total(c) | currency:c}}\n" +
    "				    &lt;/span&gt;&lt;br&gt;\n" +
    "				    &lt;button class=\"btn\" ng-click=\"invoice.pay()\"&gt;Pay&lt;/button&gt;\n" +
    "				  &lt;/div&gt;\n" +
    "				&lt;/div&gt;\n" +
    "			</pre>\n" +
    "		</div>\n" +
    "		<div style=\"clear: both;\"></div>\n" +
    "		<hr />\n" +
    "		<div ng-app=\"invoice1\" ng-controller=\"InvoiceController as invoice\">\n" +
    "			<b>Invoice:</b>\n" +
    "			<div>\n" +
    "				Quantity: <input type=\"number\" min=\"0\" ng-model=\"invoice.qty\" required >\n" +
    "			</div>\n" +
    "			<div>\n" +
    "				Costs: <input type=\"number\" min=\"0\" ng-model=\"invoice.cost\" required >\n" +
    "				<select ng-model=\"invoice.inCurr\">\n" +
    "					<option ng-repeat=\"c in invoice.currencies\">{{c}}</option>\n" +
    "				</select>\n" +
    "			</div>\n" +
    "			<div>\n" +
    "				<b>Total:</b>\n" +
    "				<span ng-repeat=\"c in invoice.currencies\">\n" +
    "					{{invoice.total(c) | currency:c}}\n" +
    "				</span><br>\n" +
    "				<button class=\"btn\" ng-click=\"invoice.pay()\">Pay</button>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<hr />\n" +
    "		Note: The purpose of controllers is to expose variables and functionality to expressions and directives.\n" +
    "	</body>\n" +
    "</html>"
  );


  $templateCache.put('demo/data-binding/index.html',
    "<html>\n" +
    "	<head>\n" +
    "		<title>\n" +
    "		Data Binding In Angular\n" +
    "		</title>\n" +
    "		<meta charset=\"utf-8\">\n" +
    "		<link rel=\"stylesheet\" type=\"text/css\" href=\"../style.css\">\n" +
    "		<script type=\"text/javascript\" src=\"../../node_modules/angular/angular.min.js\"></script>\n" +
    "	</head>\n" +
    "	<body>\n" +
    "		<div ng-app ng-init=\"qty=1;cost=2\">\n" +
    "			<b>Invoice:</b>\n" +
    "			<div>\n" +
    "				Quantity: <input type=\"number\" min=\"0\" ng-model=\"qty\">\n" +
    "			</div>\n" +
    "			<div>\n" +
    "				Costs: <input type=\"number\" min=\"0\" ng-model=\"cost\">\n" +
    "			</div>\n" +
    "			<div>\n" +
    "				\n" +
    "				<b>Total:</b> {{qty * cost | currency}}\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</body>\n" +
    "</html>"
  );


  $templateCache.put('demo/denpendency-injection/index.html',
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "	<head>\n" +
    "		<title>Dependency Injection</title>\n" +
    "		<meta charset=\"utf-8\">\n" +
    "		<link rel=\"stylesheet\" type=\"text/css\" href=\"../style.css\">\n" +
    "		<script type=\"text/javascript\" src=\"../../node_modules/angular/angular.min.js\"></script>\n" +
    "		<style type=\"text/css\">\n" +
    "			pre{\n" +
    "				background-color: #f8f8f8;\n" +
    "			}\n" +
    "		</style>\n" +
    "	</head>\n" +
    "	<body>\n" +
    "		1. Recommended way of declaring factories:\n" +
    "		<pre>\n" +
    "			angular.module('myModule', [])\n" +
    "			.factory('serviceId', ['depService', function(depService) {\n" +
    "			  // ...\n" +
    "			}])\n" +
    "			.directive('directiveName', ['depService', function(depService) {\n" +
    "			  // ...\n" +
    "			}])\n" +
    "			.filter('filterName', ['depService', function(depService) {\n" +
    "			  // ...\n" +
    "			}]);\n" +
    "		</pre>\n" +
    "		\n" +
    "		2. We can specify functions to run at configuration and run time for a module by calling the config and run methods. These functions are injectable with dependencies just like the factory functions above.\n" +
    "		<pre>\n" +
    "			angular.module('myModule', [])\n" +
    "			.config(['depProvider', function(depProvider) {\n" +
    "			  // ...\n" +
    "			}])\n" +
    "			.run(['depService', function(depService) {\n" +
    "			  // ...\n" +
    "			}]);\n" +
    "		</pre>\n" +
    "		\n" +
    "		3. Recommended way of declaring controllers:\n" +
    "		<pre>\n" +
    "			someModule.controller('MyController', ['$scope', 'dep1', 'dep2', function($scope, dep1, dep2) {\n" +
    "			  ...\n" +
    "			  $scope.aMethod = function() {\n" +
    "			    ...\n" +
    "			  }\n" +
    "			  ...\n" +
    "			}]);\n" +
    "		</pre>\n" +
    "		4. Dependency Annotation\n" +
    "		<br />\n" +
    "		--4.1 Inline Array Annotation\n" +
    "		<pre>\n" +
    "			someModule.controller('MyController', ['$scope', 'greeter', function($scope, greeter) {\n" +
    "			  // ...\n" +
    "			}]);\n" +
    "		</pre>\n" +
    "		--4.2 $inject Property Annotation\n" +
    "		<pre>\n" +
    "			var MyController = function($scope, greeter) {\n" +
    "			  // ...\n" +
    "			}\n" +
    "			MyController.$inject = ['$scope', 'greeter'];\n" +
    "			someModule.controller('MyController', MyController);\n" +
    "		</pre>\n" +
    "		--4.2 Implicit Annotation\n" +
    "		<pre>\n" +
    "			//The simplest way to get hold of the dependencies is to assume that the function parameter names are the names of the dependencies.\n" +
    "			someModule.controller('MyController', function($scope, greeter) {\n" +
    "			  // ...\n" +
    "			});\n" +
    "			//Note: Careful-If you plan to minify your code, your service names will get renamed and break your app.\n" +
    "		</pre>\n" +
    "		5. Using Strict Dependency Injection\n" +
    "		You can add an ng-strict-di directive on the same element as ng-app to opt into strict DI mode:\n" +
    "		<pre>\n" +
    "		&lt;!doctype html&gt;\n" +
    "		&lt;html ng-app=\"myApp\" ng-strict-di&gt;\n" +
    "			&lt;body&gt;\n" +
    "				I can add: {{ 1 + 2 }}.\n" +
    "				&lt;script src=\"angular.js\"&gt;&lt;/script&gt;\n" +
    "			&lt;/body&gt;\n" +
    "		&lt;/html&gt;\n" +
    "		</pre>\n" +
    "		Strict mode throws an error whenever a service tries to use implicit annotations.\n" +
    "		Consider this module, which includes a willBreak service that uses implicit DI:\n" +
    "		<pre>\n" +
    "			angular.module('myApp', [])\n" +
    "			.factory('willBreak', function($rootScope) {\n" +
    "			  // $rootScope is implicitly injected\n" +
    "			})\n" +
    "			.run(['willBreak', function(willBreak) {\n" +
    "			  // Angular will throw when this runs\n" +
    "			}]);\n" +
    "		</pre>\n" +
    "\n" +
    "		You can also use strict DI by providing: strictDi: true when manully boostrapping.\n" +
    "		<pre>\n" +
    "			angular.bootstrap(document, ['myApp'], {\n" +
    "				strictDi: true\n" +
    "			});\n" +
    "		</pre>\n" +
    "\n" +
    "		\n" +
    "	</body>\n" +
    "</html>"
  );


  $templateCache.put('demo/directive-combination/index.html',
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "	<head>\n" +
    "		<title>Angular Directive Combinations</title>\n" +
    "		<script type=\"text/javascript\" src=\"../../node_modules/angular/angular.min.js\"></script>\n" +
    "		<script type=\"text/javascript\" src=\"script.js\"></script>\n" +
    "	</head>\n" +
    "	<body ng-app=\"docsTabsExample\">\n" +
    "		<my-tabs>\n" +
    "			<my-pane title=\"Hello\">\n" +
    "				<p>Lorem ipsum dolor sit amet</p>\n" +
    "			</my-pane>\n" +
    "			<my-pane title=\"World\">\n" +
    "				<em>Mauris elementum elementum enim at suscipit.</em>\n" +
    "				<p><a href ng-click=\"i = i + 1\">counter: {{i || 0}}</a></p>\n" +
    "			</my-pane>\n" +
    "		</my-tabs>\n" +
    "	</body>\n" +
    "</html>"
  );


  $templateCache.put('demo/directive-combination/my-panel.html',
    "<div class=\"tab-pane\" ng-show=\"selected\">\n" +
    "	<h4>{{title}}</h4>\n" +
    "	<div ng-transclude></div>\n" +
    "</div>"
  );


  $templateCache.put('demo/directive-combination/my-tabs.html',
    "<div class=\"tabbable\">\n" +
    "	<ul class=\"nav nav-tabs\">\n" +
    "		<li ng-repeat=\"pane in panes\" ng-class=\"{active:pane.selected}\">\n" +
    "			<a href=\"\" ng-click=\"select(pane)\">{{pane.title}}</a>\n" +
    "		</li>\n" +
    "	</ul>\n" +
    "	<div class=\"tab-content\" ng-transclude></div>\n" +
    "</div>"
  );


  $templateCache.put('demo/directive-modifying-dom/index.html',
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "	<head>\n" +
    "		<title>Angular Directive: modifying dom</title>\n" +
    "		<script type=\"text/javascript\" src=\"../../node_modules/angular/angular.min.js\"></script>\n" +
    "		<script type=\"text/javascript\" src=\"script.js\"></script>\n" +
    "	</head>\n" +
    "	<body ng-app=\"docsTimeDirective\">\n" +
    "		<div ng-controller=\"Controller\">\n" +
    "			Date format: <input ng-model=\"format\"> <hr/>\n" +
    "			Current time is: <span my-current-time=\"format\"></span>\n" +
    "		</div>\n" +
    "	</body>\n" +
    "</html>"
  );


  $templateCache.put('demo/directive-normalization/index.html',
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "	<head>\n" +
    "		<title>Angular Directive Normalization</title>\n" +
    "		<meta charset=\"utf-8\">\n" +
    "		<script type=\"text/javascript\" src=\"../../node_modules/angular/angular.min.js\"></script>\n" +
    "		<script type=\"text/javascript\">\n" +
    "			angular.module('docsBindExample', [])\n" +
    "				.controller('Controller', ['$scope', function($scope) {\n" +
    "					$scope.name = 'Max Karl Ernst Ludwig Planck (April 23, 1858 – October 4, 1947)';\n" +
    "			}]);\n" +
    "		</script>\n" +
    "	</head>\n" +
    "	<body ng-app=\"docsBindExample\">\n" +
    "		<div ng-controller=\"Controller\">\n" +
    "			Hello <input ng-model='name'> <hr/>\n" +
    "			<span ng-bind=\"name\"></span> <br/>\n" +
    "			<span ng:bind=\"name\"></span> <br/>\n" +
    "			<span ng_bind=\"name\"></span> <br/>\n" +
    "			<span data-ng-bind=\"name\"></span> <br/>\n" +
    "			<span x-ng-bind=\"name\"></span> <br/>\n" +
    "		</div>\n" +
    "	</body>\n" +
    "</html>"
  );


  $templateCache.put('demo/directive-require/customize-directive.html',
    "\n" +
    "\n" +
    "Name: {{vm.name}}"
  );


  $templateCache.put('demo/directive-require/first-controller.html',
    "Name: {{FirstControllerVm.name}}\n" +
    "\n" +
    "<br />\n" +
    "<customize-directive></customize-directive>"
  );


  $templateCache.put('demo/directive-require/index.html',
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "	<head>\n" +
    "		<title>Angular Directive: require controller</title>\n" +
    "		<script type=\"text/javascript\" src=\"../../node_modules/angular/angular.min.js\"></script>\n" +
    "		<script type=\"text/javascript\" src=\"script.js\"></script>\n" +
    "	</head>\n" +
    "	<body ng-app=\"DirectiveRequireExample\">\n" +
    "		<first-controller></first-controller>\n" +
    "\n" +
    "		<hr />\n" +
    "\n" +
    "		<div ng-controller=\"SecondController as vm\">\n" +
    "			Name: {{vm.name}}\n" +
    "		</div>\n" +
    "	</body>\n" +
    "</html>"
  );


  $templateCache.put('demo/directive-reuse-without-isolate-scope/index.html',
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "	<head>\n" +
    "		<title>Angular Directive: need repeat when directive doesn't use isolate scope</title>\n" +
    "		<script type=\"text/javascript\" src=\"../../node_modules/angular/angular.min.js\"></script>\n" +
    "		<script type=\"text/javascript\" src=\"script.js\"></script>\n" +
    "	</head>\n" +
    "	<body ng-app=\"docsScopeProblemExample\">\n" +
    "		<h4>Angular Directive: need repeat when directive doesn't use isolate scope</h4>\n" +
    "		<hr>\n" +
    "		\"NaomiController\"\n" +
    "		<div ng-controller=\"NaomiController\">\n" +
    "			<my-customer></my-customer>\n" +
    "		</div>\n" +
    "		<hr>\n" +
    "		\"IgorController\"\n" +
    "		<div ng-controller=\"IgorController\">\n" +
    "			<my-customer></my-customer>\n" +
    "		</div>\n" +
    "	</body>\n" +
    "</html>"
  );


  $templateCache.put('demo/directive-reuse-without-isolate-scope/my-customer.html',
    "Name: {{customer.name}} Address: {{customer.address}}"
  );


  $templateCache.put('demo/directive-using-isolate-scope/index.html',
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "	<head>\n" +
    "		<title>Angular Directive using isolate scope</title>\n" +
    "		<script type=\"text/javascript\" src=\"../../node_modules/angular/angular.min.js\"></script>\n" +
    "		<script type=\"text/javascript\" src=\"script.js\"></script>\n" +
    "	</head>\n" +
    "	<body ng-app=\"docsIsolateScopeDirective\">\n" +
    "		<div ng-controller=\"Controller\">\n" +
    "			<my-customer info=\"naomi\"></my-customer>\n" +
    "			<hr>\n" +
    "			<my-customer info=\"igor\"></my-customer>\n" +
    "			<hr/>\n" +
    "			As the name suggests, the isolate scope of the directive isolates everything except models that you've explicitly added to the scope: {} hash object.\n" +
    "\n" +
    "			<my-customer></my-customer>\n" +
    "\n" +
    "			<br/>\n" +
    "			Note: Normally, a scope prototypically inherits from its parent. An isolated scope does not. See the \"Directive Definition Object - scope\" section for more information about isolate scopes.\n" +
    "\n" +
    "		</div>\n" +
    "	</body>\n" +
    "</html>"
  );


  $templateCache.put('demo/directive-using-isolate-scope/my-customer-iso.html',
    "Name: {{customerInfo.name}} Address: {{customerInfo.address}}"
  );


  $templateCache.put('demo/directive-using-restrict-E/index.html',
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "	<head>\n" +
    "		<title>Angular Directive using restrict:'E'</title>\n" +
    "		<script type=\"text/javascript\" src=\"../../node_modules/angular/angular.min.js\"></script>\n" +
    "		<script type=\"text/javascript\" src=\"script.js\"></script>\n" +
    "	</head>\n" +
    "	<body ng-app=\"docsRestrictDirective\" ng-controller=\"Controller\">\n" +
    "		\n" +
    "		using restrict:'E'\n" +
    "		<div>\n" +
    "			<my-customer></my-customer>\n" +
    "		</div>\n" +
    "\n" +
    "		<hr>\n" +
    "\n" +
    "		using restrict:'A'\n" +
    "		<div my-customer></div>\n" +
    "\n" +
    "		<hr>\n" +
    "\n" +
    "		When should I use an attribute versus an element? Use an element when you are creating a component that is in control of the template. The common case for this is when you are creating a Domain-Specific Language for parts of your template. Use an attribute when you are decorating an existing element with new functionality.\n" +
    "\n" +
    "		<br />\n" +
    "\n" +
    "		Using an element for the myCustomer directive is clearly the right choice because you're not decorating an element with some \"customer\" behavior; you're defining the core behavior of the element as a customer component.\n" +
    "		\n" +
    "	</body>\n" +
    "</html>"
  );


  $templateCache.put('demo/directive-using-restrict-E/my-customer.html',
    "Name: {{customer.name}} Address: {{customer.address}}"
  );


  $templateCache.put('demo/directive-using-template/index.html',
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "	<head>\n" +
    "		<title>Angular Directive with Template</title>\n" +
    "		<meta charset=\"utf-8\">\n" +
    "		<script type=\"text/javascript\" src=\"../../node_modules/angular/angular.min.js\"></script>\n" +
    "		<script type=\"text/javascript\" src=\"script.js\"></script>\n" +
    "	</head>\n" +
    "	<body ng-app=\"docsSimpleDirective\">\n" +
    "		<div ng-controller=\"Controller\">\n" +
    "			<div my-customer></div>\n" +
    "		</div>\n" +
    "	</body>\n" +
    "</html>"
  );


  $templateCache.put('demo/directive-using-templateUrl-function/customer-address.html',
    "Address: {{customer.address}}"
  );


  $templateCache.put('demo/directive-using-templateUrl-function/customer-name.html',
    "Name: {{customer.name}}"
  );


  $templateCache.put('demo/directive-using-templateUrl-function/index.html',
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "	<head>\n" +
    "		<title>Angular Directive using templateUrl function</title>\n" +
    "		<script type=\"text/javascript\" src=\"../../node_modules/angular/angular.min.js\"></script>\n" +
    "		<script type=\"text/javascript\" src=\"script.js\"></script>\n" +
    "	</head>\n" +
    "	<body ng-app=\"docsTemplateUrlDirective\">\n" +
    "		<div ng-controller=\"Controller\">\n" +
    "			<div my-customer type=\"name\"></div>\n" +
    "			<div my-customer type=\"address\"></div>\n" +
    "		</div>\n" +
    "	</body>\n" +
    "</html>"
  );


  $templateCache.put('demo/directive-using-templateUrl/index.html',
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "	<head>\n" +
    "		<title>Angular Directive using templateUrl</title>\n" +
    "		<script type=\"text/javascript\" src=\"../../node_modules/angular/angular.min.js\"></script>\n" +
    "		<script type=\"text/javascript\" src=\"script.js\"></script>\n" +
    "	</head>\n" +
    "	<body ng-app=\"docsTemplateUrlDirective\">\n" +
    "		<div ng-controller=\"Controller\">\n" +
    "			<div my-customer></div>\n" +
    "		</div>\n" +
    "	</body>\n" +
    "</html>"
  );


  $templateCache.put('demo/directive-using-templateUrl/my-customer.html',
    "Name: {{customer.name}} Address: {{customer.address}}"
  );


  $templateCache.put('demo/directive-using-transclude-parsing-functions/index.html',
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "	<head>\n" +
    "		<title>Angular Directive Using transclude and parse functions</title>\n" +
    "		<script type=\"text/javascript\" src=\"../../node_modules/angular/angular.min.js\"></script>\n" +
    "		<script type=\"text/javascript\" src=\"script.js\"></script>\n" +
    "	</head>\n" +
    "	<body ng-app=\"docsIsoFnBindExample\">\n" +
    "		<div ng-controller=\"Controller\">\n" +
    "			{{message}}\n" +
    "			<my-dialog ng-hide=\"dialogIsHidden\" on-close=\"hideDialog(message)\">\n" +
    "			Check out the contents, {{name}}!\n" +
    "			</my-dialog>\n" +
    "		</div>\n" +
    "	</body>\n" +
    "</html>"
  );


  $templateCache.put('demo/directive-using-transclude-parsing-functions/my-dialog-close.html',
    "<div class=\"alert\">\n" +
    "  <a href class=\"close\" ng-click=\"close({message: 'closing for now'})\">&times;</a>\n" +
    "  <div ng-transclude></div>\n" +
    "</div>"
  );


  $templateCache.put('demo/directive-using-transclude/index.html',
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "	<head>\n" +
    "		<title>Angular Directive Using transclude:true</title>\n" +
    "		<script type=\"text/javascript\" src=\"../../node_modules/angular/angular.min.js\"></script>\n" +
    "		<script type=\"text/javascript\" src=\"script.js\"></script>\n" +
    "	</head>\n" +
    "	<body ng-app=\"docsTransclusionDirective\">\n" +
    "		<div ng-controller=\"Controller\">\n" +
    "			<my-dialog>Check out the contents, {{name}}!</my-dialog>\n" +
    "		</div>\n" +
    "\n" +
    "\n" +
    "		<hr/>\n" +
    "		What does this transclude option do, exactly? transclude makes the contents of a directive with this option have access to the scope outside of the directive rather than inside.\n" +
    "\n" +
    "		<hr />\n" +
    "		The transclude option changes the way scopes are nested. It makes it so that the contents of a transcluded directive have whatever scope is outside the directive, rather than whatever scope is on the inside. In doing so, it gives the contents access to the outside scope.		\n" +
    "	</body>\n" +
    "</html>"
  );


  $templateCache.put('demo/directive-using-transclude/my-dialog.html',
    "<div class=\"alert\" ng-transclude></div>"
  );


  $templateCache.put('demo/directive-with-event-listeners/index.html',
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "	<head>\n" +
    "		<title>Angular Directive with event listeners</title>\n" +
    "		<script type=\"text/javascript\" src=\"../../node_modules/angular/angular.min.js\"></script>\n" +
    "		<script type=\"text/javascript\" src=\"script.js\"></script>\n" +
    "	</head>\n" +
    "	<body ng-app=\"dragModule\">\n" +
    "		<span my-draggable>Drag Me</span>\n" +
    "	</body>\n" +
    "</html>"
  );


  $templateCache.put('demo/directive/index.html',
    "<!DOCTYPE html>\n" +
    "<html ng-app=\"directiveApp\">\n" +
    "	<head>\n" +
    "		<title>Angular Directive</title>\n" +
    "		<script type=\"text/javascript\" src=\"../../node_modules/angular/angular.min.js\"></script>\n" +
    "		<script type=\"text/javascript\">\n" +
    "			angular.module('directiveApp', []).directive('directiveExample', directiveExample);\n" +
    "			function directiveExample() {\n" +
    "				return {\n" +
    "					restrict: 'E',\n" +
    "					template: 'I am a directive'\n" +
    "				};\n" +
    "			}\n" +
    "		</script>\n" +
    "	</head>\n" +
    "	<body>\n" +
    "		<directive-example></directive-example>\n" +
    "	</body>\n" +
    "</html>"
  );


  $templateCache.put('demo/expressions-context/index.html',
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "	<head>\n" +
    "		<title>Angular Expression Context</title>\n" +
    "		<meta charset=\"utf-8\">\n" +
    "		<link rel=\"stylesheet\" type=\"text/css\" href=\"../style.css\">\n" +
    "		<script type=\"text/javascript\" src=\"../../node_modules/angular/angular.min.js\"></script>\n" +
    "		<script type=\"text/javascript\" src=\"script.js\"></script>\n" +
    "	</head>\n" +
    "	<body>\n" +
    "		<div class=\"example2\" ng-app=\"expressionExample\" ng-controller=\"ExampleController\">\n" +
    "			Name: <input ng-model=\"name\" type=\"text\"/>\n" +
    "			<button ng-click=\"greet()\">Greet</button>\n" +
    "			<button ng-click=\"window.alert('Should not see me')\">Won't greet</button>\n" +
    "		</div>\n" +
    "	</body>\n" +
    "</html>"
  );


  $templateCache.put('demo/expressions-event/index.html',
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "	<head>\n" +
    "		<title>Angular Expression Context</title>\n" +
    "		<meta charset=\"utf-8\">\n" +
    "		<link rel=\"stylesheet\" type=\"text/css\" href=\"../style.css\">\n" +
    "		<script type=\"text/javascript\" src=\"../../node_modules/angular/angular.min.js\"></script>\n" +
    "		<script type=\"text/javascript\" src=\"script.js\"></script>\n" +
    "	</head>\n" +
    "	<body>\n" +
    "		<div ng-app=\"eventExampleApp\" ng-controller=\"EventController\">\n" +
    "			<button ng-click=\"clickMe($event)\">Event</button>\n" +
    "			<p><code>$event</code>: <pre> {{$event | json}}</pre></p>\n" +
    "			<p><code>clickEvent</code>: <pre>{{clickEvent | json}}</pre></p>\n" +
    "		</div>\n" +
    "	</body>\n" +
    "</html>"
  );


  $templateCache.put('demo/expressions-one-time-binding/index.html',
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "	<head>\n" +
    "		<title>Angular Expression Context</title>\n" +
    "		<meta charset=\"utf-8\">\n" +
    "		<link rel=\"stylesheet\" type=\"text/css\" href=\"../style.css\">\n" +
    "		<script type=\"text/javascript\" src=\"../../node_modules/angular/angular.min.js\"></script>\n" +
    "		<script type=\"text/javascript\" src=\"script.js\"></script>\n" +
    "	</head>\n" +
    "	<body>\n" +
    "		<div ng-app=\"oneTimeBidingExampleApp\" ng-controller=\"EventController\">\n" +
    "			<button ng-click=\"clickMe($event)\">Click Me</button>\n" +
    "			<p id=\"one-time-binding-example\">One time binding: {{::name}}</p>\n" +
    "			<p id=\"normal-binding-example\">Normal binding: {{name}}</p>\n" +
    "		</div>\n" +
    "		<hr />\n" +
    "		<p>\n" +
    "			<b>One-time binding expressions will retain the value of the expression at the end of the digest cycle as long as that value is not undefined.\n" +
    "			If the value of the expression is set within the digest loop and later, within the same digest loop, it is set to undefined, then the expression is not fulfilled and will remain watched.</b>\n" +
    "			<br />\n" +
    "			- Given an expression that starts with ::, when a digest loop is entered and expression is dirty-checked, store the value as V\n" +
    "			<br />\n" +
    "			- If V is not undefined, mark the result of the expression as stable and schedule a task to deregister the watch for this expression when we exit the digest loop\n" +
    "			<br />\n" +
    "			- Process the digest loop as normal\n" +
    "			<br />\n" +
    "			- When digest loop is done and all the values have settled, process the queue of watch deregistration tasks.\n" +
    "			For each watch to be deregistered, check if it still evaluates to a value that is not undefined.\n" +
    "			If that's the case, deregister the watch. Otherwise, keep dirty-checking the watch in the future digest loops by following the same algorithm starting from step 1\n" +
    "		</p>\n" +
    "	</body>\n" +
    "</html>"
  );


  $templateCache.put('demo/expressions/index.html',
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "	<head>\n" +
    "		<title>Angular Expressions</title>\n" +
    "		<meta charset=\"utf-8\">\n" +
    "		<link rel=\"stylesheet\" type=\"text/css\" href=\"../style.css\">\n" +
    "		<script type=\"text/javascript\" src=\"../../node_modules/angular/angular.min.js\"></script>\n" +
    "		<script type=\"text/javascript\">\n" +
    "		</script>\n" +
    "	</head>\n" +
    "	<body>\n" +
    "		<h2>Angular Expressions vs. JavaScript Expressions</h2>\n" +
    "\n" +
    "		<pre>\n" +
    "			Angular expressions are like JavaScript expressions with the following differences:\n" +
    "			- Context: JavaScript expressions are evaluated against the global window. In Angular, expressions are evaluated against a scope object.\n" +
    "			- Forgiving: In JavaScript, trying to evaluate undefined properties generates ReferenceError or TypeError. In Angular, expression evaluation is forgiving to undefined and null.\n" +
    "			- Filters: You can use filters within expressions to format data before displaying it.\n" +
    "			- No Control Flow Statements: You cannot use the following in an Angular expression: conditionals, loops, or exceptions.\n" +
    "			- No Function Declarations: You cannot declare functions in an Angular expression, even inside ng-init directive.\n" +
    "			- No RegExp Creation With Literal Notation: You cannot create regular expressions in an Angular expression.\n" +
    "			- No Object Creation With New Operator: You cannot use new operator in an Angular expression.\n" +
    "			- No Bitwise, Comma, And Void Operators: You cannot use Bitwise, , or void operators in an Angular expression.\n" +
    "			- If you want to run more complex JavaScript code, you should make it a controller method and call the method from your view. If you want to eval() an Angular expression yourself, use the $eval() method.\n" +
    "		</pre>\n" +
    "	</body>\n" +
    "</html>"
  );


  $templateCache.put('demo/filter/index.html',
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "	<head>\n" +
    "		<title>Angular Stateful Filter</title>\n" +
    "		<meta charset=\"utf-8\">\n" +
    "		<script type=\"text/javascript\" src=\"../../node_modules/angular/angular.min.js\"></script>\n" +
    "		<script type=\"text/javascript\" src=\"script.js\"></script>\n" +
    "	</head>\n" +
    "	<body ng-app=\"myStatefulFilterApp\">\n" +
    "		<div ng-controller=\"MyController\">\n" +
    "			Input: <input ng-model=\"greeting\" type=\"text\"><br>\n" +
    "			Decoration: <input ng-model=\"decoration.symbol\" type=\"text\"><br>\n" +
    "			No filter: {{greeting}}<br>\n" +
    "			Decorated: {{greeting | decorate}}<br>\n" +
    "		</div>\n" +
    "	</body>\n" +
    "</html>"
  );


  $templateCache.put('demo/filterReverse/index.html',
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "	<head>\n" +
    "		<title>Angular Filter Reverse and Upper-case</title>\n" +
    "		<meta charset=\"utf-8\">\n" +
    "		<script type=\"text/javascript\" src=\"../../node_modules/angular/angular.min.js\"></script>\n" +
    "		<script type=\"text/javascript\" src=\"script.js\"></script>\n" +
    "	</head>\n" +
    "	<body ng-app=\"myReverseFilterApp\">\n" +
    "		<div ng-controller=\"MyController\">\n" +
    "			<input ng-model=\"greeting\" type=\"text\"><br>\n" +
    "			No filter: {{greeting}}<br>\n" +
    "			Reverse: {{greeting|reverse}}<br>\n" +
    "			Reverse + uppercase: {{greeting|reverse:true}}<br>\n" +
    "			Reverse, filtered in controller: {{filteredGreeting}}<br>\n" +
    "		</div>\n" +
    "	</body>\n" +
    "</html>"
  );


  $templateCache.put('demo/filterStateful/index.html',
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "	<head>\n" +
    "		<title>Angular Filter Reverse and Upper-case</title>\n" +
    "		<meta charset=\"utf-8\">\n" +
    "		<script type=\"text/javascript\" src=\"../../node_modules/angular/angular.min.js\"></script>\n" +
    "		<script type=\"text/javascript\" src=\"script.js\"></script>\n" +
    "	</head>\n" +
    "	<body ng-app=\"myReverseFilterApp\">\n" +
    "		<div ng-controller=\"MyController\">\n" +
    "			<input ng-model=\"greeting\" type=\"text\"><br>\n" +
    "			No filter: {{greeting}}<br>\n" +
    "			Reverse: {{greeting|reverse}}<br>\n" +
    "			Reverse + uppercase: {{greeting|reverse:true}}<br>\n" +
    "			Reverse, filtered in controller: {{filteredGreeting}}<br>\n" +
    "		</div>\n" +
    "	</body>\n" +
    "</html>"
  );


  $templateCache.put('demo/form/index.html',
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "	<head>\n" +
    "		<title>Angular Form</title>\n" +
    "		<meta charset=\"utf-8\">\n" +
    "		<script type=\"text/javascript\" src=\"../../node_modules/angular/angular.min.js\"></script>\n" +
    "		<script type=\"text/javascript\">\n" +
    "		angular.module('formExample', [])\n" +
    "			.controller('ExampleController', ['$scope', function($scope) {\n" +
    "				$scope.master = {};\n" +
    "				$scope.update = function(user) {\n" +
    "					$scope.master = angular.copy(user);\n" +
    "				};\n" +
    "				$scope.reset = function() {\n" +
    "					$scope.user = angular.copy($scope.master);\n" +
    "				};\n" +
    "				$scope.reset();\n" +
    "		}]);\n" +
    "		</script>\n" +
    "	</head>\n" +
    "	<body ng-app=\"formExample\">\n" +
    "		<div ng-controller=\"ExampleController\">\n" +
    "			<form novalidate class=\"simple-form\">\n" +
    "				Name: <input type=\"text\" ng-model=\"user.name\" /><br />\n" +
    "				E-mail: <input type=\"email\" ng-model=\"user.email\" /><br />\n" +
    "				Gender: <input type=\"radio\" ng-model=\"user.gender\" value=\"male\" />male\n" +
    "				<input type=\"radio\" ng-model=\"user.gender\" value=\"female\" />female<br />\n" +
    "				<input type=\"button\" ng-click=\"reset()\" value=\"Reset\" />\n" +
    "				<input type=\"submit\" ng-click=\"update(user)\" value=\"Save\" />\n" +
    "			</form>\n" +
    "		<pre>user = {{user | json}}</pre>\n" +
    "	<pre>master = {{master | json}}</pre>\n" +
    "</div>\n" +
    "</body>\n" +
    "</html>"
  );


  $templateCache.put('demo/formCustomControls/index.html',
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "	<head>\n" +
    "		<title>Implement Form Custom Controls</title>\n" +
    "		<script type=\"text/javascript\" src=\"../../node_modules/angular/angular.min.js\"></script>\n" +
    "		<script type=\"text/javascript\" src=\"script.js\"></script>\n" +
    "		<style type=\"text/css\">\n" +
    "			div[contentEditable] {\n" +
    "				cursor: pointer;\n" +
    "				background-color: #D0D0D0;\n" +
    "			}\n" +
    "		</style>\n" +
    "	</head>\n" +
    "	<body ng-app=\"FormCustomControls\">\n" +
    "			<div contentEditable=\"true\" ng-model=\"content\" title=\"Click to edit\">Some</div>\n" +
    "			<pre>model = {{content}}</pre>\n" +
    "	</body>\n" +
    "</html>"
  );


  $templateCache.put('demo/formCustomValidation/index.html',
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "	<head>\n" +
    "		<title>Form Custom Validation</title>\n" +
    "		<script type=\"text/javascript\" src=\"../../node_modules/angular/angular.min.js\"></script>\n" +
    "		<script type=\"text/javascript\" src=\"script.js\"></script>\n" +
    "	</head>\n" +
    "	<body ng-app=\"CustomValiationExample\">\n" +
    "		<form name=\"form\" class=\"css-form\" novalidate>\n" +
    "			<div>\n" +
    "				Size (integer 0 - 10):\n" +
    "				<input type=\"number\" ng-model=\"size\" name=\"size\"\n" +
    "				min=\"0\" max=\"10\" integer />{{size}}<br />\n" +
    "				<span ng-show=\"form.size.$error.integer\">The value is not a valid integer!</span>\n" +
    "				<span ng-show=\"form.size.$error.min || form.size.$error.max\">\n" +
    "				The value must be in range 0 to 10!</span>\n" +
    "			</div>\n" +
    "			<div>\n" +
    "				Username:\n" +
    "				<input type=\"text\" ng-model=\"name\" name=\"name\" username />{{name}}<br />\n" +
    "				<span ng-show=\"form.name.$pending.username\">Checking if this name is available...</span>\n" +
    "				<span ng-show=\"form.name.$error.username\">This username is already taken!</span>\n" +
    "			</div>\n" +
    "		</form>\n" +
    "	</body>\n" +
    "</html>"
  );


  $templateCache.put('demo/formModifyBuiltInValidators/index.html',
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "	<head>\n" +
    "		<title>Modify built-in validators</title>\n" +
    "		<script type=\"text/javascript\" src=\"../../node_modules/angular/angular.min.js\"></script>\n" +
    "		<script type=\"text/javascript\" src=\"script.js\"></script>\n" +
    "	</head>\n" +
    "	<body ng-app=\"modifyBuiltInValidators\">\n" +
    "		<form name=\"form\" class=\"css-form\" novalidate>\n" +
    "			<div>\n" +
    "				Overwritten Email:\n" +
    "				<input type=\"email\" ng-model=\"myEmail\" overwrite-email name=\"overwrittenEmail\" />\n" +
    "				<span ng-show=\"form.overwrittenEmail.$error.email\">This email format is invalid!</span><br>\n" +
    "				Model: {{myEmail}}\n" +
    "			</div>\n" +
    "		</form>\n" +
    "	</body>\n" +
    "</html>"
  );


  $templateCache.put('demo/formRequired/index.html',
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "	<head>\n" +
    "		<title>Angular Form With Required</title>\n" +
    "		<script type=\"text/javascript\" src=\"../../node_modules/angular/angular.min.js\"></script>\n" +
    "		<script>\n" +
    "		angular.module('formExampleRequired', [])\n" +
    "			.controller('ExampleController', ['$scope', function($scope) {\n" +
    "				$scope.master = {};\n" +
    "				$scope.update = function(user) {\n" +
    "					$scope.master = angular.copy(user);\n" +
    "				};\n" +
    "				$scope.reset = function() {\n" +
    "					$scope.user = angular.copy($scope.master);\n" +
    "				};\n" +
    "				$scope.reset();\n" +
    "		}]);\n" +
    "		</script>\n" +
    "		<style type=\"text/css\">\n" +
    "		.css-form input.ng-invalid.ng-touched {\n" +
    "			background-color: #FA787E;\n" +
    "		}\n" +
    "		.css-form input.ng-valid.ng-touched {\n" +
    "			background-color: #78FA89;\n" +
    "		}\n" +
    "		</style>\n" +
    "	</head>\n" +
    "	<body ng-app=\"formExampleRequired\">\n" +
    "		<div ng-controller=\"ExampleController\">\n" +
    "			<form novalidate class=\"css-form\">\n" +
    "				Name: <input type=\"text\" ng-model=\"user.name\" required /><br />\n" +
    "				E-mail: <input type=\"email\" ng-model=\"user.email\" required /><br />\n" +
    "				Gender: <input type=\"radio\" ng-model=\"user.gender\" value=\"male\" />male\n" +
    "				<input type=\"radio\" ng-model=\"user.gender\" value=\"female\" />female<br />\n" +
    "				<input type=\"button\" ng-click=\"reset()\" value=\"Reset\" />\n" +
    "				<input type=\"submit\" ng-click=\"update(user)\" value=\"Save\" />\n" +
    "			</form>\n" +
    "			<pre>user = {{user | json}}</pre>\n" +
    "		<pre>master = {{master | json}}</pre>\n" +
    "	</div>\n" +
    "	</body>\n" +
    "</html>"
  );


  $templateCache.put('demo/formUpdate/index.html',
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "	<head>\n" +
    "		<title>Form update (customTriggerExample)</title>\n" +
    "		<meta charset=\"utf-8\">\n" +
    "		<script type=\"text/javascript\" src=\"../../node_modules/angular/angular.min.js\"></script>\n" +
    "		<script type=\"text/javascript\" src=\"script.js\"></script>\n" +
    "	</head>\n" +
    "	<body ng-app=\"customTriggerExample\">\n" +
    "		<div ng-controller=\"ExampleController\">\n" +
    "			<form>\n" +
    "				Name(update on blur):\n" +
    "				<input type=\"text\" ng-model=\"user.name\" ng-model-options=\"{ updateOn: 'blur' }\" /><br />\n" +
    "				Other data(normal update):\n" +
    "				<input type=\"text\" ng-model=\"user.data\" /><br />\n" +
    "			</form>\n" +
    "			<pre>username = \"{{user.name}}\"</pre>\n" +
    "			<pre>userdata = \"{{user.data}}\"</pre>\n" +
    "		</div>\n" +
    "	</body>\n" +
    "</html>"
  );


  $templateCache.put('demo/formUpdateDebounce/index.html',
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "	<head>\n" +
    "		<title>Form Update Debounce</title>\n" +
    "		<meta charset=\"utf-8\">\n" +
    "		<script type=\"text/javascript\" src=\"../../node_modules/angular/angular.min.js\"></script>\n" +
    "		<script type=\"text/javascript\" src=\"script.js\"></script>\n" +
    "	</head>\n" +
    "	<body ng-app=\"debounceExample\">\n" +
    "		<div ng-controller=\"ExampleController\">\n" +
    "			<form>\n" +
    "				Name(update in 2 seconds):\n" +
    "				<input type=\"text\" ng-model=\"user.name\" ng-model-options=\"{ debounce: 2000 }\" /><br />\n" +
    "			</form>\n" +
    "			<pre>username = \"{{user.name}}\"</pre>\n" +
    "			<p>I.e. ng-model-options=\"{ debounce: 500 }\" will wait for half a second since the last content change before triggering the model update and form validation.\n" +
    "				<br />\n" +
    "			If custom triggers are used, custom debouncing timeouts can be set for each event using an object in debounce. This can be useful to force immediate updates on some specific circumstances (like blur events).</p>\n" +
    "			<p>\n" +
    "				I.e. ng-model-options=\"{ updateOn: 'default blur', debounce: { default: 500, blur: 0 } }\"<br />\n" +
    "			If those attributes are added to an element, they will be applied to all the child elements and controls that inherit from it unless they are overridden.</p>\n" +
    "		</div>\n" +
    "	</body>\n" +
    "</html>"
  );


  $templateCache.put('demo/formWithName/index.html',
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "	<head>\n" +
    "		<title>Angular Form with name and customized error message</title>\n" +
    "		<script type=\"text/javascript\" src=\"../../node_modules/angular/angular.min.js\"></script>\n" +
    "		<script type=\"text/javascript\" src=\"script.js\"></script>\n" +
    "	</head>\n" +
    "	<body ng-app=\"formExampleWithName\">\n" +
    "		<div ng-controller=\"ExampleController\">\n" +
    "			<form name=\"form\" class=\"css-form\" novalidate>\n" +
    "				Name:\n" +
    "				<input type=\"text\" ng-model=\"user.name\" name=\"uName\" required=\"\" />\n" +
    "				<br />\n" +
    "				<div ng-show=\"form.$submitted || form.uName.$touched\">\n" +
    "					<div ng-show=\"form.uName.$error.required\">Tell us your name.</div>\n" +
    "				</div>\n" +
    "				E-mail:\n" +
    "				<input type=\"email\" ng-model=\"user.email\" name=\"uEmail\" required=\"\" />\n" +
    "				<br />\n" +
    "				<div ng-show=\"form.$submitted || form.uEmail.$touched\">\n" +
    "					<span ng-show=\"form.uEmail.$error.required\">Tell us your email.</span>\n" +
    "					<span ng-show=\"form.uEmail.$error.email\">This is not a valid email.</span>\n" +
    "				</div>\n" +
    "				Gender:\n" +
    "				<input type=\"radio\" ng-model=\"user.gender\" value=\"male\" />male\n" +
    "				<input type=\"radio\" ng-model=\"user.gender\" value=\"female\" />female\n" +
    "				<br />\n" +
    "				<input type=\"checkbox\" ng-model=\"user.agree\" name=\"userAgree\" required=\"\" />\n" +
    "				I agree:\n" +
    "				<input ng-show=\"user.agree\" type=\"text\" ng-model=\"user.agreeSign\" required=\"\" />\n" +
    "				<br />\n" +
    "				<div ng-show=\"form.$submitted || form.userAgree.$touched\">\n" +
    "					<div ng-show=\"!user.agree || !user.agreeSign\">Please agree and sign.</div>\n" +
    "				</div>\n" +
    "				<input type=\"button\" ng-click=\"reset(form)\" value=\"Reset\" />\n" +
    "				<input type=\"submit\" ng-click=\"update(user)\" value=\"Save\" />\n" +
    "			</form>\n" +
    "		<pre>user = {{user | json}}</pre>\n" +
    "	<pre>master = {{master | json}}</pre>\n" +
    "</div>\n" +
    "</body>\n" +
    "</html>"
  );


  $templateCache.put('demo/helloworld/index.html',
    "<html ng-app=\"myHelloWorldApp\" ng-controller=\"myCtrl\">\r" +
    "\n" +
    "	<head>\r" +
    "\n" +
    "		<title>Hello AngularJs</title>\r" +
    "\n" +
    "		<meta charset=\"utf-8\">\r" +
    "\n" +
    "		<link rel=\"stylesheet\" type=\"text/css\" href=\"../style.css\">\r" +
    "\n" +
    "		<script type=\"text/javascript\" src=\"../../node_modules/angular/angular.min.js\"></script>\r" +
    "\n" +
    "		<script type=\"text/javascript\">\r" +
    "\n" +
    "		var app = angular.module(\"myHelloWorldApp\", []);\r" +
    "\n" +
    "		app.controller('myCtrl', function($scope) {\r" +
    "\n" +
    "			$scope.message = \"Hello AngularJs!\";\r" +
    "\n" +
    "		});\r" +
    "\n" +
    "		</script>\r" +
    "\n" +
    "	</head>\r" +
    "\n" +
    "	<body>\r" +
    "\n" +
    "		<input ng-model=\"message\"/>\r" +
    "\n" +
    "		<div>{{message}}</div>\r" +
    "\n" +
    "		<p>\r" +
    "\n" +
    "			<b>Here is the explanation of how the Hello AngularJs example achieves the data-binding effect when the user enters text into the text field.</b>\r" +
    "\n" +
    "		</p>\r" +
    "\n" +
    "		\r" +
    "\n" +
    "		<em>1. During the compilation phase:</em>\r" +
    "\n" +
    "		<ul>\r" +
    "\n" +
    "			<li>\r" +
    "\n" +
    "				the ng-model and input directive set up a keydown listener on the &lgt;input&&gt; control.\r" +
    "\n" +
    "			</li>\r" +
    "\n" +
    "			<li>\r" +
    "\n" +
    "				the interpolation sets up a $watch to be notified of name changes.\r" +
    "\n" +
    "			</li>\r" +
    "\n" +
    "		</ul>\r" +
    "\n" +
    "		<em>2. During the runtime phase:</em>\r" +
    "\n" +
    "		<ul>\r" +
    "\n" +
    "			<li>\r" +
    "\n" +
    "				Pressing an 'X' key causes the browser to emit a keydown event on the input control.\r" +
    "\n" +
    "			</li>\r" +
    "\n" +
    "			<li>\r" +
    "\n" +
    "				The input directive captures the change to the input's value and calls $apply(\"name = 'X';\") to update the application model inside the Angular execution context.\r" +
    "\n" +
    "			</li>\r" +
    "\n" +
    "			<li>\r" +
    "\n" +
    "				Angular applies the name = 'X'; to the model.\r" +
    "\n" +
    "			</li>\r" +
    "\n" +
    "			<li>\r" +
    "\n" +
    "				The $digest loop begins\r" +
    "\n" +
    "			</li>\r" +
    "\n" +
    "			<li>\r" +
    "\n" +
    "				The $watch list detects a change on the name property and notifies the interpolation, which in turn updates the DOM.\r" +
    "\n" +
    "			</li>\r" +
    "\n" +
    "			<li>\r" +
    "\n" +
    "				Angular exits the execution context, which in turn exits the keydown event and with it the JavaScript execution context.\r" +
    "\n" +
    "			</li>\r" +
    "\n" +
    "			<li>\r" +
    "\n" +
    "				The browser re-renders the view with the updated text.\r" +
    "\n" +
    "			</li>\r" +
    "\n" +
    "		</ul>\r" +
    "\n" +
    "	</body>\r" +
    "\n" +
    "</html>"
  );


  $templateCache.put('demo/material-md-select/index.html',
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "	<head>\n" +
    "		<title>Material md-select</title>\n" +
    "		<meta name=\"viewport\" content=\"initial-scale=1, maximum-scale=1, user-scalable=no\" />\n" +
    "		<link rel=\"stylesheet\" type=\"text/css\" href=\"../../node_modules/angular-material/angular-material.min.css\">\n" +
    "		<link rel=\"stylesheet\" type=\"text/css\" href=\"style.css\">\n" +
    "		\n" +
    "		<script type=\"text/javascript\" src=\"../../node_modules/angular/angular.min.js\"></script>\n" +
    "		<script type=\"text/javascript\" src=\"../../node_modules/angular-aria/angular-aria.min.js\"></script>\n" +
    "		<script type=\"text/javascript\" src=\"../../node_modules/angular-animate/angular-animate.min.js\"></script>\n" +
    "		<script type=\"text/javascript\" src=\"../../node_modules/angular-material/angular-material.min.js\"></script>\n" +
    "\n" +
    "		<script type=\"text/javascript\" src=\"script.js\"></script>\n" +
    "	</head>\n" +
    "	<body>\n" +
    "		<div ng-app=\"selectDemoSelectHeader\" ng-controller=\"SelectHeaderController\" class=\"md-padding main-container\" >\n" +
    "			<md-input-container>\n" +
    "				<label>Selector</label>\n" +
    "				<md-select ng-model=\"currentSelections\" md-on-close=\"clearSearchTerm()\"\n" +
    "				data-md-container-class=\"selectdemoSelectHeader\" multiple>\n" +
    "					<md-select-header class=\"demo-select-header\">\n" +
    "						<input ng-model=\"searchTerm\" type=\"search\" placeholder=\"Search for a choise..\" class=\"demo-header-searchbox md-text\">\n" +
    "					</md-select-header>\n" +
    "					<md-optgroup ng-repeat=\"group in selections\">\n" +
    "						<md-checkbox ng-model=\"group.isChecked\" ng-change=\"updateGroupCheck(group)\"> {{group.name}} </md-checkbox>\n" +
    "						<md-option ng-value=\"item\" ng-click=\"getCurrentGroupValue(group)\" ng-repeat=\"item in group.choise | filter:searchTerm\">{{item}}</md-option>\n" +
    "					</md-optgroup>\n" +
    "				</md-select>\n" +
    "			</md-input-container>\n" +
    "			<div style=\"float: right;\">{{currentSelections}}</div>\n" +
    "		</div>\n" +
    "\n" +
    "\n" +
    "	</body>\n" +
    "</html>"
  );


  $templateCache.put('demo/module-demo/index.html',
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "	<head>\n" +
    "		<title>Angular Module demo</title>\n" +
    "		<script type=\"text/javascript\" src=\"../../node_modules/angular/angular.min.js\"></script>\n" +
    "		<script type=\"text/javascript\" src=\"script.js\"></script>\n" +
    "	</head>\n" +
    "	<body>\n" +
    "		<div ng-app=\"myApp\">\n" +
    "			<div>\n" +
    "				{{ 'World' | greet }}\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</body>\n" +
    "</html>"
  );


  $templateCache.put('demo/module-loadig-dependencies/index.html',
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "	<head>\n" +
    "		<title>Module loading and dependencies</title>\n" +
    "		<script type=\"text/javascript\">\n" +
    "			angular.module('myModule', []).\n" +
    "			config(function(injectables) { // provider-injector\n" +
    "				// This is an example of config block.\n" +
    "				// You can have as many of these as you want.\n" +
    "				// You can only inject Providers (not instances)\n" +
    "				// into config blocks.\n" +
    "			}).\n" +
    "			run(function(injectables) { // instance-injector\n" +
    "				// This is an example of a run block.\n" +
    "				// You can have as many of these as you want.\n" +
    "				// You can only inject instances (not Providers)\n" +
    "				// into run blocks\n" +
    "			});\n" +
    "\n" +
    "			angular.module('myModule2', [])\n" +
    "			.value('a', 123)\n" +
    "			.factory('a', function() {\n" +
    "				return 123;\n" +
    "			})\n" +
    "			.directive('directiveName', ...)\n" +
    "			.filter('filterName', ...);\n" +
    "\n" +
    "			// is same as\n" +
    "\n" +
    "			angular.module('myModule2', []).\n" +
    "			config(function($provide, $compileProvider, $filterProvider) {\n" +
    "				$provide.value('a', 123);\n" +
    "				$provide.factory('a', function() {\n" +
    "					return 123;\n" +
    "				});\n" +
    "				$compileProvider.directive('directiveName', ...);\n" +
    "				$filterProvider.register('filterName', ...);\n" +
    "			});\n" +
    "		</script>\n" +
    "	</head>\n" +
    "	<body>\n" +
    "	</body>\n" +
    "</html>"
  );


  $templateCache.put('demo/scope-events-propagation/index.html',
    "<!DOCTYPE html>\n" +
    "<html ng-app=\"scopeEventsPropagation\">\n" +
    "	<head>\n" +
    "		<title>Scope Events Propagation</title>\n" +
    "		<meta charset=\"utf-8\">\n" +
    "		<link rel=\"stylesheet\" type=\"text/css\" href=\"../style.css\">\n" +
    "		<script type=\"text/javascript\" src=\"../../node_modules/angular/angular.min.js\"></script>\n" +
    "		<script type=\"text/javascript\" src=\"scope-events-propagation.js\"></script>\n" +
    "	</head>\n" +
    "	<body>\n" +
    "		<div ng-controller=\"EventController\">\n" +
    "			<p>\n" +
    "				Scopes can propagate events in similar fashion to DOM events. The event can be broadcasted to the scope children or emitted to scope parents.\n" +
    "			</p>\n" +
    "\n" +
    "			<hr />\n" +
    "			Root scope <tt>MyEvent</tt> count: {{count}}\n" +
    "\n" +
    "			<ul>\n" +
    "				<li ng-repeat=\"i in [1]\" ng-controller=\"EventController\">\n" +
    "					<button ng-click=\"$emit('MyEvent')\">$emit('MyEvent')</button>\n" +
    "					<button ng-click=\"$broadcast('MyEvent')\">$broadcast('MyEvent')</button>\n" +
    "					<br>\n" +
    "					Middle scope <tt>MyEvent</tt> count: {{count}}\n" +
    "					<ul>\n" +
    "						<li ng-repeat=\"item in [1, 2]\" ng-controller=\"EventController\">\n" +
    "							Leaf scope <tt>MyEvent</tt> count: {{count}}\n" +
    "						</li>\n" +
    "					</ul>\n" +
    "				</li>\n" +
    "			</ul>\n" +
    "		</div>\n" +
    "\n" +
    "		<hr />\n" +
    "\n" +
    "		<div>\n" +
    "		<pre>\n" +
    "js\n" +
    "-----------------\n" +
    "angular.module('scopeEventsPropagation', [])\n" +
    "	.controller('EventController', ['$scope', function($scope) {\n" +
    "		$scope.count = 0;\n" +
    "		$scope.$on('MyEvent', function() {\n" +
    "		$scope.count++;\n" +
    "	});\n" +
    "}]);\n" +
    "			</pre>\n" +
    "		</div>\n" +
    "\n" +
    "		<div>\n" +
    "		<pre>\n" +
    "html\n" +
    "-----------------\n" +
    "Root scope &lt;tt&gt;MyEvent&lt;/tt&gt; count: {{count}}\n" +
    "\n" +
    "&lt;ul&gt;\n" +
    "	&lt;li ng-repeat=\"i in [1]\" ng-controller=\"EventController\"&gt;\n" +
    "		&lt;button ng-click=\"$emit('MyEvent')\"&gt;$emit('MyEvent')&lt;/button&gt;\n" +
    "		&lt;button ng-click=\"$broadcast('MyEvent')\"&gt;$broadcast('MyEvent')&lt;/button&gt;\n" +
    "		&lt;br&gt;\n" +
    "		Middle scope &lt;tt&gt;MyEvent&lt;/tt&gt; count: {{count}}\n" +
    "		&lt;ul&gt;\n" +
    "			&lt;li ng-repeat=\"item in [1, 2]\" ng-controller=\"EventController\"&gt;\n" +
    "				Leaf scope &lt;tt&gt;MyEvent&lt;/tt&gt; count: {{count}}\n" +
    "			&lt;/li&gt;\n" +
    "		&lt;/ul&gt;\n" +
    "	&lt;/li&gt;\n" +
    "&lt;/ul&gt;\n" +
    "			</pre>\n" +
    "		</div>\n" +
    "\n" +
    "\n" +
    "	</body>\n" +
    "</html>"
  );


  $templateCache.put('demo/scope-hierarchies/index.html',
    "<!DOCTYPE html>\n" +
    "<html ng-app=\"scopeExample2\">\n" +
    "	<head>\n" +
    "		<title>Scope Hierarchies</title>\n" +
    "		<meta charset=\"utf-8\">\n" +
    "		<link rel=\"stylesheet\" type=\"text/css\" href=\"../style.css\">\n" +
    "		<link rel=\"stylesheet\" type=\"text/css\" href=\"style.css\">\n" +
    "		<script type=\"text/javascript\" src=\"../angular1.5.8.js\"></script>\n" +
    "		<script type=\"text/javascript\" src=\"scope-hierarchies.js\"></script>\n" +
    "	</head>\n" +
    "	<body>\n" +
    "		<div class=\"show-scope-demo\">\n" +
    "			<div ng-controller=\"GreetController\">\n" +
    "				Hello {{name}}!\n" +
    "			</div>\n" +
    "			<div ng-controller=\"ListController\">\n" +
    "				<ol>\n" +
    "					<li ng-repeat=\"name in names\">{{name}} from {{department}}</li>\n" +
    "				</ol>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</body>\n" +
    "</html>"
  );


  $templateCache.put('demo/scope-watch/index.html',
    "<!DOCTYPE html>\n" +
    "<html ng-app=\"scopeWatchModule\">\n" +
    "	<head>\n" +
    "		<title>Scope Watch Module</title>\n" +
    "		<meta charset=\"utf-8\">\n" +
    "		<link rel=\"stylesheet\" type=\"text/css\" href=\"../style.css\">\n" +
    "		<script type=\"text/javascript\" src=\"../../node_modules/angular/angular.min.js\"></script>\n" +
    "		<script type=\"text/javascript\" src=\"scope-watch.js\"></script>\n" +
    "		<style type=\"text/css\">\n" +
    "			table tr td{\n" +
    "				border: 1px solid #eee;\n" +
    "			}\n" +
    "		</style>\n" +
    "	</head>\n" +
    "	<body ng-controller=\"scopeWatchModuleCtrl as vm\">\n" +
    "		<div>\n" +
    "			<h1>Watch Reference</h1>\n" +
    "			<button ng-click=\"vm.triggerWatchReference()\">\n" +
    "			Trigger Watch Reference Change\n" +
    "			</button>\n" +
    "			<table ng-if=\"vm.watchObjRefer\">\n" +
    "				<tr ng-repeat=\"obj1 in vm.watchObjRefer\">\n" +
    "					<td ng-repeat=\"value1 in obj1\">{{value1}} </td>\n" +
    "				</tr>\n" +
    "			</table>\n" +
    "		</div>\n" +
    "		<div>\n" +
    "			<h1>Watch Content Collection</h1>\n" +
    "			<button ng-click=\"vm.triggerWatchContentCollection()\">\n" +
    "			Trigger Watch Content Collection Change\n" +
    "			</button>\n" +
    "			<table ng-if=\"vm.watchObjContentCollect\">\n" +
    "				<tr ng-repeat=\"obj2 in vm.watchObjContentCollect\">\n" +
    "					<td ng-repeat=\"value2 in obj2\">{{value2}} </td>\n" +
    "				</tr>\n" +
    "			</table>\n" +
    "		</div>\n" +
    "		<div>\n" +
    "			<h1>Watch Value</h1>\n" +
    "			<button ng-click=\"vm.triggerWatchValue()\">\n" +
    "			Trigger Watch Value Change\n" +
    "			</button>\n" +
    "			<table ng-if=\"vm.watchObjValue\">\n" +
    "				<tr ng-repeat=\"obj3 in vm.watchObjValue\">\n" +
    "					<td ng-repeat=\"value3 in obj3\">{{value3}} </td>\n" +
    "				</tr>\n" +
    "			</table>\n" +
    "		</table>\n" +
    "	</div>\n" +
    "</body>\n" +
    "</html>"
  );


  $templateCache.put('demo/scope/index.html',
    "<!DOCTYPE html>\n" +
    "<html ng-app=\"scopeExample\">\n" +
    "	<head>\n" +
    "		<title>Angular Scopes</title>\n" +
    "		<meta charset=\"utf-8\">\n" +
    "		<link rel=\"stylesheet\" type=\"text/css\" href=\"../style.css\">\n" +
    "		<script type=\"text/javascript\" src=\"../../node_modules/angular/angular.min.js\"></script>\n" +
    "		<script type=\"text/javascript\" src=\"scope.js\"></script>\n" +
    "	</head>\n" +
    "	<body>\n" +
    "		<div ng-controller=\"MyController\">\n" +
    "			Your name:\n" +
    "			<input type=\"text\" ng-model=\"username\">\n" +
    "			<button ng-click='sayHello()'>greet</button>\n" +
    "			<hr>\n" +
    "			{{greeting}}\n" +
    "		</div>\n" +
    "	</body>\n" +
    "</html>"
  );


  $templateCache.put('demo/service-dependencies/index.html',
    "<!DOCTYPE html>\n" +
    "<html ng-app=\"batchModule\">\n" +
    "	<head>\n" +
    "		<title>Service Dependencies</title>\n" +
    "		<meta charset=\"utf-8\">\n" +
    "		<link rel=\"stylesheet\" type=\"text/css\" href=\"../style.css\">\n" +
    "		<script type=\"text/javascript\" src=\"../../node_modules/angular/angular.min.js\"></script>\n" +
    "	</head>\n" +
    "	<body>\n" +
    "		<pre>\n" +
    "		js\n" +
    "		------------------\n" +
    "		var batchModule = angular.module('batchModule', []);\n" +
    "			/**\n" +
    "			 * The `batchLog` service allows for messages to be queued in memory and flushed\n" +
    "			 * to the console.log every 50 seconds.\n" +
    "			 *\n" +
    "			 * @param {*} message Message to be logged.\n" +
    "			 */\n" +
    "			batchModule.factory('batchLog', ['$interval', '$log', function($interval, $log) {\n" +
    "					var messageQueue = [];\n" +
    "\n" +
    "					function log() {\n" +
    "						if (messageQueue.length) {\n" +
    "							$log.log('batchLog messages: ', messageQueue);\n" +
    "							messageQueue = [];\n" +
    "						}\n" +
    "					}\n" +
    "					// start periodic checking\n" +
    "					$interval(log, 50000);\n" +
    "\n" +
    "					return function(message) {\n" +
    "						messageQueue.push(message);\n" +
    "					};\n" +
    "				}\n" +
    "			]);\n" +
    "\n" +
    "			/**\n" +
    "			 * `routeTemplateMonitor` monitors each `$route` change and logs the current\n" +
    "			 * template via the `batchLog` service.\n" +
    "			 */\n" +
    "			batchModule.factory('routeTemplateMonitor', ['$route', 'batchLog', '$rootScope', function($route, batchLog, $rootScope) {\n" +
    "					return {\n" +
    "						startMonitoring: function() {\n" +
    "							$rootScope.$on('$routeChangeSuccess', function() {\n" +
    "								batchLog($route.current ? $route.current.template : null);\n" +
    "							});\n" +
    "						}\n" +
    "					};\n" +
    "				}\n" +
    "			]);\n" +
    "\n" +
    "\n" +
    "\n" +
    "			//Registering a service with $provide\n" +
    "			angular.module('myModule', []).config(['$provide', function($provide) {\n" +
    "				$provide.factory('serviceId', function() {\n" +
    "					var shinyNewServiceInstance;\n" +
    "					// factory function body that constructs shinyNewServiceInstance\n" +
    "					return shinyNewServiceInstance;\n" +
    "				});\n" +
    "			}]);\n" +
    "		</pre>\n" +
    "	</body>\n" +
    "</html>"
  );


  $templateCache.put('demo/service/index.html',
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "	<head>\n" +
    "		<title>Service</title>\n" +
    "		<meta charset=\"utf-8\">\n" +
    "		<link rel=\"stylesheet\" type=\"text/css\" href=\"../style.css\">\n" +
    "		<script type=\"text/javascript\" src=\"../../node_modules/angular/angular.min.js\"></script>\n" +
    "		<script type=\"text/javascript\">\n" +
    "			//codes proving that angular service is singleton\n" +
    "			function M() { console.log('M'); }\n" +
    "			function M1(m) { console.log(1); }\n" +
    "			function M2(m) { console.log(2); }\n" +
    "			angular.module('myServiceModule',[])\n" +
    "				.service('M', M)\n" +
    "				.service('M1', ['M', M1])\n" +
    "				.service('M2', ['M', M2])\n" +
    "				.controller('MainCtrl',function(M1, M2){});\n" +
    "		</script>\n" +
    "		<script type=\"text/javascript\" src=\"service.js\"></script>\n" +
    "	</head>\n" +
    "	<body ng-app=\"myServiceModule\">\n" +
    "		<p>Please view the console. There should be only 1 'M'.</p>\n" +
    "		\n" +
    "		<hr/>\n" +
    "		\n" +
    "		<div id=\"simple\" ng-controller=\"MyServiceController\">\n" +
    "			<p>Let's try this simple notify service, injected into the controller...</p>\n" +
    "			<input ng-init=\"message='test'\" ng-model=\"message\" >\n" +
    "			<button ng-click=\"callNotify(message);\">NOTIFY</button>\n" +
    "			<p>(you have to click 3 times to see an alert)</p>\n" +
    "		</div>\n" +
    "	</body>\n" +
    "</html>"
  );

}]);
