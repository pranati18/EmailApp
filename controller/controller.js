function EmailController($scope) {
		$scope.isPopupVisible = false;
		$scope.isComposePopupVisible=false;
		$scope.activeTab = "inbox";
		$scope.sentEmail = [];
		 
		 $scope.replyMail = function() {
			    $scope.isPopupVisible = false;
			    $scope.createEmail = {};
			    angular.copy($scope.pointEmail, $scope.createEmail);
			    $scope.createEmail.body = 
			        "\n_______________________________________\n" 
			        + "from: " + $scope.createEmail.from + "\n"
			        + "sent: " + $scope.createEmail.date + "\n"
			        + "to: " + $scope.createEmail.to + "\n"
			        + "subject: " + $scope.createEmail.subject + "\n"
			        + $scope.createEmail.body;

			    
			    $scope.createEmail.subject = "RE: " + $scope.createEmail.subject;
			    $scope.createEmail.to = $scope.createEmail.from;
			    $scope.createEmail.from = "me";
			    $scope.isComposePopupVisible = true;
			};
			
			
			$scope.forwardMail = function() {
			    $scope.isPopupVisible = false;
			    $scope.createEmail = {};
			    angular.copy($scope.pointEmail, $scope.createEmail);
			    $scope.createEmail.body = 
			        "\n___________________________________\n" 
			        + "from: " + $scope.createEmail.from + "\n"
			        + "sent: " + $scope.createEmail.date + "\n"
			        + "to: " + $scope.createEmail.to + "\n"
			        + "subject: " + $scope.createEmail.subject + "\n"
			        + $scope.createEmail.body;

			    
			    $scope.createEmail.subject = "FW: " + $scope.createEmail.subject;
			    $scope.createEmail.from = "me";
			    $scope.isComposePopupVisible = true;
			};
			
		 $scope.sendEmail = function() {
				$scope.isComposePopupVisible = false;
				$scope.createEmail.date = new Date();
				$scope.createEmail.from ="me";
				$scope.sentEmail.splice(0,0,$scope.createEmail);
			};
			
		$scope.showCreatePopup = function() {
			$scope.createEmail = {};
		    $scope.isComposePopupVisible = true;
		    
		};
		
		$scope.closeCreatePopup = function() {
			$scope.isComposePopupVisible=false;
		};
		
		$scope.showPopup = function (email) {
		    $scope.isPopupVisible = true;
		    $scope.pointEmail = email;
		};
		
		$scope.closePopup = function() {
		    $scope.isPopupVisible = false;
		};
		
		
		
		  $scope.createEmail = {};
		  $scope.emails = [
    	                   {
        from: 'Rutika',
        subject: 'Job Application',
        date: 'Mar 1',
        body: 'Hello, I am writing to apply for the post of conceirge at Drexel University'
    },
    {
        from: 'University of Pensylvania',
        subject: 'Application status',
        date: 'Dec 12',
        body: 'Dear Applicant, After reviweing you application with great interest, we have decided against offering you a place in our University.'
    },
    {
        from: 'Amber',
        subject: 'Hey!',
        date: 'Feb 15',
        body: 'Hey, wassup? How are you? Long time no see'
    },
    {
        from: 'James',
        subject: 'Flight Tickets',
        date: 'Feb 21',
        body: 'hello, Your flight tickets are for the date 12/01/16'
    },
    {
        from: 'Mia',
        subject: 'Amazon party',
        date: 'Mar 15',
        body: 'Hey, are you going for the party tonight? I am not very sure about who all are goin'
    },
    {
        from: 'James B',
        subject:'Vacation plans',
        date: 'Dec 8',
        body: 'Hi Dad, I am coming home over this Christmas'
    }
    	                 ];	  
    	  
    	 	             
  
		               }
	
	
