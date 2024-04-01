import React from 'react'
import './style.scss'

const Premier = () => {
    return (
        <div className='premier'>

            <div className="car">
                <div data-aos="fade-up" className='girl'>
                    <img src="https://code.edu.az/wp-content/uploads/2021/08/4Floor-Design-Facebook-2-1024x540.jpg"
                        alt="err" />
                </div>
              

                <div data-aos="fade-left" className='right'>
                    <img  src="https://code.edu.az/wp-content/uploads/2021/08/zemanetli-tehsil-300x300.jpeg" alt="" />
                </div>
            </div>

            <div className="the" data-aos="fade-up">
                {/* <img data-aos="fade-left" width={75} className='star-img' src="	https://shtheme.com/demosd/upcreatorswp/wp-content/uploads/2023/05/rotate-shape.svg" alt="err" /> */}
                <h1 data-aos="fade-left">Kompüter kursları</h1>
                <h2 data-aos="fade-left">Onlayn platforma</h2>
                <p data-aos="fade-left"> Siz də, vaxt itkisinə yol vermədən, <br /> qeyd edilmiş müddət ərzində lazım olan <br /> bütün məlumatları tədris edən kurs axtarışındasınızsa, <br /> bu platforma tam sizin üçündür .</p>
                <div className='button' data-aos="fade-left">
                    <button className='brand' ><a href="">I'm a brand </a><i className="fa-solid fa-arrow-right"></i></button>
                    <button className='creator'><a href="">I'm a creator </a><i className="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>

        </div>
    )
}

export default Premier
