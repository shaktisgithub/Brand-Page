import React from 'react';

const Contact = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl title-font mb-4 text-blue-900 font-bold">Get In Touch!!!</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-red-500 font-bold">Thank you for your interest in Nike! Whether you have a question about our products, need assistance with an order, or want to provide feedback, we're here to help. Please feel free to reach out to us using the contact information provided below.</p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-8 sm:space-y-0 sm:space-x-4">
          {/* Contact Information */}
          <div className="w-full sm:w-auto">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have any inquiries, questions, or feedback, please don't hesitate to contact us using the information below:
            </p>
            <p><strong>Address:</strong> Nike World Headquarters, One Bowerman Drive, Beaverton, OR 97005, USA</p>
            <p><strong>Phone:</strong> 1-503-671-6453</p>
            <p><strong>Email:</strong> corporate@nike.com</p>
          </div>

          {/* Follow Us */}
          <div className="w-full sm:w-auto">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Follow Us</h2>
            <p className="text-gray-600 mb-4">
              Stay connected with Nike on social media to receive the latest news, updates, and exclusive offers. Follow us on our official channels to join the conversation and be part of the Nike community:
            </p>
            <ul>
              <li><a href="https://www.facebook.com/nike" className="text-blue-500 hover:underline">Facebook</a></li>
              <li><a href="https://twitter.com/nike" className="text-blue-500 hover:underline">Twitter</a></li>
              <li><a href="https://www.instagram.com/nike/" className="text-blue-500 hover:underline">Instagram</a></li>
              <li><a href="https://www.youtube.com/user/nike" className="text-blue-500 hover:underline">YouTube</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
