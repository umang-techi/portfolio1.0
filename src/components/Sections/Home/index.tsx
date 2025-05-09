import Image from 'next/image';
import Container from '@/components/Cards/Container';
import GitHub from '@/resources/svgs/contact-icons/github.svg';
import LinkedIn from '@/resources/svgs/contact-icons/linkedin.svg';
import Mail from '@/resources/svgs/contact-icons/mail.svg';
import Resume from '@/resources/svgs/resume.svg';
import styles from './home.module.scss';


export default function Home() {
    return (
        <Container id={'home'} className={'home'}>
            <div className={styles['home-container']}>
                <div className={styles.status}>
                    <div className={styles['status-circle']}></div>
                    Online.
                </div>
                <div className={styles.introduction}>
                    Hey, I&apos;m Umang Pradhan
                    
                    <div className={styles.occupation}>
                        Full stack Developer.
                    </div>
                </div>
                <div className={styles.contacts}>
                    <a href="" target="_blank"
                       className={styles['resume-button']}>
                        <Image src={Resume} alt={'GitHub'} className={styles.icon} width={20} height={20}/>
                        <div className={styles.label}>Resume</div>
                    </a>
                    <a href="https://github.com/umang-techi" target="_blank" className={styles.links}>
                        <Image src={GitHub} alt={'GitHub'} className={styles.icon} width={20} height={20}/>
                        <div className={styles.label}>GitHub</div>
                    </a>
                    <a href="https://www.linkedin.com/in/umang-pradhan-129256221/" target="_blank"
                       className={styles.links}>
                        <Image src={LinkedIn} alt={'LinkedIn'} className={styles.icon} width={18} height={18}/>
                        <div className={styles.label}>LinkedIn</div>
                    </a>
                    <a href="mailto: umangsingh877@gmail.com" className={styles.links}>
                        <Image src={Mail} alt={'Mail'} className={styles.icon} width={22} height={22}/>
                        <div className={styles.label}>Mail</div>
                    </a>
                </div>
                <hr className={styles.divider}/>
                <div className={styles.summery}>
                    <p>
                        Hey!, I&apos;m Umang Pradhan, <b> Experienced Front-End developer </b>  with
                        over 6
                        years of
                        experience
                        in <b> Html</b>, <b>CSS</b> <b> Javascript</b>,<b> Wordpress</b>, and <b> React js</b>.
                        With 1 year of experience as a Full-Stack Developer, I bring a solid understanding of backend technologies such as <b>Node.js</b> and <b>Express</b>, enabling effective collaboration across the full development stack. 
                        Ready to build innovative web applications and always putting out creative solutions to
                        problems.
                    </p><br/>
                  

                </div>
            </div>
        </Container>
    );
}

