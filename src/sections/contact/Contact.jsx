import './contact.css'
export default function Contact () {


    return(
        <div className="contact" id='contact'>
            <h2 className='title'>Contact me</h2>
            <div className="info">

                <div className="social">
                    <p>Email: <a rel='noreferrer' target='_blank' href="https://www.laureanosciacaluga@gmail.com">laureanosciacaluga@gmail.com</a></p>
                    <p>Github: <a rel='noreferrer' target='_blank' href="https://www.github.com/Lausciaca">github.com/Lausciaca</a></p>
                    <p>LinkedIn: <a rel='noreferrer' target='_blank' href="https://www.linkedin.com/in/laureano-sciacaluga-2293a2280/">linkedin.com/in/laureano-sciacaluga-2293a2280/</a></p>
                </div>
                <div className="form-container">
                    <form action="">

                        <input type="email" name="" id="" placeholder='Your email'/>
                        <input type="text" name="" id="" placeholder='Matter'/>
                        <textarea className='free-text' name="" id="" placeholder='Text here...'/>
                        <button type="submit">Send</button>
                    </form>
                </div>

            </div>
        </div>
    )
}