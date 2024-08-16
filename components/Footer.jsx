import Image from 'next/image';
import Link from 'next/link';
import logo from '../assets/images/logo.png';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='bg-amber-900 py-8 mt-auto'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4'>
        {/* Logo and Company Info */}
        <div>
          <div className='flex items-center mb-4'>
            <Image src={logo} alt='Logo' className='h-10 w-auto' />
            <span className='ml-3 text-amber-400 font-bold text-2xl'>
              Rentity
            </span>
          </div>
          <p className='text-amber-300 text-sm'>
            Discover your dream property with Rentity, the leading rental
            platform.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className='text-amber-400 font-bold mb-2'>Quick Links</h4>
          <ul className='space-y-2'>
            <li>
              <Link
                href='/properties'
                className='text-amber-300 hover:underline'
              >
                Properties
              </Link>
            </li>
            <li>
              <Link href='/about' className='text-amber-300 hover:underline'>
                About Us
              </Link>
            </li>
            <li>
              <Link href='/contact' className='text-amber-300 hover:underline'>
                Contact Us
              </Link>
            </li>
            <li>
              <Link href='/blog' className='text-amber-300 hover:underline'>
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal Info */}
        <div>
          <h4 className='text-amber-400 font-bold mb-2'>Legal</h4>
          <ul className='space-y-2'>
            <li>
              <Link href='/terms' className='text-amber-300 hover:underline'>
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href='/privacy' className='text-amber-300 hover:underline'>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href='/disclaimer'
                className='text-amber-300 hover:underline'
              >
                Disclaimer
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media and Contact */}
        <div>
          <h4 className='text-amber-400 font-bold mb-2'>Connect with Us</h4>
          <div className='flex space-x-4 mb-4'>
            <Link
              href='https://facebook.com'
              className='text-amber-300 hover:text-amber-400'
            >
              <FaFacebook size={24} />
            </Link>
            <Link
              href='https://twitter.com'
              className='text-amber-300 hover:text-amber-400'
            >
              <FaTwitter size={24} />
            </Link>
            <Link
              href='https://instagram.com'
              className='text-amber-300 hover:text-amber-400'
            >
              <FaInstagram size={24} />
            </Link>
            <Link
              href='https://linkedin.com'
              className='text-amber-300 hover:text-amber-400'
            >
              <FaLinkedin size={24} />
            </Link>
          </div>
          <p className='text-amber-300 text-sm'>Email: info@rentity.com</p>
          <p className='text-amber-300 text-sm'>Phone: +1 (123) 456-7890</p>
        </div>
      </div>

      <div className='border-t border-amber-700 mt-8 pt-4'>
        <div className='container mx-auto flex flex-col md:flex-row items-center justify-between'>
          <p className='text-sm text-amber-300'>
            &copy; {year} Rentity. All rights reserved.
          </p>
          <ul className='flex space-x-4 text-sm mt-4 md:mt-0'>
            <li>
              <Link href='/sitemap' className='text-amber-300 hover:underline'>
                Sitemap
              </Link>
            </li>
            <li>
              <Link href='/faq' className='text-amber-300 hover:underline'>
                FAQs
              </Link>
            </li>
            <li>
              <Link href='/support' className='text-amber-300 hover:underline'>
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
