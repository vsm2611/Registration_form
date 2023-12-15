import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Menu from './navbar';
import '../Css/style.css'

function About() {
  return (
    <>
        <Container>
            <Menu/>
                <Row className='row mt-3 mb-4'>
                    <Col>
                        <p className='para'>LearnQoch is an Integrated EdTech Software to transform learning & teaching. </p>
                        <p className='para'>Our founding team members with 20+ years of technology experience are committed to transforming the current education system to help every student & teacher to tap and discover their personal best. Our mission is to empower every Principal, Teacher, Student, and Parent to improve school/college productivity and create interest among teachers and students for teaching & learning.</p>
                        <p className='para'>Educators are powerful people doing important, life-changing things. LearnQoch is making those important, life-changing things easier to do and easier to spread around.</p>
                        <p className='para'>Join the EdTech revolution to bring a smile to the face of every teacher and student.</p>
                    </Col>
                    <Col>
                        <img src="Higher-studies.png" alt="" width="650" height="485"/>
                    </Col>
                </Row> 
                <h2 className='mb-5 text-center'>Leadership Team</h2>
                <Row>
                    <Col>
                        <img src="manish.jpg" alt="" width="300" height="338"/>
                    </Col>
                    <Col>
                    <p className='mb-0'><strong>Manish Tiwari</strong></p>
                    <p className='mt-0'>Founder & CEO - LearnQoch</p>
                    <p className='mb-0'>Professional Experience:</p>
                    <ul class="text-justify">
                        <li>B. E. (Mech) with 20+ years experience in Manufacturing, Management Consulting, IT, Telecom and EdTech</li>
                        <li>Transforming Learning &amp; Teaching through LearnQoch EdTech platform</li>
                        <li>Developed APAC UCC market as a Director - Unified Communications &amp; Collaboration at Tata Communications (Hong Kong) Limited</li>
                        <li>Digitized top 100 global large enterprises by providing world class ICT solutions as a Product Sales Specialist &amp; Regional Business Manager at Tata Communications &amp; Bharati Airtel</li>
                        <li>Worked as a Management Consultant at Wipro Infotech and Six Sigma Alchemy to transform large enterprises business processes</li>
                        </ul>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col>
                        <img src="avinash.jpg" alt="" width="300" height="338"/>
                    </Col>
                    <Col>
                    <p className='mb-0'><strong>Avinash Gavali</strong></p>
                    <p className='mt-0'>Director & CTO - LearnQoch</p>
                    <p className='mb-0'>Professional Experience:</p>
                    <ul class="text-justify">
                        <li>Bachelor of Engineering in Computer Science with total IT experience 17+ years</li>
                        <li>Worked with 3 Startups, including GS Lab, in Telecom Domain and Web, Mobile, Cloud Technologies</li>
                        <li>Co-founded - Earth Solutions Pvt. Ltd., in 2009, operating into Social Media Applications, Mobile Applications, Web, Cloud Applications</li>
                        <li>Co-founded - Zero Bill Solutions LLP, in 2018, operating into Renewable Energy Solutions including Hybrid Street Light, Charging Station, Launched oneplug.in</li>
                        <li>Visiting Professor at Vishwakarma Institute of Technology - VIT, Pune, India</li>
                        </ul>
                    </Col>
                </Row>                             
        </Container>
    </>
  )
}

export default About;