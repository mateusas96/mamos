import Contacts from './Contacts';
import ContactMe from './ContactMe';
import Main from './Main';
import AboutMe from './AboutMe';
import Services from './Services';
import FAQ from './FAQ';

export default function Body() {
    return (
        <div>
            <Main />
            <AboutMe />
            <Services />
            <FAQ />
            <ContactMe />
            <Contacts />
        </div>
    );
}
