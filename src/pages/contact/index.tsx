import React, { FormEventHandler, useState } from 'react';

import LocationImg from '../../assets/location.png';
import callImg from '../../assets/call.png';
import messageImg from '../../assets/message.png';
import Footer from './../../components/footer/index';
const Contact = () => {
  const [star, setStar] = useState(false);
  const [sucess, setSucess] = useState(false);
  const [email, setEmail] = useState<string>('');
  const [checkVaildEmail, setCheckVaildEmail] = React.useState<boolean>(false);
  const [checkInput, setCheckInput] = React.useState(false);
  const [inputValue, setInputValue] = React.useState({
    name: '',

    phone: '',
    message: '',
  });

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    let validEmail = new RegExp(/^([a-zA-Z0-9]+)@([a-z\d-]+)\.([a-z]{2,3})$/gm);
    setEmail(value);
    if (!validEmail.test(value)) {
      setCheckVaildEmail(true);
    } else {
      setCheckVaildEmail(false);
    }
  };
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = event.target.value;

    setInputValue({
      ...inputValue,
      [event.target.name]: value,
    });
  };

  const handlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === '' && inputValue.name === '' && inputValue.phone === '') {
      setCheckInput(true);
    } else {
      setCheckInput(false);
      setSucess(true);
    }
  };

  return (
    <main className=" w-full ">
      <section className="mt-5 md:h-[90%] flex justify-center items-center w-[90%] h-[70%]">
        <div className="flex md:justify-around w-full  md:flex-row flex-col pl-2 pr-1  ">
          {/* form */}
          <div>
            <h2 className="font-[700]">
              Get in <span className="text-purple">Touch</span>
            </h2>
            <span>
              Foy global Investment Management is based in Nigeria, Lagos,
              <br /> serving clients locally and globally.
            </span>
            <form action="" className="flex flex-col " onSubmit={handlSubmit}>
              <div className="relative w-full">
                <input
                  type="text"
                  value={inputValue.name}
                  placeholder="Name"
                  className=" border-[2px] p-2 rounded mt-2  border-grey w-full"
                  name="name"
                  onFocus={() => setStar(true)}
                  onChange={handleChange}
                />
                <span
                  className={`absolute top-4 left-12   text-red   text-[10px] ${
                    star ? 'hidden' : 'visible'
                  }  `}
                >
                  &#42;
                </span>
                {checkInput && (
                  <span className="text-red text-[13px] font-[100]">
                    name is required
                  </span>
                )}
              </div>
              <div className="relative  w-full ">
                <input
                  type="text"
                  value={email}
                  placeholder="Email"
                  className=" border-[2px] p-2 rounded-md mt-2  border-grey w-full"
                  name="email"
                  onFocus={() => setStar(true)}
                  onChange={handleEmail}
                />
                <span
                  className={`absolute top-4 left-12   text-red   text-[10px] ${
                    star ? 'hidden' : 'visible'
                  }  `}
                >
                  &#42;
                </span>
                {checkInput && (
                  <span className="text-red text-[13px] font-[100]">
                    email is required
                  </span>
                )}
                {checkVaildEmail ? (
                  <span className="text-red text-[13px] font-[100]">
                    A valid email is required
                  </span>
                ) : (
                  ''
                )}
              </div>
              <div className=" relative  w-full ">
                <input
                  name="phone"
                  value={inputValue.phone}
                  type="text"
                  onFocus={() => setStar(true)}
                  placeholder="Phone "
                  className=" border-[2px] p-2 rounded-md mt-2  border-grey w-full"
                  onChange={handleChange}
                />
                <span
                  className={`absolute top-4 left-12   text-red   text-[10px] ${
                    star ? 'hidden' : 'visible'
                  }  `}
                >
                  &#42;
                </span>
                {checkInput && (
                  <span className="text-red text-[13px] font-[100]">
                    name is required
                  </span>
                )}
              </div>
              <textarea
                className=" border-[2px]  mt-2 rounded-md  border-grey pl-[5px]"
                name="message"
                value={inputValue.message}
                id=""
                cols={5}
                rows={5}
                placeholder="message"
                onChange={handleChange}
              ></textarea>
              <button
                className="p-2 rounded-md mt-2 bg-purple text-white"
                type="submit"
              >
                Submit now
              </button>
              {sucess && (
                <span className=" text-green">
                  your message was sent successfully
                </span>
              )}
            </form>

            <div className="mt-7">
              <div className="flex flex-col">
                <a href="tel:+2349116894070">
                  <span className="flex items-center  ">
                    <img src={callImg} alt="icon" className="p-[8px] mt-3 " />
                    <span className="flex flex-col ">
                      <span className="font-[600]">Phone</span>
                      <span> +2349116894070</span>
                    </span>
                  </span>
                </a>
                <a href="mailTo: info@foyglobalinvestments.com">
                  <span className="flex mt-2 mb-2 items-center">
                    <img src={messageImg} alt="icon" className="p-[8px] mt-5" />
                    <span className="flex flex-col">
                      <span className="font-[600]">Email</span>
                      <span>info@foyglobalinvestments.com</span>
                    </span>
                  </span>
                </a>
                <span className="flex  items-center ">
                  <img
                    src={LocationImg}
                    alt="icon"
                    className="p-[2px] w-[27px] h-[30px] mt-3"
                  />
                  <span className="flex flex-col">
                    <span className="font-[600]">Address</span>
                    <span> 19 Okotie Eboh close, Off Awolowo road, Ikoyi.</span>
                  </span>
                </span>
              </div>
            </div>
          </div>
          {/* map */}

          <div className="relative w-[300px] md:h-[300px] h-[400px] flex  justify-center items-center mt-[34px]">
            <div>
              <div className="absolute w-[300px] z-[-1] top-[3px] md:top-[-57px]  md:left-[56%] left-[44%] h-[450px] bg-[#000000]"></div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.592436729659!2d3.4215826735249326!3d6.446342124058217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4d3d091cf7d%3A0x9a5754027405dea1!2s19%20Okotie%20Eboh%20Cl%2C%20Ikoyi%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1684851435349!5m2!1sen!2sng"
                width="400"
                height="350"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Contact;
