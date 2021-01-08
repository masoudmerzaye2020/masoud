import emailjs from "emailjs-com";
import React from "react";
import { init } from "emailjs-com";
init("user_loKQy02hHJbTbxRlPDkMc");

/* class Contact extends Component */
export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3s5j3x7",
        "template_jmq6wrh",
        e.target,
        "user_loKQy02hHJbTbxRlPDkMc"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <section id="contact">
      <div className="row section-head">
        <div className="two columns header-col">
          <h1>
            <span>Get In Touch.</span>
          </h1>
        </div>
        <div className="ten columns">
          <p className="lead">
            Are you looking for a Web-Developer, Designer , UI/UX Designer?
            Great? All you need is to share your Idea with me! Let's get in
            touch!
          </p>
        </div>
      </div>

      <div className="row">
        <div className="twelve columns">
          <form className="contact-form" onSubmit={sendEmail}>
            <fieldset>
              <input type="hidden" name="contact_number" />

              <div className="four columns">
                {/*   <label htmlFor="contactName">
                  Name <span className="required">*</span>
                </label> */}
                <input
                  type="text"
                  defaultValue=""
                  size="35"
                  id="contactName"
                  name="Name"
                  placeholder="Your Name"
                  /*       onChange={this.handleChange} */
                />
              </div>

              <div className="four columns">
                {/*  <label htmlFor="contactEmail">
                    Email <span className="required">*</span>
                  </label> */}
                <input
                  type="text"
                  defaultValue=""
                  size="35"
                  id="contactEmail"
                  name="Email"
                  placeholder="Your email"
                  /*      onChange={this.handleChange} */
                />
              </div>

              <div className="four columns">
                {/* <label htmlFor="contactSubject">Subject</label> */}
                <input
                  type="text"
                  defaultValue=""
                  size="35"
                  id="contactSubject"
                  name="Subject"
                  placeholder="subject"
                  /*   onChange={this.handleChange} */
                />
              </div>

              <div className="twelve columns">
                {/* <label htmlFor="contactMessage">
                    Message <span className="required">*</span>
                  </label> */}
                <textarea
                  cols="50"
                  rows="3"
                  id="contactMessage"
                  name="message"
                  placeholder="your message"
                ></textarea>
              </div>

              <div className="twelve columns">
                <button className="submit">Submit</button>
                <span id="image-loader">
                  <img alt="" src="images/loader.gif" />
                </span>
              </div>
            </fieldset>
          </form>

          <div id="message-warning"> Error boy</div>
          <div id="message-success">
            <i className="fa fa-check"></i>Your message was sent, thank you!
            <br />
          </div>
        </div>

        {/*  <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>Address and Phone</h4>
              <p className="address">
                {name}
                <br />
                {street} <br />
                {city}, {state} {zip}
                <br />
                <span>{phone}</span>
              </p>
            </div>

            <div className="widget widget_tweets">
              <h4 className="widget-title">Latest Tweets</h4>
              <ul id="twitter">
                <li>
                  <span>
                    This is Photoshop's version of Lorem Ipsum. Proin gravida
                    nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                    quis bibendum auctor, nisi elit consequat ipsum
                    <a href="#">http://t.co/CGIrdxIlI3</a>
                  </span>
                  <b>
                    <a href="#">2 Days Ago</a>
                  </b>
                </li>
                <li>
                  <span>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi
                    <a href="#">http://t.co/CGIrdxIlI3</a>
                  </span>
                  <b>
                    <a href="#">3 Days Ago</a>
                  </b>
                </li>
              </ul>
            </div>
          </aside> */}
      </div>
    </section>
  );
}

/* export default Contact; */
