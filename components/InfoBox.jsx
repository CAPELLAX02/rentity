const InfoBox = ({ title, text, buttonBg, buttonText, bg, href }) => {
  return (
    <div className={`${bg} p-6 rounded-lg shadow-md`}>
      <h2 className='text-2xl font-bold'>{title}</h2>
      <p className='mt-2 mb-4'>{text}</p>
      <a
        href={href}
        className={`${buttonBg} inline-block text-white rounded-lg px-4 py-2 hover:bg-opacity-80 duration-200 font-semibold`}
      >
        {buttonText}
      </a>
    </div>
  );
};

export default InfoBox;
