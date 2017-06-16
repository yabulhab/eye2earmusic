import React from "react";

class ContactForm extends React.Component {

	render() {
		return(
			<div>
				<form id="contactForm" action="https://formspree.io/yabulhab@gmail.com" method="POST">
					<h2>Send Us A Message</h2>
					<div>
					   	<label for="name">your name</label>
				   		<input type="text" name="name"/>
				   	</div>
				   	<div>
				   		<label for="_replyto">your email</label>
				    	<input type="email" name="_replyto"/>
				    </div>
				    <div>
				    	<label for="textarea">your message to us</label>
				    	<textarea form="contactForm" type="textarea" name ="textarea">Enter text here...</textarea>
				    </div>
				    <div>
				    	<input type="submit" value="Send"/>
				    </div>
				</form>
			</div>
		);
	}
}

export default ContactForm;