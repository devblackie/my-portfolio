import PhoneNumber from "../../data/typography/PhoneNumber";

const PhoneDisplay = () => {
  return (
    <>
      {PhoneNumber.map((item, index) => (
        <span key={index}>{item.tel}</span>
      ))}
    </>
  );
};

export default PhoneDisplay;