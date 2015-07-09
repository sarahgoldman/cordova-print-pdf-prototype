/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

function loadXMLDoc(filename) {
	if (window.XMLHttpRequest) {
  		xhttp=new XMLHttpRequest();
  	} else {
  		xhttp=new ActiveXObject("Microsoft.XMLHTTP");
  	}
	xhttp.open("GET",filename,false);
	xhttp.send();
	return xhttp.responseXML;
}

var app = {
	
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady(this), false);
		
    },
    // deviceready Event Handler
    onDeviceReady: function(self) {
        
		document.getElementById('print-url').addEventListener('click', function(e){
			self.printUrl();
		});
		
		document.getElementById('print-data').addEventListener('click', function(e){
			self.printData();
		});
		
    },

	printUrl: function() {
		console.log('TEST PRINT URL');
		var url = 'http://www.sushirockva.com/media/docs/Sushi-Rock-Dinner.pdf';
		var title = 'Sushi Rock Menu';
		window.plugins.PrintPDF.printWithURL(url,title,function(){console.log('success')},function(){console.log('fail')});
	},

	printData: function() {
		console.log('TEST PRINT DATA');
		var xml = loadXMLDoc('xml/sample.xml');
		var pdfEncoded = xml.getElementsByTagName('pdf')[0].childNodes[0].nodeValue;
		console.log(pdfEncoded);
		var title = 'Sushi Rock Menu';
		window.plugins.PrintPDF.printWithData(pdfEncoded,title,function(){console.log('success')},function(){console.log('fail')});
	}

};

app.initialize();