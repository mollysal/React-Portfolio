import React from 'react';
import '../style/ContactPage.css'


export const ContactPage = () => {
    return <section className='m-4 contactHeading' id='Contact'>
        <h4>Get in Touch</h4>
        <hr />
        <div className='container contact_container pt-'>
            <form action=''>
                <input type='text' name='name' placeholder='Your Name' required />
                <input type='email' name='email' placeholder='email@email.com' required />
                <textarea name='message' rows='7' placeholder='Your Message Here' required></textarea>
                <button type='submit' className='btn btnCustom'>Send Message</button>
            </form>
        </div>
    </section>
    // This Form doesn't actually work. It's here for assignment purposes. If user sends a message - nothing happens. 
}