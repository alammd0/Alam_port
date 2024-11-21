import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'
import "./Contact.css"
import Faded from '../Faded'

const Contact = () => {
    return (
        <div className='project_wrapper'>
            <div className='project_container contact_container'>

                <div className='fadded_text_container'>
                    <Faded title={"Contact"} />
                    <Faded heading={"Contact"} />
                </div>

                <div className='contact_content'>
                    <div className='from_container'>
                        <ContactForm />
                    </div>

                    <div>
                        <ContactInfo />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact
