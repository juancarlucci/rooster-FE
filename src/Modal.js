import React, { Component } from 'react';
import './App.css';
import './Modal.css';
import './style.css';

class Modal extends Component {
  render() {
    return (

        <div className="container">
          <div id="myModal" className="modal fade">
	<div className="modal-dialog contact-modal">
		<div className="modal-content modal-content-clean">
			<div className="modal-header modal-header-clean">
				<h2 className="header3 centered">Lorem Ipsum</h2>

			</div>
			<div className="modal-body">
                <form action="/actions/confirmation.php" method="post">
                    <div className="form-group col-full">
                        <label for="inputName">Name</label>
                        <input type="text" className="form-control" id="inputName" required />
                    </div>
                    <div className="form-group col-full">
                        <label for="inputEmail">Email</label>
                        <input type="email" className="form-control" id="inputEmail" required />
                    </div>
                    <div className="form-group col-full">
                        <label for="inputMessage">Message</label>
                        <textarea className="form-control" id="inputMessage" cols="30" rows="10" required></textarea>
                    </div>
                    <button type="submit" className="centered" value="Send">Button</button>

                </form>
			</div>
		</div>
	</div>
</div>


       </div>

    );
  }
}

export default Modal;
