import Email from "../../data/typography/Email";

const EmailDisplay = () => {
  return (
    <>
      {Email.map((item, index) => (
        <span key={index}>{item.email}</span>
      ))}
    </>
  );
};

export default EmailDisplay;