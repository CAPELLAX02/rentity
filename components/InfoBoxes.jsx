import InfoBox from './InfoBox';

const InfoBoxes = () => {
  return (
    <section>
      <div className='container-xl lg:container m-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
          <InfoBox
            title='For Renters'
            text='Find your dream rental property. Bookmark properties and contact owners.'
            buttonText='Browse Properties'
            bg='bg-blue-100'
            buttonBg='bg-blue-600'
          />
          <InfoBox
            title='For Property Owners'
            text='List your properties and reach potentital tenants. Rent as an airbnb long term.'
            buttonText='Add Property'
            bg='bg-amber-100'
            buttonBg='bg-amber-600'
          />
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
