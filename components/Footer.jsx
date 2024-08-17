import Image from 'next/image';
import Link from 'next/link';
import logo from '../assets/images/logo.png';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className='bg-amber-500 py-12 mt-16'>
        <h4 className='text-white font-semibold text-center text-3xl'>
          Your next rental is{' '}
          <span className='text-amber-500 bg-white px-4 rounded-full'>
            just a click
          </span>{' '}
          away.{' '}
        </h4>
      </div>
      <footer className='bg-blue-600 py-16'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 px-4'>
          {/* Logo and Company Info */}
          <div>
            <div className='flex items-center mb-6'>
              <Image src={logo} alt='Logo' className='h-12 w-auto' />
              <span className='ml-4 text-amber-400 font-bold text-3xl'>
                Rentity
              </span>
            </div>
            <p className='text-white text-sm'>
              Discover your dream property with Rentity, the leading rental
              platform offering a vast selection of properties tailored to your
              needs. From cozy apartments to luxury homes, Rentity makes it easy
              to find and rent the perfect space.
            </p>
            <p className='text-white text-sm mt-4'>
              Our mission is to connect property seekers with their ideal rental
              home by providing accurate listings, real-time updates, and a
              hassle-free rental experience.
            </p>
          </div>

          {/* Quick Links */}
          <div className='ms-24'>
            <h4 className='text-amber-400 font-bold text-lg mb-3'>
              Quick Links
            </h4>
            <ul className='space-y-3'>
              <li>
                <Link href='/properties' className='text-white hover:underline'>
                  Properties
                </Link>
              </li>
              <li>
                <Link href='/about' className='text-white hover:underline'>
                  About Us
                </Link>
              </li>
              <li>
                <Link href='/contact' className='text-white hover:underline'>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href='/blog' className='text-white hover:underline'>
                  Blog
                </Link>
              </li>
              <li>
                <Link href='/careers' className='text-white hover:underline'>
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href='/testimonials'
                  className='text-white hover:underline'
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href='/partners' className='text-white hover:underline'>
                  Our Partners
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Info */}
          <div>
            <h4 className='text-amber-400 font-bold text-lg mb-3'>Legal</h4>
            <ul className='space-y-3'>
              <li>
                <Link href='/terms' className='text-white hover:underline'>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href='/privacy' className='text-white hover:underline'>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href='/disclaimer' className='text-white hover:underline'>
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link
                  href='/cookie-policy'
                  className='text-white hover:underline'
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  href='/refund-policy'
                  className='text-white hover:underline'
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  href='/user-agreement'
                  className='text-white hover:underline'
                >
                  User Agreement
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media and Contact */}
          <div>
            <h4 className='text-amber-400 font-bold text-lg mb-3'>
              Connect with Us
            </h4>
            <p className='text-white text-sm'>
              Stay connected with us through our social media channels to
              receive the latest updates, exclusive offers, and more. We are
              here to answer any questions you may have and to assist you in
              your property search.
            </p>
            <div className='flex space-x-6 my-8'>
              <Link
                href='https://facebook.com'
                className='text-white hover:text-amber-400 duration-200 hover:scale-110'
              >
                <FaFacebook size={32} />
              </Link>
              <Link
                href='https://twitter.com'
                className='text-white hover:text-amber-400 duration-200 hover:scale-110'
              >
                <FaTwitter size={32} />
              </Link>
              <Link
                href='https://instagram.com'
                className='text-white hover:text-amber-400 duration-200 hover:scale-110'
              >
                <FaInstagram size={32} />
              </Link>
              <Link
                href='https://linkedin.com'
                className='text-white hover:text-amber-400 duration-200 hover:scale-110'
              >
                <FaLinkedin size={32} />
              </Link>
            </div>
            <p className='text-white text-sm'>Email: info@rentity.com</p>
            <p className='text-white text-sm'>Phone: +1 (123) 456-7890</p>
            <p className='text-white text-sm mt-4'>
              Address: 1234 Elm Street, Suite 567, Metropolis, USA
            </p>
          </div>
        </div>

        <div className='border-t-2 border-amber-500 mt-12 pt-6'>
          <div className='container mx-auto flex flex-col md:flex-row items-center justify-between'>
            <p className='text-sm text-amber-300'>
              &copy; {year} Rentity. All rights reserved.
            </p>
            <ul className='flex space-x-6 text-sm mt-4 md:mt-0'>
              <li>
                <Link
                  href='/sitemap'
                  className='text-amber-400 hover:underline'
                >
                  Sitemap
                </Link>
              </li>
              <li>
                <Link href='/faq' className='text-amber-400 hover:underline'>
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href='/support'
                  className='text-amber-400 hover:underline'
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  href='/investors'
                  className='text-amber-400 hover:underline'
                >
                  Investors
                </Link>
              </li>
              <li>
                <Link href='/news' className='text-amber-400 hover:underline'>
                  Newsroom
                </Link>
              </li>
              <li>
                <Link
                  href='/community'
                  className='text-amber-400 hover:underline'
                >
                  Community
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
