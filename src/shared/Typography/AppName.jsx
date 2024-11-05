import TitleName from "../../data/typography/TitleName";

const AppName = () => {
  return (
    <>
      {TitleName.map((item, index) => (
        <span key={index}>{item.name}</span>
      ))}
    </>
  );
};

export default AppName;
