import React from "react";

class ContactForm extends React.Component {

	render() {
		return(
			<div>
				<form id="contactForm" action="https://formspree.io/holly@entertainimpact.com" method="POST">
					<h2>Send Us A Message</h2>
					<div>
					   	<label htmlFor="name">your name</label>
				   		<input type="text" name="name"/>
				   	</div>
				   	<div>
				   		<label htmlFor="_replyto">your email</label>
				    	<input type="email" name="_replyto"/>
				    </div>
				    <div>
				    	<label htmlFor="textarea">your message to us</label>
				    	<textarea form="contactForm" type="textarea" name ="textarea" placeholder="Enter your text here..."></textarea>
				    </div>
				    <div>
				    	<input className="pinkBtn" type="submit" value="Send"/>
				    </div>
				</form>
			</div>
		);
	}
}

export default ContactForm;