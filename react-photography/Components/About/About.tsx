import classes from './About.module.css';
import Image from "next/image";
import { CheckDateButton } from '../UI/CheckDateButton';
import { faUser } from "@fortawesome/free-solid-svg-icons";

export const About:React.FC = (props) => {
    return (
    <section className={classes.about}>
   
       
    <div className={classes.about__wrapper}>
        <h2 className={classes.about__header}>Moja historia</h2>
        <p className={classes.about__paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nihil eaque quas odit reiciendis pariatur autem doloremque necessitatibus doloribus dicta suscipit modi, et aspernatur porro voluptas labore ut iusto harum.</p>
        <CheckDateButton text="O mnie" fontAwesome={faUser}/>
    </div>
    <div className={classes.about__picture}>
        <Image
                src={'/../public/img/kamila.jpg'}
                alt='Kamila Koziara'
                layout="fill"
                objectFit="cover"
                className={classes.about__image}
              />
        </div>
    </section>)
}