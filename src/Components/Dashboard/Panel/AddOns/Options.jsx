const Options = ({ optionsObject, setOptions }) => {
  function onClick(option) {
    console.log(option);
    const newOptions = {...optionsObject}
    newOptions[option]["checked"] = !optionsObject[option]["checked"];
    console.log(newOptions);
    setOptions(newOptions);
  }
  
  return (
    <>
      {Object.keys(optionsObject).map((option, index) => (
        <div key={index} onClick={onClick.bind(null, option)}>
          {optionsObject[option]["value"]}
          {optionsObject[option]["checked"] && "✔"}
        </div>
      ))}
    </>
  );
};

export default Options;
