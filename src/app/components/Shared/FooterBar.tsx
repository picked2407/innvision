const FooterBar = () => {
  return (
    <section id="footerbar">
      <div className="bg-color-primary-dark relative">
        <div className="container py-10">
          <div className="grid gap-10 md:grid-cols-3 pb-10">
            <div className="space-y-6">
              <h4 className="font-bold text-lg">
                About <span className="text-color-secondary">Inn</span>
                vision
              </h4>
              <p className="leading-relaxed">
              This is InnVision, where innovation converges with expertise. We excel in services like chatbot development, lead generation, cold email strategies, market intel AI insights, and graphic designing. Our mission is straightforward: to empower your digital success. Explore our diverse services and embark on the journey to digital excellence with us.
              </p>
              <div className="flex gap-5 items-center">
                <p>Follow Us</p>
                <i className="fa fa-facebook-f cursor-pointer hover:text-color-secondary"></i>
                <i className="fa fa-twitter cursor-pointer hover:text-color-secondary"></i>
                <i className="fa fa-youtube cursor-pointer hover:text-color-secondary"></i>
                <i className="fa fa-instagram cursor-pointer hover:text-color-secondary"></i>
              </div>
            </div>
            <div className="flex justify-between md:justify-around">
              <div className="space-y-6">
                <h4 className="font-bold text-lg">Quick Links</h4>
                <ul className="space-y-3">
                  <li className="underline hover:no-underline hover:text-color-secondary">
                    <a href="#">Home</a>
                  </li>
                  <li className="underline hover:no-underline hover:text-color-secondary">
                    <a href="#features">Features</a>
                  </li>
                  <li className="underline hover:no-underline hover:text-color-secondary">
                    <a href="#testimonial">Testimonial</a>
                  </li>
                  <li className="underline hover:no-underline hover:text-color-secondary">
                    <a href="#contact">Contact us</a>
                  </li>
                </ul>
              </div>
             
            </div>
            <div className="space-y-6">
              <h4 className="font-bold text-lg">Newsletter</h4>
              <p className="leading-relaxed">
                Subscribe With Email And Loads Of News Will Be Sent To You
              </p>
              <div className="flex items-center">
                <input
                  type="text"
                  className="w-3/4 text-color-gray bg-color-white p-2 lg:p-3 rounded-l-md focus:outline-none"
                  placeholder="Enter Your Email"
                />

                <button
                  type="submit"
                  className="bg-color-secondary px-4 py-2 lg:px-5 lg:py-3 rounded-r-md hover:opacity-90"
                >
                  <i className="fa fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center pt-10 border-t border-color-gray">
            <p className="p-5">
              2024 &copy; <span className="text-color-secondary">Inn</span>
              vision. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
      <div className="fixed bottom-16 lg:bottom-5 right-5 z-50">
        <button
          id="toTop"
          className="hidden bg-color-secondary text-color-white p-3 rounded-full hover:opacity-90"
        >
          <i className="fa fa-chevron-up text-sm"></i>
        </button>
      </div>
    </section>
  );
};

export default FooterBar;
