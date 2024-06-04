import React from 'react'

const contactform = () => {
    return (
        <div class="contact-form-area">
            <div class="sec-title text-center">
                <div class="sub-title">Write Here</div>
                <h2>Get In Touch</h2>
            </div>
            {/* <!-- Contact Form--> */}
            <div class="contact-form">
                <form method="post" action="http://azim.commonsupport.com/Finandox/sendemail.php" id="contact-form">
                    <div class="row clearfix">
                        <div class="col-md-6 form-group">
                            <label for="name">Enter your name</label>
                            <input type="text" name="username" id="name" placeholder="Enter name here......" required="" />
                            <i class="fas fa-user"></i>
                        </div>

                        <div class="col-md-6 form-group">
                            <label for="email">Enter your email</label>
                            <input type="email" name="email" id="email" placeholder="Enter email here......" required="" />
                            <i class="fas fa-envelope"></i>
                        </div>

                        <div class="col-md-12 form-group">
                            <label for="message">Enter your message</label>
                            <textarea name="message" id="message" placeholder="Enter message here......"></textarea>
                            <i class="fas fa-edit"></i>
                        </div>

                        <div class="col-md-12 form-group">
                            <button class="theme-btn btn-style-one" type="submit" name="submit-form"><span class="btn-title">Get In Touch</span></button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default contactform