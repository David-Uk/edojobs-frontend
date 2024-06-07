import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

class FaqAccordion extends Component {


    render() {
        return (
            <>


                {/* <!-- Faq Section --> */}
                <section class="faq-section">
                    <div class="auto-container">
                        <div class="row">
                            <div class="col-lg-5">
                                <div class="content mb-5 mr-lg-5">
                                    <div class="sec-title">
                                        <div class="sub-title">FREQUENTLY ASKED QUESTION</div>
                                        <h2>Got Any Questions?</h2>
                                        {/* <div class="text">Veniam quis nostrud exercitation ullamco laboris nist  aute irure dolor in reprehenderit in voluptate velit esse nulla pariatur excepteur sint occaecat aboris nisi ut aliquip ex ea consequat uis aute.</div> */}
                                    </div>
                                    <div class="link-btn">
                                        <a class="theme-btn btn-style-one" href=' mailto:edojobs@edostate.gov.ng'><span class="btn-title">Get More Help</span></a>
                                    </div>
                                </div>

                            </div>
                            <div class="col-lg-7">
                                <Accordion preExpanded={[0]} allowZeroExpanded >
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                What are the various Edojobs initiatives?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                Edojobs undertake her responsibility through various initiatives organised within the following departments:
                                                <ul style={{ listStyle: 'none' }}>
                                                    <li>
                                                        <strong>Job Matching: </strong>This is the arm of the agency with the responsibility of matching job seekers with available jobs within the state. The department operates from seven job centres known as Edo Job Centre spread across the state.
                                                    </li>
                                                    <li><strong>Edo Innovates: </strong>
                                                        This is the tech arm of the agency responsible for tech upskilling through various ICT trainings.
                                                    </li>
                                                    <li><strong>Vocational Training & Skills Development: </strong>
                                                        This department oversees the skills development and training of the youths aiming at empowering them to be self-sustaining.
                                                    </li>
                                                    <li><strong>Edo Food and Agricultural Cluster (EdoFAC): </strong>
                                                        This is the department that works with farmers in the state to promote food and agricultural ventures.
                                                    </li>
                                                    <li>
                                                        <strong>Entrepreneurship Development: </strong>
                                                        This department helps business owners grow their businesses through various business support such as grants, loans, training etc.
                                                    </li>
                                                    <li>
                                                        <strong>Victor Uwaifo Creative Hub and Sound Stage: </strong>
                                                        This department handles the entertainment concerns of the agency via training, movie auditions and other ventures in the creative industry.
                                                    </li>
                                                </ul>
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Where is Edojobs office located?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                <ul style={{ listStyle: 'none' }}>
                                                    <li><strong>Head Office: </strong>Edojobs Office, Edo State Government House, GRA, Benin City.</li>
                                                    <li><strong>Other offices:</strong>
                                                        <ul>
                                                            <li>Edo Innovates Hub, 59 I.C.E. Road, Wire Road, Benin City (Edo South)</li>
                                                            <li>Edo Production Centre, Magistrate Court compound, Sapele Road, Benin City (Edo South)</li>
                                                            <li>Edo State Polytechnic, Usen (Edo South)</li>
                                                            <li>SDG Building, Civil Defence Office, Police Station Road, Uromi (Edo Central)</li>
                                                            <li>Edo State Skills Acquisition Centre, behind Irrua Local Government Secretariat, Irrua (Edo Central)</li>
                                                            <li>Along Etsako West Local Government Secretariat Road, before the Police station, Auchi (Edo North).</li>
                                                            <li>DPS Event Centre, before St Philip Secondary School, along Ibie Road, Jattu- Uzairue (Edo North).</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Are Edojobs programmes and services only for indigenes of Edo State?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                Edojobs programme and services are for all Edo residents (everyone living in Edo State) as our motto is “Edojobs For Everyone.”
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Does Edojobs charge any fee for job placements and/or training programmes and services?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                Edojobs training programme and services are offered totally free of charge.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                How can I apply for a job through Edojobs?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                We advise that you visit any Edo Job Centre nearest to you to apply for a job. Another method could be joining our active Edojobs Online Community where you can receive updates on available job vacancies, then, apply online. <br />
                                                Send a Whatsapp message to <a href="tel:+2349013722775">+2349013722775</a> to join the community.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                How can I access available training offered by Edojobs?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                We recommend that you visit any Edo Job Centre nearest to you to apply for available training programmes. Another method could be joining our active Edojobs Online Community where you can receive updates on available training programmes, then, register online. <br />
                                                Send a WhatsApp message to 09056556134 to join the community.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                What is an Edo Job Centre?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                Edo Job Centre is where any resident of Edo State can walk in and apply for a job, receive job counselling and career guidance, as well as get placed on a job of your choosing.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Where can I find an Edo Job Centre?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                Edo Job Centre is located in the three senatorial districts of Edo State: Edo South, Edo Central, Edo North. We are open Mondays to Fridays, 9:00am to 5:00pm.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Where is the Edo Job Centre located?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                We are closer to you now. Visit us in any of our offices.
                                                <ul style={{ listStyle: 'none' }}>
                                                    <li>Edo Innovates Hub, 59 I.C.E. Road, Wire Road, Benin City (Edo South)</li>
                                                    <li>Edo Production Centre, Magistrate Court compound, Sapele Road, Benin City (Edo South)</li>
                                                    <li>Edo State Polytechnic, Usen (Edo South)</li>
                                                    <li>SDG Building, Civil Defence Office, Police Station Road, Uromi (Edo Central)</li>
                                                    <li>Edo State Skills Acquisition Centre, behind Irrua Local Government Secretariat, Irrua (Edo Central)</li>
                                                    <li>Along Etsako West Local Government Secretariat Road, before the Police station, Auchi (Edo North)</li>
                                                    <li>DPS Event Centre, before St Philip Secondary School, along Ibie Road, Jattu- Uzairue (Edo North)</li>
                                                </ul>
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                What support services are offered at Edo Job Centre to job seekers?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                At the centre, we provide the following:
                                                <ul style={{ listStyle: 'none' }}>
                                                    <li>Job counselling</li>
                                                    <li>Career guidance</li>
                                                    <li>Employability and Soft-skills training</li>
                                                    <li>Job matching services</li>
                                                    <li>Internship and Apprenticeship programme</li>
                                                    <li>General assistance to access other Edojobs programme</li>
                                                </ul>
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Can employers list job openings with Edojobs?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                Yes. We welcome employers mostly within Edo State to visit any Edo Job Centre nearest to them to get their job vacancy slots filled. We have a good track record of providing organisations within Edo State the best and most situated candidates for each role.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                What kind of job does Edojobs offer?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                Edojobs work with employers of labour in the private and public sector within and without Edo State to provide job-seeking/unemployed residents of Edo State with suitable and decent job roles.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </section>



            </>
        )
    }
}
export default FaqAccordion;